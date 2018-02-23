angular.module('eCart', ['ui.router','rzModule']).config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider

    .state('index',{
            url:'/',
            templateUrl: '../views/home.html',
            controller: 'homeCtrl'
            
        })

        .state('home', {

            url: '/home',
            templateUrl: '../../views/home.html',
            controller: 'homeCtrl'
        })

        

        .state('mobile', {

            url: '/mobiles',
            templateUrl: '../views/mobiles.html',
            controller: 'mobileCtrl'


        })

        .state('laptop', {

            url: '/laptops',
            templateUrl: '../../views/laptops.html'
        })

        .state('sports', {

            url: '/sports',
            templateUrl: '../../views/sports.html',
            controller: 'sportsCtrl'
        })

        .state('fashion', {

            url: '/fashion',
            templateUrl: '../../views/fashion.html',
            controller: 'fashionCtrl'
        })

        .state('mobileDetails', {

            url: '/mobilesDescription',
            templateUrl: '../../views/mobileDetails.view.html',
            controller: 'mobileDetailsCtrl'

        })

        .state('fashionDetails',{

            url: '/fashionDescription',
            templateUrl: '../../views/fashionDetails.view.html',
            controller:'fashionDetailsCtrl'

        })

        .state('sportsDetails',{

            url: '/sportsDescription',
            templateUrl: '../../views/sportsDetails.view.html',
            controller: 'sportsDetailsCtrl'

        })

        .state('cart',{

            url: '/cart',
            templateUrl: '../../views/cart.view.html',
            controller: 'cartCtrl'
        })

});


