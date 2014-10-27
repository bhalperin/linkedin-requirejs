/**
* Created with Node Primer.
* User: bhalperin
* Date: 2014-05-16
* Time: 12:38 PM
* To change this template use Tools | Templates.
*/
define([
	"backbone", "jquery", "baseView"
], function(Backbone, $, BaseView) {
	"use strict";

	var ProfileView = BaseView.extend({
		el: ".me",
		templateId: "profileTemplate"
	});

	return ProfileView;
});