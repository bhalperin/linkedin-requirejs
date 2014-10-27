/**
* Created with Node Primer.
* User: bhalperin
* Date: 2014-05-23
* Time: 06:27 AM
* To change this template use Tools | Templates.
*/
define([
	"backbone", "jquery", "baseView"
], function(Backbone, $, BaseView) {
	"use strict";

	var ContactsFilterItemView = BaseView.extend({
		templateId: "contactsFilterItemTemplate"
	});

	return ContactsFilterItemView;
});