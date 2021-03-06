define(['jquery', 'vendor/jquery.ajaxCache'], function ($) {
	var API_KEY = '17b8e2ab0fd555ec614c32896a017a91';

	/**
	 * Call flickr api
	 * @param {String} method
	 * @param {Object} data
	 * @returns {$.Deferred}
	 */
	$.flickr = function (method, data) {
		return $.ajax({
			url: '//api.flickr.com/services/rest/?jsonFlickrApi=?',
			cache: $.ajaxCache('flickr'),
			timeout: 10000,
			data: $.extend({
				api_key: API_KEY,
				format: 'json',
				method: method
			}, data),
			dataType: 'jsonp',
			jsonpCallback: 'jsonFlickrApi'
		});
	};
});


