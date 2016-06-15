describe('NewsSingleController', function() { 
    var $controller,
    	NewsSingleController,
        $stateParams,
    	scope;
 
    beforeEach(module('app')); 
    beforeEach(module('mock.factory'));

    beforeEach(inject(function ($rootScope, $controller, $httpBackend, _newsFactory_) {
        scope = $rootScope.$new();
        $stateParams = {id: '1'};

        NewsSingleController = $controller('NewsSingleController', {
            $scope: scope,
            newFactory: _newsFactory_,
            $stateParams: $stateParams
        });

        scope.$digest();

        NewsSingleController.viewFields = null;
        NewsSingleController.editField = null;      
    }));

    it('Should be loaded a single news data and set in view and edit fields', function() {
        
        NewsSingleController.id = 'testNewSingle';
        //spyOn(NewsSingleController, 'setNewsSingle').and.callThrough();
        NewsSingleController.setNewsSingle();

        scope.$digest();

        expect(NewsSingleController.viewFields.id).toBe('testNewSingle');
        expect(NewsSingleController.editFields.id).toBe('testNewSingle');
    });

    it('Should be set edit single news in true', function() {
        NewsSingleController.isEdit = false;

        NewsSingleController.editNewsSingle();

        expect(NewsSingleController.isEdit).toBe(true);
    });

    it('Should be set edit single news in false', function() {
        NewsSingleController.isEdit = true;

        NewsSingleController.viewNewsSingle();

        expect(NewsSingleController.isEdit).toBe(false);
    });

    it('Should be set view single news in true and copy view fields in edit fields', function() {
        NewsSingleController.isEdit = true;
        NewsSingleController.viewFields = {
            testField: 'testField'    
        };

        NewsSingleController.cancelEditNewsSingle();

        expect(NewsSingleController.isEdit).toBe(false);
        expect(NewsSingleController.editFields.testField).toEqual(NewsSingleController.viewFields.testField);
    });

    it('Should be loaded news single news data and set in view and edit fields', function() {
        
        NewsSingleController.id = 'testUpdate';
        NewsSingleController.editFields.header = 'headerBefore';
        NewsSingleController.isEdit = true;
        
        NewsSingleController.submitNewsSingle();

        scope.$digest();

        expect(NewsSingleController.editFields.header).not.toBe('headerBefore');
        expect(NewsSingleController.editFields).toEqual(NewsSingleController.viewFields);
        expect(NewsSingleController.isEdit).toBe(false);
    });

});