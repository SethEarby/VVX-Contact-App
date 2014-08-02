var app = angular.module('ContactController', []);
app.controller("MainController", function ($scope) {
    $scope.num = 3; //I started with 3 because I had issues with some VVX series not wanting to display attendant.2 for some reason
    $scope.users = [];
    $scope.addContact = function () {
        $scope.users.push({
            Ext: $scope.Ext,
            name: $scope.name,
            num: $scope.num,
            context: $scope.context
            //This pushes all the data into an array to be sent to the <pre> tag for format
        });
        $scope.num++; //Increment the attendant number.
        $scope.Ext = ""; //Clear fields
        $scope.name = "";
    }
    //This function simply clears the context if the user needs to add a separate sip group
    $scope.clearContext = function ()
    {
        $scope.context ="";
    }
});

