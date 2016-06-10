describe('newsFactory', function() { 
    var testFactory,
        newsFactory,
        $httpBackend,
        config; 
    
    beforeEach(module('app'));
    beforeEach(function() {
        inject(function($injector) {
            //$injector.get('ui.router');
            testFactory = $injector.get('testFactory');
            newsFactory = $injector.get('newsFactory');

            $httpBackend = $injector.get('$httpBackend');
            $rootScope = $injector.get('$rootScope');
        }); 
    });

    /*beforeEach(module('test'));
    beforeEach(inject(function (_$httpBackend_, _testFactory_) {
        testFactory = _testFactory_;
        $httpBackend = _$httpBackend_;
    }));*/




    /*it('Should get a string', function() {  //write tests
        expect(testFactory.getStr()).toBe('1'); //pass
    }); */

    it('Should get a string', function() {  //write tests
        expect(newsFactory.getStr()).toBe('1'); //pass
    }); 
});  