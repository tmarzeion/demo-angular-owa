import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component.js';
import ToDo from './todo-service/todo.service';

import { DEFAULT_LIST } from './home.constants.js';

let homeModule = angular.module('home', [ uiRouter, 'openmrs-contrib-uicommons'])
    .config(($stateProvider, $urlRouterProvider) => {
        "ngInject";
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('home', {
            url: '/',
            template: "<home></home>"
        })
    })
    .service('ToDo', ToDo)
    .constant('initialList', DEFAULT_LIST)
    .component('home', homeComponent);

export default homeModule;