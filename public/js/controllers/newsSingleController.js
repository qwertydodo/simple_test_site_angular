(function() {
	var app = angular.module('app');

	var NewsSingleController = function(newsFactory, $stateParams) {
		var news = this;

		news.id = $stateParams.id;

		news.viewFields = null;
		news.editField = null;
		news.isEdit = false;
		news.categoryOpts = [
			{ name: 'Sport', id: 'sport'},
			{ name: 'Social', id: 'social'},
			{ name: 'Music', id: 'music'}
		];

		news.setNewsSingle = function() {
			newsFactory
				.getNews({id: news.id})
				.success(function(data) {
					news.viewFields = angular.copy(data.rows[0]);
					news.editFields = angular.copy(data.rows[0]);
				})
				.error(function() {});
		};

		news.editNewsSingle = function(item) {
			news.isEdit = true;
		};

		news.cancelEditNewsSingle = function() {
			news.isEdit = false;
			news.editFields = angular.copy( news.viewFields );
		};

		news.submitNewsSingle = function() {
			newsFactory
				.updateNews(news.editFields)
				.success(function() {
					news.isEdit = false;
					news.setNewsSingle();
				})
				.error(function() {});
		};

		news.setNewsSingle();
	};

	app.controller('NewsSingleController', NewsSingleController); 
})();


  