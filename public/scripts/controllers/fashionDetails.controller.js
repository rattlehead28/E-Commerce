angular.module('eCart').controller('fashionDetailsCtrl', function($scope, $state, dataService) {
    $scope.clothingsDesc = {};
    if (localStorage.getItem('productId')) {
        $scope.id = localStorage.getItem('productId');
    } else {
        $scope.id = dataService.getId();
    }
    console.log($scope.id);
    dataService.fetchData().then(function(response) {
        $scope.products = response;
        $scope.clothings = $scope.products.clothings;
        console.log($scope.clothings);
        for (var i = 0; i < $scope.clothings.length; i++) {

            if ($scope.id == $scope.clothings[i].id) {

                $scope.clothingsDesc = $scope.clothings[i];
            } else {
                console.log("error")
            }
        }

        console.log($scope.clothingsDesc);
        $scope.mainImage = $scope.clothingsDesc.image[0];

    })
$scope.changeSource = function(source){

    $scope.mainImage = source;
}

$scope.cartRedirect = function(id){
    $scope.fashionObj = {"count":1,"category":"clothings"};
    dataService.setCartData(id,$scope.fashionObj);
    dataService.setId(id);
    $state.go('cart');

}


})