/**
* Created with Node Primer.
* User: bhalperin
* Date: 2014-05-02
* Time: 11:20 AM
* To change this template use Tools | Templates.
*/
define([
	"backbone", "contactModel"
], function(Backbone, Contact) {
	"use strict";

	var Contacts = Backbone.Collection.extend({
		initialize: function () {
			this.model = Contact;
		}
	});

	return Contacts;
});