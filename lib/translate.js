function translate(data) {
	"use strict";

	var template = data.template,
		dictionary = data.options.messages,
		sax = data.sax,
		fest_ns = data.fest_ns,
		fest_i18n_ns = data.fest_i18n_ns,
		escapeHTML = data.escapeHTML,
		stack = [],
		options = data.options,
		output = data.output;

	var parser = sax.parser(true, {trim:false, xmlns:true}),
		opennode = false,
		message = 0,
		plural = null,
		result = '',
		messages = [],
		attributes = { // translare these attributes
			title: 1,
			alt: 1,
			content: 1,
			placeholder: 1
		},
		exclude = { // ignore text & cdata nodes inside these elements
			value: 1,
			get: 1,
			commnet: 1,
			doctype: 1,
			script: 1
		},
		pluralNodes = {
			'msg': 0
			, 'few': 1
			, 'many': 2
			, 'none': "=0"
			, 'one': "=1"
			, 'alt': null
		};

	var onmessage = options.events.message;
	if( typeof onmessage !== "function" ) {
		onmessage = null;
	}
	var ondictionary = options.events.dictionary;
	if( typeof ondictionary !== "function" ) {
		ondictionary = null;
	}

	function append_xml(s) {
		if (message) {
			messages[messages.length - 1].id += s;
		} else {
			result += s;
		}
	}

	function Message(id, context) {
		this.id = id;
		this.context = context;
		this.reference = data.file + ':' + (parser.line + 1);
	}

	function yield_message(msg, fn, auto) {
		fn = fn || function (s) { return s };
		auto = auto || false;
		var text = msg.id;
		if ((!auto || options.auto_message) && /\S+/.test(msg.id)) {
			text = translate_message(msg);
		}

		if( fn ) {
			result += fn(text);
		}
		else {
			result += text;
		}
	}

	function PluralMessage(select) {
		this.plurals = {};
		this.pluralRefs = {};
		this.select = select;
		this.reference = data.file + ':' + (parser.line + 1);
	}
	PluralMessage.prototype.addPlural = function(id, form) {
		if (!this.id)this.id = id;
		if (form==0)this.id = id;

		this.plurals[form] = id;
		this.pluralRefs[form] = data.file + ':' + (parser.line + 1);
	};
	PluralMessage.prototype.toString = function() {
		var randomName = "d" + Math.random();
		return '' +
			'<fest:set name="' + randomName + '">' +
				'<fest:script>var res = ' + JSON.stringify(this.plurals) + ';</fest:script>' +
				'<fest:value>(res["="+params.select]||res[__fest_plural(params.select)]||"").replace("%s", params.select)</fest:value>' +
			'</fest:set>' +
			'<fest:get name="' + randomName + '">{select:' + this.select + '}</fest:get>';
	};

	function yield_plural_message(msg, fn) {
		if (/\S+/.test(msg.id)) {
			translate_message(msg, msg.plurals);
		}

		if( fn ) {
			fn(msg);
		}
	}

	function translate_message(msg, plurals) {
		var text = msg.id;
		var id = text.trim();
		var isPlural = !!plurals;

		if (!/^\d+$/.test(id)) {
			var context = msg.context;
			var eventObject = {
				id: id,
				context: context,
				key: context ? id + context : id,
				reference: msg.reference,
				content: null,
				type: 'message'
			};


			if (isPlural) {
				eventObject['plurals'] = plurals;
			}

			if (onmessage) {
				onmessage(eventObject);
			}

			if (dictionary) {
				if (ondictionary) {
					eventObject.type = 'dictionary';
					ondictionary(eventObject);
				}

				var content;
				if (content = (eventObject.content || eventObject.key && dictionary[eventObject.key])) {
					text = text.match(/^\s*/)[0] + content + text.match(/\s*$/)[0];
				}

				if (isPlural) {
					msg.plurals = eventObject.plurals || {};
				}
			}
		}

		return text;
	}

	function cdata(text) {
		return '<![CDATA[' + text + ']]>';
	}

	function ontext(text, fn) {
		if (!message) {
			var node = stack[stack.length - 1];
			if (node) {
				var isFestNS = node.ns[node.prefix] === fest_ns;
				var isI18NNS = !isFestNS && node.ns[node.prefix] === fest_i18n_ns;

				if ((isFestNS || isI18NNS) && !exclude[node.local]) {
					if (plural) {
						if (text.trim()) {
							var pluralForm = pluralNodes[node.local];
							if (pluralForm === null && node.attributes.rule) {
								pluralForm = node.attributes.rule.value;
							}
							if (pluralForm != null) {
								plural.addPlural(text, pluralForm);
							}
							else {
								throw new Error(data.file + "\n" + data.errorMessage("\"" + node.local + "\" node not allowed inside \"plural\"", parser.line, template));
							}
						}
						return '';
					}
					else {
						return yield_message(new Message(text), fn, true);
					}
				}
			}
		}
		append_xml(fn(text));
	}

	function closetag(){
		if (opennode){
			opennode = false;
			append_xml('>');
		}
	}

	parser.onprocessinginstruction = function(instruction){
		result += '<?' + instruction.name + ' ' + instruction.body + '?>';
	};

	parser.oncomment = function(comment){
        result += '<!--' + comment + '-->';
	};

	function parse_attribute(value) {
		if (value && !message && !/^\d+$/.test(value)) {
			value = value.replace(/\{\{/g, "__DOUBLE_LEFT_CURLY_BRACES__").replace(/\}\}/g, "__DOUBLE_RIGHT_CURLY_BRACES__");
			if (/^\s*\{[^}]*\}\s*$/.test(value)) {
				// signle attribute expression
			} else {
				value = translate_message(new Message(value));
			}
			value = value.replace(/__DOUBLE_LEFT_CURLY_BRACES__/g, "{").replace(/__DOUBLE_RIGHT_CURLY_BRACES__/g, "}");
		}
		return value;
	}

	parser.onerror = function (err) {
		if (parser.state != sax.STATE.BEGIN) {
			throw new Error(data.file + "\n" + data.errorMessage(err, parser.line, template));
		}
	};

	parser.onopentag = function(node){
		var i, l, xml;
		var isFestNS = node.ns[node.prefix] === fest_ns;
		var isI18NNS = !isFestNS && node.ns[node.prefix] === fest_i18n_ns;
		closetag();
		stack.push(node);
		if (isI18NNS && node.local === 'plural') {
			if (plural) {
				throw new Error(data.file + "\n" + data.errorMessage("\"plural\" node not allowed inside \"plural\" node", parser.line, template));
			}
			var selectAttr = node.attributes.select && node.attributes.select.value;
			if (!selectAttr) {
				throw new Error(data.file + "\n" + data.errorMessage("\"plural\" must have \"select\" attribute", parser.line, template));
			}
			output.plural =  true;
			output.nplurals = 3;//TODO:: detect it
			plural = new PluralMessage(selectAttr);
		} else if (plural && pluralNodes[node.local] !== void 0) {

		} else if ((isFestNS || isI18NNS) && (node.local === 'message' || node.local === 'msg')){
			if (!isI18NNS || !plural) {
				messages.push(new Message('', node.attributes.context && node.attributes.context.value));
				message++;
			}
		} else {
			if (isFestNS || isI18NNS) {
				xml = '<' + node.name;
				for (i in node.attributes){
					xml += ' ' + i + '="' + escapeHTML(node.attributes[i].value) + '"';
				}
			} else {
				xml = '<' + node.name;
				for (i in node.attributes){
					xml += ' ' + i + '="' + escapeHTML(attributes[i] ? parse_attribute(node.attributes[i].value) : node.attributes[i].value) + '"';
				}
			}
			append_xml(xml);
			opennode = true;
		}
	};

	parser.ontext = function(text){
		var xml;
		closetag();
		ontext(text, escapeHTML);
	};

	parser.oncdata = function(text){
		var xml;
		closetag();
		ontext(text, cdata);
	};

	parser.onclosetag = function(node){
		var xml;
		node = this.tag;
		stack.pop();
		closetag();

		var isFestNS = node.ns[node.prefix] === fest_ns;
		var isI18NNS = !isFestNS && node.ns[node.prefix] === fest_i18n_ns;
		if (isI18NNS && node.local === 'plural') {
			yield_plural_message(plural);
			result += plural;
			plural = null;
		} else if (plural && pluralNodes[node.local] !== void 0) {

		} else if ((node.ns[node.prefix] === fest_ns || node.ns[node.prefix] === fest_i18n_ns) && (node.local === 'message' || node.local === 'msg')){
			message--;
			if (message !== 0){
				messages[messages.length - 2].id += messages.pop(); // missing context here
			} else {
				yield_message(messages.pop());
			}
		} else {
			append_xml('</' + node.name + '>');
		}
	};

	if (template) {
		parser.write(template);

		closetag();

		parser.close();
	}

	return result;
}
