import { assert } from 'chai';

import HomeController from './home.controller.js';
import ToDO from './todo-service/todo.service.js';

let component;

describe('HomeComponent with real service', function() {

    beforeEach(function() {
        let initialList = [];
        let listService = new ToDO(initialList);
        component = new HomeController(listService);
    });

    it('should contain reference to service\'s list', function () {
        assert.equal(component.list.length, 0);
    });

    it('should add line to list', function () {
        component.newLine = 'line1';
        component.addLine();
        assert.equal(component.newLine, '');
        assert.equal(component.list.length, 1);
        assert.equal(component.list[0], 'line1');
    });

    it('should not add line if it is already present on list', function () {
        component.newLine = 'line1';
        component.addLine();

        component.newLine = 'line2';
        component.addLine();

        component.newLine = 'line3';
        component.addLine();

        assert.equal(component.list.length, 3);

        component.newLine = 'line1';
        component.addLine();

        assert.equal(component.list.length, 3);
    });

});