(function () {
    var app = angular.module('app');
    app.directive('updateTitle', ['$rootScope', '$timeout',
        function($rootScope, $timeout) {
            return {
                link: function(scope, element) {
                    var listener = function(event, toState) {
                        var title = 'Default Title';
                        
                        if (toState.title) { 
                            title = toState.title; 
                        }

                        $timeout(function() {
                            element.text(title);
                        }, 0, false);
                    };

                    $rootScope.$on('$stateChangeSuccess', listener);
                }     
            };
        }
    ]);
}());