/**
* Created with Node Primer.
* User: bhalperin
* Date: 2014-05-23
* Time: 10:54 AM
* To change this template use Tools | Templates.
*/
define([
	"backbone", "jquery", "templates"
], function(Backbone, $, Templates) {
	"use strict";

	var BaseView = Backbone.View.extend({
		//
		// return rendered model
		// 
		template: function(templateId) {
			templateId = templateId || this.templateId;		// use passed template or the view's default template
			
			if (templateId) {
				return Templates.render(templateId, this.model.toJSON());
			}
			
			return "";
		},
		render: function() {
			this.$el.html(this.template());
			
			return this;
		}
	});

	return BaseView;
});