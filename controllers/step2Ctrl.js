/**
 * Created by Althaf on 3/28/2015.
 */
thomsonTest.controller('step2Ctrl',['$scope','user','$state', function($scope, user, $state) {

    $scope.user = user;
    $scope.user.departTime = new Date();
    $scope.user.returnTime = new Date();
    $scope.ismeridianDepart = true;
    $scope.ismeridianReturn = true;

    $scope.hstep = 1;
    $scope.mstep = 1;

    $scope.dynamic = 33;

    $scope.onSubmitStep2 = function() {
        $state.go('main.step3');
    };

    $scope.departDay = function() {
        $scope.minDepartDate = new Date();
    };

    $scope.departDay();

    $scope.returnDay = function() {
        $scope.minReturnDate = new Date($scope.user.departDate);
    };

    $scope.returnDay();

    $scope.openDepartDate = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.departOpened = true;
    };

    $scope.openReturnDate = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.minReturnDate = new Date($scope.user.departDate);
        $scope.returnOpened = true;
    };

    $scope.dateOptions = {
        formatYear: 'yy',
        startingDay: 1,
        showWeeks:false
    };

    $scope.formats = ['MMMM d,y','dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];


}]);