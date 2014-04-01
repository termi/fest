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
		output = data.output,
		pluralForms = options.plural || "(n != 1)",
		createVar = data.createVar,
		textStack = [];

	if ( typeof pluralForms === 'function' ) {
		pluralForms = String(pluralForms).replace(/(?:\r\n)|[\n\t]/g, "").trim().replace(/^function\s*(anonymous)?\(\s*n\s*\)\s*\{return\s*/, "");
		pluralForms = pluralForms.substring(0, pluralForms.length - 2).trim();
	}
	else {
		pluralForms = String(pluralForms).replace(/(?:\r\n)|[\n\t]/g, "").trim();
	}
	pluralForms = pluralForms.replace(/;$/g, "");

	var parser = sax.parser(true, {trim:false, xmlns:true}),
		opennode = false,
		message = 0,
		plural = void 0,
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

	function findOpenQuoteBefore(text) {
		var len = text.length;
		while ( len-- > 0 ) {
			var ch = text.charAt(len);
			if ( ch === '\'' || ch === '\"' ) {
				return ch;
			}
		}
		return "";
	}

	function Message(id, context, values) {
		this.id = id.trim();
		this.text = "";
		this.context = context;
		this.reference = data.file + ':' + (parser.line + 1);
		this.values = values;
	}
	Message.prototype.toFest = function() {
		var parent = stack[stack.length - 1];

		var values = this.values;
		var functionBody =
			'function(){var res = ' + createVar("'" + this.text + "'") +
				';var i = 0, len = arguments.length;while(i < len){ res = res.replace("%s", arguments[i++]) };return res;}';
		var varName = createVar(functionBody, 'function');

		functionBody = varName + '.apply(null' + (values ? ', [' + values + ']' : '') + ')';

		if ( (parent.local === 'get' || parent.local === 'script') && parent.ns[parent.prefix] === fest_ns ) {
			var prevText = textStack[textStack.length - 2];
			var quote = findOpenQuoteBefore(prevText);
			return (quote ? quote + " + " : "") + '(' + functionBody + ')' + (quote ? " + " + quote : "");
		}
		else {
			return '<fest:value>' + functionBody + '</fest:value>';
		}


	};
	Message.prototype.toString = function() {
		var values = this.values;
		if ( values ) {
			return this.toFest();
		}
		return this.text;
	};

	function yield_message(msg, fn, auto) {
		fn = fn || function (s) { return s };
		auto = auto || false;
		var text = msg.id;
		if ((!auto || options.auto_message) && /\S+/.test(msg.id)) {
			text = translate_message(msg);
		}

		msg.text = (fn ? fn(text) : text).trim();

		result += msg;
	}

	function PluralMessage(attrs) {
		var select = attrs.select && attrs.select.value
			, values = attrs.values && attrs.values.value
			, outputType = attrs.output && attrs.output.value
			, name = attrs.name && attrs.name.value
		;

		if ( (select || values) && !outputType ) {
			this.select = select;
			this.values = values;
		}
		else if ( outputType && !select && !values ) {
			outputType = String(outputType).toLowerCase();

			if ( outputType === "function" ) {
				if ( !name ) {
					throw new Error(data.file + "\n" + data.errorMessage("\"plural\" with \"function\" output type should have \"name\" attribute", parser.line, template));
				}
				this.name = name;
			}
			else if ( outputType === "json" ) {

			}
			else {
				throw new Error(data.file + "\n" + data.errorMessage("\"plural\" has invalid \"output\" type: \"" + outputType + "\"", parser.line, template));
			}

			this.outputType = outputType;
		}
		else {
			throw new Error(data.file + "\n" + data.errorMessage("\"plural\" must have \"select\" or \"output\" attribute", parser.line, template));
		}

		this.plurals = {};
		this.pluralRefs = {};
		this.reference = data.file + ':' + (parser.line + 1);
	}
	PluralMessage.prototype.addPlural = function(id, form) {
		if (!this.id)this.id = id;
		if (form==0)this.id = id;

		this.plurals[form] = id;
		this.pluralRefs[form] = data.file + ':' + (parser.line + 1);
	};
	PluralMessage.prototype.toJSON = function(isOutput) {
		var json;

		if ( isOutput ) {
			this.plurals.plural = escapeHTML(pluralForms);
			json = JSON.stringify(this.plurals);
			delete this.plurals.plural;
		}
		else {
			json = JSON.stringify(this.plurals);
		}

		return json;
	};
	PluralMessage.prototype.toFunction = function(isOutput) {
		var obj = this.toJSON(), plurForm = pluralForms;
		var res = '';
		if ( isOutput ) {
			res = 'var ' + this.name + ' = ' + res;
		}
		else {
			obj = createVar(obj);
			plurForm = '(' + createVar('function(n){var res = ' + plurForm + '; return res===true ? 1 : res===false ? 0 : res}', 'function') + ')(n)';
		}
		res += 'function(n){var res = ' + obj + ';res = (res["="+n]||res[' + plurForm + ']||"").replace("%d",n);' +
			'var i = 0, len = arguments.length;while(++i < len){ res = res.replace("%s", arguments[i]) };' +
			'return res;}';
		return res;
//		return createVar('function(n){var res = ' + this.toJSON() + ';return (res["="+n]||res[(' + escapeHTML(pluralFormula) + ')]||"").replace("%s",n)}', 'function');
	};
	PluralMessage.prototype.toFest = function(isOutput) {
		var res = createVar(this.toFunction(), 'function') + '(' + this.select + (this.values ? ', ' + this.values : '') + ')';
		if ( isOutput ) {
			return res;
		}
		return '<fest:value>' + res + '</fest:value>';
	};
	PluralMessage.prototype.toString = function() {
		var outputType = this.outputType;
		return outputType == "json"
			? this.toJSON(true)
			: outputType == "function"
				? this.toFunction(true)
				: this.toFest()
			;
	};

	function yield_plural_message(msg, fn) {
		if (msg.id && /\S+/.test(msg.id)) {
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
		textStack.push(text);
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
			plural = new PluralMessage(node.attributes);
		} else if (plural && pluralNodes[node.local] !== void 0) {

		} else if ((isFestNS || isI18NNS) && (node.local === 'message' || node.local === 'msg')){
			if (!isI18NNS || !plural) {
				messages.push(new Message('', node.attributes.context && node.attributes.context.value, node.attributes.values && node.attributes.values.value));
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
			plural = void 0;
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
