angular.module('ap.routes', [])
	.config(function($stateProvider) {
		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'src/components/home/home.html',
				controller: 'HomeCtrl'
			});
	});
