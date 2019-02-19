import angular from 'angular';
import 'angular-ui-bootstrap';

import {AppService} from './app/services/AppService';
import {App} from './app/containers/App/App';
import {Landing} from './app/containers/Landing/Landing';
import {ChooseTemplate} from './app/containers/ChooseTemplate/ChooseTemplate';
import {PreviewTemplate} from './app/containers/PreviewTemplate/PreviewTemplate';
import 'angular-ui-router';
import routesConfig from './routes';

import './index.scss';

angular
  .module('app', ['ui.router', 'ui.bootstrap'])
  .config(routesConfig)
  .service('appService', AppService)
  .component('app', App)
  .component('landing', Landing)
  .component('chooseTemplate', ChooseTemplate)
  .component('previewTemplate', PreviewTemplate);
