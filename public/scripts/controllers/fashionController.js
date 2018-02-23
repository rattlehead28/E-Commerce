angular.module('eCart').controller('fashionCtrl',function($scope, $state, dataService){
$scope.val=[];
$scope.genderArray=['male','female'];
	dataService.fetchData().then(function(response){
		$scope.products = response;
		$scope.clothings = $scope.products.clothings;
		$scope.filteredClothes = $scope.clothings;
		console.log(response);
	})


// $scope.checkboxFilter = function(){
	
// 	$scope.filteredClothes=[];
	
// 	if($scope.val1=='male'){

// 		for(var i=0;i<$scope.clothings.length;i++){

// 			if($scope.clothings[i].gender=='male'){

// 				$scope.filteredClothes.push($scope.clothings[i]);
// 			}
// 		}

// 	}

// 	if($scope.val2=='female'){
		
// 		for(var i=0;i<$scope.clothings.length;i++){

// 			if($scope.clothings[i].gender=='female'){

// 				$scope.filteredClothes.push($scope.clothings[i]);
// 			}
// 		}
// 	}

	
// 	if($scope.filteredClothes==0){
// 		$scope.filteredClothes=$scope.clothings;
// 	}



// }

 $scope.minSlider = {
        value: 10
    };
$scope.minRangeSlider = {
        minValue: 10,
        maxValue: 2200,
        options: {
            floor: 0,
            ceil: 2500,
            step: 1
        }
    };


$scope.priceFilter = function(item){

	return(item.price>=$scope.minRangeSlider.minValue&&item.price<=$scope.minRangeSlider.maxValue)
}

$scope.descriptionRedirect = function(index){

	dataService.setId(index);
	console.log("index");
	$state.go('fashionDetails');
}


})



angular.module('eCart')
    .filter('genderFilter', function() {

        return function(filteredClothes, val) {
            
            return filteredClothes.filter(function(filteredClothes) {
                if (val[0] || val[1]) {

                    for (var i in filteredClothes) {
                        if (val.indexOf(filteredClothes.gender) != -1) {
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



