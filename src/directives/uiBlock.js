import angular from 'angular';

uiBlock.$inject = ['$compile'];

export default function uiBlock($compile) {
    return {
        scope: {
            uiBlock: '=',
        },
        restrict: 'A',
        link(scope, element) {
            let overlay = getOverlay();
            let spinner = getSpinner();
            let wrapper = getWrapper([overlay, spinner]);

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
    return {};
}

function getSpinnerStyle() {
    return {};
}

function getWrapper(elements) {
    let wrapper = angular.element('<div/>').attr({
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
