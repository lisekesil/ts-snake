/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.scss":
/*!****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.scss ***!
  \****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  background-color: #2c2b31;\n  font-family: 'Press Start 2P', cursive; }\n\n#root {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  flex-direction: column; }\n\n#canvas {\n  border: 1px solid black; }\n\n#modal {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5); }\n\n.hide {\n  display: none; }\n\n.scoreContainer {\n  color: yellow;\n  padding: 10px;\n  display: flex;\n  justify-content: space-between; }\n\n.end {\n  width: 400px;\n  height: 300px;\n  background-color: black;\n  color: white;\n  border: 3px solid white;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center; }\n\n.againBtn {\n  background-color: transparent;\n  padding: 10px 20px;\n  font-family: inherit;\n  color: white;\n  border: 3px solid white;\n  cursor: pointer; }\n", "",{"version":3,"sources":["webpack://./src/main.scss"],"names":[],"mappings":"AAOA;EACG,yBAN2B;EAO3B,sCAAsC,EAAA;;AAGzC;EACG,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,aAAa;EACb,sBAAsB,EAAA;;AAGzB;EACG,uBAAuB,EAAA;;AAG1B;EACG,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,QAAQ;EACR,SAAS;EACT,oCAAoC,EAAA;;AAGvC;EACG,aAAa,EAAA;;AAGhB;EACG,aApC+B;EAqC/B,aAAa;EACb,aAAa;EACb,8BAA8B,EAAA;;AAGjC;EACG,YAAY;EACZ,aAAa;EACb,uBA5CiC;EA6CjC,YA5CyC;EA6CzC,uBA7CyC;EA+CzC,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,aAAa;EACb,sBAAsB;EACtB,6BAA6B;EAC7B,mBAAmB,EAAA;;AAGtB;EACG,6BAA6B;EAC7B,kBAAkB;EAClB,oBAAoB;EACpB,YA7DyC;EA8DzC,uBA9DyC;EA+DzC,eAAe,EAAA","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');\r\n\r\n$bg-color: rgba(44, 43, 49, 1);\r\n$score-color: rgba(255, 255, 0, 1);\r\n$endModal-bg-color: rgba(0, 0, 0, 1);\r\n$endModal-text-color: rgba(255, 255, 255, 1);\r\n\r\nbody {\r\n   background-color: $bg-color;\r\n   font-family: 'Press Start 2P', cursive;\r\n}\r\n\r\n#root {\r\n   position: absolute;\r\n   top: 50%;\r\n   left: 50%;\r\n   transform: translate(-50%, -50%);\r\n   display: flex;\r\n   flex-direction: column;\r\n}\r\n\r\n#canvas {\r\n   border: 1px solid black;\r\n}\r\n\r\n#modal {\r\n   position: absolute;\r\n   top: 0;\r\n   left: 0;\r\n   right: 0;\r\n   bottom: 0;\r\n   background-color: rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.hide {\r\n   display: none;\r\n}\r\n\r\n.scoreContainer {\r\n   color: $score-color;\r\n   padding: 10px;\r\n   display: flex;\r\n   justify-content: space-between;\r\n}\r\n\r\n.end {\r\n   width: 400px;\r\n   height: 300px;\r\n   background-color: $endModal-bg-color;\r\n   color: $endModal-text-color;\r\n   border: 3px solid $endModal-text-color;\r\n\r\n   position: absolute;\r\n   top: 50%;\r\n   left: 50%;\r\n   transform: translate(-50%, -50%);\r\n   display: flex;\r\n   flex-direction: column;\r\n   justify-content: space-evenly;\r\n   align-items: center;\r\n}\r\n\r\n.againBtn {\r\n   background-color: transparent;\r\n   padding: 10px 20px;\r\n   font-family: inherit;\r\n   color: $endModal-text-color;\r\n   border: 3px solid $endModal-text-color;\r\n   cursor: pointer;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/main.scss":
/*!***********************!*\
  !*** ./src/main.scss ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/ts/Game.ts":
/*!************************!*\
  !*** ./src/ts/Game.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Game = void 0;
const const_1 = __webpack_require__(/*! ./const */ "./src/ts/const.ts");
const localStorage_1 = __webpack_require__(/*! ./localStorage */ "./src/ts/localStorage.ts");
const Snake_1 = __webpack_require__(/*! ./Snake */ "./src/ts/Snake.ts");
const Square_1 = __webpack_require__(/*! ./Square */ "./src/ts/Square.ts");
class Game {
    constructor() {
        this.canvas = document.getElementById('canvas');
        this.canvas.width = const_1.GAME_WIDTH;
        this.canvas.height = const_1.GAME_HEIGHT;
        this.ctx = this.canvas.getContext('2d');
        this.scoreHTML = document.getElementById('score');
        this.endScoreHTML = document.getElementById('endScore');
        this.highscoreHTML = document.getElementById('highscore');
        this.modal = document.getElementById('modal');
        this.againBtn = document.getElementById('againBtn');
        this.againBtn.addEventListener('click', () => this.startGame());
        this.db = new localStorage_1.LocalStorage();
    }
    startGame() {
        this.modal.classList.add('hide');
        this.snake = new Snake_1.Snake(const_1.HEAD_POSITION.x, const_1.HEAD_POSITION.y);
        this.direction = const_1.DirectionsEnum.RIGHT;
        this.directionsQueue = [];
        this.isGameOver = false;
        this.score = 0;
        this.updateScore();
        if (this.db.getHighScore()) {
            this.highscoreHTML.innerHTML = this.db.getHighScore().toString();
        }
        this.point = new Square_1.Square(this.getNewPointPosition().x, this.getNewPointPosition().y);
        this.lastRenderTime = 0;
        this.myReq = window.requestAnimationFrame(this.mainGame.bind(this));
        document.addEventListener('keydown', (e) => this.setDirection(e));
    }
    mainGame(timestamp) {
        this.myReq = window.requestAnimationFrame(this.mainGame.bind(this));
        const progress = (timestamp - this.lastRenderTime) / 1000;
        if (progress < 1 / this.snake.speed)
            return;
        this.lastRenderTime = timestamp;
        if (this.directionsQueue.length) {
            this.direction = this.directionsQueue.pop();
        }
        this.snake.move(this.direction);
        this.checkIfLose();
        this.checkIfAtePoint();
        this.drawGame();
    }
    drawGame() {
        this.ctx.clearRect(0, 0, const_1.GAME_WIDTH, const_1.GAME_HEIGHT);
        this.ctx.fillStyle = const_1.COLORS.background;
        this.ctx.fillRect(0, 0, const_1.GAME_WIDTH, const_1.GAME_HEIGHT);
        this.drawSnake();
        this.drawPoint();
        if (this.isGameOver) {
            this.ctx.beginPath();
            this.ctx.rect(this.snake.head.position.x, this.snake.head.position.y, this.snake.head.size, this.snake.head.size);
            this.ctx.strokeStyle = const_1.COLORS.head;
            this.ctx.stroke();
        }
    }
    drawPoint() {
        this.ctx.beginPath();
        this.ctx.rect(this.point.position.x, this.point.position.y, this.point.size, this.point.size);
        this.ctx.fillStyle = const_1.COLORS.point;
        this.ctx.fill();
        this.ctx.stroke();
    }
    drawSnake() {
        this.ctx.beginPath();
        this.snake.body.forEach((el, index) => {
            this.ctx.rect(el.position.x, el.position.y, el.size, el.size);
            if (index === 0) {
                this.ctx.fillStyle = const_1.COLORS.head;
            }
            else if (index === 1) {
                this.ctx.fillStyle = const_1.COLORS.tail;
            }
            this.ctx.fillRect(el.position.x, el.position.y, el.size, el.size);
        });
        this.ctx.strokeStyle = const_1.COLORS.background;
        this.ctx.stroke();
    }
    getNewPointPosition() {
        let pos = {
            x: Math.ceil((Math.random() * const_1.GAME_WIDTH - const_1.SQUARE_SIZE) / const_1.SQUARE_SIZE) * const_1.SQUARE_SIZE,
            y: Math.ceil((Math.random() * const_1.GAME_HEIGHT - const_1.SQUARE_SIZE) / const_1.SQUARE_SIZE) * const_1.SQUARE_SIZE,
        };
        let exist = this.snake.body.find((el) => el.position.x === pos.x && el.position.y === pos.y);
        if ((exist === null || exist === void 0 ? void 0 : exist.position.y) === pos.y && exist.position.x === pos.x) {
            pos = this.getNewPointPosition();
        }
        return pos;
    }
    checkIfLose() {
        const isBeyond = this.snake.head.position.x < 0 ||
            this.snake.head.position.x >= const_1.GAME_WIDTH ||
            this.snake.head.position.y < 0 ||
            this.snake.head.position.y >= const_1.GAME_HEIGHT;
        let isOnTail = false;
        this.snake.body.forEach((el, index) => {
            if (index === 0)
                return;
            if (el.position.x === this.snake.head.position.x &&
                el.position.y === this.snake.head.position.y)
                isOnTail = true;
        });
        if (isBeyond || isOnTail) {
            window.cancelAnimationFrame(this.myReq);
            this.isGameOver = true;
            this.showEndModal();
            const oldHighScore = this.db.getHighScore();
            if (oldHighScore < this.score) {
                this.db.addHighscore(this.score);
            }
        }
    }
    checkIfAtePoint() {
        const middle = const_1.SQUARE_SIZE / 2;
        const headIsOnPoint = this.snake.head.position.x + middle === this.point.position.x + middle &&
            this.snake.head.position.y + middle === this.point.position.y + middle;
        if (headIsOnPoint) {
            const lastX = this.snake.body[this.snake.body.length - 1].position.x;
            const lastY = this.snake.body[this.snake.body.length - 1].position.y;
            this.snake.body.push(new Square_1.Square(lastX, lastY));
            const pointXY = this.getNewPointPosition();
            this.point = new Square_1.Square(pointXY.x, pointXY.y);
            this.score += 1;
            this.updateScore();
        }
    }
    setDirection(e) {
        const lastDirection = this.directionsQueue.length ? this.directionsQueue[0] : this.direction;
        if (lastDirection === e.key)
            return;
        switch (e.key) {
            case const_1.DirectionsEnum.RIGHT:
                if (lastDirection !== const_1.DirectionsEnum.LEFT)
                    this.directionsQueue.unshift(const_1.DirectionsEnum.RIGHT);
                break;
            case const_1.DirectionsEnum.LEFT:
                if (lastDirection !== const_1.DirectionsEnum.RIGHT)
                    this.directionsQueue.unshift(const_1.DirectionsEnum.LEFT);
                break;
            case const_1.DirectionsEnum.UP:
                if (lastDirection !== const_1.DirectionsEnum.DOWN)
                    this.directionsQueue.unshift(const_1.DirectionsEnum.UP);
                break;
            case const_1.DirectionsEnum.DOWN:
                if (lastDirection !== const_1.DirectionsEnum.UP)
                    this.directionsQueue.unshift(const_1.DirectionsEnum.DOWN);
                break;
            default:
                return;
        }
    }
    updateScore() {
        this.scoreHTML.innerHTML = this.score.toString();
    }
    showEndModal() {
        this.modal.classList.remove('hide');
        this.endScoreHTML.innerHTML = this.score.toString();
    }
}
exports.Game = Game;


