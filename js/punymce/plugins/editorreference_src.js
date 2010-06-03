/* Saves reference to each Editor in punymce.editors */
(function(punymce) {
	punymce.plugins.EditorReference = function(ed) {
		if (!punymce.editors) punymce.editors = {};
		punymce.editors[ed.settings.id] = ed;
	};
})(punymce);
