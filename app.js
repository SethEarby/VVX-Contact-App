var app = angular.module('ContactController', []);
app.controller("MainController", function ($scope) {
    $scope.num = 3;
    $scope.users = [];
    $scope.addContact = function () {
        $scope.users.push({
            Ext: $scope.Ext,
            name: $scope.name,
            num: $scope.num,
            context: $scope.context
        });
        $scope.num++;
        $scope.Ext = "";
        $scope.name = "";
        console.log($scope.num);
        console.log($scope.name);
    }
    $scope.clearContext = function ()
    {
        $scope.context ="";
        console.log('potato');
    }
//TODO: Add selectThis function for container;

});

