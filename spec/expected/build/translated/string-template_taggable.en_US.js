;(function(){var x=Function('return this')();if(!x.fest)x.fest={};x.fest['string-template_taggable.en_US']=function(__fest_context) {
    "use strict";
    var __fest_self = this,
        __fest_buf = "",
        __fest_chunks = [],
        __fest_chunk, __fest_attrs = [],
        __fest_exprs = [],
        __fest_str_templates = [],
        __fest_select, __fest_if, __fest_iterator, __fest_to, __fest_fn, __fest_html = "",
        __fest_blocks = {},
        __fest_params, __fest_element, __fest_debug_file = "",
        __fest_debug_line = "",
        __fest_debug_block = "",
        __fest_htmlchars = /[&<>"]/g,
        __fest_htmlchars_test = /[&<>"]/,
        __fest_short_tags = {
            "area": true,
            "base": true,
            "br": true,
            "col": true,
            "command": true,
            "embed": true,
            "hr": true,
            "img": true,
            "input": true,
            "keygen": true,
            "link": true,
            "meta": true,
            "param": true,
            "source": true,
            "wbr": true
        },
        __fest_element_stack = [],
        __fest_htmlhash = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            "\"": "&quot;"
        },
        __fest_jschars = /[\\'"\/\n\r\t\b\f\v\0<>]/g,
        __fest_jschars_test = /[\\'"\/\n\r\t\b\f\v\0<>]/,
        __fest_jshash = {
            "\"": "\\\"",
            "\\": "\\\\",
            "/": "\\/",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\b": "\\b",
            "\f": "\\f",
            "\u000b": "\\v",
            "\u0000": "\\u0000",
            "'": "\\'",
            "<": "\\u003C",
            ">": "\\u003E"
        },
        ___fest_log_error;
    if (typeof __fest_error === "undefined") {
        ___fest_log_error = (typeof console !== "undefined" && console.error) ?
        function() {
            return Function.prototype.apply.call(console.error, console, arguments)
        } : function() {};
    } else {
        ___fest_log_error = __fest_error
    };

    function __fest_log_error(msg) {
        ___fest_log_error(msg + "\nin block \"" + __fest_debug_block + "\" at line: " + __fest_debug_line + "\nfile: " + __fest_debug_file)
    }
    function __fest_replaceHTML(chr) {
        return __fest_htmlhash[chr]
    }
    function __fest_replaceJS(chr) {
        return __fest_jshash[chr]
    }
    function __fest_extend(dest, src) {
        for (var i in src) if (src.hasOwnProperty(i)) dest[i] = src[i];
    }
    function __fest_param(fn) {
        fn.param = true;
        return fn
    }
    function __fest_call(fn, params, cp) {
        if (cp) for (var i in params) if (typeof params[i] == "function" && params[i].param) params[i] = params[i]();
        return fn.call(__fest_self, params)
    }
    function __fest_escapeJS(s) {
        if (typeof s === "string") {
            if (__fest_jschars_test.test(s)) return s.replace(__fest_jschars, __fest_replaceJS);
        } else if (typeof s === "undefined") return "";
        return s;
    }
    function __fest_escapeHTML(s) {
        if (typeof s === "string") {
            if (__fest_htmlchars_test.test(s)) return s.replace(__fest_htmlchars, __fest_replaceHTML);
        } else if (typeof s === "undefined") return "";
        return s;
    }
    __fest_buf += ("<div>");
    var string = (function() {
        var __fest_buf = "",
            __fest_select, __fest_if, __fest_iterator, __fest_to, __fest_fn, __fest_params;
        __fest_buf += ("string");
        return __fest_buf;
    })();
    var template = (function() {
        var __fest_buf = "",
            __fest_select, __fest_if, __fest_iterator, __fest_to, __fest_fn, __fest_params;
        __fest_buf += ("template");
        return __fest_buf;
    })();
    try {
        var rawQuasis = function(quasis) {
                if (quasis.length === 0) return '';

                var expressionValues = Array.prototype.slice.call(arguments, 1);
                var raw = quasis.raw;

                var s = '',
                    i = 0,
                    len = raw.length;
                while (true) {
                    s += raw[i];
                    if (i + 1 === len) {
                        return s;
                    }
                    s += expressionValues[i++];
                }
            }
        var doubleQuoters = function(quasis) {
                if (quasis.length === 0) return '';

                var expressionValues = Array.prototype.slice.call(arguments, 1);
                var raw = quasis.raw;

                expressionValues = expressionValues.map(function(x) {
                    return '"' + x + '"'
                });

                var s = '',
                    i = 0,
                    len = raw.length;
                while (true) {
                    s += raw[i];
                    if (i + 1 === len) {
                        return s;
                    }
                    s += expressionValues[i++];
                }
            }
        var rawExpression = function(quasis) {
                if (quasis.length === 0) return '';

                var expressionValues = Array.prototype.slice.call(arguments, 1);

                var s = '',
                    i = 0,
                    len = quasis.length;
                while (true) {
                    s += quasis[i];
                    if (i + 1 === len) {
                        return s;
                    }
                    s += (expressionValues[i++]).replace(/\\/g, "\\\\");
                }
            }
    } catch (e) {
        __fest_log_error(e.message);
    }
    var value = (function() {
        var __fest_buf = "",
            __fest_select, __fest_if, __fest_iterator, __fest_to, __fest_fn, __fest_params;
        return __fest_buf;
    })();
    __fest_buf += ("-- &gt; [ \\0, \\b, \\r, \\n, \\v, \\t, \\u2222, \\x22 ]");
    try {
        __fest_buf += (__fest_escapeHTML('\\0, \\b, \\r, \\n, \\v, \\t, \\u2222, \\x22'))
    } catch (e) {
        __fest_log_error(e.message + "57");
    }
    __fest_buf += ("<div>");
    try {
        __fest_exprs[0] = __fest_escapeHTML(string)
    } catch (e) {
        __fest_exprs[0] = "";
        __fest_log_error(e.message);
    }
    try {
        __fest_exprs[1] = __fest_escapeHTML(template)
    } catch (e) {
        __fest_exprs[1] = "";
        __fest_log_error(e.message);
    }
    __fest_buf += ("This div contains taggable " + __fest_exprs[0] + " " + __fest_exprs[1] + ":");
    __fest_exprs.length = 0;
    try {
        __fest_exprs[0] = __fest_escapeHTML(1 ? 'value' : void 0)
    } catch (e) {
        __fest_exprs[0] = "";
        __fest_log_error(e.message);
    }
    __fest_str_templates[0] = ["tagged value is ", ""];
    __fest_str_templates[0]["raw"] = __fest_str_templates[0];
    try {
        __fest_exprs[2] = doubleQuoters(__fest_str_templates[0], __fest_exprs[0]);
    } catch (e) {
        __fest_exprs[2] = "";
        __fest_log_error(e.message);
    }
    __fest_buf += ("" + __fest_exprs[2] + "");
    __fest_exprs.length = 0;
    __fest_buf += ("<br/>");
    try {
        __fest_exprs[0] = __fest_escapeHTML('>, <, \\0, \\b, \\r, \\n, \\v, \\t, \\u2222, \\x22')
    } catch (e) {
        __fest_exprs[0] = "";
        __fest_log_error(e.message);
    }
    __fest_buf += ("this string contains special symbols [ \u003E, \u003C, \\0, \\b, \\r, \\n, \\v, \\t, \\u2222, \\x22 ] and expression " + __fest_exprs[0] + "");
    __fest_exprs.length = 0;
    __fest_buf += ("<br/>");
    try {
        __fest_exprs[0] = __fest_escapeHTML('>, <, \\0, \\b, \\r, \\n, \\v, \\t, \\u2222, \\x22')
    } catch (e) {
        __fest_exprs[0] = "";
        __fest_log_error(e.message);
    }
    __fest_str_templates[1] = ["this string contains escaped special symbols [ &gt;, &lt;, \\0, \\b, \\r, \\n, \\v, \\t, \\u2222, \\x22 ] and expression ", ""];
    __fest_str_templates[1]["raw"] = ["this string contains escaped special symbols [ &gt;, &lt;, \\\\0, \\\\b, \\\\r, \\\\n, \\\\v, \\\\t, \\\\u2222, \\\\x22 ] and expression ", ""];
    try {
        __fest_exprs[2] = rawQuasis(__fest_str_templates[1], __fest_exprs[0]);
    } catch (e) {
        __fest_exprs[2] = "";
        __fest_log_error(e.message);
    }
    __fest_buf += ("" + __fest_exprs[2] + "");
    __fest_exprs.length = 0;
    __fest_buf += ("<br/>");
    try {
        __fest_exprs[0] = __fest_escapeHTML('>, <, \\0, \\b, \\r, \\n, \\v, \\t, \\u2222, \\x22')
    } catch (e) {
        __fest_exprs[0] = "";
        __fest_log_error(e.message);
    }
    __fest_str_templates[2] = ["this string contains special symbols: [ &gt;, &lt;, \\0, \\b, \\r, \\n, \\v, \\t, \\u2222, \\x22 ] and escaped expression ", ""];
    __fest_str_templates[2]["raw"] = ["this string contains special symbols: [ &gt;, &lt;, \\\\0, \\\\b, \\\\r, \\\\n, \\\\v, \\\\t, \\\\u2222, \\\\x22 ] and escaped expression ", ""];
    try {
        __fest_exprs[2] = rawExpression(__fest_str_templates[2], __fest_exprs[0]);
    } catch (e) {
        __fest_exprs[2] = "";
        __fest_log_error(e.message);
    }
    __fest_buf += ("" + __fest_exprs[2] + "");
    __fest_exprs.length = 0;
    __fest_buf += ("<br/>another tagged value in another fest:text");
    try {
        __fest_exprs[0] = __fest_escapeHTML(1 ? 'value' : void 0)
    } catch (e) {
        __fest_exprs[0] = "";
        __fest_log_error(e.message);
    }
    try {
        __fest_exprs[2] = doubleQuoters(__fest_str_templates[0], __fest_exprs[0]);
    } catch (e) {
        __fest_exprs[2] = "";
        __fest_log_error(e.message);
    }
    __fest_buf += ("" + __fest_exprs[2] + "");
    __fest_exprs.length = 0;
    try {
        var singleQuoters = function(quasis) {
                if (quasis.length === 0) return '';

                var expressionValues = Array.prototype.slice.call(arguments, 1);
                var raw = quasis.raw;

                expressionValues = expressionValues.map(function(x) {
                    return '\'' + x + '\''
                });

                var s = '',
                    i = 0,
                    len = raw.length;
                while (true) {
                    s += raw[i];
                    if (i + 1 === len) {
                        return s;
                    }
                    s += expressionValues[i++];
                }
            }
    } catch (e) {
        __fest_log_error(e.message);
    }
    __fest_buf += ("inner fest:text with another \'tag\':tagged value is<b>");
    try {
        __fest_exprs[0] = __fest_escapeHTML("text in single quoter's")
    } catch (e) {
        __fest_exprs[0] = "";
        __fest_log_error(e.message);
    }
    __fest_str_templates[3] = ["", ""];
    __fest_str_templates[3]["raw"] = __fest_str_templates[3];
    try {
        __fest_exprs[2] = singleQuoters(__fest_str_templates[3], __fest_exprs[0]);
    } catch (e) {
        __fest_exprs[2] = "";
        __fest_log_error(e.message);
    }
    __fest_buf += ("" + __fest_exprs[2] + "");
    __fest_exprs.length = 0;
    __fest_buf += ("</b>this text<b>");
    try {
        __fest_exprs[0] = __fest_escapeHTML("should be in double quoter's")
    } catch (e) {
        __fest_exprs[0] = "";
        __fest_log_error(e.message);
    }
    try {
        __fest_exprs[2] = doubleQuoters(__fest_str_templates[3], __fest_exprs[0]);
    } catch (e) {
        __fest_exprs[2] = "";
        __fest_log_error(e.message);
    }
    __fest_buf += ("" + __fest_exprs[2] + "");
    __fest_exprs.length = 0;
    __fest_buf += ("</b></div>");
    try {
        var htmlEscape = function(quasis) {
                if (quasis.length === 0) return '';

                var htmlchars = /[&<>"]/g;
                var htmlhash = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;"
                };

                function escapeHTML(s) {
                    return s.replace(htmlchars, function(chr) {
                        return htmlhash[chr];
                    });
                }

                var expressionValues = Array.prototype.slice.call(arguments, 1);

                var s = '',
                    i = 0,
                    len = quasis.length;
                while (true) {
                    s += escapeHTML(quasis[i]);
                    if (i + 1 === len) {
                        return s;
                    }
                    s += expressionValues[i++];
                }
            }
    } catch (e) {
        __fest_log_error(e.message);
    }
    try {
        var block = 'b-block';
        var element = '__element';
        var modifier = '_modifier';
    } catch (e) {
        __fest_log_error(e.message);
    }
    __fest_buf += ("<pre>");
    try {
        __fest_exprs[0] = __fest_escapeHTML(block)
    } catch (e) {
        __fest_exprs[0] = "";
        __fest_log_error(e.message);
    }
    try {
        __fest_exprs[1] = __fest_escapeHTML('&')
    } catch (e) {
        __fest_exprs[1] = "";
        __fest_log_error(e.message);
    }
    try {
        __fest_exprs[2] = __fest_escapeHTML('<')
    } catch (e) {
        __fest_exprs[2] = "";
        __fest_log_error(e.message);
    }
    try {
        __fest_exprs[3] = __fest_escapeHTML('>')
    } catch (e) {
        __fest_exprs[3] = "";
        __fest_log_error(e.message);
    }
    try {
        __fest_exprs[4] = __fest_escapeHTML('\'')
    } catch (e) {
        __fest_exprs[4] = "";
        __fest_log_error(e.message);
    }
    try {
        __fest_exprs[5] = __fest_escapeHTML('\"')
    } catch (e) {
        __fest_exprs[5] = "";
        __fest_log_error(e.message);
    }
    try {
        __fest_exprs[6] = __fest_escapeHTML('{')
    } catch (e) {
        __fest_exprs[6] = "";
        __fest_log_error(e.message);
    }
    try {
        __fest_exprs[7] = __fest_escapeHTML('}')
    } catch (e) {
        __fest_exprs[7] = "";
        __fest_log_error(e.message);
    }
    try {
        __fest_exprs[8] = __fest_escapeHTML('{}')
    } catch (e) {
        __fest_exprs[8] = "";
        __fest_log_error(e.message);
    }
    try {
        __fest_exprs[9] = __fest_escapeHTML(block)
    } catch (e) {
        __fest_exprs[9] = "";
        __fest_log_error(e.message);
    }
    try {
        __fest_exprs[10] = __fest_escapeHTML(modifier)
    } catch (e) {
        __fest_exprs[10] = "";
        __fest_log_error(e.message);
    }
    try {
        __fest_exprs[11] = __fest_escapeHTML( !! (block && modifier))
    } catch (e) {
        __fest_exprs[11] = "";
        __fest_log_error(e.message);
    }
    try {
        __fest_exprs[12] = __fest_escapeHTML(block + element)
    } catch (e) {
        __fest_exprs[12] = "";
        __fest_log_error(e.message);
    }
    try {
        __fest_exprs[13] = __fest_escapeHTML({
            'key': 'value'
        }['key'])
    } catch (e) {
        __fest_exprs[13] = "";
        __fest_log_error(e.message);
    }
    try {
        __fest_exprs[14] = __fest_escapeHTML('name')
    } catch (e) {
        __fest_exprs[14] = "";
        __fest_log_error(e.message);
    }
    try {
        __fest_exprs[15] = __fest_escapeHTML('{<"\'&>}')
    } catch (e) {
        __fest_exprs[15] = "";
        __fest_log_error(e.message);
    }
    __fest_str_templates[4] = ["&lt;div class=&quot;", "&quot;\n\t\t\t\t data-amp=&quot;", "&quot;\n\t\t\t\t data-lt=&quot;", "&quot;\n\t\t\t\t data-gt=&quot;", "&quot;\n\t\t\t\t data-apos=&quot;", "&quot;\n\t\t\t\t data-quot=&quot;", "&quot;\n\t\t\t\t data-elcb=&quot;", "&quot;\n\t\t\t\t data-ercb=&quot;", "&quot;\n\t\t\t\t data-lcb1=&quot;\\${{&quot;\n\t\t\t\t data-lcb2=&quot;$\\{{&quot;\n\t\t\t\t data-rcb=&quot;$}}&quot;\n\t\t\t\t data-ecb=&quot;", "&quot;\n\t\t\t\t data-escape=&quot;\\${\'1\'}&quot;\n\t\t\t\t\t&gt;\n\t\t\t\t&lt;div class=&quot;", "", "&quot; data-has-modifier=&quot;", "&quot;\/&gt;\n\t\t\t\t&lt;div class=&quot;", "&quot; data-obj-value=&quot;", "&quot; data-obj-json=&quot;{{ &quot;key&quot;: &quot;value&quot; }}&quot;&gt;\n\t\t\t\t\t&lt;span class=&quot;", "&quot; data-spec-chars=&quot;{{&lt;&quot;\'&amp;&gt;}}&quot; data-espec-chars=&quot;", "&quot;&gt;\n\t\t\t\t\t\t&lt;fest:get name=&quot;modify&quot;&gt;{ &quot;block&quot;: block, &quot;element&quot;: element }&lt;\/fest:get&gt;\n\t\t\t\t\t&lt;\/span&gt;\n\t\t\t\t&lt;\/div&gt;\n\t\t\t&lt;\/div&gt;\n\t\t\t&lt;fest:for iterate=&quot;[1,2,3,4,5].filter(function(item){return item !== 3})&quot; index=&quot;item&quot; value=&quot;value&quot;&gt;\n\t\t\t\t&lt;fest:value&gt;value&lt;\/fest:value&gt;\n\t\t\t&lt;\/fest:for&gt;"];
    __fest_str_templates[4]["raw"] = ["&lt;div class=&quot;", "&quot;\\n\\t\\t\\t\\t data-amp=&quot;", "&quot;\\n\\t\\t\\t\\t data-lt=&quot;", "&quot;\\n\\t\\t\\t\\t data-gt=&quot;", "&quot;\\n\\t\\t\\t\\t data-apos=&quot;", "&quot;\\n\\t\\t\\t\\t data-quot=&quot;", "&quot;\\n\\t\\t\\t\\t data-elcb=&quot;", "&quot;\\n\\t\\t\\t\\t data-ercb=&quot;", "&quot;\\n\\t\\t\\t\\t data-lcb1=&quot;\\\\${{&quot;\\n\\t\\t\\t\\t data-lcb2=&quot;$\\\\{{&quot;\\n\\t\\t\\t\\t data-rcb=&quot;$}}&quot;\\n\\t\\t\\t\\t data-ecb=&quot;", "&quot;\\n\\t\\t\\t\\t data-escape=&quot;\\\\${\\'1\\'}&quot;\\n\\t\\t\\t\\t\\t&gt;\\n\\t\\t\\t\\t&lt;div class=&quot;", "", "&quot; data-has-modifier=&quot;", "&quot;\\/&gt;\\n\\t\\t\\t\\t&lt;div class=&quot;", "&quot; data-obj-value=&quot;", "&quot; data-obj-json=&quot;{{ &quot;key&quot;: &quot;value&quot; }}&quot;&gt;\\n\\t\\t\\t\\t\\t&lt;span class=&quot;", "&quot; data-spec-chars=&quot;{{&lt;&quot;\\'&amp;&gt;}}&quot; data-espec-chars=&quot;", "&quot;&gt;\\n\\t\\t\\t\\t\\t\\t&lt;fest:get name=&quot;modify&quot;&gt;{ &quot;block&quot;: block, &quot;element&quot;: element }&lt;\\/fest:get&gt;\\n\\t\\t\\t\\t\\t&lt;\\/span&gt;\\n\\t\\t\\t\\t&lt;\\/div&gt;\\n\\t\\t\\t&lt;\\/div&gt;\\n\\t\\t\\t&lt;fest:for iterate=&quot;[1,2,3,4,5].filter(function(item){return item !== 3})&quot; index=&quot;item&quot; value=&quot;value&quot;&gt;\\n\\t\\t\\t\\t&lt;fest:value&gt;value&lt;\\/fest:value&gt;\\n\\t\\t\\t&lt;\\/fest:for&gt;"];
    try {
        __fest_exprs[17] = htmlEscape(__fest_str_templates[4], __fest_exprs[0], __fest_exprs[1], __fest_exprs[2], __fest_exprs[3], __fest_exprs[4], __fest_exprs[5], __fest_exprs[6], __fest_exprs[7], __fest_exprs[8], __fest_exprs[9], __fest_exprs[10], __fest_exprs[11], __fest_exprs[12], __fest_exprs[13], __fest_exprs[14], __fest_exprs[15]);
    } catch (e) {
        __fest_exprs[17] = "";
        __fest_log_error(e.message);
    }
    __fest_buf += ("" + __fest_exprs[17] + "");
    __fest_exprs.length = 0;
    try {
        var a = 'A';
        var b = 'B';
    } catch (e) {
        __fest_log_error(e.message);
    }
    try {
        __fest_exprs[0] = __fest_escapeHTML(a)
    } catch (e) {
        __fest_exprs[0] = "";
        __fest_log_error(e.message);
    }
    try {
        __fest_exprs[1] = __fest_escapeHTML(b)
    } catch (e) {
        __fest_exprs[1] = "";
        __fest_log_error(e.message);
    }
    __fest_str_templates[5] = ["&lt;div data-lf=&quot;a\n\rb&quot; data-backslash=&quot;\\&quot; data-apos=&quot;\'&quot; data-quot=&quot;&quot;&quot; data-block=&quot;", "{&quot; data-block-with-text=&quot;}a", "{c}&quot;&gt;&lt;\/div&gt;"];
    __fest_str_templates[5]["raw"] = ["&lt;div data-lf=&quot;a\\n\\rb&quot; data-backslash=&quot;\\\\&quot; data-apos=&quot;\\'&quot; data-quot=&quot;&quot;&quot; data-block=&quot;", "{&quot; data-block-with-text=&quot;}a", "{c}&quot;&gt;&lt;\\/div&gt;"];
    try {
        __fest_exprs[3] = htmlEscape(__fest_str_templates[5], __fest_exprs[0], __fest_exprs[1]);
    } catch (e) {
        __fest_exprs[3] = "";
        __fest_log_error(e.message);
    }
    __fest_buf += ("" + __fest_exprs[3] + "");
    __fest_exprs.length = 0;
    __fest_buf += ("</pre></div>");
    __fest_to = __fest_chunks.length;
    if (__fest_to) {
        __fest_iterator = 0;
        for (; __fest_iterator < __fest_to; __fest_iterator++) {
            __fest_chunk = __fest_chunks[__fest_iterator];
            if (typeof __fest_chunk === "string") {
                __fest_html += __fest_chunk;
            } else {
                __fest_fn = __fest_blocks[__fest_chunk.name];
                if (__fest_fn) __fest_html += __fest_call(__fest_fn, __fest_chunk.params, __fest_chunk.cp);
            }
        }
        return __fest_html + __fest_buf;
    } else {
        return __fest_buf;
    }
}})();
