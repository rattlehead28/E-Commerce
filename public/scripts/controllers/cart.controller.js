angular.module('eCart').controller('cartCtrl', function($scope, dataService) {
    $scope.cartProducts = [];
    // $scope.cartProductId = dataService.getCartData();
    console.log($scope.cartProductId);
    var products = [];

    $scope.totalCount = 0;
    // $scope.productId = dataService.getId();
    console.log($scope.productId);

    console.log('cartProductId', $scope.cartProductId);
    // dataService.setCartData($scope.id);

    $scope.getData = function() {
        dataService.fetchData().then(function(response) {

            products = response;
            $scope.displayProducts();
            // $scope.categoryProducts = $scope.products[$scope.cartProductId[$scope.productId].category];

        });
    }

    $scope.displayProducts = function() {
        $scope.cartProducts = [];
        $scope.totalCount = 0;
        $scope.total = 0;
        console.log('all', products)
        $scope.cartProductId = dataService.getCartData();
        console.log('updated', $scope.cartProductId)
        $scope.productId = dataService.getId();
        console.log('cartProductId', $scope.cartProductId);
        // $scope.categoryProducts = products[$scope.cartProductId[$scope.productId].category];
        // console.log($scope.categoryProducts);
        console.log('cartProductId', $scope.cartProductId);
        // for (let i in $scope.cartProductId) {
        // 	// console.log('products categories',products[$scope.cartProductId[i].category][0])
        // 	console.log('id',i)
        //     if ($scope.cartProductId[i] in products[$scope.cartProductId[i].category]) {
        //     	console.log('products categories',products[$scope.cartProductId[i].category])
        //         $scope.cartProducts.push("hey");
        //     }
        // }

        for (let i in $scope.cartProductId) {
            // console.log('products categories',products[$scope.cartProductId[i].category][0])
            console.log('id', i)

            for (let j = 0; j < products[$scope.cartProductId[i].category].length; j++) {
                if (i == products[$scope.cartProductId[i].category][j].id) {

                    console.log('products categories', products[$scope.cartProductId[i].category])
                    $scope.cartProducts.push(products[$scope.cartProductId[i].category][j]);
                }
            }
        }





        console.log('$scope.cartProducts', $scope.cartProducts);

        for (let i = 0; i < $scope.cartProducts.length; i++) {
        	console.log("total",$scope.cartProductId[$scope.cartProducts[i].id].count)
            $scope.total += ($scope.cartProducts[i].price)*($scope.cartProductId[$scope.cartProducts[i].id].count);
            console.log("total price",$scope.total)
        }
        
        for (let i in $scope.cartProductId) {

            $scope.totalCount += $scope.cartProductId[i].count;
        }

        

        console.log("updated cart data", $scope.cartProducts);
    }

    $scope.increaseCount = function(id) {

        console.log(id)
        $scope.cartProductId[id].count = $scope.cartProductId[id].count + 1;
        localStorage.setItem('cart', JSON.stringify($scope.cartProductId));

        $scope.displayProducts();


    }

    $scope.decreaseCount = function(id) {

        console.log(id)
        $scope.cartProductId[id].count = $scope.cartProductId[id].count - 1;

        if ($scope.cartProductId[id].count < 1) {

            delete $scope.cartProductId[id];

        }

        localStorage.setItem('cart', JSON.stringify($scope.cartProductId));

        $scope.displayProducts();


    }

    $scope.removeItem = function(id) {
        console.log(id);
        delete $scope.cartProductId[id];
        localStorage.setItem('cart', JSON.stringify($scope.cartProductId));

        $scope.displayProducts();
    }

    // });




})