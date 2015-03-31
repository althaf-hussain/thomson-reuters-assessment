/**
 * Created by Althaf on 3/30/2015.
 */
thomsonTest.directive('trProgressBar', function() {
    return {
        templateUrl: "app/partials/templates/tr.progress.bar.html",
        restrict: "E",
        scope: {
            dynamic: '='
        }
    }
});