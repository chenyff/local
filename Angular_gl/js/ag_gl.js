var app = angular.module('agGL',[]);
app.controller('angularGL',function($scope,$http){
	$http.get('server/ajaxUserList.php').success(function(response){
		if(response.success){
			$scope.users = response.data;
		}
	})
})