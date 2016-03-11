angular.module('myApp.service.addSrv', [])
.service('addSrv', ['$http', function($http){
	this.addition = function(username, first_name, last_name, address){
		return $http({
			method: 'POST',
			url: 'http://127.0.0.1:8080/api/add_user',
			headers: {
				'Content-Type': 'application/json'
			},
			dataType: 'json',
			json: JSON.stringify({'username': username,
				'first_name': first_name,
				'last_name': last_name,
				'address': address})
		})
		.success(function(response){
			console.log(response);
			return response;
		})
		.error(function(response){
			return response;
		})
	}
}]);


// angular.module('myApp.service.addSrv', [])
// .service('addSrv', ['$http', function($http){
// 	this.addition = function(username, first_name, last_name, address){
// 		return $http({
// 			method: 'POST',
// 			url: 'http://127.0.0.1:8080/api/add_user',
// 			headers: {
// 				'Content-Type': 'application/json'
// 			},
// 			dataType: 'json',
// 			data: JSON.stringify({'username': username,
// 				'first_name': first_name,
// 				'last_name': last_name,
// 				'address': address})
// 		})
// 		.success(function(response){
// 			console.log(response);
// 			return response;
// 		})
// 		.error(function(response){
// 			return response;
// 		})
// 	}
// }]);