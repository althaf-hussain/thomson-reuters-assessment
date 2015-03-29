(function (module) {

    var user = function () {
        return {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            location: "",
            departDate: "",
            returnDate: "",
            departTime: "",
            returnTime: "",
            locations : ["Philadelphia","Hoboken","Hyderabad","Newyork","Shanghai"]
        };
    };

    module.factory("user", user);

}(angular.module("thomsonTest")));
