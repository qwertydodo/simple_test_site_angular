/**
  @namespace controllers
  @memberof app
*/
(function() {
	var app = angular.module('app');
	/**
	 *Controller for all news on page

	 *@class
	 *@memberof app.controllers
	 
	 *@param {Object} newsFactory Http service for news
     
     *@property {Array}   this.rows All displaying news
     *@property {Object}  this.dataManager Filter and sorting parameters
	*/
	var NewsAllController = function(newsFactory) {
		var news = this;

		news.rows = [];
		news.dataManager = {
			filter: 'none',
			order: 'none'
		};

		/**
         *Displays all news on page
         *@memberof app.controllers.NewsAllController
         *@method setNewsAll
         *@inner 
         *@param {Object} ajaxParams Parameters for ajax requests to server
        */
		news.setNewsAll = function(ajaxParams) {
			newsFactory
				.getNews(ajaxParams)
				.success(function(data) {
					news.rows = data.rows;
				})
				.error(function() {});
		};

		/**
         *On change event on filter/sorting select. Displays filtered and ordered data
         *@memberof app.controllers.NewsAllController
         *@method manageData
         *@inner 
        */
		news.manageData = function() {
			news.setNewsAll({params: news.dataManager});
		};

		news.setNewsAll();
	};

	app.controller('NewsAllController', NewsAllController); 
})();


