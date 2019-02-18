import angular from 'angular';

import {TodoService} from './app/todos/todos';
import {App} from './app/containers/App/App';
import {Landing} from './app/containers/Landing/Landing';
import {Header} from './app/components/Header/Header';
import {MainSection} from './app/components/MainSection/MainSection';
import {TodoTextInput} from './app/components/TodoTextInput/TodoTextInput';
import {TodoItem} from './app/components/TodoItem/TodoItem';
import {Footer} from './app/components/Footer/Footer';
import 'angular-ui-router';
import routesConfig from './routes';

import './index.scss';

angular
  .module('app', ['ui.router'])
  .config(routesConfig)
  .service('todoService', TodoService)
  .component('app', App)
  .component('landing', Landing)
  .component('headerComponent', Header)
  .component('footerComponent', Footer)
  .component('mainSection', MainSection)
  .component('todoTextInput', TodoTextInput)
  .component('todoItem', TodoItem);
