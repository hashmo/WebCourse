(function () {
    'use strict';

    // CREATE module
    angular
        .module('auth', []);


    // Module's CONFIG

    angular
        .module('auth')
        .config(function ($stateProvider) {

            $stateProvider.state('auth', {
                url: '/auth',
                templateUrl: 'auth/templates/auth.template.html'
            });
            /* Add New States Above */

        });

})();
