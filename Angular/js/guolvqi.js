var app = angular.module('myApp',[]);
app.controller('namesCtrl',function($scope){
		$scope.list = [
			{name:'aaa',age:'linfen'},
			{name:'bbb',age:'taiyuan'},
			{name:'ccc',age:'pingyao'}
		];
});