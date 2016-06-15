(function() {
    var app = angular.module('app');
    app
       .config(function($stateProvider, $urlRouterProvider ) {
            
            $urlRouterProvider.otherwise('/main');
            $stateProvider
                .state('main', {
                    url: '/main',
                    templateUrl: 'html/main.html',
                    title: 'Main'
                })
                .state('newsAll', {
                    url: '/news',
                    templateUrl: 'html/news/news-all-page.html',
                    title: 'News'    
                })
                .state('newsSingle', {
                    url: '/news/:id',
                    templateUrl: 'html/news/news-single-page.html',
                    title: 'Single News'
                });
        });

})();

