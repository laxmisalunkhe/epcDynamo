import angular from 'angular';

import {AppService} from './app/services/AppService';
import {App} from './app/containers/App/App';
import {Landing} from './app/containers/Landing/Landing';
import 'angular-ui-router';
import routesConfig from './routes';

import './index.scss';

angular
  .module('app', ['ui.router'])
  .config(routesConfig)
  .service('appService', AppService)
  .component('app', App)
  .component('landing', Landing);
