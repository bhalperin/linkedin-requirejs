/**
* Created with Node Primer.
* User: bhalperin
* Date: 2014-05-02
* Time: 06:58 AM
* To change this template use Tools | Templates.
*/
define([
	"hello", "templates",
	"profileModel", "contactsStatsModel", "contactModel",
	"contactsCollection", "contactsFilterCollection",
	"profileView", "contactsTitleView", "contactsView", "contactsFilterView"
], function(hello, Templates,
			 Profile, ContactsStatsModel, Contact,
			 Contacts, ContactsFilterCollection,
			 ProfileView, ContactsTitleView, ContactsView, ContactsFilterView) {
	var myProfile = new Profile(),
		myContacts = new Contacts([
			new Contact({
				name: "Benny",
				title: "Web/Mobile Expert"
			}),
			new Contact({
				name: "Judy",
				title: "Owner @ JudyArt"
			}),
			new Contact({
				name: "Ori Halperin",
				title: "A Skilled Artist"
			})
		]),
		myProfileView,
		myContactsTitleView,
		myContactsView,
		filterView;
	
	function init() {
		Templates.init();

		hello.on("auth.login", function(auth) {
			hello(auth.network).api("/me").success(function(response) {
				myProfileView = new ProfileView({
					model: new Profile({
						name: response.formattedName,
						imageUrl: response.thumbnail
					})
				});
				renderProfile();
			});
			hello(auth.network).api("/me/friends", { limit: 100 }).success(function(response) {
				var contactsStatsData,
					contactsByIndustry,
					collectionData;
				
				contactsStatsData = new ContactsStatsModel({
					total: response._total,
					count: response._count
				});
				collectionData = _(response.data).map(function(o) {
					var profileUrl = o.siteStandardProfileRequest ? o.siteStandardProfileRequest.url : "";
					
					return {
						id: o.id,
						firstName: o.firstName,
						lastName: o.lastName,
						name: o.name,
						title: o.headline,
						industry: o.industry,
						pictureUrl: o.pictureUrl,
						profileUrl: profileUrl
					};
				});
				collectionData = _(collectionData).sortBy(function(o) {
					return (o.lastName + o.firstName).toLowerCase();
				});
				myContactsTitleView = new ContactsTitleView({
					model: contactsStatsData
				});
				myContactsView = new ContactsView({
					collection: new Contacts(collectionData)
				});
				contactsByIndustry = _(collectionData).groupBy(function(o) {
					return o.industry;
				});
				contactsByIndustry = _(contactsByIndustry).map(function(industry, i) {
					return {
						name: i,
						count: industry.length,
						contacts: _(industry).map(function(contact) {
							return {
								id: contact.id
							};
						})
					}
				});
				contactsByIndustry = _(contactsByIndustry).sortBy(function(o) {
					return -o.count
				});
				filterView = new ContactsFilterView({
					collection: new ContactsFilterCollection(contactsByIndustry)
				});
				renderContacts();
			});
		});
	}
	
	function renderProfile() {
		myProfileView.render();
	}
	
	function renderContacts() {
		myContactsTitleView.render();
		myContactsView.render();
		filterView.render();
	}
	
	return {
		contactView: myContactsView,
		init: init
	};
});