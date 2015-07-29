(function () {
    'use strict';

    angular.module('home', []);

    angular
        .module('home')
        .config(function ($stateProvider) {

            $stateProvider.state('shell.home', {
                url: '/home',
                views: {
                    'contentView': {
                        templateUrl: 'home/templates/home-template.html',
                        controller: 'homeController',
                        controllerAs: 'vm'
                    }
                }

            });
            $stateProvider.state('home2', {
            url: '/home2',
            templateUrl: 'home/templates/home2.html'
		});
            /* Add New States Above */

        });

})();
