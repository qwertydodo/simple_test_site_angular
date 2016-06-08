(function() {
	var app = angular.module('app');

	var NewsAllController = function(newsFactory) {
		var news = this;

		news.rows = [];
		news.dataManager = {
			filter: 'none',
			order: 'none'
		};

		news.setNewsAll = function(ajaxParams) {
			newsFactory
				.getNews(ajaxParams)
				.success(function(data) {
					news.rows = data.rows;
				})
				.error(function() {});
		};

		news.manageData = function() {
			news.setNewsAll({params: news.dataManager});
		};

		news.setNewsAll();
	};

	app.controller('NewsAllController', NewsAllController); 
})();


