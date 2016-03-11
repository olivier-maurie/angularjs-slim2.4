angular.module('myApp.controller.addCtrl', [])
.controller('addCtrl', function($scope, addSrv){
	$scope.username = "";
	$scope.first_name = "";
	$scope.last_name = "";
	$scope.address = "";
	console.log('ok');
	$scope.add_new = function(response){
		console.log('ok');
		addSrv.addition($scope.username, $scope.first_name, $scope.last_name, $scope.address)
		.then(function(response){
			console.log($scope.username);
			console.log('ok');
		})
	}
});