/**
* Created with Node Primer.
* User: bhalperin
* Date: 2014-05-02
* Time: 09:03 AM
* To change this template use Tools | Templates.
*/

/*global require*/
"use strict";

require.config({
	shim: {
		underscore: {
			exports: "_"
		},
		backbone: {
			deps: [
				"underscore",
				"jquery"
			],
			exports: "Backbone"
		},
		bootstrap: {
			deps: [
				"jquery"
			],
			exports: "jquery"
		}
	},
	paths: {
		// libraries
		jquery: "../bower_components/jquery/dist/jquery",
		backbone: "../bower_components/backbone/backbone",
		underscore: "../bower_components/underscore/underscore",
		bootstrap: "../bower_components/bootstrap/dist/js/bootstrap",
		modernizr: "../bower_components/modernizr/modernizr",
		hello: "../bower_components/hello/dist/hello.all",
		// app
		app: "../app",
		linkedin: "/scripts/linkedin",
		rest: "/scripts/rest",
		templates: "/scripts/templates/templates",
		// common
		baseView: "common/mvc/baseview",
		// models
		profileModel: "models/profile",
		contactsStatsModel: "models/contactsstats",
		contactsFilterItemModel: "models/contactsfilteritem",
		contactModel: "models/contact",
		// collections
		contactsCollection: "collections/contacts",
		contactsFilterCollection: "collections/contactsfilter",
		// views
		profileView: "views/profileview",
		contactsTitleView: "views/contactstitleview",
		contactsView: "views/contactsview",
		contactView: "views/contactview",
		contactsFilterView: "views/contactsfilterview",
		contactsFilterItemView: "views/contactsfilteritemview"
	}
});

require([
	"backbone", "jquery", "linkedin", "app", "rest", "hello"
], function (Backbone, $, linkedin, app, rest, hello) {
	Backbone.history.start();
	app.init();
	
	var linkedIn = $(".identity-panel");
	
	hello.init({ linkedin: linkedin.apiKey });
	linkedIn.attr("title", rest.getLinkedinAccessTokenUrl())
	.on("click", function() {
		var xhr = hello("linkedin").login({
			scope: "r_network, rw_nus"
		})
		.then(function() {
		},
		function(e) {
			alert(e.error.message);
		});
	});
});
