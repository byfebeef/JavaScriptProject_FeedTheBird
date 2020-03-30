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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/character.js":
/*!**************************!*\
  !*** ./src/character.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function character(options) {\n    this.pos = options.pos;\n    this.vel = options.vel;\n    this.radius = options.radius;\n    this.color = options.color;\n    this.game = options.game;\n}\n\n\n// character.prototype.draw(ctx)\n\ncharacter.prototype.draw = function (ctx) {\n    ctx.beginPath();\n    ctx.arc(...this.pos, this.radius, 0, 2 * Math.PI);\n    ctx.StrokeStyle = this.color;\n    ctx.lineWidth = 2;\n    ctx.stroke();\n\n    ctx.fillStyle = this.color;\n    ctx.fill();\n}\n\n// character.prototype.move = function () {\n//     console.log(this.pos);\n//     // debugger\n//     this.pos[0] += this.vel[0];\n//     this.pos[1] += this.vel[1];\n\n\n//     if (this.pos[1] < 0 || this.pos[1] > 900) {\n//         this.vel[1] = -this.vel[1];\n//     }\n\n//     if (this.pos[0] < 0 || this.pos[0] > 900) {\n//         this.vel[0] = -this.vel[0];\n//     }\n\n\n//     // this.pos = this.game.wrap(this.pos);\n// }\n\n// character.prototype.isCollidedWith = function (otherObject) {\n//     let x_1 = this.pos[0];\n//     let y_1 = this.pos[1];\n\n//     let x_2 = otherObject.pos[0];\n//     let y_2 = otherObject.pos[1];\n\n//     const distance = function Dist([x_1, y_1], [x_2, y_2]) {\n//         return sqrt((x_1 - x_2) ** 2 + (y_1 - y_2) ** 2);\n//     }\n\n//     let totalRadii = this.radius + otherObject.radius;\n\n\n//     if (totalRadii < distance()) {\n//         return true;\n//     } else {\n//         return false;\n//     }\n// }\n\n\n\nmodule.exports = character;\n\n//# sourceURL=webpack:///./src/character.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const character = __webpack_require__(/*! ./character */ \"./src/character.js\");\n\nwindow.character = character;\n\nwindow.addEventListener('DOMContentLoaded', (event) => {\n    const canvas = document.getElementById('game-canvas');\n    const ctx = canvas.getContext('2d');\n    x = new character({\n        pos: [30, 30],\n        vel: [10, 10],\n        radius: 10,\n        color: \"#FFDFFA\"\n    });\n\n    // document.body.style.backgroundColor = \"#414CBC \";\n\n    // let as = new Game();\n    // as.draw(ctx);\n\n\n    // let gameView = new GameView(ctx);\n    // gameView.start();\n\n\n\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });