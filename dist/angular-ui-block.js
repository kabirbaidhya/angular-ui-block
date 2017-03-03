/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! ./lib/index.js */ 1).default;


/***/ },
/* 1 */
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _angular = __webpack_require__(/*! angular */ 2);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _uiBlock = __webpack_require__(/*! ./directives/uiBlock */ 3);
	
	var _uiBlock2 = _interopRequireDefault(_uiBlock);
	
	var _spinner = __webpack_require__(/*! ./directives/spinner/spinner */ 4);
	
	var _spinner2 = _interopRequireDefault(_spinner);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _module = _angular2.default.module('angularUiBlock', []);
	
	_module.directive('spinner', _spinner2.default).directive('uiBlock', _uiBlock2.default);
	
	exports.default = _module.name;

/***/ },
/* 2 */
/*!**************************!*\
  !*** external "angular" ***!
  \**************************/
/***/ function(module, exports) {

	module.exports = angular;

/***/ },
/* 3 */
/*!***********************************!*\
  !*** ./lib/directives/uiBlock.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = uiBlock;
	
	var _angular = __webpack_require__(/*! angular */ 2);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	uiBlock.$inject = ['$compile'];
	
	function uiBlock($compile) {
	    return {
	        scope: {
	            uiBlock: '='
	        },
	        restrict: 'A',
	        link: function link(scope, element) {
	            var overlay = getOverlay();
	            var spinner = getSpinner();
	            var wrapper = getWrapper([overlay, spinner]);
	
	            var UI_BLOCKING_CLASS = 'ui-blocking';
	
	            scope.overlayStyle = getOverlayStyle();
	            scope.spinnerStyle = getSpinnerStyle();
	
	            element.css('position', 'relative');
	
	            if (element.find('.ui-block-wrapper').length === 0) {
	                element.append($compile(wrapper)(scope));
	            }
	
	            scope.$watch('uiBlock', function () {
	                if (scope.uiBlock) {
	                    element.scrollTop(0); // Scroll to top while blocking the UI
	                    element.addClass(UI_BLOCKING_CLASS);
	                } else {
	                    element.removeClass(UI_BLOCKING_CLASS);
	                }
	            });
	        }
	    };
	}
	
	function getOverlayStyle() {
	    return {};
	}
	
	function getSpinnerStyle() {
	    return {};
	}
	
	function getWrapper(elements) {
	    var wrapper = _angular2.default.element('<div/>').attr({
	        'class': 'ui-block-wrapper',
	        'ng-show': 'uiBlock'
	    });
	
	    elements.forEach(function (element) {
	        return wrapper.append(element);
	    });
	
	    return wrapper;
	}
	
	function getOverlay() {
	    return _angular2.default.element('<div/>').attr({
	        'class': 'ui-block-overlay',
	        'ng-style': 'overlayStyle'
	    });
	}
	
	function getSpinner() {
	    return _angular2.default.element('<div><spinner></spinner></div>').attr({
	        'class': 'ui-block-spinner',
	        'ng-style': 'spinnerStyle'
	    });
	}

/***/ },
/* 4 */
/*!*******************************************!*\
  !*** ./lib/directives/spinner/spinner.js ***!
  \*******************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = spinner;
	function spinner() {
	    return {
	        scope: {},
	        restrict: 'E',
	        template: '\n            <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="40px" height="40px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">\n                <path fill="#43A1E2" d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z" transform="rotate(150.989 25 25)">\n                    <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.9s" repeatCount="indefinite"></animateTransform>\n                </path>\n            </svg>\n        '
	    };
	}

/***/ }
/******/ ]);
//# sourceMappingURL=angular-ui-block.js.map