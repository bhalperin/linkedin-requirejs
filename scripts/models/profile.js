/**
* Created with Node Primer.
* User: bhalperin
* Date: 2014-05-16
* Time: 12:30 PM
* To change this template use Tools | Templates.
*/
define([
	"backbone"
], function(Backbone) {
	"use strict";

	BH.Models = BH.Models || {};

	var Profile = Backbone.Model.extend({
		defaults: {
			name: "",
			title: "",
			imageUrl: ""
		}
	});

	return Profile;
});