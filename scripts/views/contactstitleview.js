/**
* Created with Node Primer.
* User: bhalperin
* Date: 2014-05-17
* Time: 06:37 PM
* To change this template use Tools | Templates.
*/
define([
	"backbone", "jquery", "baseView"
], function(Backbone, $, BaseView) {
	"use strict";

	var ContactsTitleView = BaseView.extend({
		el: ".contacts-title",
		templateId: "contactsTitleTemplate"
	});

	return ContactsTitleView;
});