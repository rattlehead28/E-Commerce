angular.module('eCart').controller('adminCtrl',function($scope){

	$scope.submitData = function(){

		$scope.arr = JSON.stringify($scope.mob);
		localStorage.setItem('details',$scope.arr);
		// $scope.mob={''};
	}

})
