$(document).ready(function() {
	var windowLocation = window.location;
	const languages = {
		french: 'fr',
		japanese: 'ja-jp',
		portugese: 'pt',
		english: 'en',
	}


	const japaneseLink = 'https://publisher.qordoba.com/project/4460?pageUrl=https%3A%2F%2Fwww.nutanix.jp%2F&langCode=ja-jp';

	for (let property in languages) {
		console.log('property', property);
		let link = 'https://publisher.qordoba.com/project/4460?pageUrl=https%3A%2F%2Fwww.nutanix.jp%2F&langCode=' + languages[property];
		$.get(link, function(data) {
			console.log('data', link);
		})
			.done(function() {
				$('#lang').append("<li><a href='" + link + "'>" + property + "</a></li>");
			})
			.fail(function() {
				console.log('error');
			})
	}


});