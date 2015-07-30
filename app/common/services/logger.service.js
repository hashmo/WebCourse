(function () {
    'use strict';

    /* JAVASCRIPT */

    /**
     * Logger Object/function
     */
    function Logger ($log) {

        /***************** PRIVATE *******************/

        //always bind to an object.property
        var _model = {
            data: null
        };

        /**
         * doSomething() - Private function
         */
        function _log(msg) {
            // add logic here...
            $log.log(msg);
        }

        /****************** PUBLIC *******************/
        var service = {
            log: _log
        };

        return service;

    }

    /* ANGULAR */
    angular
        .module('common')
        .factory('logger', Logger );

})();
