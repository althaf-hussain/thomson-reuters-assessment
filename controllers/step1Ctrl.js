/**
 * Created by Althaf on 3/28/2015.
 */
thomsonTest.controller('step1Ctrl',['$scope','$state','user', function($scope, $state, user) {
    $scope.user = user;
    $scope.dynamic = 0;

    $scope.onSubmit = function() {
        $state.go('main.step2');
    }

}]);