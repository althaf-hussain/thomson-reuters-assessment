/**
 * Created by Althaf on 3/28/2015.
 */
thomsonTest.controller('step3Ctrl',['$scope','user','$state', function($scope,user, $state) {
    $scope.user = user;
    $scope.dynamic = 66;

    $scope.onSubmitStep3 = function() {
        $state.go('main.step4');
    }
}]);