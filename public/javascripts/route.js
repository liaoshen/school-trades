angular.module('myRoute',['ngRoute'])
    .config(['$routeProvider',function($routeProvider){
      $routeProvider
          .when('/',{
              templateUrl:'../bin/index',
              controller:'indexController'
          })
          .when('/login',{
              templateUrl:'../bin/login',
              controller:'loginController'
          })
          .when('/register',{
              templateUrl:'../bin/register',
              controller:'registerController'
          })
          .when('/logout',{
              templateUrl:'../bin/logout',
              controller:'logoutController'
          })
          .otherwise({
              redirectTo:'/'
          });
}])