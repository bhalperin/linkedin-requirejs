/**
* Created with Node Primer.
* User: bhalperin
* Date: 2014-05-02
* Time: 12:28 PM
* To change this template use Tools | Templates.
*/
define([
	"underscore", "rest"
], function(_, Rest) {
	"use strict";

	var $root,
		compiledTemplates = {};

	// configure underscore template engine
	function configureTemplateEngine() {
		_.templateSettings = {
			interpolate: /\$\{(.+?)\}/g,
			evaluate: /\{\{(.+?)\}\}/g,
			variable: "data"
		};
	}

	function loadAllTemplates(data) {
		$root.append(data);
	}

	function renderTemplate(id, data) {
		var compiled;

		if (compiledTemplates[id]) {
			compiled = compiledTemplates[id];
		}
		else {
			var $template = $root.find("#" + id);

			compiled = compiledTemplates[id] = _.template($template.html());
		}

		return compiled(data);
	}

	function init(callback) {
		$root = $("<div class='templates-root'>");

		$.get(Rest.getTemplatesUrl()).done(function(data) {
			loadAllTemplates(data.replace(/\s{2,}/g, " "));
			
			if (callback) {
				callback();
			}
		});

		configureTemplateEngine();
	}

	function getRoot() {
		return $root;
	}

	return {
		init: init,
		getRoot: getRoot,
		render: renderTemplate
	};
});