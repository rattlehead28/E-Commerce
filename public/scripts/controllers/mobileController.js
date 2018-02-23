angular.module('eCart').controller('mobileCtrl', function($scope, $state, dataService) {
    $scope.val = [];
    $scope.mobileBrands = ['samsung', 'apple', 'htc'];

    dataService.fetchData().then(function(response) {
        $scope.products = response;
        $scope.mobiles = $scope.products.mobiles;
        $scope.filteredMobiles = $scope.products.mobiles;
        console.log(response);
    })
   

    $scope.minSlider = {
        value: 10
    };
    $scope.minRangeSlider = {
        minValue: 5000,
        maxValue: 68000,
        options: {
            floor: 0,
            ceil: 70000,
            step: 1
        }
    };



    $scope.descriptionRedirect = function(index) {

        dataService.setId(index);
        console.log("index");
        $state.go('mobileDetails');
    }

    $scope.priceFilter = function(item) {

        return (item.price >= $scope.minRangeSlider.minValue && item.price <= $scope.minRangeSlider.maxValue)
    }
})


// $scope.checkboxFilter = function() {

//     return (
//         for (var i = 0; i < $scope.val.length; i++) {
//             $scope.val[i]
//         }

//         );

// }

angular.module('eCart')
    .filter('brandFilter', function() {

        return function(filteredMobiles, val) {
            
            return filteredMobiles.filter(function(filteredMobiles) {
                if (val[0] || val[1] || val[2]) {

                    for (var i in filteredMobiles) {
                        if (val.indexOf(filteredMobiles.brand) != -1) {
                            return true;
                        }

                    }
                    return false;
                } else {
                    return true;
                }

            });
        };
    })