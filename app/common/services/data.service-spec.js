(function () {
    'use strict';

    describe('data', function () {

        var service;

        beforeEach(function () {
            module('common');

            inject(function ( data ) {
                service = data ;
            });
        });

        it('should ...', function () {

            //TODO: Implement your service spec logic here
            //expect(service.doSomething()).toEqual('something');

        });

    });

})();