/***/ }),

/***/ "./src/ts/Snake.ts":
/*!*************************!*\
  !*** ./src/ts/Snake.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Snake = void 0;
const const_1 = __webpack_require__(/*! ./const */ "./src/ts/const.ts");
const Square_1 = __webpack_require__(/*! ./Square */ "./src/ts/Square.ts");
class Snake {
    constructor(headX, headY) {
        this.head = new Square_1.Square(headX, headY);
        this.body = [
            this.head,
            new Square_1.Square(this.head.position.x - const_1.SQUARE_SIZE, this.head.position.y),
            new Square_1.Square(this.head.position.x - 2 * const_1.SQUARE_SIZE, this.head.position.y),
        ];
        this.speed = const_1.SNAKE_SPEED_PER_SEC;
    }
    move(direction) {
        for (let i = this.body.length - 2; i >= 0; i--) {
            this.body[i + 1].position = Object.assign({}, this.body[i].position);
        }
        switch (direction) {
            case const_1.DirectionsEnum.RIGHT:
                this.body[0].position.x += const_1.SQUARE_SIZE;
                break;
            case const_1.DirectionsEnum.UP:
                this.body[0].position.y -= const_1.SQUARE_SIZE;
                break;
            case const_1.DirectionsEnum.LEFT:
                this.body[0].position.x -= const_1.SQUARE_SIZE;
                break;
            case const_1.DirectionsEnum.DOWN:
                this.body[0].position.y += const_1.SQUARE_SIZE;
                break;
            default:
                return;
        }
    }
}
exports.Snake = Snake;


