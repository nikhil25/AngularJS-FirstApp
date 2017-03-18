var ms = angular.module("SvcModule", ['FactModule']);

ms.service("MyService", function(MyFactory){
    this.getStudentData = function()
    {
        return MyFactory.getStudentData();
    }
})