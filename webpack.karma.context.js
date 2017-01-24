import angular from 'angular';
import mocks from 'angular-mocks';
import uicommons from 'openmrs-contrib-uicommons';

import * as main from './app/js/demoangularowa';

let context = require.context('./app', true, /\.spec\.js/);
context.keys().forEach(context);