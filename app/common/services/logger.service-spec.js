(function () {
    'use strict';

    describe('logger', function () {

        var service;

        beforeEach(function () {
            module('common');

            inject(function ( logger ) {
                service = logger ;
            });
        });

        it('should ...', function () {

            //TODO: Implement your service spec logic here
            //expect(service.doSomething()).toEqual('something');

        });

    });

})();