/***/ }),

/***/ "./src/ts/Square.ts":
/*!**************************!*\
  !*** ./src/ts/Square.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Square = void 0;
const const_1 = __webpack_require__(/*! ./const */ "./src/ts/const.ts");
class Square {
    constructor(x, y) {
        this.size = const_1.SQUARE_SIZE;
        this.position = {
            x,
            y,
        };
    }
}
exports.Square = Square;


/***/ }),

/***/ "./src/ts/const.ts":
/*!*************************!*\
  !*** ./src/ts/const.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.COLORS = exports.SNAKE_SPEED_PER_SEC = exports.HEAD_POSITION = exports.GAME_WIDTH = exports.GAME_HEIGHT = exports.SQUARE_SIZE = exports.DirectionsEnum = void 0;
var DirectionsEnum;
(function (DirectionsEnum) {
    DirectionsEnum["LEFT"] = "ArrowLeft";
    DirectionsEnum["RIGHT"] = "ArrowRight";
    DirectionsEnum["UP"] = "ArrowUp";
    DirectionsEnum["DOWN"] = "ArrowDown";
})(DirectionsEnum = exports.DirectionsEnum || (exports.DirectionsEnum = {}));
exports.SQUARE_SIZE = 40;
exports.GAME_HEIGHT = 480;
exports.GAME_WIDTH = 760;
exports.HEAD_POSITION = {
    x: 160,
    y: 160,
};
exports.SNAKE_SPEED_PER_SEC = 9;
exports.COLORS = {
    background: '#fff',
    head: '#000000',
    tail: '#0bdb50',
    point: '#ff0000',
};


/***/ }),

