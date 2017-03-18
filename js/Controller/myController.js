//Creating a new module "CtrlModule"

var mc = angular.module("CtrlModule", ['SvcModule']);

mc.controller("MyController", function($scope, MyService){
    $scope.headerText = "Student Database";
    $scope.getStudentData = MyService.getStudentData();
    
    console.log("JSON valuescheck")
    {
        $scope.checkVal = MyService.getStudentData();
    }
})
