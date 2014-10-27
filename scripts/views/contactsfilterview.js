/**
* Created with Node Primer.
* User: bhalperin
* Date: 2014-05-23
* Time: 06:55 AM
* To change this template use Tools | Templates.
*/
define([
	"bootstrap", "backbone", "underscore", "jquery", "baseView", "contactsFilterItemView"
], function(Bootstrap, Backbone, _, $, BaseView, ContactsFilterItemView) {
	"use strict";

	var ContactsFilterView = BaseView.extend({
		el: ".industries",
		render: function() {
			var _this = this,
				$el = $("<div>");
			
			_(this.collection.models).each(function(model) {
				var view = new ContactsFilterItemView({
					model: model
				});
				
				view.$el.data("contacts", model.get("contacts"));
				$el.append(view.render().$el);
			});

			_this.$el.append($el);
		}
	});

	return ContactsFilterView;
});