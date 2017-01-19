import { assert } from 'chai';

import ToDo from './todo.service.js';

let service;

describe('ToDo service', function() {

    beforeEach(function() {
        let initialList = ['some', 'todos'];
        service = new ToDo(initialList);
    });

    it('should contain initial todos', function() {
        assert(service.list, ['some', 'todos']);
    });

    it('should add line', function () {
        service.addLine('New Line');
        assert.deepEqual(service.list, ['some', 'todos', 'New Line']);
    });

    it('should not add line if it is already present on list', function () {
        assert.deepEqual(service.list, ['some', 'todos']);
        service.addLine('some');
        assert.deepEqual(service.list, ['some', 'todos']);
    });

});