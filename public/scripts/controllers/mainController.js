angular.module('eCart').controller('mainCtrl',function($scope,$state,dataService){

	dataService.fetchData();

});
