(function () {
    var app = angular.module('app');
    function testFactory() {
        return {
            getStr: function () {
                return '2';
            } 
        };
    }

    app.factory('testFactory', testFactory);
}());

(function () {
    var app = angular.module('app');
    function testFactory1() {
        return {
            getStr: function () {
                return '1';
            } 
        };
    }

    app.factory('testFactory1', testFactory1);
}());