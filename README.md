# Angular UI Block
[![npm version](https://img.shields.io/npm/v/angular-ui-block.svg?style=flat-square)](https://www.npmjs.com/package/angular-ui-block) [![npm downloads](https://img.shields.io/npm/dt/angular-ui-block.svg?style=flat-square)](https://www.npmjs.com/package/angular-ui-block)

Angular UI Block Module

## Installation

```bash
# Using npm
$ npm install angular-ui-block --save

# Using Yarn
$ yarn add angular-ui-block

# Using Bower
$ bower install angular-ui-block --save
```
Include the package using common js `require()` or ES2015 `import`:
```javascript
var angularUiBlock = require('angular-ui-block');

// ES2015+
import angular from 'angular';
import angularUiBlock from 'angular-ui-block';
```
Or, using `<script>` tag:
```html
<script type="text/javascript" src="/path/to/angular-ui-block/dist/angular-ui-block.min.js"></script>
```
Now add the module as a dependency to your app module:
```javascript
angular.module('app', [angularUiBlock]);
// Or
angular.module('app', ['angularUiBlock']);
```

## Styles
Also, you need to include the css if you want to use the default style.
```html
<link rel="stylesheet" href="bower_components/angular-ui-block/dist/angular-ui-block.css"/>
```
Or, if you prefer to have your own custom style then just write your own like this:
```html
<style>
    .ui-block-wrapper .ui-block-overlay {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 20;
        background: rgba(255, 255, 255, 0.5);
    }

    .ui-block-wrapper .ui-block-spinner {
        top: calc(50% - 40px);
        left: 0;
        right: 0;
        z-index: 21;
        position: absolute;
        text-align: center;
    }
</style>
```
