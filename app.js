var thomsonTest = angular.module('thomsonTest', ['ui.router','ui.bootstrap','ui.bootstrap.tpls','angularMoment']);

thomsonTest.config(function($stateProvider, $urlRouterProvider, $locationProvider){

    $stateProvider
        .state('main', {
            url: "/",
            templateUrl: "partials/main.html"
        })
        .state('main.step1', {
            url: "/step1",
            templateUrl: "partials/main.step1.html"
        })
        .state('main.step2', {
            url: '/step2',
            templateUrl: 'partials/main.step2.html'
        })
        .state('main.step3', {
            url: '/step3',
            templateUrl: 'partials/main.step3.html'
        })
        .state('main.step4', {
            url: '/step4',
            templateUrl: 'partials/main.step4.html'
        });

    $urlRouterProvider.otherwise("/");

    $locationProvider.html5Mode(true);

});


  