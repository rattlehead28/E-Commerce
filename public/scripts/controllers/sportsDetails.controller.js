angular.module('eCart').controller('sportsDetailsCtrl', function($scope, $state, dataService) {
    $scope.sportsDesc = {};
    $scope.sportsObj={};
    if (localStorage.getItem('productId')) {
        $scope.id = localStorage.getItem('productId');
    } else {
        $scope.id = dataService.getId();
    }
    console.log($scope.id);
    dataService.fetchData().then(function(response) {
        $scope.products = response;
        $scope.sports = $scope.products.sports;
        console.log($scope.sports);
        for (var i = 0; i < $scope.sports.length; i++) {

            if ($scope.id == $scope.sports[i].id) {

                $scope.sportsDesc = $scope.sports[i];
            } else {
                console.log("error")
            }
        }

        console.log($scope.sportsDesc.image[0]);
        $scope.mainImage=$scope.sportsDesc.image[0];


    })

$scope.changeSource = function(source){

	$scope.mainImage = source;
}

$scope.cartRedirect = function(id){
    $scope.sportsObj = {"count":1,"category":"sports"};
	dataService.setCartData(id,$scope.sportsObj);
    dataService.setId(id);
	$state.go('cart');

}


})