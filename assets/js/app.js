angular.module('myApp', [
  'ngRoute',
  'myApp.controller.listCtrl',
  'myApp.controller.editCtrl',
  'myApp.controller.addCtrl',
  'myApp.service.addSrv'
  ])
.run(['$rootScope', '$route', function($rootScope, $route){
  $rootScope.$on('$routeChangeSuccess', function(){
    document.title = $route.current.title;
  });
}])
.config(['$routeProvider', '$httpProvider',
  function($routeProvider, $httpProvider) {
    $routeProvider
    .when('/', {
      title : 'List',
      templateUrl : 'assets/tpl/lists.html',
      controller : 'listCtrl'
    })
    .when('/edit/:id',{
      title : 'Edit',
      templateUrl : 'assets/tpl/edit.html',
      controller : 'editCtrl'
    })
    .when('/add_user',{
      title : 'Add new',
      templateUrl : 'assets/tpl/add_new.html',
      controller : 'addCtrl'
    })
    .when('/debug',{
      title : 'Debug',
      templateUrl : 'assets/tpl/log.html'
    })
    .otherwise({
      redirectTo: '/'
    })

  $httpProvider.defaults.withCredentials = false;
}]);

/*angular.module('CrudApp', []).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/', {templateUrl: 'assets/tpl/lists.html', controller: ListCtrl}).
      when('/add-user', {templateUrl: 'assets/tpl/add-new.html', controller: AddCtrl}).
      when('/edit/:id', {templateUrl: 'assets/tpl/edit.html', controller: EditCtrl}).
      otherwise({redirectTo: '/'});
}]);





function EditCtrl($scope, $http, $location, $routeParams) {
  var id = $routeParams.id;
  $scope.activePath = null;

  $http.get('api/users/'+id).success(function(data) {
    $scope.users = data;
  });

  $scope.update = function(user){
    $http.put('api/users/'+id, user).success(function(data) {
      $scope.users = data;
      $scope.activePath = $location.path('/');
    });
  };

  $scope.delete = function(user) {
    console.log(user);

    var deleteUser = confirm('Are you absolutely sure you want to delete?');
    if (deleteUser) {
      $http.delete('api/users/'+user.id);
      $scope.activePath = $location.path('/');
    }
  };
}*/