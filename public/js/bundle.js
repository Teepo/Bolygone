var App =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Bolygone = exports.Bolygone = function () {
    function Bolygone(x, y) {
        _classCallCheck(this, Bolygone);

        this.canvas = document.querySelector('canvas');
        this.ctx = this.canvas.getContext('2d');

        this.clear();

        this.x = x;
        this.y = y;

        this.ctx.translate(this.canvas.width / 2, this.canvas.height / 2);
        this.ctx.rotate(-Math.PI / 2);
        this.ctx.translate(-this.canvas.width / 2, -this.canvas.height / 2);

        this.radius = this.canvas.width / 2 - 20;

        this.drawCircle();
        this.drawCirclePoint();
        this.drawLine();
    }

    _createClass(Bolygone, [{
        key: 'clear',
        value: function clear() {

            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.ctx.setTransform(1, 0, 0, 1, 0, 0);
        }
    }, {
        key: 'drawCircle',
        value: function drawCircle() {

            this.ctx.beginPath();
            this.ctx.arc(this.canvas.width / 2, this.canvas.width / 2, this.radius, 0, Math.PI * 2, true);

            this.ctx.stroke();
        }
    }, {
        key: 'drawCirclePoint',
        value: function drawCirclePoint() {

            var _x = 0;
            var _y = 0;
            var angle = 0;

            for (var i = 0; i < this.x; i++) {
                angle = -(360 / this.x * i);

                _x = this.canvas.width / 2 + this.radius * Math.cos(-angle * Math.PI / 180);
                _y = this.canvas.width / 2 + this.radius * Math.sin(-angle * Math.PI / 180);

                this.ctx.beginPath();
                this.ctx.arc(_x, _y, 4, 0, Math.PI * 2, true);
                this.ctx.fill();

                //this.ctx.fillText(i, x + 10, y);
            }
        }
    }, {
        key: 'drawLine',
        value: function drawLine() {

            var rayon = Math.min(this.canvas.width, this.canvas.height) / 2.15;

            this.ctx.lineWidth = 2;
            this.ctx.beginPath();

            for (var i = 0; i < this.x; i++) {
                this.ctx.moveTo(this.canvas.width / 2 + rayon * Math.cos(2 * i * (1 / this.x) * Math.PI), this.canvas.height / 2 + rayon * Math.sin(2 * i * (1 / this.x) * Math.PI));

                this.ctx.lineTo(this.canvas.width / 2 + rayon * Math.cos(2 * i * this.y * (1 / this.x) * Math.PI), this.canvas.height / 2 + rayon * Math.sin(2 * i * this.y * (1 / this.x) * Math.PI));
            }

            this.ctx.stroke();
        }
    }]);

    return Bolygone;
}();

/***/ })
/******/ ]);