/**
* Created with Node Primer.
* User: bhalperin
* Date: 2014-05-02
* Time: 12:36 PM
* To change this template use Tools | Templates.
*/
define([
	"linkedin"
], function(linkedin) {
	"use strict";

	function getTemplatesUrl() {
		return "/scripts/templates/templates.html"
	}
	
	function getLinkedinAccessTokenUrl() {
		return "https://www.linkedin.com/uas/oauth2/authorization?response_type=code" +
			"&client_id=" + linkedin.apiKey + "&state=BENNY" + "&redirect_uri=https://pompey-spring.codio.io/index.html";
	}
	
	return (function() {
		return {
			getTemplatesUrl: getTemplatesUrl,
			getLinkedinAccessTokenUrl: getLinkedinAccessTokenUrl
		}
	})();
});