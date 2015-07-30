(function () {
    'use strict';

    /* JAVASCRIPT */

    /**
     * Data Object/function
     */
    function Data ($http, $q) {

        /***************** PRIVATE *******************/

        //always bind to an object.property
        var _model = {
            data: null
        };

        /**
         * doSomething() - Private function
         */
        function _getData(url) {
            
            var defer = $q.defer();
            
            var req = {
                method: 'GET',
                url: url,
                headers: {
                    'Content-Type': undefined
                },
                data: { test: 'test' }
            };
            
            $http(req)
                .success(function(data, status, headers, config) {
                var d = data;
                defer.resolve(data);
                })
                .error(function(data, status, headers, config) {
                var d = data;
                defer.reject(data);
            });
            
            return defer.promise;
            
        }

        /****************** PUBLIC *******************/
        var service = {
            getData: _getData
            
        };

        return service;

    }

    /* ANGULAR */
    angular
        .module('common')
        .factory('data', Data );

})();
