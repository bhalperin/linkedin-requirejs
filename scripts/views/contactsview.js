/**
* Created with Node Primer.
* User: bhalperin
* Date: 2014-05-02
* Time: 11:26 AM
* To change this template use Tools | Templates.
*/
define([
	"bootstrap", "backbone", "underscore", "jquery", "baseView", "contactView"
], function(Bootstrap, Backbone, _, $, BaseView, ContactView) {
	"use strict";

	var ContactsView = BaseView.extend({
		el: ".contact-list",
		render: function() {
			var _this = this;
			
			_(this.collection.models).each(function(model) {
				var view = new ContactView({
					model: model
				});
				
				view.render().$el.appendTo(_this.$el);
			});
			
			this.$el.find(".profile-link").tooltip();
		}
	});

	return ContactsView;
});