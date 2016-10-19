import angular from 'angular';
import uiBlock from './directives/uiBlock';
import spinner from './directives/spinner/spinner';

let module = angular.module('angularUiBlock', []);

module
    .directive('spinner', spinner)
    .directive('uiBlock', uiBlock);

export default module.name;
