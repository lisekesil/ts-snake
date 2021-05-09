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
            this.score += const_1.SQUARE_SIZE;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cy1zbmFrZS8uL3NyYy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vdHMtc25ha2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RzLXNuYWtlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vdHMtc25ha2UvLi9zcmMvbWFpbi5zY3NzPzRlNTMiLCJ3ZWJwYWNrOi8vdHMtc25ha2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdHMtc25ha2UvLi9zcmMvdHMvR2FtZS50cyIsIndlYnBhY2s6Ly90cy1zbmFrZS8uL3NyYy90cy9TbmFrZS50cyIsIndlYnBhY2s6Ly90cy1zbmFrZS8uL3NyYy90cy9TcXVhcmUudHMiLCJ3ZWJwYWNrOi8vdHMtc25ha2UvLi9zcmMvdHMvY29uc3QudHMiLCJ3ZWJwYWNrOi8vdHMtc25ha2UvLi9zcmMvdHMvbG9jYWxTdG9yYWdlLnRzIiwid2VicGFjazovL3RzLXNuYWtlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RzLXNuYWtlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RzLXNuYWtlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90cy1zbmFrZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RzLXNuYWtlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdHMtc25ha2UvLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7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QUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7OztBQ05BLDBEQUFxQjtBQUNyQix3RUFBaUM7QUFFakMsTUFBTSxJQUFJLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQztBQUN4QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVByZXNzK1N0YXJ0KzJQJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJjMmIzMTtcXG4gIGZvbnQtZmFtaWx5OiAnUHJlc3MgU3RhcnQgMlAnLCBjdXJzaXZlOyB9XFxuXFxuI3Jvb3Qge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XFxuXFxuI2NhbnZhcyB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgfVxcblxcbiNtb2RhbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7IH1cXG5cXG4uaGlkZSB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuLnNjb3JlQ29udGFpbmVyIHtcXG4gIGNvbG9yOiB5ZWxsb3c7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgfVxcblxcbi5lbmQge1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgaGVpZ2h0OiAzMDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiAzcHggc29saWQgd2hpdGU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG5cXG4uYWdhaW5CdG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIHdoaXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyOyB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL21haW4uc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFPQTtFQUNHLHlCQU4yQjtFQU8zQixzQ0FBc0MsRUFBQTs7QUFHekM7RUFDRyxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsYUFBYTtFQUNiLHNCQUFzQixFQUFBOztBQUd6QjtFQUNHLHVCQUF1QixFQUFBOztBQUcxQjtFQUNHLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0VBQ1Qsb0NBQW9DLEVBQUE7O0FBR3ZDO0VBQ0csYUFBYSxFQUFBOztBQUdoQjtFQUNHLGFBcEMrQjtFQXFDL0IsYUFBYTtFQUNiLGFBQWE7RUFDYiw4QkFBOEIsRUFBQTs7QUFHakM7RUFDRyxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQTVDaUM7RUE2Q2pDLFlBNUN5QztFQTZDekMsdUJBN0N5QztFQStDekMsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQzdCLG1CQUFtQixFQUFBOztBQUd0QjtFQUNHLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLFlBN0R5QztFQThEekMsdUJBOUR5QztFQStEekMsZUFBZSxFQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVByZXNzK1N0YXJ0KzJQJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbiRiZy1jb2xvcjogcmdiYSg0NCwgNDMsIDQ5LCAxKTtcXHJcXG4kc2NvcmUtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDAsIDEpO1xcclxcbiRlbmRNb2RhbC1iZy1jb2xvcjogcmdiYSgwLCAwLCAwLCAxKTtcXHJcXG4kZW5kTW9kYWwtdGV4dC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctY29sb3I7XFxyXFxuICAgZm9udC1mYW1pbHk6ICdQcmVzcyBTdGFydCAyUCcsIGN1cnNpdmU7XFxyXFxufVxcclxcblxcclxcbiNyb290IHtcXHJcXG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgdG9wOiA1MCU7XFxyXFxuICAgbGVmdDogNTAlO1xcclxcbiAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuI2NhbnZhcyB7XFxyXFxuICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcblxcclxcbiNtb2RhbCB7XFxyXFxuICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgIHRvcDogMDtcXHJcXG4gICBsZWZ0OiAwO1xcclxcbiAgIHJpZ2h0OiAwO1xcclxcbiAgIGJvdHRvbTogMDtcXHJcXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxyXFxufVxcclxcblxcclxcbi5oaWRlIHtcXHJcXG4gICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uc2NvcmVDb250YWluZXIge1xcclxcbiAgIGNvbG9yOiAkc2NvcmUtY29sb3I7XFxyXFxuICAgcGFkZGluZzogMTBweDtcXHJcXG4gICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmVuZCB7XFxyXFxuICAgd2lkdGg6IDQwMHB4O1xcclxcbiAgIGhlaWdodDogMzAwcHg7XFxyXFxuICAgYmFja2dyb3VuZC1jb2xvcjogJGVuZE1vZGFsLWJnLWNvbG9yO1xcclxcbiAgIGNvbG9yOiAkZW5kTW9kYWwtdGV4dC1jb2xvcjtcXHJcXG4gICBib3JkZXI6IDNweCBzb2xpZCAkZW5kTW9kYWwtdGV4dC1jb2xvcjtcXHJcXG5cXHJcXG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgdG9wOiA1MCU7XFxyXFxuICAgbGVmdDogNTAlO1xcclxcbiAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYWdhaW5CdG4ge1xcclxcbiAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgIHBhZGRpbmc6IDEwcHggMjBweDtcXHJcXG4gICBmb250LWZhbWlseTogaW5oZXJpdDtcXHJcXG4gICBjb2xvcjogJGVuZE1vZGFsLXRleHQtY29sb3I7XFxyXFxuICAgYm9yZGVyOiAzcHggc29saWQgJGVuZE1vZGFsLXRleHQtY29sb3I7XFxyXFxuICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJpbXBvcnQge1xyXG4gICBHQU1FX0hFSUdIVCxcclxuICAgR0FNRV9XSURUSCxcclxuICAgU1FVQVJFX1NJWkUsXHJcbiAgIERpcmVjdGlvbnNFbnVtLFxyXG4gICBDT0xPUlMsXHJcbiAgIEhFQURfUE9TSVRJT04sXHJcbn0gZnJvbSAnLi9jb25zdCc7XHJcbmltcG9ydCB7IExvY2FsU3RvcmFnZSB9IGZyb20gJy4vbG9jYWxTdG9yYWdlJztcclxuaW1wb3J0IHsgU25ha2UgfSBmcm9tICcuL1NuYWtlJztcclxuaW1wb3J0IHsgU3F1YXJlIH0gZnJvbSAnLi9TcXVhcmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWUge1xyXG4gICBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuXHJcbiAgIHNjb3JlSFRNTDogSFRNTFNwYW5FbGVtZW50O1xyXG4gICBlbmRTY29yZUhUTUw6IEhUTUxTcGFuRWxlbWVudDtcclxuICAgaGlnaHNjb3JlSFRNTDogSFRNTFNwYW5FbGVtZW50O1xyXG4gICBtb2RhbDogSFRNTERpdkVsZW1lbnQ7XHJcbiAgIGFnYWluQnRuOiBIVE1MQnV0dG9uRWxlbWVudDtcclxuXHJcbiAgIGxhc3RSZW5kZXJUaW1lOiBudW1iZXI7XHJcblxyXG4gICBzbmFrZTogU25ha2U7XHJcbiAgIGRpcmVjdGlvbjogRGlyZWN0aW9uc0VudW07XHJcbiAgIGRpcmVjdGlvbnNRdWV1ZTogRGlyZWN0aW9uc0VudW1bXTtcclxuXHJcbiAgIHBvaW50OiBTcXVhcmU7XHJcblxyXG4gICBteVJlcTogbnVtYmVyO1xyXG4gICBpc0dhbWVPdmVyOiBib29sZWFuO1xyXG4gICBzY29yZTogbnVtYmVyO1xyXG4gICBkYjogTG9jYWxTdG9yYWdlO1xyXG5cclxuICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgIHRoaXMuY2FudmFzID0gPEhUTUxDYW52YXNFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcclxuICAgICAgdGhpcy5jYW52YXMud2lkdGggPSBHQU1FX1dJRFRIO1xyXG4gICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSBHQU1FX0hFSUdIVDtcclxuICAgICAgdGhpcy5jdHggPSA8Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEPnRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcblxyXG4gICAgICB0aGlzLnNjb3JlSFRNTCA9IDxIVE1MU3BhbkVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Njb3JlJyk7XHJcbiAgICAgIHRoaXMuZW5kU2NvcmVIVE1MID0gPEhUTUxTcGFuRWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW5kU2NvcmUnKTtcclxuICAgICAgdGhpcy5oaWdoc2NvcmVIVE1MID0gPEhUTUxTcGFuRWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGlnaHNjb3JlJyk7XHJcbiAgICAgIHRoaXMubW9kYWwgPSA8SFRNTERpdkVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsJyk7XHJcbiAgICAgIHRoaXMuYWdhaW5CdG4gPSA8SFRNTEJ1dHRvbkVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FnYWluQnRuJyk7XHJcbiAgICAgIHRoaXMuYWdhaW5CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLnN0YXJ0R2FtZSgpKTtcclxuICAgICAgdGhpcy5kYiA9IG5ldyBMb2NhbFN0b3JhZ2UoKTtcclxuICAgfVxyXG5cclxuICAgc3RhcnRHYW1lKCkge1xyXG4gICAgICB0aGlzLm1vZGFsLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgdGhpcy5zbmFrZSA9IG5ldyBTbmFrZShIRUFEX1BPU0lUSU9OLngsIEhFQURfUE9TSVRJT04ueSk7XHJcblxyXG4gICAgICB0aGlzLmRpcmVjdGlvbiA9IERpcmVjdGlvbnNFbnVtLlJJR0hUO1xyXG4gICAgICB0aGlzLmRpcmVjdGlvbnNRdWV1ZSA9IFtdO1xyXG5cclxuICAgICAgdGhpcy5pc0dhbWVPdmVyID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2NvcmUgPSAwO1xyXG4gICAgICB0aGlzLnVwZGF0ZVNjb3JlKCk7XHJcbiAgICAgIGlmICh0aGlzLmRiLmdldEhpZ2hTY29yZSgpKSB7XHJcbiAgICAgICAgIHRoaXMuaGlnaHNjb3JlSFRNTC5pbm5lckhUTUwgPSB0aGlzLmRiLmdldEhpZ2hTY29yZSgpLnRvU3RyaW5nKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMucG9pbnQgPSBuZXcgU3F1YXJlKHRoaXMuZ2V0TmV3UG9pbnRQb3NpdGlvbigpLngsIHRoaXMuZ2V0TmV3UG9pbnRQb3NpdGlvbigpLnkpO1xyXG5cclxuICAgICAgdGhpcy5sYXN0UmVuZGVyVGltZSA9IDA7XHJcbiAgICAgIHRoaXMubXlSZXEgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMubWFpbkdhbWUuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHRoaXMuc2V0RGlyZWN0aW9uKGUpKTtcclxuICAgfVxyXG5cclxuICAgbWFpbkdhbWUodGltZXN0YW1wOiBET01UaW1lU3RhbXApIHtcclxuICAgICAgdGhpcy5teVJlcSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5tYWluR2FtZS5iaW5kKHRoaXMpKTtcclxuICAgICAgY29uc3QgcHJvZ3Jlc3MgPSAodGltZXN0YW1wIC0gdGhpcy5sYXN0UmVuZGVyVGltZSkgLyAxMDAwO1xyXG4gICAgICBpZiAocHJvZ3Jlc3MgPCAxIC8gdGhpcy5zbmFrZS5zcGVlZCkgcmV0dXJuO1xyXG5cclxuICAgICAgdGhpcy5sYXN0UmVuZGVyVGltZSA9IHRpbWVzdGFtcDtcclxuXHJcbiAgICAgIGlmICh0aGlzLmRpcmVjdGlvbnNRdWV1ZS5sZW5ndGgpIHtcclxuICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSB0aGlzLmRpcmVjdGlvbnNRdWV1ZS5wb3AoKSE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuc25ha2UubW92ZSh0aGlzLmRpcmVjdGlvbik7XHJcbiAgICAgIHRoaXMuY2hlY2tJZkxvc2UoKTtcclxuICAgICAgdGhpcy5jaGVja0lmQXRlUG9pbnQoKTtcclxuICAgICAgdGhpcy5kcmF3R2FtZSgpO1xyXG4gICB9XHJcblxyXG4gICBkcmF3R2FtZSgpIHtcclxuICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIEdBTUVfV0lEVEgsIEdBTUVfSEVJR0hUKTtcclxuICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gQ09MT1JTLmJhY2tncm91bmQ7XHJcbiAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KDAsIDAsIEdBTUVfV0lEVEgsIEdBTUVfSEVJR0hUKTtcclxuXHJcbiAgICAgIHRoaXMuZHJhd1NuYWtlKCk7XHJcbiAgICAgIHRoaXMuZHJhd1BvaW50KCk7XHJcbiAgICAgIGlmICh0aGlzLmlzR2FtZU92ZXIpIHtcclxuICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgIHRoaXMuY3R4LnJlY3QoXHJcbiAgICAgICAgICAgIHRoaXMuc25ha2UuaGVhZC5wb3NpdGlvbi54LFxyXG4gICAgICAgICAgICB0aGlzLnNuYWtlLmhlYWQucG9zaXRpb24ueSxcclxuICAgICAgICAgICAgdGhpcy5zbmFrZS5oZWFkLnNpemUsXHJcbiAgICAgICAgICAgIHRoaXMuc25ha2UuaGVhZC5zaXplLFxyXG4gICAgICAgICApO1xyXG4gICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IENPTE9SUy5oZWFkO1xyXG4gICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBkcmF3UG9pbnQoKSB7XHJcbiAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICB0aGlzLmN0eC5yZWN0KHRoaXMucG9pbnQucG9zaXRpb24ueCwgdGhpcy5wb2ludC5wb3NpdGlvbi55LCB0aGlzLnBvaW50LnNpemUsIHRoaXMucG9pbnQuc2l6ZSk7XHJcbiAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IENPTE9SUy5wb2ludDtcclxuICAgICAgdGhpcy5jdHguZmlsbCgpO1xyXG4gICAgICB0aGlzLmN0eC5zdHJva2UoKTtcclxuICAgfVxyXG5cclxuICAgZHJhd1NuYWtlKCkge1xyXG4gICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgdGhpcy5zbmFrZS5ib2R5LmZvckVhY2goKGVsLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICB0aGlzLmN0eC5yZWN0KGVsLnBvc2l0aW9uLngsIGVsLnBvc2l0aW9uLnksIGVsLnNpemUsIGVsLnNpemUpO1xyXG4gICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gQ09MT1JTLmhlYWQ7XHJcbiAgICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPT09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gQ09MT1JTLnRhaWw7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoZWwucG9zaXRpb24ueCwgZWwucG9zaXRpb24ueSwgZWwuc2l6ZSwgZWwuc2l6ZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IENPTE9SUy5iYWNrZ3JvdW5kO1xyXG4gICAgICB0aGlzLmN0eC5zdHJva2UoKTtcclxuICAgfVxyXG5cclxuICAgZ2V0TmV3UG9pbnRQb3NpdGlvbigpOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0ge1xyXG4gICAgICBsZXQgcG9zID0ge1xyXG4gICAgICAgICB4OiBNYXRoLmNlaWwoKE1hdGgucmFuZG9tKCkgKiBHQU1FX1dJRFRIIC0gU1FVQVJFX1NJWkUpIC8gU1FVQVJFX1NJWkUpICogU1FVQVJFX1NJWkUsXHJcbiAgICAgICAgIHk6IE1hdGguY2VpbCgoTWF0aC5yYW5kb20oKSAqIEdBTUVfSEVJR0hUIC0gU1FVQVJFX1NJWkUpIC8gU1FVQVJFX1NJWkUpICogU1FVQVJFX1NJWkUsXHJcbiAgICAgIH07XHJcbiAgICAgIGxldCBleGlzdCA9IHRoaXMuc25ha2UuYm9keS5maW5kKChlbCkgPT4gZWwucG9zaXRpb24ueCA9PT0gcG9zLnggJiYgZWwucG9zaXRpb24ueSA9PT0gcG9zLnkpO1xyXG5cclxuICAgICAgaWYgKGV4aXN0Py5wb3NpdGlvbi55ID09PSBwb3MueSAmJiBleGlzdC5wb3NpdGlvbi54ID09PSBwb3MueCkge1xyXG4gICAgICAgICBwb3MgPSB0aGlzLmdldE5ld1BvaW50UG9zaXRpb24oKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHBvcztcclxuICAgfVxyXG5cclxuICAgY2hlY2tJZkxvc2UoKSB7XHJcbiAgICAgIGNvbnN0IGlzQmV5b25kID1cclxuICAgICAgICAgdGhpcy5zbmFrZS5oZWFkLnBvc2l0aW9uLnggPCAwIHx8XHJcbiAgICAgICAgIHRoaXMuc25ha2UuaGVhZC5wb3NpdGlvbi54ID49IEdBTUVfV0lEVEggfHxcclxuICAgICAgICAgdGhpcy5zbmFrZS5oZWFkLnBvc2l0aW9uLnkgPCAwIHx8XHJcbiAgICAgICAgIHRoaXMuc25ha2UuaGVhZC5wb3NpdGlvbi55ID49IEdBTUVfSEVJR0hUO1xyXG5cclxuICAgICAgbGV0IGlzT25UYWlsID0gZmFsc2U7XHJcblxyXG4gICAgICB0aGlzLnNuYWtlLmJvZHkuZm9yRWFjaCgoZWwsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgIGlmIChpbmRleCA9PT0gMCkgcmV0dXJuO1xyXG4gICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIGVsLnBvc2l0aW9uLnggPT09IHRoaXMuc25ha2UuaGVhZC5wb3NpdGlvbi54ICYmXHJcbiAgICAgICAgICAgIGVsLnBvc2l0aW9uLnkgPT09IHRoaXMuc25ha2UuaGVhZC5wb3NpdGlvbi55XHJcbiAgICAgICAgIClcclxuICAgICAgICAgICAgaXNPblRhaWwgPSB0cnVlO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmIChpc0JleW9uZCB8fCBpc09uVGFpbCkge1xyXG4gICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5teVJlcSk7XHJcbiAgICAgICAgIHRoaXMuaXNHYW1lT3ZlciA9IHRydWU7XHJcbiAgICAgICAgIHRoaXMuc2hvd0VuZE1vZGFsKCk7XHJcbiAgICAgICAgIGNvbnN0IG9sZEhpZ2hTY29yZSA9IHRoaXMuZGIuZ2V0SGlnaFNjb3JlKCk7XHJcbiAgICAgICAgIGlmIChvbGRIaWdoU2NvcmUgPCB0aGlzLnNjb3JlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGIuYWRkSGlnaHNjb3JlKHRoaXMuc2NvcmUpO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgY2hlY2tJZkF0ZVBvaW50KCkge1xyXG4gICAgICBjb25zdCBtaWRkbGUgPSBTUVVBUkVfU0laRSAvIDI7XHJcbiAgICAgIGNvbnN0IGhlYWRJc09uUG9pbnQgPVxyXG4gICAgICAgICB0aGlzLnNuYWtlLmhlYWQucG9zaXRpb24ueCArIG1pZGRsZSA9PT0gdGhpcy5wb2ludC5wb3NpdGlvbi54ICsgbWlkZGxlICYmXHJcbiAgICAgICAgIHRoaXMuc25ha2UuaGVhZC5wb3NpdGlvbi55ICsgbWlkZGxlID09PSB0aGlzLnBvaW50LnBvc2l0aW9uLnkgKyBtaWRkbGU7XHJcblxyXG4gICAgICBpZiAoaGVhZElzT25Qb2ludCkge1xyXG4gICAgICAgICBjb25zdCBsYXN0WCA9IHRoaXMuc25ha2UuYm9keVt0aGlzLnNuYWtlLmJvZHkubGVuZ3RoIC0gMV0ucG9zaXRpb24ueDtcclxuICAgICAgICAgY29uc3QgbGFzdFkgPSB0aGlzLnNuYWtlLmJvZHlbdGhpcy5zbmFrZS5ib2R5Lmxlbmd0aCAtIDFdLnBvc2l0aW9uLnk7XHJcblxyXG4gICAgICAgICB0aGlzLnNuYWtlLmJvZHkucHVzaChuZXcgU3F1YXJlKGxhc3RYLCBsYXN0WSkpO1xyXG5cclxuICAgICAgICAgY29uc3QgcG9pbnRYWSA9IHRoaXMuZ2V0TmV3UG9pbnRQb3NpdGlvbigpO1xyXG4gICAgICAgICB0aGlzLnBvaW50ID0gbmV3IFNxdWFyZShwb2ludFhZLngsIHBvaW50WFkueSk7XHJcbiAgICAgICAgIHRoaXMuc2NvcmUgKz0gU1FVQVJFX1NJWkU7XHJcbiAgICAgICAgIHRoaXMudXBkYXRlU2NvcmUoKTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBzZXREaXJlY3Rpb24oZTogS2V5Ym9hcmRFdmVudCkge1xyXG4gICAgICBjb25zdCBsYXN0RGlyZWN0aW9uID0gdGhpcy5kaXJlY3Rpb25zUXVldWUubGVuZ3RoID8gdGhpcy5kaXJlY3Rpb25zUXVldWVbMF0gOiB0aGlzLmRpcmVjdGlvbjtcclxuICAgICAgaWYgKGxhc3REaXJlY3Rpb24gPT09IGUua2V5KSByZXR1cm47XHJcblxyXG4gICAgICBzd2l0Y2ggKGUua2V5KSB7XHJcbiAgICAgICAgIGNhc2UgRGlyZWN0aW9uc0VudW0uUklHSFQ6XHJcbiAgICAgICAgICAgIGlmIChsYXN0RGlyZWN0aW9uICE9PSBEaXJlY3Rpb25zRW51bS5MRUZUKVxyXG4gICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbnNRdWV1ZS51bnNoaWZ0KERpcmVjdGlvbnNFbnVtLlJJR0hUKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgIGNhc2UgRGlyZWN0aW9uc0VudW0uTEVGVDpcclxuICAgICAgICAgICAgaWYgKGxhc3REaXJlY3Rpb24gIT09IERpcmVjdGlvbnNFbnVtLlJJR0hUKVxyXG4gICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbnNRdWV1ZS51bnNoaWZ0KERpcmVjdGlvbnNFbnVtLkxFRlQpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgY2FzZSBEaXJlY3Rpb25zRW51bS5VUDpcclxuICAgICAgICAgICAgaWYgKGxhc3REaXJlY3Rpb24gIT09IERpcmVjdGlvbnNFbnVtLkRPV04pXHJcbiAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uc1F1ZXVlLnVuc2hpZnQoRGlyZWN0aW9uc0VudW0uVVApO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgY2FzZSBEaXJlY3Rpb25zRW51bS5ET1dOOlxyXG4gICAgICAgICAgICBpZiAobGFzdERpcmVjdGlvbiAhPT0gRGlyZWN0aW9uc0VudW0uVVApXHJcbiAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uc1F1ZXVlLnVuc2hpZnQoRGlyZWN0aW9uc0VudW0uRE9XTik7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIHVwZGF0ZVNjb3JlKCkge1xyXG4gICAgICB0aGlzLnNjb3JlSFRNTC5pbm5lckhUTUwgPSB0aGlzLnNjb3JlLnRvU3RyaW5nKCk7XHJcbiAgIH1cclxuXHJcbiAgIHNob3dFbmRNb2RhbCgpIHtcclxuICAgICAgdGhpcy5tb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcbiAgICAgIHRoaXMuZW5kU2NvcmVIVE1MLmlubmVySFRNTCA9IHRoaXMuc2NvcmUudG9TdHJpbmcoKTtcclxuICAgfVxyXG59XHJcbiIsImltcG9ydCB7IERpcmVjdGlvbnNFbnVtLCBTTkFLRV9TUEVFRF9QRVJfU0VDLCBTUVVBUkVfU0laRSB9IGZyb20gJy4vY29uc3QnO1xyXG5pbXBvcnQgeyBTcXVhcmUgfSBmcm9tICcuL1NxdWFyZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgU25ha2Uge1xyXG4gICBoZWFkUG9zaXRpb246IHtcclxuICAgICAgeDogbnVtYmVyO1xyXG4gICAgICB5OiBudW1iZXI7XHJcbiAgIH07XHJcbiAgIGJvZHk6IFNxdWFyZVtdO1xyXG4gICBoZWFkOiBTcXVhcmU7XHJcbiAgIHNwZWVkOiBudW1iZXI7XHJcblxyXG4gICBjb25zdHJ1Y3RvcihoZWFkWDogbnVtYmVyLCBoZWFkWTogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMuaGVhZCA9IG5ldyBTcXVhcmUoaGVhZFgsIGhlYWRZKTtcclxuICAgICAgdGhpcy5ib2R5ID0gW1xyXG4gICAgICAgICB0aGlzLmhlYWQsXHJcbiAgICAgICAgIG5ldyBTcXVhcmUodGhpcy5oZWFkLnBvc2l0aW9uLnggLSBTUVVBUkVfU0laRSwgdGhpcy5oZWFkLnBvc2l0aW9uLnkpLFxyXG4gICAgICAgICBuZXcgU3F1YXJlKHRoaXMuaGVhZC5wb3NpdGlvbi54IC0gMiAqIFNRVUFSRV9TSVpFLCB0aGlzLmhlYWQucG9zaXRpb24ueSksXHJcbiAgICAgIF07XHJcbiAgICAgIHRoaXMuc3BlZWQgPSBTTkFLRV9TUEVFRF9QRVJfU0VDO1xyXG4gICB9XHJcblxyXG4gICBtb3ZlKGRpcmVjdGlvbjogRGlyZWN0aW9uc0VudW0pIHtcclxuICAgICAgZm9yIChsZXQgaSA9IHRoaXMuYm9keS5sZW5ndGggLSAyOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICB0aGlzLmJvZHlbaSArIDFdLnBvc2l0aW9uID0geyAuLi50aGlzLmJvZHlbaV0ucG9zaXRpb24gfTtcclxuICAgICAgfVxyXG5cclxuICAgICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcclxuICAgICAgICAgY2FzZSBEaXJlY3Rpb25zRW51bS5SSUdIVDpcclxuICAgICAgICAgICAgdGhpcy5ib2R5WzBdLnBvc2l0aW9uLnggKz0gU1FVQVJFX1NJWkU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICBjYXNlIERpcmVjdGlvbnNFbnVtLlVQOlxyXG4gICAgICAgICAgICB0aGlzLmJvZHlbMF0ucG9zaXRpb24ueSAtPSBTUVVBUkVfU0laRTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgIGNhc2UgRGlyZWN0aW9uc0VudW0uTEVGVDpcclxuICAgICAgICAgICAgdGhpcy5ib2R5WzBdLnBvc2l0aW9uLnggLT0gU1FVQVJFX1NJWkU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICBjYXNlIERpcmVjdGlvbnNFbnVtLkRPV046XHJcbiAgICAgICAgICAgIHRoaXMuYm9keVswXS5wb3NpdGlvbi55ICs9IFNRVUFSRV9TSVpFO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBTUVVBUkVfU0laRSB9IGZyb20gJy4vY29uc3QnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNxdWFyZSB7XHJcbiAgIHBvc2l0aW9uOiB7XHJcbiAgICAgIHg6IG51bWJlcjtcclxuICAgICAgeTogbnVtYmVyO1xyXG4gICB9O1xyXG4gICBzaXplOiBudW1iZXI7XHJcblxyXG4gICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG4gICAgICB0aGlzLnNpemUgPSBTUVVBUkVfU0laRTtcclxuICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcclxuICAgICAgICAgeCxcclxuICAgICAgICAgeSxcclxuICAgICAgfTtcclxuICAgfVxyXG59XHJcbiIsImV4cG9ydCBlbnVtIERpcmVjdGlvbnNFbnVtIHtcclxuICAgTEVGVCA9ICdBcnJvd0xlZnQnLFxyXG4gICBSSUdIVCA9ICdBcnJvd1JpZ2h0JyxcclxuICAgVVAgPSAnQXJyb3dVcCcsXHJcbiAgIERPV04gPSAnQXJyb3dEb3duJyxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFNRVUFSRV9TSVpFID0gNDA7XHJcblxyXG4vLyAgcG11c3QgYmUgZGl2aXNpYmxlIGJ5IFNRVUFSRV9TSVpFICEhIVxyXG5leHBvcnQgY29uc3QgR0FNRV9IRUlHSFQgPSA0ODA7XHJcbmV4cG9ydCBjb25zdCBHQU1FX1dJRFRIID0gNzYwO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhFQURfUE9TSVRJT04gPSB7XHJcbiAgIC8vIG11c3QgYmUgZGl2aXNpYmxlIGJ5IFNRVUFSRV9TSVpFICEhIVxyXG4gICB4OiAxNjAsXHJcbiAgIHk6IDE2MCxcclxufTtcclxuZXhwb3J0IGNvbnN0IFNOQUtFX1NQRUVEX1BFUl9TRUMgPSA5O1xyXG5cclxuZXhwb3J0IGNvbnN0IENPTE9SUyA9IHtcclxuICAgYmFja2dyb3VuZDogJyNmZmYnLFxyXG4gICBoZWFkOiAnIzAwMDAwMCcsXHJcbiAgIHRhaWw6ICcjMGJkYjUwJyxcclxuICAgcG9pbnQ6ICcjZmYwMDAwJyxcclxufTtcclxuIiwiZXhwb3J0IGNsYXNzIExvY2FsU3RvcmFnZSB7XHJcbiAgIHB1YmxpYyBhZGRIaWdoc2NvcmUobmV3SGlnaHNjb3JlOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgbGV0IGhpZ2hzY29yZVZhbHVlID0gPHN0cmluZz5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaGlnaHNjb3JlJyk7XHJcbiAgICAgIGxldCBoaWdoc2NvcmUgPSA8c3RyaW5nPkpTT04ucGFyc2UoaGlnaHNjb3JlVmFsdWUpO1xyXG4gICAgICBpZiAoIWhpZ2hzY29yZSkge1xyXG4gICAgICAgICBoaWdoc2NvcmUgPSAnMCc7XHJcbiAgICAgIH1cclxuICAgICAgaGlnaHNjb3JlID0gbmV3SGlnaHNjb3JlLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaGlnaHNjb3JlJywgSlNPTi5zdHJpbmdpZnkoaGlnaHNjb3JlKSk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBnZXRIaWdoU2NvcmUoKTogbnVtYmVyIHtcclxuICAgICAgbGV0IGhpZ2hzY29yZVZhbHVlID0gPHN0cmluZz5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaGlnaHNjb3JlJyk7XHJcbiAgICAgIHJldHVybiA8bnVtYmVyPkpTT04ucGFyc2UoaGlnaHNjb3JlVmFsdWUpO1xyXG4gICB9XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9tYWluLnNjc3MnO1xyXG5pbXBvcnQgeyBHYW1lIH0gZnJvbSAnLi90cy9HYW1lJztcclxuXHJcbmNvbnN0IGdhbWUgPSBuZXcgR2FtZSgpO1xyXG5nYW1lLnN0YXJ0R2FtZSgpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9