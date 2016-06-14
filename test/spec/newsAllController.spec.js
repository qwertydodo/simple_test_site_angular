describe('NewsAllController', function() { 
    var $controller,
    	NewsAllController,
    	scope;
 
    beforeEach(module('app')); 
    beforeEach(module('mock.factory'));

    beforeEach(inject(function ($rootScope, $controller, $httpBackend, _newsFactory_) {
        scope = $rootScope.$new();

        NewsAllController = $controller('NewsAllController', {
            $scope: scope,
            newFactory: _newsFactory_
        });
        
        scope.$digest();

        NewsAllController.rows = [];
    }));

    it('Should get a string', function() {  //write tests
        expect(NewsAllController.getStrFactory()).toBe('1'); //pass
    }); 

    it('Should be loaded news in model 1 (in promise)', function(done) {  //write tests
        NewsAllController.setNewsAll().then(function(){
            expect(NewsAllController.rows.length).not.toBe(0);
            done();
        }); 

        scope.$digest();  
    });


    it('Should be loaded news in model 2 (out of promise)', function() {  //write tests     
        //spyOn(NewsAllController, 'setNewsAll').and.callThrough();
        NewsAllController.setNewsAll();
        scope.$digest();
        expect(NewsAllController.rows.length).not.toBe(0);
    });

    it('Should be loaded news in model after filtering or ordering', function() {  //write tests  
        //spyOn(NewsAllController, 'setNewsAll').and.callThrough();
        NewsAllController.dataManager = {
            filter: 'testDataManager',
            order: 'testDataManager'
        };

        NewsAllController.manageData();
        
        scope.$digest();
        
        expect(NewsAllController.rows[0].id).toBe('testDataManager');
    });
});