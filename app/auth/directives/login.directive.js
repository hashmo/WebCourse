(function () {
    'use strict';

    /* JAVASCRIPT */

    /**
     * Login Object/function
     */
    function Login () {

        /***************** PRIVATE *******************/

        /**
         * Directives link function
         */
        function _link(scope, iElem, iAttrs, controllers) {
            // add logic here
        }

        /****************** PUBLIC *******************/
        var directive = {
            restrict: 'E',
            replace: true,
            scope: {

            },
            templateUrl: 'auth/directives/login.directive.html',
            link: _link
        };

        return directive;

    }

    /* ANGULAR */
    angular
        .module('auth')
        .directive('login', Login );

})();
