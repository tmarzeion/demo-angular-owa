'use strict';

describe('ToDo service', function () {

    var service;

    beforeEach(angular.mock.module('main'));

    beforeEach(angular.mock.module(function ($provide) {
        $provide.constant('initialList', ['Some', 'Todos']);
    }));

    beforeEach(angular.mock.inject(function (_ToDo_) {
        service = _ToDo_;
    }));

    it('should contain initial todos', function() {
        expect(service.list).toEqual(['Some', 'Todos']);
    });

});
