/**
* Created with Node Primer.
* User: bhalperin
* Date: 2014-05-17
* Time: 06:32 PM
* To change this template use Tools | Templates.
*/
define([
	"backbone"
], function(Backbone) {
	"use strict";

	BH.Models = BH.Models || {};

	var ContactsStats = Backbone.Model.extend({
		defaults: {
			total: 0,
			count: 0
		}
	});

	return ContactsStats;
});