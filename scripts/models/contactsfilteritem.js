/**
* Created with Node Primer.
* User: bhalperin
* Date: 2014-05-23
* Time: 06:30 AM
* To change this template use Tools | Templates.
*/
define([
	"backbone"
], function(Backbone) {
	"use strict";

	BH.Models = BH.Models || {};

	var ContactsFilterItem = Backbone.Model.extend({
		defaults: {
			name: "",
			count: 0
		}
	});

	return ContactsFilterItem;
});