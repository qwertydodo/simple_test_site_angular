(function() {
	var app = angular.module('app');
	
    function newsFactory($http, config) {
        var URL = config.URL_SERVER + '/news/';
        
        return {
            getNews: function(data) {
                data = data || {};
                return $http({
                            url: URL + (data.id ? data.id : ''),
                            method: 'GET',
                            params: data.params
                        });
            },
            updateNews: function(data) {
                var url = config.URL_SERVER + '/news/';

                return $http({
                            url: URL + (data.id ? data.id : ''),
                            method: 'POST',
                            data: data
                        });
            }
        };
    }

	app.factory('newsFactory', newsFactory);

})();