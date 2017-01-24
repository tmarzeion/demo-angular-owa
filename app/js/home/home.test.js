import * as sinon from 'sinon';
import { assert } from 'chai';

import HomeController from './home.controller.js';
import ToDo from './todo-service/todo.service.js'

let component;
let mockToDo;

describe('HomeComponent with mocked service', function() {

    beforeEach(function() {
        let initialList = [];
        let listServiceInstance = new ToDo(initialList);
        mockToDo = sinon.mock(listServiceInstance);
        component = new HomeController(listServiceInstance);
    });

    /*
    * Counter functionality tests which doesn't require service to work
    */
    it('should have default greeting message', function () {
        assert.equal(component.hello, "Hello! :)");
    });

    /*
     * List functionality test which requires service to work
     */
    it('should add line', function () {
        mockToDo
            .expects('addLine')
            .once()
            .withArgs('line1');

        component.newLine = 'line1';
        component.addLine();

        mockToDo.verify();
    });

});