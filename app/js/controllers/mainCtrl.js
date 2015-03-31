/**
 * Created by Althaf on 3/28/2015.
 */
thomsonTest.controller('mainController',['$scope','$state','$location',function($scope, $state, $location){
    $scope.tabs = [
        { heading: 'Step 1', route:'main.step1', active:true, disabled:false},
        { heading: 'Step 2', route:'main.step2', active:false, disabled:true},
        { heading: 'Step 3', route:'main.step3', active:false, disabled:true},
        { heading: 'Step 4', route:'main.step4', active:false, disabled:true }
    ];

    $state.go('main.step1');

    $scope.$watch(function(){return $location.path()},function(path) {

    });

    //TODO:implement the procedural logic to functional.
    $scope.$on('$stateChangeSuccess', function(event) {
        $scope.tabs.forEach(function(tab) {
            tab.active =($state.current.name === tab.route);
            if(tab.active) {
                tab.disabled = false;
            } else {
                tab.disabled = true;
            }
        });
        $scope.tabs.forEach(function(tab) {
            if(!tab.disabled) {
               event.preventDefault();
            }

        });
    });
}]);
