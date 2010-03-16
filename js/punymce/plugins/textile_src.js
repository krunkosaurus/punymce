(function(punymce) {
	punymce.plugins.Textile = function(ed) {
		// Convert XML into textile
		ed.onGetContent.add(function(ed, o) {
			if (o.format == 'textile' || o.save) {
				// example: <strong>foo</strong> to *foo*
				punymce.each([
					[/<(br\s*\/)>/gi, "\n"],
					[/<(\/?)(strong|b)[^>]*>/gi, "*"],
					[/<(\/?)(em|i)[^>]*>/gi, "_"],
					[/<(\/?)u[^>]*>/gi, "+"],
					[/<p>/gi, ""],
					[/<\/p>/gi, "\n"],
					[/<span class="(.*)">/gi, "%($1)"],
					[/<\/span>/gi, "%"]
				], function (v) {
					o.content = o.content.replace(v[0], v[1]);
				});
			}
		});

		ed.onSetContent.add(function(ed, o) {
			if (o.format == 'textile' || o.load) {
				// example: *foo* to <strong>foo</strong>
				punymce.each([
					[/\n/gi,"<br />"],
					[/\*(.*)\*/gi,"<strong>$1</strong>"],
					[/_(.*)_/gi,"<em>$1</em>"],
					[/\+(.*)\+/gi,"<u>$1</u>"],
					[/%\((.*)\)(.*)%/gi, "<span class=\"$1\">$2</span>"]
				], function (v) {
					o.content = o.content.replace(v[0], v[1]);
				});
			}
		});
	};
})(punymce);
