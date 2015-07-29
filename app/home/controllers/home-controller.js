(function () {
    'use strict';

    /* JAVASCRIPT */

    /**
     * HomeController Object/function
     */
    function HomeController(homeService) {

        // vm (view-model) is the object we bind to (this controller).
        var vm = this;
        
        vm.model = { 
            data: 
    [{first: 'Matan', last: 'Hashmonay' },
     {first: 'Hadar', last: 'Yaari' }]};
        
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
