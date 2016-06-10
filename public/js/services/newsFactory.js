/**
  @namespace services
  @memberof app
*/
(function () {
    'use strict';

    var app = angular.module('app');

    /**
     *Service for getting news data drom server by ajax requests
     *@class
     *@memberof app.services

     *@param {Object} $http Http service for ajax requests
     *@param {Object} appConfig Config of application
    */
    function newsFactory($http, appConfig) {
        var URL = appConfig.URL_SERVER + '/news/';
        return {
            /**
              *Gets news from server by parameters
              *@memberof app.services.newsFactory
              *@method getNews
              *@inner 
              *@param {Object} data Parameters for ajax request to server
            */
            getNews: function (data) {
                data = data || {};
                return $http({
                            url: URL + (data.id || ''),
                            method: 'GET',
                            params: data.params
                        });
            },
            /**
              *Update news on server by parameters
              *@memberof app.services.newsFactory
              *@method updateNews
              *@inner 
              *@param {Object} data Parameters for ajax request to server
            */
            updateNews: function (data) {
                return $http({
                            url: URL + (data.id || ''),
                            method: 'POST',
                            data: data
                        });
            },
            getStr: function () {
                return '1';
            } 
        };
    }

    app.factory('newsFactory', newsFactory);

}());