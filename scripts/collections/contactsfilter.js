/**
* Created with Node Primer.
* User: bhalperin
* Date: 2014-05-23
* Time: 06:46 AM
* To change this template use Tools | Templates.
*/
define([
	"backbone", "contactsFilterItemModel"
], function(Backbone, ContactsFilterItem) {
	"use strict";

	var ContactsFilter = Backbone.Collection.extend({
		initialize: function () {
			this.model = ContactsFilterItem;
		}
	});

	return ContactsFilter;
});