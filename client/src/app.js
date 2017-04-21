angular.module('ap.components', [
	'ap.components.home'
]);

angular.module('ap.components.home', [
	'ap.components.home.controller'
]);

angular.module('AskPhil', ['ui.router', 'ap.routes', 'ap.components'])
	.config(function($urlRouterProvider, $locationProvider, $stateProvider) {
		$urlRouterProvider.otherwise(function($injector, $location) {
			var $state = $injector.get("$state");
			$state.go('home');
		});

		$locationProvider.html5Mode(true);

	});

