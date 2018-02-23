angular.module('eCart').controller('sportsCtrl', function($scope, $state, dataService) {
    $scope.val = [];
    $scope.sportsArray = ['cricket', 'football', 'tennis'];
    dataService.fetchData().then(function(response) {
        $scope.products = response;
        $scope.sports = $scope.products.sports;
        $scope.filteredSports = $scope.products.sports;
        console.log(response);
    })

    $scope.descriptionRedirect = function(index) {

        dataService.setId(index);
        console.log("index");
        $state.go('sportsDetails');
    }


    $scope.minSlider = {
        value: 10
    };
    $scope.minRangeSlider = {
        minValue: 10,
        maxValue: 2800,
        options: {
            floor: 0,
            ceil: 3000,
            step: 1
        }
    };


    $scope.priceFilter = function(item) {

        return (item.price >= $scope.minRangeSlider.minValue && item.price <= $scope.minRangeSlider.maxValue)
    }

})

// angular.module('eCart')
// .filter('sportsFilter', function() {

//     return function(filteredSports, val) {
//         if(val.length==0||(val[0]==false||val[1]==false||val[2]==false)){
//             return filteredSports;
//         }
//         return filteredSports.filter(function(filteredSports) {
//             for (var i in filteredSports) {
//                 if (val.indexOf(filteredSports.sport) != -1) {
//                     return true;
//                 }
//             }
//             return false;

//         });
//     };
// })

angular.module('eCart')
    .filter('sportsFilter', function() {

        return function(filteredSports, val) {

            return filteredSports.filter(function(filteredSports) {
                if (val[0] || val[1] || val[2]) {

                    for (var i in filteredSports) {
                        if (val.indexOf(filteredSports.sport) != -1) {
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