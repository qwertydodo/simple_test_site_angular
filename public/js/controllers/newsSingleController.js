/**
  @namespace controllers
  @memberof app
*/
(function() {
	var app = angular.module('app');

	/**
	 *Controller for single news on page

	 *@class
	 *@memberof app.controllers
	 
	 *@param {Object} newsFactory Http service for news
     *@param {Object} $stateParams Current page state parameters
     
     *@property {Number}  this.id The id of the news. Get from $stateParams.id
     *@property {Array}   this.viewFields News fields for displaying
     *@property {Array}   this.editField News fields for editing
     *@property {Boolean} this.isEdit Current state of the news: edit or view
     *@property {Array}   this.categoryOpts Options for category select
	*/
	var NewsSingleController = function (newsFactory, $stateParams) {
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

		/**
         *Gets news data from server and bind to variables
         *@memberof app.controllers.NewsSingleController
         *@method setNewsSingle
         *@inner 
        */
		news.setNewsSingle = function() {
			return newsFactory
					.getNews({id: news.id})
					.then(function(res) {
						news.viewFields = angular.copy(res.data.rows[0]);
						news.editFields = angular.copy(res.data.rows[0]);
					})
					.catch(function() {});
		};

		/**
         *Displays edit page
         *@memberof app.controllers.NewsSingleController
         *@method editNewsSingle
         *@inner 
        */
		news.editNewsSingle = function() {
			news.isEdit = true;
		};

		news.viewNewsSingle = function() {
			news.isEdit = false;
		};

		/**
         *Back to view page after editing
         *@memberof app.controllers.NewsSingleController
         *@method cancelEditNewsSingle
         *@inner 
        */
		news.cancelEditNewsSingle = function() {
			news.viewNewsSingle();
			news.editFields = angular.copy( news.viewFields );
		};

		/**
         *Submits news after editing
         *@memberof app.controllers.NewsSingleController
         *@method submitNewsSingle
         *@inner 
        */
		news.submitNewsSingle = function() {
			newsFactory
				.updateNews(news.editFields)
				.then(news.setNewsSingle)
				.then(function() {
					news.viewNewsSingle();
				})
				.catch(function() {});
		};

		news.setNewsSingle();
	};

	app.controller('NewsSingleController', NewsSingleController); 
})();


  