describe('PricesCtrl', function() {
	beforeEach(module('chata-v-krpacove'));

	var scope,ctrl;

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    ctrl = $controller('PricesCtrl', {$scope: scope});
  }));

	it('should ...', inject(function() {
		expect(1).toEqual(1);
	}));
});
