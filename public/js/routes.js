(function() {
    var app = angular.module('app');
    app
       .config(function($stateProvider, $urlRouterProvider ) {
            
            $urlRouterProvider.otherwise('/main');
            $stateProvider
                .state('main', {
                    url: '/main',
                    templateUrl: 'html/main.html'
                })
                .state('newsAll', {
                    url: '/news',
                    templateUrl: 'html/news/news-all-page.html'    
                })
                .state('newsSingle', {
                    url: '/news/:id',
                    templateUrl: 'html/news/news-single-page.html'
                });
        });

})();

