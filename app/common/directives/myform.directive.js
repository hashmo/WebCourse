(function () {
    'use strict';

    /* JAVASCRIPT */

    /**
     * Myform Object/function
     */
    function Myform () {

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
                schema: '=',
                form: '=',
                modelForm: '='
            },
            templateUrl: 'common/directives/myform.directive.html',
            link: _link
        };

        return directive;

    }

    /* ANGULAR */
    angular
        .module('common')
        .directive('myform', Myform );

})();
