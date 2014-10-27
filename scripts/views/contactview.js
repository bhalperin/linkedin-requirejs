/**
* Created with Node Primer.
* User: bhalperin
* Date: 2014-05-02
* Time: 11:33 AM
* To change this template use Tools | Templates.
*/
define([
	"backbone", "jquery", "baseView"
], function(Backbone, $, BaseView) {
	"use strict";

	var ContactView = BaseView.extend({
		el: "<li>",
		templateId: "contactTemplate",
		render: function() {
			var thisModel = this.model.toJSON();
			
			this.$el
				.data("id", thisModel.id)
				.html(this.template());
			
			if (thisModel.pictureUrl) {
				this.$(".picture-panel").show();
			}
			
			return this;
		}
	});

	return ContactView;
});