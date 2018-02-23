angular.module('eCart').controller('mobileDetailsCtrl', function($scope, $state, dataService) {
    $scope.mobileDesc = {};
    $scope.mobileObj={};
    if (localStorage.getItem('productId')) {
        $scope.id = localStorage.getItem('productId');
    } else {
        $scope.id = dataService.getId();
    }
    console.log($scope.id);
    dataService.fetchData().then(function(response) {
        $scope.products = response;
        $scope.mobiles = $scope.products.mobiles;
        console.log($scope.mobiles);
        for (var i = 0; i < $scope.mobiles.length; i++) {

            if ($scope.id == $scope.mobiles[i].id) {

                $scope.mobileDesc = $scope.mobiles[i];
            } else {
                console.log("error")
            }
        }

        console.log($scope.mobileDesc.image[0]);
        $scope.mainImage=$scope.mobileDesc.image[0];


    })

$scope.changeSource = function(source){

	$scope.mainImage = source;
}

$scope.cartRedirect = function(id){
    $scope.mobileObj = {"count":1,"category":"mobiles"};
	dataService.setCartData(id,$scope.mobileObj);
    dataService.setId(id);
	$state.go('cart');

}


})