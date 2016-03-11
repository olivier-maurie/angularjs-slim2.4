angular.module('myApp.controller.editCtrl', [])
.controller('editCtrl', function(){
	
});

// function EditCtrl($scope, $http, $location, $routeParams) {
//   var id = $routeParams.id;
//   $scope.activePath = null;

//   $http.get('api/users/'+id).success(function(data) {
//     $scope.users = data;
//   });

//   $scope.update = function(user){
//     $http.put('api/users/'+id, user).success(function(data) {
//       $scope.users = data;
//       $scope.activePath = $location.path('/');
//     });
//   };

//   $scope.delete = function(user) {
//     console.log(user);

//     var deleteUser = confirm('Are you absolutely sure you want to delete?');
//     if (deleteUser) {
//       $http.delete('api/users/'+user.id);
//       $scope.activePath = $location.path('/');
//     }
//   };
// }