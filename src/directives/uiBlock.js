import angular from 'angular';

uiBlock.$inject = ['$compile'];

export default function uiBlock($compile) {
    return {
        scope: {
            uiBlock: '=',
        },
        restrict: 'A',
        link(scope, element) {
            var overlay = getOverlay();
            var spinner = getSpinner();
            var wrapper = getWrapper([overlay, spinner]);

            scope.overlayStyle = getOverlayStyle();
            scope.spinnerStyle = getSpinnerStyle();

            element.css('position', 'relative');

            if (element.find('.ui-block-wrapper').length === 0) {
                element.append($compile(wrapper)(scope));
            }
        }
    };
}

function getOverlayStyle() {
    return {
        'position': 'absolute',
        'top': '0',
        'right': '0',
        'bottom': '0',
        'left': '0',
        'z-index': '20',
        'background': 'rgba(255, 255, 255, 0.5)'
    };
}

function getSpinnerStyle() {
    return {
        'top': 'calc(50% - 40px)',
        'left': '0',
        'right': '0',
        'z-index': '21',
        'position': 'absolute',
        'text-align': 'center'
    };
}

function getWrapper(elements) {
    var wrapper = angular.element('<div/>').attr({
        'class': 'ui-block-wrapper',
        'ng-show': 'uiBlock'
    });

    elements.forEach(element => wrapper.append(element));

    return wrapper;
}

function getOverlay() {
    return angular.element('<div/>').attr({
        'class': 'ui-block-overlay',
        'ng-style': 'overlayStyle'
    });
}

function getSpinner() {
    return angular.element('<div><spinner></spinner></div>').attr({
        'class': 'ui-block-spinner',
        'ng-style': 'spinnerStyle'
    });
}
