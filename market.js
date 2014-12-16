var myApp=angular.module("default",[]);
myApp.controller("ctrl1",function($scope){
	$scope.shoes1=true;
	$scope.shoes=function(){
		$scope.shoes1=!$scope.shoes1;
	};
});