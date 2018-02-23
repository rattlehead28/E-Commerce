angular.module('eCart').controller('homeCtrl',function($scope, $state, $window, dataService){

	dataService.fetchData().then(function(response){

		$scope.products = response;
		console.log($scope.products);
	})

	$scope.loopArray = [0,4,8,12];
	$scope.loopArraySports = [0,4];
	
	$scope.descriptionRedirectMobiles = function(index){

	dataService.setId(index);
	console.log("index");
	$state.go('mobileDetails');
}

$scope.descriptionRedirectFashion = function(index){

	dataService.setId(index);
	console.log("index");
	$state.go('fashionDetails');
}
$scope.descriptionRedirectSports = function(index){

	dataService.setId(index);
	console.log("index");
	$state.go('sportsDetails');
}

$scope.includeDesktopTemplate = false;
$scope.includeMobileTemplate = false; 
var screenWidth = $window.innerWidth;

if (screenWidth >992){
	console.log("desktop")
    $scope.includeDesktopTemplate = true;
}else{
	console.log("ipad")
    $scope.includeDesktopTemplate = false;
}

})