/***/ "./src/ts/localStorage.ts":
/*!********************************!*\
  !*** ./src/ts/localStorage.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LocalStorage = void 0;
class LocalStorage {
    addHighscore(newHighscore) {
        let highscoreValue = localStorage.getItem('highscore');
        let highscore = JSON.parse(highscoreValue);
        if (!highscore) {
            highscore = '0';
        }
        highscore = newHighscore.toString();
        localStorage.setItem('highscore', JSON.stringify(highscore));
    }
    getHighScore() {
        let highscoreValue = localStorage.getItem('highscore');
        return JSON.parse(highscoreValue);
    }
}
exports.LocalStorage = LocalStorage;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./main.scss */ "./src/main.scss");
const Game_1 = __webpack_require__(/*! ./ts/Game */ "./src/ts/Game.ts");
const game = new Game_1.Game();
game.startGame();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cy1zbmFrZS8uL3NyYy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vdHMtc25ha2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RzLXNuYWtlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vdHMtc25ha2UvLi9zcmMvbWFpbi5zY3NzPzRlNTMiLCJ3ZWJwYWNrOi8vdHMtc25ha2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdHMtc25ha2UvLi9zcmMvdHMvR2FtZS50cyIsIndlYnBhY2s6Ly90cy1zbmFrZS8uL3NyYy90cy9TbmFrZS50cyIsIndlYnBhY2s6Ly90cy1zbmFrZS8uL3NyYy90cy9TcXVhcmUudHMiLCJ3ZWJwYWNrOi8vdHMtc25ha2UvLi9zcmMvdHMvY29uc3QudHMiLCJ3ZWJwYWNrOi8vdHMtc25ha2UvLi9zcmMvdHMvbG9jYWxTdG9yYWdlLnRzIiwid2VicGFjazovL3RzLXNuYWtlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RzLXNuYWtlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RzLXNuYWtlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90cy1zbmFrZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RzLXNuYWtlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdHMtc25ha2UvLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7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Q2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7O0FDTkEsMERBQXFCO0FBQ3JCLHdFQUFpQztBQUVqQyxNQUFNLElBQUksR0FBRyxJQUFJLFdBQUksRUFBRSxDQUFDO0FBQ3hCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UHJlc3MrU3RhcnQrMlAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmMyYjMxO1xcbiAgZm9udC1mYW1pbHk6ICdQcmVzcyBTdGFydCAyUCcsIGN1cnNpdmU7IH1cXG5cXG4jcm9vdCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cXG5cXG4jY2FudmFzIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyB9XFxuXFxuI21vZGFsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTsgfVxcblxcbi5oaWRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG4uc2NvcmVDb250YWluZXIge1xcbiAgY29sb3I6IHllbGxvdztcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyB9XFxuXFxuLmVuZCB7XFxuICB3aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IDNweCBzb2xpZCB3aGl0ZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcblxcbi5hZ2FpbkJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiAzcHggc29saWQgd2hpdGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbWFpbi5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQU9BO0VBQ0cseUJBTjJCO0VBTzNCLHNDQUFzQyxFQUFBOztBQUd6QztFQUNHLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztFQUNoQyxhQUFhO0VBQ2Isc0JBQXNCLEVBQUE7O0FBR3pCO0VBQ0csdUJBQXVCLEVBQUE7O0FBRzFCO0VBQ0csa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7RUFDVCxvQ0FBb0MsRUFBQTs7QUFHdkM7RUFDRyxhQUFhLEVBQUE7O0FBR2hCO0VBQ0csYUFwQytCO0VBcUMvQixhQUFhO0VBQ2IsYUFBYTtFQUNiLDhCQUE4QixFQUFBOztBQUdqQztFQUNHLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBNUNpQztFQTZDakMsWUE1Q3lDO0VBNkN6Qyx1QkE3Q3lDO0VBK0N6QyxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw2QkFBNkI7RUFDN0IsbUJBQW1CLEVBQUE7O0FBR3RCO0VBQ0csNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsWUE3RHlDO0VBOER6Qyx1QkE5RHlDO0VBK0R6QyxlQUFlLEVBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UHJlc3MrU3RhcnQrMlAmZGlzcGxheT1zd2FwJyk7XFxyXFxuXFxyXFxuJGJnLWNvbG9yOiByZ2JhKDQ0LCA0MywgNDksIDEpO1xcclxcbiRzY29yZS1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMCwgMSk7XFxyXFxuJGVuZE1vZGFsLWJnLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDEpO1xcclxcbiRlbmRNb2RhbC10ZXh0LWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xcclxcblxcclxcbmJvZHkge1xcclxcbiAgIGJhY2tncm91bmQtY29sb3I6ICRiZy1jb2xvcjtcXHJcXG4gICBmb250LWZhbWlseTogJ1ByZXNzIFN0YXJ0IDJQJywgY3Vyc2l2ZTtcXHJcXG59XFxyXFxuXFxyXFxuI3Jvb3Qge1xcclxcbiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICB0b3A6IDUwJTtcXHJcXG4gICBsZWZ0OiA1MCU7XFxyXFxuICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICAgZGlzcGxheTogZmxleDtcXHJcXG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4jY2FudmFzIHtcXHJcXG4gICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuI21vZGFsIHtcXHJcXG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgdG9wOiAwO1xcclxcbiAgIGxlZnQ6IDA7XFxyXFxuICAgcmlnaHQ6IDA7XFxyXFxuICAgYm90dG9tOiAwO1xcclxcbiAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZGUge1xcclxcbiAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5zY29yZUNvbnRhaW5lciB7XFxyXFxuICAgY29sb3I6ICRzY29yZS1jb2xvcjtcXHJcXG4gICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4uZW5kIHtcXHJcXG4gICB3aWR0aDogNDAwcHg7XFxyXFxuICAgaGVpZ2h0OiAzMDBweDtcXHJcXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAkZW5kTW9kYWwtYmctY29sb3I7XFxyXFxuICAgY29sb3I6ICRlbmRNb2RhbC10ZXh0LWNvbG9yO1xcclxcbiAgIGJvcmRlcjogM3B4IHNvbGlkICRlbmRNb2RhbC10ZXh0LWNvbG9yO1xcclxcblxcclxcbiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICB0b3A6IDUwJTtcXHJcXG4gICBsZWZ0OiA1MCU7XFxyXFxuICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICAgZGlzcGxheTogZmxleDtcXHJcXG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5hZ2FpbkJ0biB7XFxyXFxuICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgcGFkZGluZzogMTBweCAyMHB4O1xcclxcbiAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcbiAgIGNvbG9yOiAkZW5kTW9kYWwtdGV4dC1jb2xvcjtcXHJcXG4gICBib3JkZXI6IDNweCBzb2xpZCAkZW5kTW9kYWwtdGV4dC1jb2xvcjtcXHJcXG4gICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImltcG9ydCB7XHJcbiAgIEdBTUVfSEVJR0hULFxyXG4gICBHQU1FX1dJRFRILFxyXG4gICBTUVVBUkVfU0laRSxcclxuICAgRGlyZWN0aW9uc0VudW0sXHJcbiAgIENPTE9SUyxcclxuICAgSEVBRF9QT1NJVElPTixcclxufSBmcm9tICcuL2NvbnN0JztcclxuaW1wb3J0IHsgTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi9sb2NhbFN0b3JhZ2UnO1xyXG5pbXBvcnQgeyBTbmFrZSB9IGZyb20gJy4vU25ha2UnO1xyXG5pbXBvcnQgeyBTcXVhcmUgfSBmcm9tICcuL1NxdWFyZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZSB7XHJcbiAgIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG5cclxuICAgc2NvcmVIVE1MOiBIVE1MU3BhbkVsZW1lbnQ7XHJcbiAgIGVuZFNjb3JlSFRNTDogSFRNTFNwYW5FbGVtZW50O1xyXG4gICBoaWdoc2NvcmVIVE1MOiBIVE1MU3BhbkVsZW1lbnQ7XHJcbiAgIG1vZGFsOiBIVE1MRGl2RWxlbWVudDtcclxuICAgYWdhaW5CdG46IEhUTUxCdXR0b25FbGVtZW50O1xyXG5cclxuICAgbGFzdFJlbmRlclRpbWU6IG51bWJlcjtcclxuXHJcbiAgIHNuYWtlOiBTbmFrZTtcclxuICAgZGlyZWN0aW9uOiBEaXJlY3Rpb25zRW51bTtcclxuICAgZGlyZWN0aW9uc1F1ZXVlOiBEaXJlY3Rpb25zRW51bVtdO1xyXG5cclxuICAgcG9pbnQ6IFNxdWFyZTtcclxuXHJcbiAgIG15UmVxOiBudW1iZXI7XHJcbiAgIGlzR2FtZU92ZXI6IGJvb2xlYW47XHJcbiAgIHNjb3JlOiBudW1iZXI7XHJcbiAgIGRiOiBMb2NhbFN0b3JhZ2U7XHJcblxyXG4gICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgdGhpcy5jYW52YXMgPSA8SFRNTENhbnZhc0VsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpO1xyXG4gICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IEdBTUVfV0lEVEg7XHJcbiAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IEdBTUVfSEVJR0hUO1xyXG4gICAgICB0aGlzLmN0eCA9IDxDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ+dGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuXHJcbiAgICAgIHRoaXMuc2NvcmVIVE1MID0gPEhUTUxTcGFuRWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2NvcmUnKTtcclxuICAgICAgdGhpcy5lbmRTY29yZUhUTUwgPSA8SFRNTFNwYW5FbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbmRTY29yZScpO1xyXG4gICAgICB0aGlzLmhpZ2hzY29yZUhUTUwgPSA8SFRNTFNwYW5FbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoaWdoc2NvcmUnKTtcclxuICAgICAgdGhpcy5tb2RhbCA9IDxIVE1MRGl2RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwnKTtcclxuICAgICAgdGhpcy5hZ2FpbkJ0biA9IDxIVE1MQnV0dG9uRWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWdhaW5CdG4nKTtcclxuICAgICAgdGhpcy5hZ2FpbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuc3RhcnRHYW1lKCkpO1xyXG4gICAgICB0aGlzLmRiID0gbmV3IExvY2FsU3RvcmFnZSgpO1xyXG4gICB9XHJcblxyXG4gICBzdGFydEdhbWUoKSB7XHJcbiAgICAgIHRoaXMubW9kYWwuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICB0aGlzLnNuYWtlID0gbmV3IFNuYWtlKEhFQURfUE9TSVRJT04ueCwgSEVBRF9QT1NJVElPTi55KTtcclxuXHJcbiAgICAgIHRoaXMuZGlyZWN0aW9uID0gRGlyZWN0aW9uc0VudW0uUklHSFQ7XHJcbiAgICAgIHRoaXMuZGlyZWN0aW9uc1F1ZXVlID0gW107XHJcblxyXG4gICAgICB0aGlzLmlzR2FtZU92ZXIgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zY29yZSA9IDA7XHJcbiAgICAgIHRoaXMudXBkYXRlU2NvcmUoKTtcclxuICAgICAgaWYgKHRoaXMuZGIuZ2V0SGlnaFNjb3JlKCkpIHtcclxuICAgICAgICAgdGhpcy5oaWdoc2NvcmVIVE1MLmlubmVySFRNTCA9IHRoaXMuZGIuZ2V0SGlnaFNjb3JlKCkudG9TdHJpbmcoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5wb2ludCA9IG5ldyBTcXVhcmUodGhpcy5nZXROZXdQb2ludFBvc2l0aW9uKCkueCwgdGhpcy5nZXROZXdQb2ludFBvc2l0aW9uKCkueSk7XHJcblxyXG4gICAgICB0aGlzLmxhc3RSZW5kZXJUaW1lID0gMDtcclxuICAgICAgdGhpcy5teVJlcSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5tYWluR2FtZS5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4gdGhpcy5zZXREaXJlY3Rpb24oZSkpO1xyXG4gICB9XHJcblxyXG4gICBtYWluR2FtZSh0aW1lc3RhbXA6IERPTVRpbWVTdGFtcCkge1xyXG4gICAgICB0aGlzLm15UmVxID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLm1haW5HYW1lLmJpbmQodGhpcykpO1xyXG4gICAgICBjb25zdCBwcm9ncmVzcyA9ICh0aW1lc3RhbXAgLSB0aGlzLmxhc3RSZW5kZXJUaW1lKSAvIDEwMDA7XHJcbiAgICAgIGlmIChwcm9ncmVzcyA8IDEgLyB0aGlzLnNuYWtlLnNwZWVkKSByZXR1cm47XHJcblxyXG4gICAgICB0aGlzLmxhc3RSZW5kZXJUaW1lID0gdGltZXN0YW1wO1xyXG5cclxuICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uc1F1ZXVlLmxlbmd0aCkge1xyXG4gICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IHRoaXMuZGlyZWN0aW9uc1F1ZXVlLnBvcCgpITtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5zbmFrZS5tb3ZlKHRoaXMuZGlyZWN0aW9uKTtcclxuICAgICAgdGhpcy5jaGVja0lmTG9zZSgpO1xyXG4gICAgICB0aGlzLmNoZWNrSWZBdGVQb2ludCgpO1xyXG4gICAgICB0aGlzLmRyYXdHYW1lKCk7XHJcbiAgIH1cclxuXHJcbiAgIGRyYXdHYW1lKCkge1xyXG4gICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgR0FNRV9XSURUSCwgR0FNRV9IRUlHSFQpO1xyXG4gICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBDT0xPUlMuYmFja2dyb3VuZDtcclxuICAgICAgdGhpcy5jdHguZmlsbFJlY3QoMCwgMCwgR0FNRV9XSURUSCwgR0FNRV9IRUlHSFQpO1xyXG5cclxuICAgICAgdGhpcy5kcmF3U25ha2UoKTtcclxuICAgICAgdGhpcy5kcmF3UG9pbnQoKTtcclxuICAgICAgaWYgKHRoaXMuaXNHYW1lT3Zlcikge1xyXG4gICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgdGhpcy5jdHgucmVjdChcclxuICAgICAgICAgICAgdGhpcy5zbmFrZS5oZWFkLnBvc2l0aW9uLngsXHJcbiAgICAgICAgICAgIHRoaXMuc25ha2UuaGVhZC5wb3NpdGlvbi55LFxyXG4gICAgICAgICAgICB0aGlzLnNuYWtlLmhlYWQuc2l6ZSxcclxuICAgICAgICAgICAgdGhpcy5zbmFrZS5oZWFkLnNpemUsXHJcbiAgICAgICAgICk7XHJcbiAgICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gQ09MT1JTLmhlYWQ7XHJcbiAgICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIGRyYXdQb2ludCgpIHtcclxuICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgIHRoaXMuY3R4LnJlY3QodGhpcy5wb2ludC5wb3NpdGlvbi54LCB0aGlzLnBvaW50LnBvc2l0aW9uLnksIHRoaXMucG9pbnQuc2l6ZSwgdGhpcy5wb2ludC5zaXplKTtcclxuICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gQ09MT1JTLnBvaW50O1xyXG4gICAgICB0aGlzLmN0eC5maWxsKCk7XHJcbiAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xyXG4gICB9XHJcblxyXG4gICBkcmF3U25ha2UoKSB7XHJcbiAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICB0aGlzLnNuYWtlLmJvZHkuZm9yRWFjaCgoZWwsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgIHRoaXMuY3R4LnJlY3QoZWwucG9zaXRpb24ueCwgZWwucG9zaXRpb24ueSwgZWwuc2l6ZSwgZWwuc2l6ZSk7XHJcbiAgICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBDT0xPUlMuaGVhZDtcclxuICAgICAgICAgfSBlbHNlIGlmIChpbmRleCA9PT0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBDT0xPUlMudGFpbDtcclxuICAgICAgICAgfVxyXG4gICAgICAgICB0aGlzLmN0eC5maWxsUmVjdChlbC5wb3NpdGlvbi54LCBlbC5wb3NpdGlvbi55LCBlbC5zaXplLCBlbC5zaXplKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gQ09MT1JTLmJhY2tncm91bmQ7XHJcbiAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xyXG4gICB9XHJcblxyXG4gICBnZXROZXdQb2ludFBvc2l0aW9uKCk6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB7XHJcbiAgICAgIGxldCBwb3MgPSB7XHJcbiAgICAgICAgIHg6IE1hdGguY2VpbCgoTWF0aC5yYW5kb20oKSAqIEdBTUVfV0lEVEggLSBTUVVBUkVfU0laRSkgLyBTUVVBUkVfU0laRSkgKiBTUVVBUkVfU0laRSxcclxuICAgICAgICAgeTogTWF0aC5jZWlsKChNYXRoLnJhbmRvbSgpICogR0FNRV9IRUlHSFQgLSBTUVVBUkVfU0laRSkgLyBTUVVBUkVfU0laRSkgKiBTUVVBUkVfU0laRSxcclxuICAgICAgfTtcclxuICAgICAgbGV0IGV4aXN0ID0gdGhpcy5zbmFrZS5ib2R5LmZpbmQoKGVsKSA9PiBlbC5wb3NpdGlvbi54ID09PSBwb3MueCAmJiBlbC5wb3NpdGlvbi55ID09PSBwb3MueSk7XHJcblxyXG4gICAgICBpZiAoZXhpc3Q/LnBvc2l0aW9uLnkgPT09IHBvcy55ICYmIGV4aXN0LnBvc2l0aW9uLnggPT09IHBvcy54KSB7XHJcbiAgICAgICAgIHBvcyA9IHRoaXMuZ2V0TmV3UG9pbnRQb3NpdGlvbigpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gcG9zO1xyXG4gICB9XHJcblxyXG4gICBjaGVja0lmTG9zZSgpIHtcclxuICAgICAgY29uc3QgaXNCZXlvbmQgPVxyXG4gICAgICAgICB0aGlzLnNuYWtlLmhlYWQucG9zaXRpb24ueCA8IDAgfHxcclxuICAgICAgICAgdGhpcy5zbmFrZS5oZWFkLnBvc2l0aW9uLnggPj0gR0FNRV9XSURUSCB8fFxyXG4gICAgICAgICB0aGlzLnNuYWtlLmhlYWQucG9zaXRpb24ueSA8IDAgfHxcclxuICAgICAgICAgdGhpcy5zbmFrZS5oZWFkLnBvc2l0aW9uLnkgPj0gR0FNRV9IRUlHSFQ7XHJcblxyXG4gICAgICBsZXQgaXNPblRhaWwgPSBmYWxzZTtcclxuXHJcbiAgICAgIHRoaXMuc25ha2UuYm9keS5mb3JFYWNoKChlbCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgaWYgKGluZGV4ID09PSAwKSByZXR1cm47XHJcbiAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgZWwucG9zaXRpb24ueCA9PT0gdGhpcy5zbmFrZS5oZWFkLnBvc2l0aW9uLnggJiZcclxuICAgICAgICAgICAgZWwucG9zaXRpb24ueSA9PT0gdGhpcy5zbmFrZS5oZWFkLnBvc2l0aW9uLnlcclxuICAgICAgICAgKVxyXG4gICAgICAgICAgICBpc09uVGFpbCA9IHRydWU7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKGlzQmV5b25kIHx8IGlzT25UYWlsKSB7XHJcbiAgICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLm15UmVxKTtcclxuICAgICAgICAgdGhpcy5pc0dhbWVPdmVyID0gdHJ1ZTtcclxuICAgICAgICAgdGhpcy5zaG93RW5kTW9kYWwoKTtcclxuICAgICAgICAgY29uc3Qgb2xkSGlnaFNjb3JlID0gdGhpcy5kYi5nZXRIaWdoU2NvcmUoKTtcclxuICAgICAgICAgaWYgKG9sZEhpZ2hTY29yZSA8IHRoaXMuc2NvcmUpIHtcclxuICAgICAgICAgICAgdGhpcy5kYi5hZGRIaWdoc2NvcmUodGhpcy5zY29yZSk7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBjaGVja0lmQXRlUG9pbnQoKSB7XHJcbiAgICAgIGNvbnN0IG1pZGRsZSA9IFNRVUFSRV9TSVpFIC8gMjtcclxuICAgICAgY29uc3QgaGVhZElzT25Qb2ludCA9XHJcbiAgICAgICAgIHRoaXMuc25ha2UuaGVhZC5wb3NpdGlvbi54ICsgbWlkZGxlID09PSB0aGlzLnBvaW50LnBvc2l0aW9uLnggKyBtaWRkbGUgJiZcclxuICAgICAgICAgdGhpcy5zbmFrZS5oZWFkLnBvc2l0aW9uLnkgKyBtaWRkbGUgPT09IHRoaXMucG9pbnQucG9zaXRpb24ueSArIG1pZGRsZTtcclxuXHJcbiAgICAgIGlmIChoZWFkSXNPblBvaW50KSB7XHJcbiAgICAgICAgIGNvbnN0IGxhc3RYID0gdGhpcy5zbmFrZS5ib2R5W3RoaXMuc25ha2UuYm9keS5sZW5ndGggLSAxXS5wb3NpdGlvbi54O1xyXG4gICAgICAgICBjb25zdCBsYXN0WSA9IHRoaXMuc25ha2UuYm9keVt0aGlzLnNuYWtlLmJvZHkubGVuZ3RoIC0gMV0ucG9zaXRpb24ueTtcclxuXHJcbiAgICAgICAgIHRoaXMuc25ha2UuYm9keS5wdXNoKG5ldyBTcXVhcmUobGFzdFgsIGxhc3RZKSk7XHJcblxyXG4gICAgICAgICBjb25zdCBwb2ludFhZID0gdGhpcy5nZXROZXdQb2ludFBvc2l0aW9uKCk7XHJcbiAgICAgICAgIHRoaXMucG9pbnQgPSBuZXcgU3F1YXJlKHBvaW50WFkueCwgcG9pbnRYWS55KTtcclxuICAgICAgICAgdGhpcy5zY29yZSArPSAxO1xyXG4gICAgICAgICB0aGlzLnVwZGF0ZVNjb3JlKCk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgc2V0RGlyZWN0aW9uKGU6IEtleWJvYXJkRXZlbnQpIHtcclxuICAgICAgY29uc3QgbGFzdERpcmVjdGlvbiA9IHRoaXMuZGlyZWN0aW9uc1F1ZXVlLmxlbmd0aCA/IHRoaXMuZGlyZWN0aW9uc1F1ZXVlWzBdIDogdGhpcy5kaXJlY3Rpb247XHJcbiAgICAgIGlmIChsYXN0RGlyZWN0aW9uID09PSBlLmtleSkgcmV0dXJuO1xyXG5cclxuICAgICAgc3dpdGNoIChlLmtleSkge1xyXG4gICAgICAgICBjYXNlIERpcmVjdGlvbnNFbnVtLlJJR0hUOlxyXG4gICAgICAgICAgICBpZiAobGFzdERpcmVjdGlvbiAhPT0gRGlyZWN0aW9uc0VudW0uTEVGVClcclxuICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb25zUXVldWUudW5zaGlmdChEaXJlY3Rpb25zRW51bS5SSUdIVCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICBjYXNlIERpcmVjdGlvbnNFbnVtLkxFRlQ6XHJcbiAgICAgICAgICAgIGlmIChsYXN0RGlyZWN0aW9uICE9PSBEaXJlY3Rpb25zRW51bS5SSUdIVClcclxuICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb25zUXVldWUudW5zaGlmdChEaXJlY3Rpb25zRW51bS5MRUZUKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgIGNhc2UgRGlyZWN0aW9uc0VudW0uVVA6XHJcbiAgICAgICAgICAgIGlmIChsYXN0RGlyZWN0aW9uICE9PSBEaXJlY3Rpb25zRW51bS5ET1dOKVxyXG4gICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbnNRdWV1ZS51bnNoaWZ0KERpcmVjdGlvbnNFbnVtLlVQKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgIGNhc2UgRGlyZWN0aW9uc0VudW0uRE9XTjpcclxuICAgICAgICAgICAgaWYgKGxhc3REaXJlY3Rpb24gIT09IERpcmVjdGlvbnNFbnVtLlVQKVxyXG4gICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbnNRdWV1ZS51bnNoaWZ0KERpcmVjdGlvbnNFbnVtLkRPV04pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICB1cGRhdGVTY29yZSgpIHtcclxuICAgICAgdGhpcy5zY29yZUhUTUwuaW5uZXJIVE1MID0gdGhpcy5zY29yZS50b1N0cmluZygpO1xyXG4gICB9XHJcblxyXG4gICBzaG93RW5kTW9kYWwoKSB7XHJcbiAgICAgIHRoaXMubW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG4gICAgICB0aGlzLmVuZFNjb3JlSFRNTC5pbm5lckhUTUwgPSB0aGlzLnNjb3JlLnRvU3RyaW5nKCk7XHJcbiAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBEaXJlY3Rpb25zRW51bSwgU05BS0VfU1BFRURfUEVSX1NFQywgU1FVQVJFX1NJWkUgfSBmcm9tICcuL2NvbnN0JztcclxuaW1wb3J0IHsgU3F1YXJlIH0gZnJvbSAnLi9TcXVhcmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNuYWtlIHtcclxuICAgaGVhZFBvc2l0aW9uOiB7XHJcbiAgICAgIHg6IG51bWJlcjtcclxuICAgICAgeTogbnVtYmVyO1xyXG4gICB9O1xyXG4gICBib2R5OiBTcXVhcmVbXTtcclxuICAgaGVhZDogU3F1YXJlO1xyXG4gICBzcGVlZDogbnVtYmVyO1xyXG5cclxuICAgY29uc3RydWN0b3IoaGVhZFg6IG51bWJlciwgaGVhZFk6IG51bWJlcikge1xyXG4gICAgICB0aGlzLmhlYWQgPSBuZXcgU3F1YXJlKGhlYWRYLCBoZWFkWSk7XHJcbiAgICAgIHRoaXMuYm9keSA9IFtcclxuICAgICAgICAgdGhpcy5oZWFkLFxyXG4gICAgICAgICBuZXcgU3F1YXJlKHRoaXMuaGVhZC5wb3NpdGlvbi54IC0gU1FVQVJFX1NJWkUsIHRoaXMuaGVhZC5wb3NpdGlvbi55KSxcclxuICAgICAgICAgbmV3IFNxdWFyZSh0aGlzLmhlYWQucG9zaXRpb24ueCAtIDIgKiBTUVVBUkVfU0laRSwgdGhpcy5oZWFkLnBvc2l0aW9uLnkpLFxyXG4gICAgICBdO1xyXG4gICAgICB0aGlzLnNwZWVkID0gU05BS0VfU1BFRURfUEVSX1NFQztcclxuICAgfVxyXG5cclxuICAgbW92ZShkaXJlY3Rpb246IERpcmVjdGlvbnNFbnVtKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSB0aGlzLmJvZHkubGVuZ3RoIC0gMjsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgdGhpcy5ib2R5W2kgKyAxXS5wb3NpdGlvbiA9IHsgLi4udGhpcy5ib2R5W2ldLnBvc2l0aW9uIH07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgIGNhc2UgRGlyZWN0aW9uc0VudW0uUklHSFQ6XHJcbiAgICAgICAgICAgIHRoaXMuYm9keVswXS5wb3NpdGlvbi54ICs9IFNRVUFSRV9TSVpFO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgY2FzZSBEaXJlY3Rpb25zRW51bS5VUDpcclxuICAgICAgICAgICAgdGhpcy5ib2R5WzBdLnBvc2l0aW9uLnkgLT0gU1FVQVJFX1NJWkU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICBjYXNlIERpcmVjdGlvbnNFbnVtLkxFRlQ6XHJcbiAgICAgICAgICAgIHRoaXMuYm9keVswXS5wb3NpdGlvbi54IC09IFNRVUFSRV9TSVpFO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgY2FzZSBEaXJlY3Rpb25zRW51bS5ET1dOOlxyXG4gICAgICAgICAgICB0aGlzLmJvZHlbMF0ucG9zaXRpb24ueSArPSBTUVVBUkVfU0laRTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgU1FVQVJFX1NJWkUgfSBmcm9tICcuL2NvbnN0JztcclxuXHJcbmV4cG9ydCBjbGFzcyBTcXVhcmUge1xyXG4gICBwb3NpdGlvbjoge1xyXG4gICAgICB4OiBudW1iZXI7XHJcbiAgICAgIHk6IG51bWJlcjtcclxuICAgfTtcclxuICAgc2l6ZTogbnVtYmVyO1xyXG5cclxuICAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgICAgdGhpcy5zaXplID0gU1FVQVJFX1NJWkU7XHJcbiAgICAgIHRoaXMucG9zaXRpb24gPSB7XHJcbiAgICAgICAgIHgsXHJcbiAgICAgICAgIHksXHJcbiAgICAgIH07XHJcbiAgIH1cclxufVxyXG4iLCJleHBvcnQgZW51bSBEaXJlY3Rpb25zRW51bSB7XHJcbiAgIExFRlQgPSAnQXJyb3dMZWZ0JyxcclxuICAgUklHSFQgPSAnQXJyb3dSaWdodCcsXHJcbiAgIFVQID0gJ0Fycm93VXAnLFxyXG4gICBET1dOID0gJ0Fycm93RG93bicsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBTUVVBUkVfU0laRSA9IDQwO1xyXG5cclxuLy8gIHBtdXN0IGJlIGRpdmlzaWJsZSBieSBTUVVBUkVfU0laRSAhISFcclxuZXhwb3J0IGNvbnN0IEdBTUVfSEVJR0hUID0gNDgwO1xyXG5leHBvcnQgY29uc3QgR0FNRV9XSURUSCA9IDc2MDtcclxuXHJcbmV4cG9ydCBjb25zdCBIRUFEX1BPU0lUSU9OID0ge1xyXG4gICAvLyBtdXN0IGJlIGRpdmlzaWJsZSBieSBTUVVBUkVfU0laRSAhISFcclxuICAgeDogMTYwLFxyXG4gICB5OiAxNjAsXHJcbn07XHJcbmV4cG9ydCBjb25zdCBTTkFLRV9TUEVFRF9QRVJfU0VDID0gOTtcclxuXHJcbmV4cG9ydCBjb25zdCBDT0xPUlMgPSB7XHJcbiAgIGJhY2tncm91bmQ6ICcjZmZmJyxcclxuICAgaGVhZDogJyMwMDAwMDAnLFxyXG4gICB0YWlsOiAnIzBiZGI1MCcsXHJcbiAgIHBvaW50OiAnI2ZmMDAwMCcsXHJcbn07XHJcbiIsImV4cG9ydCBjbGFzcyBMb2NhbFN0b3JhZ2Uge1xyXG4gICBwdWJsaWMgYWRkSGlnaHNjb3JlKG5ld0hpZ2hzY29yZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgIGxldCBoaWdoc2NvcmVWYWx1ZSA9IDxzdHJpbmc+bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2hpZ2hzY29yZScpO1xyXG4gICAgICBsZXQgaGlnaHNjb3JlID0gPHN0cmluZz5KU09OLnBhcnNlKGhpZ2hzY29yZVZhbHVlKTtcclxuICAgICAgaWYgKCFoaWdoc2NvcmUpIHtcclxuICAgICAgICAgaGlnaHNjb3JlID0gJzAnO1xyXG4gICAgICB9XHJcbiAgICAgIGhpZ2hzY29yZSA9IG5ld0hpZ2hzY29yZS50b1N0cmluZygpO1xyXG5cclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2hpZ2hzY29yZScsIEpTT04uc3RyaW5naWZ5KGhpZ2hzY29yZSkpO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgZ2V0SGlnaFNjb3JlKCk6IG51bWJlciB7XHJcbiAgICAgIGxldCBoaWdoc2NvcmVWYWx1ZSA9IDxzdHJpbmc+bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2hpZ2hzY29yZScpO1xyXG4gICAgICByZXR1cm4gPG51bWJlcj5KU09OLnBhcnNlKGhpZ2hzY29yZVZhbHVlKTtcclxuICAgfVxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vbWFpbi5zY3NzJztcclxuaW1wb3J0IHsgR2FtZSB9IGZyb20gJy4vdHMvR2FtZSc7XHJcblxyXG5jb25zdCBnYW1lID0gbmV3IEdhbWUoKTtcclxuZ2FtZS5zdGFydEdhbWUoKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==