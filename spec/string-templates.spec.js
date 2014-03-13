var utils = require('./utils'),
    render = utils.render;

describe('fest:string-templates', function () {

    beforeEach(utils.setupMatchers);

    it('simple string template should work as string concatenation', function () {
        expect(
            render('templates/string-template.xml', {}).contents.replace(/\t/g, '    ')
        ).toBe(
                '<div><div>This string contains STRING ${ ${ TEMPLATE }<\/div><div>Another string with<b>TEMPLATE<\/b><\/div><div>String template with function inside.\n\
        Function: ${function}<\/div><div><div class=\"b-block#{asd}\"\n\
             data-amp=\"&amp;\"\n\
             data-lt=\"&lt;\"\n\
             data-gt=\"&gt;\"\n\
             data-apos=\"\'\"\n\
             data-quot=\"&quot;\"\n\
             data-elcb=\"{\"\n\
             data-ercb=\"}\"\n\
             data-lcb1=\"\\\\${{\"\n\
             data-lcb2=\"${{\"\n\
             data-rcb=\"$}}\"\n\
             data-ecb=\"{}\"\n\
             data-escape=\"\\\\1\">\n\
            <div class=\"b-block_modifier\" data-has-modifier=\"true\"\/>\n\
            <div class=\"b-block__element\" data-obj-value=\"value\" data-obj-json=\"{{ \"key\": \"value\" }}\">\n\
                <span class=\"name\" data-spec-chars=\"{{<\"\'&>}}\" data-espec-chars=\"{&lt;&quot;\'&amp;&gt;}\">\n\
                    <fest:get name=\"modify\">{ \"block\": block, \"element\": element }<\/fest:get>\n\
                <\/span>\n\
            <\/div>\n\
        <\/div>\n\
        <fest:for iterate=\"[1,2,3,4,5].filter(function(item){return item !== 3})\" index=\"item\" value=\"value\">\n\
            <fest:value>value<\/fest:value>\n\
        <\/fest:for><div data-lf=\"a\n\
\u000db\" data-backslash=\"\\\" data-apos=\"\'\" data-quot=\"\"\" data-block=\"A{\" data-block-with-text=\"}aB{c}\"><\/div><\/div><\/div>'.replace(/\t/g, '    ')
            );
    });

    it('taggable string template should use tag-functions to to allow program the different behavior', function () {
        expect(
            render('templates/string-template_taggable.xml', {}).contents.replace(/\t/g, '    ')
        ).toBe(
                '<div>-- > [ \\0, \\b, \\r, \\n, \\v, \\t, \\u2222, \\x22 ]\\0, \\b, \\r, \\n, \\v, \\t, \\u2222, \\x22<div>\
This div contains taggable STRING TEMPLATE:tagged value is \"value\"<br\/>\
this string contains special symbols [ >, <, \\0, \\b, \\r, \\n, \\v, \\t, \\u2222, \\x22 ] and expression &gt;, &lt;, \\0, \\b, \\r, \\n, \\v, \\t, \\u2222, \\x22<br\/>\
this string contains escaped special symbols [ >, <, \\\\0, \\\\b, \\\\r, \\\\n, \\\\v, \\\\t, \\\\u2222, \\\\x22 ] and expression &gt;, &lt;, \\0, \\b, \\r, \\n, \\v, \\t, \\u2222, \\x22<br\/>\
this string contains special symbols: [ >, <, \\0, \\b, \\r, \\n, \\v, \\t, \\u2222, \\x22 ] and escaped expression &gt;, &lt;, \\\\0, \\\\b, \\\\r, \\\\n, \\\\v, \\\\t, \\\\u2222, \\\\x22<br\/>\
another tagged value in another fest:texttagged value is \"value\"inner fest:text with another \'tag\':tagged value is<b>\'text in single quoter\'s\'<\/b>\
this text<b>\"should be in double quoter\'s\"<\/b><\/div>\
<pre>&lt;div class=&quot;b-block&quot;\n\
     data-amp=&quot;&amp;&quot;\n\
     data-lt=&quot;&lt;&quot;\n\
     data-gt=&quot;&gt;&quot;\n\
     data-apos=&quot;\'&quot;\n\
     data-quot=&quot;&quot;&quot;\n\
     data-elcb=&quot;{&quot;\n\
     data-ercb=&quot;}&quot;\n\
     data-lcb1=&quot;\\\\${{&quot;\n\
     data-lcb2=&quot;${{&quot;\n\
     data-rcb=&quot;$}}&quot;\n\
     data-ecb=&quot;{}&quot;\n\
     data-escape=&quot;\\\\1&quot;&gt;\n\
    &lt;div class=&quot;b-block_modifier&quot; data-has-modifier=&quot;true&quot;\/&gt;\n\
    &lt;div class=&quot;b-block__element&quot; data-obj-value=&quot;value&quot; data-obj-json=&quot;{{ &quot;key&quot;: &quot;value&quot; }}&quot;&gt;\n\
        &lt;span class=&quot;name&quot; data-spec-chars=&quot;{{&lt;&quot;\'&amp;&gt;}}&quot; data-espec-chars=&quot;{&lt;&quot;\'&amp;&gt;}&quot;&gt;\n\
            &lt;fest:get name=&quot;modify&quot;&gt;{ &quot;block&quot;: block, &quot;element&quot;: element }&lt;\/fest:get&gt;\n\
        &lt;\/span&gt;\n\
    &lt;\/div&gt;\n\
&lt;\/div&gt;\n\
&lt;fest:for iterate=&quot;[1,2,3,4,5].filter(function(item){return item !== 3})&quot; index=&quot;item&quot; value=&quot;value&quot;&gt;\n\
    &lt;fest:value&gt;value&lt;\/fest:value&gt;\n\
&lt;\/fest:for&gt;&lt;div data-lf=&quot;a\n\
\u000db&quot; data-backslash=&quot;\\&quot; data-apos=&quot;\'&quot; data-quot=&quot;&quot;&quot; data-block=&quot;A{&quot; data-block-with-text=&quot;}aB{c}&quot;&gt;&lt;\/div&gt;\
<\/pre><\/div>'.replace(/\t/g, '    ')
            );
    });

    //TODO:: attributes
    //TODO:: errors

});
