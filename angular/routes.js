//var myApp = angular.module('blogApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/',{
            // location of the template
        	templateUrl		: 'views/index-view.html',
        	// Which controller it should use
            controller 		: 'mainController',
            // what is the alias of that controller.
        	controllerAs 	: 'myMatch'//'myMatch'
        })
        .when('/season2',{
            // location of the template
        	templateUrl		: 'views/season2.html',
        	// Which controller it should use
            controller 		: 'mainController2',
            // what is the alias of that controller.
        	controllerAs 	: 'myMatch2'//'myMatch'
        })
        .when('/match-view/:season/:date/:code1/:code2',{
            // location of the template
        	templateUrl		: 'views/match-view.html',
        	// Which controller it should use
            controller 		: 'singleMatchViewController',
            // what is the alias of that controller.
        	controllerAs 	: 'singleMatch'//'myMatch'
        })
        .when('/matchStats/:season',{
          // location of the template
        	templateUrl		: 'views/matchStats.html',
        	// Which controller it should use
          controller 		: 'totalMatchStats',
          // what is the alias of that controller.
        	controllerAs 	: 'stats'//'myMatch'
        })
        .otherwise(
            {
                //redirectTo:'/'
                template   : '<h1>404 page not found</h1>'
            }
        );
}]);
