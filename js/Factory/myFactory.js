var mf = angular.module("FactModule", [])
    var studentData;


mf.factory("MyFactory", function(){
    return{
        getStudentData : function() {
            studentData = [
                {"Id" : "1", "Name": "Nikhil", "Gender": "M", "Marks": "72"},
                {"Id" : "2", "Name": "Raksha", "Gender": "F", "Marks": "95"},
                {"Id" : "3", "Name": "Meghana","Gender": "F", "Marks": "86"},
                {"Id" : "4", "Name": "Jaikar", "Gender": "M", "Marks": "67"},
                {"Id" : "5", "Name": "Rahul",  "Gender": "M",  "Marks": "88"}
            ];
            return studentData;
        }
    }
})