/**
 * Created by Althaf on 3/28/2015.
 */
thomsonTest.controller('step4Ctrl',['$scope','user','moment', function($scope, user, moment) {
    $scope.user = user;
    $scope.dynamic = 100;
    $scope.otherLocations = [];

    //TODO:Replace this with filter function
    user.locations.forEach(function (location) {
        if(location !== user.location) {
            $scope.otherLocations.push(location);
        }
    });

    $scope.travelDuration = function() {
        //Calculating the difference between start time and end time.
        var sub = +moment().hour(0).minute(0).second(0).millisecond(0);
        var startDay = +moment(user.departDate);
        var endDay = +moment(user.returnDate);

        var startTime = +moment(user.departTime);
        var endTime = +moment(user.returnTime);

        var startDatetime = (startDay + startTime) - (sub);
        var endDateTime = (endDay + endTime) - (sub);

        $scope.totalHours = moment(endDateTime).diff(startDatetime,'hours');
    };

    $scope.travelDuration();


}]);