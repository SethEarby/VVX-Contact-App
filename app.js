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
        $scope.context = "";
        console.log($scope.num);
        console.log($scope.name);
    }
});

