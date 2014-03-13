;(function(){var x=Function('return this')();if(!x.fest)x.fest={};x.fest['spec/templates/string-template']=function(__fest_context) {
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
    __fest_buf += ("This string contains " + __fest_exprs[0] + " \\${ $\\{ " + __fest_exprs[1] + " \\}");
    __fest_exprs.length = 0;
    __fest_buf += ("</div><div>Another string with<b>");
    try {
        __fest_exprs[0] = __fest_escapeHTML(template)
    } catch (e) {
        __fest_exprs[0] = "";
        __fest_log_error(e.message);
    }
    __fest_buf += ("" + __fest_exprs[0] + "");
    __fest_exprs.length = 0;
    __fest_buf += ("</b></div><div>");
    try {
        __fest_exprs[0] = __fest_escapeHTML((function() {
            return "${function}"
        })())
    } catch (e) {
        __fest_exprs[0] = "";
        __fest_log_error(e.message);
    }
    __fest_buf += ("String template with function inside.\n\t\tFunction: " + __fest_exprs[0] + "");
    __fest_exprs.length = 0;
    __fest_buf += ("</div>");
    try {
        var block = 'b-block';
        var element = '__element';
        var modifier = '_modifier';
    } catch (e) {
        __fest_log_error(e.message);
    }
    __fest_buf += ("<div>");
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
    __fest_buf += ("\u003Cdiv class=\"" + __fest_exprs[0] + "\"\n\t\t\t data-amp=\"" + __fest_exprs[1] + "\"\n\t\t\t data-lt=\"" + __fest_exprs[2] + "\"\n\t\t\t data-gt=\"" + __fest_exprs[3] + "\"\n\t\t\t data-apos=\"" + __fest_exprs[4] + "\"\n\t\t\t data-quot=\"" + __fest_exprs[5] + "\"\n\t\t\t data-elcb=\"" + __fest_exprs[6] + "\"\n\t\t\t data-ercb=\"" + __fest_exprs[7] + "\"\n\t\t\t data-lcb1=\"\\${{\"\n\t\t\t data-lcb2=\"$\\{{\"\n\t\t\t data-rcb=\"$}}\"\n\t\t\t data-ecb=\"" + __fest_exprs[8] + "\"\n\t\t\t data-escape=\"\\${\'1\'}\"\n\t\t\t\t\u003E\n\t\t\t\u003Cdiv class=\"" + __fest_exprs[9] + "" + __fest_exprs[10] + "\" data-has-modifier=\"" + __fest_exprs[11] + "\"\/\u003E\n\t\t\t\u003Cdiv class=\"" + __fest_exprs[12] + "\" data-obj-value=\"" + __fest_exprs[13] + "\" data-obj-json=\"{{ \"key\": \"value\" }}\"\u003E\n\t\t\t\t\u003Cspan class=\"" + __fest_exprs[14] + "\" data-spec-chars=\"{{\u003C\"\'&\u003E}}\" data-espec-chars=\"" + __fest_exprs[15] + "\"\u003E\n\t\t\t\t\t\u003Cfest:get name=\"modify\"\u003E{ \"block\": block, \"element\": element }\u003C\/fest:get\u003E\n\t\t\t\t\u003C\/span\u003E\n\t\t\t\u003C\/div\u003E\n\t\t\u003C\/div\u003E\n\t\t\u003Cfest:for iterate=\"[1,2,3,4,5].filter(function(item){return item !== 3})\" index=\"item\" value=\"value\"\u003E\n\t\t\t\u003Cfest:value\u003Evalue\u003C\/fest:value\u003E\n\t\t\u003C\/fest:for\u003E");
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
    __fest_buf += ("\u003Cdiv data-lf=\"a\n\rb\" data-backslash=\"\\\" data-apos=\"\'\" data-quot=\"\"\" data-block=\"" + __fest_exprs[0] + "{\" data-block-with-text=\"}a" + __fest_exprs[1] + "{c}\"\u003E\u003C\/div\u003E");
    __fest_exprs.length = 0;
    __fest_buf += ("</div></div>");
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
