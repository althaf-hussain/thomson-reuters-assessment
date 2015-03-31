var thomsonTest = angular.module('thomsonTest', ['ui.router','ui.bootstrap','ui.bootstrap.tpls','angularMoment']);

thomsonTest.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('main', {
            url: "/",
            templateUrl: "app/partials/main.html"
        })
        .state('main.step1', {
            url: "/step1",
            templateUrl: "app/partials/main.step1.html"
        })
        .state('main.step2', {
            url: '/step2',
            templateUrl: 'app/partials/main.step2.html'
        })
        .state('main.step3', {
            url: '/step3',
            templateUrl: 'app/partials/main.step3.html'
        })
        .state('main.step4', {
            url: '/step4',
            templateUrl: 'app/partials/main.step4.html'
        });

    $urlRouterProvider.otherwise("/");

});


  