(function () {
    'use strict';

    /* JAVASCRIPT */

    /**
     * HomeController Object/function
     */
    function HomeController(homeService, logger, data, toastr) {
        
        logger.log('Home controller - Loaded');
        
        data.getData('/data/data.json')
            .then( function(data) {
                vm.model.data = data;
        })
            .catch( function(data) {
                toastr.error('Could not get data');
               logger.log('Error!!!'); 
        });
        
        // vm (view-model) is the object we bind to (this controller).
        var vm = this;
        
        vm.model = { 
            data: []
    };
        
          vm.schema = {
    type: "object",
    properties: {
      name: { type: "string", minLength: 2, title: "Name", description: "Name or alias" },
      title: {
        type: "string",
        enum: ['dr','jr','sir','mrs','mr','NaN','dj']
      }
    }
  };

  vm.form = [
    "*",
    {
      type: "submit",
      title: "Save"
    }
  ];

  vm.modelForm = {};
        
        /***************** PRIVATE *******************/
        var _name = 'HomeController';

        /**
         * getName() - Private function
         */
        function _getName(val) {
            return _name;
        }

        /****************** PUBLIC *******************/
        vm.getName = _getName;
        vm.service = homeService;

    }

    angular
        .module('home')
        .controller('homeController', HomeController);

})();
