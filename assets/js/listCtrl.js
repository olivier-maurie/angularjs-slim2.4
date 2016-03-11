angular.module('myApp.controller.listCtrl', [])
.controller('listCtrl', function($scope, $http){
	$http.get('http://127.0.0.1:8080/api/users')
	.then(function(response) {
		$scope.users = response.data;
	});
});
