/**
* Created with Node Primer.
* User: bhalperin
* Date: 2014-05-02
* Time: 10:55 AM
* To change this template use Tools | Templates.
*/
define([
	"backbone"
], function(Backbone) {
	"use strict";

	BH.Models = BH.Models || {};

	var Contact = Backbone.Model.extend({
		defaults: {
			firstName: "",
			lastName: "",
			name: "",
			title: ""
		}
	});

	return Contact;
});