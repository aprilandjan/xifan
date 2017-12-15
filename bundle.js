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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var DisplayEvent = /** @class */ (function () {
    function DisplayEvent() {
    }
    DisplayEvent.STAGE_RESIZE = 'stage-resize';
    DisplayEvent.ENTER_FRAME = 'enter-frame';
    return DisplayEvent;
}());
/* harmony default export */ __webpack_exports__["a"] = (DisplayEvent);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DisplayObject__ = __webpack_require__(2);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Container = /** @class */ (function (_super) {
    __extends(Container, _super);
    function Container() {
        var _this = _super.call(this) || this;
        _this._children = [];
        return _this;
    }
    Container.prototype.getChildIndex = function (child) {
        return this._children.indexOf(child);
    };
    Container.prototype.addChild = function (child) {
        var childIndex = this.getChildIndex(child);
        if (childIndex >= 0) {
            this._children.splice(childIndex, 1);
            this._children.push(child);
        }
        else {
            this._children.push(child);
        }
        child.parent = this;
    };
    Container.prototype.removeChild = function (child) {
        var childIndex = this.getChildIndex(child);
        if (childIndex >= 0) {
            this._children.splice(childIndex, 1);
            child.parent = null;
        }
    };
    Container.prototype.enterFrame = function (ctx) {
        this._children.forEach(function (child) {
            child.enterFrame(ctx);
        });
    };
    return Container;
}(__WEBPACK_IMPORTED_MODULE_0__DisplayObject__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (Container);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__events_EventDispatcher__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__events_DisplayEvent__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_Maths__ = __webpack_require__(3);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var DisplayObject = /** @class */ (function (_super) {
    __extends(DisplayObject, _super);
    function DisplayObject() {
        var _this = _super.call(this) || this;
        _this._x = 0;
        _this._y = 0;
        _this._rotation = 0;
        return _this;
    }
    Object.defineProperty(DisplayObject.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (val) {
            this._x = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DisplayObject.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (val) {
            this._y = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DisplayObject.prototype, "rotation", {
        get: function () {
            return this._rotation;
        },
        set: function (val) {
            this._rotation = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DisplayObject.prototype, "parent", {
        get: function () {
            return this._parent;
        },
        set: function (val) {
            this._parent = val;
        },
        enumerable: true,
        configurable: true
    });
    DisplayObject.prototype._getParents = function () {
        var parents = [];
        var p = this._parent;
        while (p) {
            parents.push(p);
            p = p.parent;
        }
        return parents;
    };
    //  called internally
    DisplayObject.prototype.enterFrame = function (ctx) {
        this.dispatch(__WEBPACK_IMPORTED_MODULE_1__events_DisplayEvent__["a" /* default */].ENTER_FRAME);
        var parents = this._getParents();
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.restore();
        parents.forEach(function (container) {
            ctx.translate(container.x, container.y);
            ctx.rotate(__WEBPACK_IMPORTED_MODULE_2__utils_Maths__["a" /* default */].degToRad(container.rotation));
        });
        ctx.translate(this._x, this._y);
        ctx.rotate(__WEBPACK_IMPORTED_MODULE_2__utils_Maths__["a" /* default */].degToRad(this._rotation));
        this.render(ctx);
    };
    DisplayObject.prototype.render = function (ctx) {
        // Todo: implied by subclasses
    };
    return DisplayObject;
}(__WEBPACK_IMPORTED_MODULE_0__events_EventDispatcher__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (DisplayObject);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var Maths = /** @class */ (function () {
    function Maths() {
    }
    Maths.radToDeg = function (rad) {
        return rad * 180 / Math.PI;
    };
    Maths.degToRad = function (deg) {
        return deg * Math.PI / 180;
    };
    return Maths;
}());
/* harmony default export */ __webpack_exports__["a"] = (Maths);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_display_Stage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_display_Container__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_ticker_Ticker__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Segment__ = __webpack_require__(8);




var stage = new __WEBPACK_IMPORTED_MODULE_0__core_display_Stage__["a" /* default */]('root');
console.log(stage);
var main = new __WEBPACK_IMPORTED_MODULE_1__core_display_Container__["a" /* default */]();
main.x = stage.width / 2;
main.y = stage.height / 2;
stage.addChild(main);
var seg1 = new __WEBPACK_IMPORTED_MODULE_3__Segment__["a" /* default */](200, 40);
main.addChild(seg1);
var seg2 = new __WEBPACK_IMPORTED_MODULE_3__Segment__["a" /* default */](200, 40);
main.addChild(seg2);
__WEBPACK_IMPORTED_MODULE_2__core_ticker_Ticker__["a" /* default */].register(function () {
    seg1.rotation += 1;
    var pin1 = seg1.getPin();
    seg2.x = pin1.x;
    seg2.y = pin1.y;
    seg2.rotation -= 0.5;
    stage.update();
});


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__events_DisplayEvent__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Container__ = __webpack_require__(1);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Stage = /** @class */ (function (_super) {
    __extends(Stage, _super);
    function Stage(rootId) {
        var _this = _super.call(this) || this;
        var rootEl = document.getElementById(rootId);
        if (!rootEl) {
            throw new Error("Root Element with id=" + rootId + " not found!");
        }
        _this._rootEl = rootEl;
        _this._initEvents();
        _this._initContexts();
        return _this;
    }
    Object.defineProperty(Stage.prototype, "width", {
        get: function () {
            return this._width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Stage.prototype, "height", {
        get: function () {
            return this._height;
        },
        enumerable: true,
        configurable: true
    });
    Stage.prototype._initContexts = function () {
        if (this._rootEl instanceof HTMLCanvasElement) {
            this._ctx = this._rootEl.getContext('2d');
        }
        //  save default ctx state
        this._ctx.setTransform(1, 0, 0, 1, 0, 0);
        this._ctx.save();
    };
    Stage.prototype._initEvents = function () {
        var _this = this;
        this.resize();
        window.addEventListener('resize', function () {
            _this.resize(true);
        });
    };
    Stage.prototype.resize = function (sendEvent) {
        if (sendEvent === void 0) { sendEvent = false; }
        var rect = this._rootEl.getBoundingClientRect();
        this._rootEl.width = this._width = rect.width;
        this._rootEl.height = this._height = rect.height;
        this.dispatch(__WEBPACK_IMPORTED_MODULE_0__events_DisplayEvent__["a" /* default */].STAGE_RESIZE);
    };
    Stage.prototype.update = function () {
        this._ctx.restore();
        this._ctx.setTransform(1, 0, 0, 1, 0, 0);
        this._ctx.clearRect(0, 0, this._width, this._height);
        this.enterFrame(this._ctx);
    };
    return Stage;
}(__WEBPACK_IMPORTED_MODULE_1__Container__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (Stage);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * 事件原型
 */
var EventDispatcher = /** @class */ (function () {
    function EventDispatcher() {
        //  已有的事件列表
        this._listeners = [];
    }
    /**
     * 查找是否有注册过的相同事件
     * @param eventName
     * @param callback
     * @param scope
     */
    EventDispatcher.prototype._findListener = function (eventName, callback, scope) {
        if (scope === void 0) { scope = null; }
        for (var i = 0; i < this._listeners.length; i++) {
            var listener = this._listeners[i];
            if (listener.type === eventName &&
                listener.callback === callback &&
                listener.scope === callback) {
                return listener;
            }
        }
    };
    /**
     * 派发事件
     * @param eventName
     * @param data
     */
    EventDispatcher.prototype.dispatch = function (eventName) {
        var data = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            data[_i - 1] = arguments[_i];
        }
        for (var i = 0; i < this._listeners.length; i++) {
            var listener = this._listeners[i];
            if (listener.type === eventName) {
                listener.callback.apply(listener.scope, data);
            }
        }
    };
    /**
     * 添加某一个事件侦听
     * @param eventName
     * @param callback
     * @param scope
     */
    EventDispatcher.prototype.addListener = function (eventName, callback, scope) {
        if (scope === void 0) { scope = null; }
        var existedListener = this._findListener(eventName, callback, scope);
        if (!existedListener) {
            this._listeners.push({
                type: eventName,
                callback: callback,
                scope: scope
            });
        }
    };
    /**
     * 移除某一个事件侦听
     * @param eventName
     * @param callback
     * @param scope
     */
    EventDispatcher.prototype.removeListener = function (eventName, callback, scope) {
        if (scope === void 0) { scope = null; }
        var existedListener = this._findListener(eventName, callback, scope);
        if (existedListener) {
            this._listeners.splice(this._listeners.indexOf(existedListener), 1);
        }
    };
    /**
     * 移除所有的事件侦听
     */
    EventDispatcher.prototype.removeAllListeners = function () {
        this._listeners.splice(0);
    };
    return EventDispatcher;
}());
/* harmony default export */ __webpack_exports__["a"] = (EventDispatcher);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//  总的每帧事件
var _raf = null;
var _cbList = [];
var _lastTickTime;
var _isPaused = false;
var _id = 0;
var _fpsInterval = 1000 / 60;
//  总的帧事件
function tick() {
    _raf = window.requestAnimationFrame(tick);
    var now = Date.now();
    //  tick duration
    var delta = now - _lastTickTime;
    if (delta >= _fpsInterval) {
        _lastTickTime = now;
        //  if paused, do not call tween tick
        if (!_isPaused) {
            _cbList.forEach(function (item, index) {
                item[0].call(item[1]);
            });
        }
    }
    if (!(_cbList.length)) {
        window.cancelAnimationFrame(_raf);
        _raf = null;
    }
}
var Ticker = /** @class */ (function () {
    function Ticker() {
    }
    Ticker.setFPS = function (fps) {
        _fpsInterval = Math.floor(1000 / fps);
    };
    Ticker.register = function (a, b) {
        if (b === void 0) { b = null; }
        for (var i = 0; i < _cbList.length; i++) {
            var item = _cbList[i];
            if (item instanceof Array && item[0] === a && item[1] === b) {
                return;
            }
        }
        _cbList.push([a, b]);
        //  start raf
        if (!_raf) {
            _lastTickTime = Date.now();
            _raf = window.requestAnimationFrame(tick);
        }
    };
    Ticker.unregister = function (a, b) {
        if (b === void 0) { b = null; }
        for (var i = 0; i < _cbList.length; i++) {
            var item = _cbList[i];
            if (item instanceof Array && item[0] === a && item[1] === b) {
                _cbList.splice(i, 1);
                return;
            }
        }
    };
    return Ticker;
}());
/* harmony default export */ __webpack_exports__["a"] = (Ticker);


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_display_DisplayObject__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_utils_Point__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_utils_Maths__ = __webpack_require__(3);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var Segment = /** @class */ (function (_super) {
    __extends(Segment, _super);
    function Segment(width, height, color) {
        if (color === void 0) { color = 'rgba(200, 200, 200, 0.9)'; }
        var _this = _super.call(this) || this;
        _this._width = width;
        _this._height = height;
        _this._color = color;
        return _this;
    }
    Segment.prototype.render = function (ctx) {
        //  BG
        var radius = this._height / 2;
        var halfPI = Math.PI / 2;
        ctx.fillStyle = this._color;
        ctx.beginPath();
        ctx.moveTo(0, -radius);
        ctx.lineTo(this._width, -radius);
        ctx.arc(this._width, 0, radius, -halfPI, halfPI);
        ctx.lineTo(0, radius);
        ctx.arc(0, 0, radius, halfPI, 3 * halfPI);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        //  2个PIN点
        var crossR = radius * 0.3;
        ctx.moveTo(-crossR, 0);
        ctx.lineTo(crossR, 0);
        ctx.moveTo(0, -crossR);
        ctx.lineTo(0, crossR);
        ctx.moveTo(this._width - crossR, 0);
        ctx.lineTo(this._width + crossR, 0);
        ctx.moveTo(this._width, -crossR);
        ctx.lineTo(this._width, crossR);
        ctx.stroke();
    };
    Segment.prototype.getPin = function () {
        var x = this.x + this._width * Math.cos(__WEBPACK_IMPORTED_MODULE_2__core_utils_Maths__["a" /* default */].degToRad(this.rotation));
        var y = this.y + this._width * Math.sin(__WEBPACK_IMPORTED_MODULE_2__core_utils_Maths__["a" /* default */].degToRad(this.rotation));
        return new __WEBPACK_IMPORTED_MODULE_1__core_utils_Point__["a" /* default */](x, y);
    };
    return Segment;
}(__WEBPACK_IMPORTED_MODULE_0__core_display_DisplayObject__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (Segment);


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var Point = /** @class */ (function () {
    function Point(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = x;
        this.y = y;
    }
    Point.distance = function (p1, p2) {
        return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
    };
    Point.prototype.distanceTo = function (p) {
        return Point.distance(this, p);
    };
    Point.prototype.toString = function () {
        return "Point(x=" + this.x + ", y=" + this.y;
    };
    return Point;
}());
/* harmony default export */ __webpack_exports__["a"] = (Point);


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZGM0N2M4MGE3MGEyMGIzMWU5NzEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvZXZlbnRzL0Rpc3BsYXlFdmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9kaXNwbGF5L0NvbnRhaW5lci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9kaXNwbGF5L0Rpc3BsYXlPYmplY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvdXRpbHMvTWF0aHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2Rpc3BsYXkvU3RhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvZXZlbnRzL0V2ZW50RGlzcGF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS90aWNrZXIvVGlja2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9TZWdtZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL3V0aWxzL1BvaW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUM3REE7SUFBQTtJQUdBLENBQUM7SUFGZSx5QkFBWSxHQUFVLGNBQWM7SUFDcEMsd0JBQVcsR0FBVSxhQUFhO0lBQ2xELG1C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Q0UsTUFBTSxDQUFDLGFBQVcsSUFBSSxDQUFDLENBQUMsWUFBTyxJQUFJLENBQUMsQ0FBRztJQUN6QyxDQUFDO0lBQ0gsWUFBQztBQUFELENBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZGM0N2M4MGE3MGEyMGIzMWU5NzEiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBEaXNwbGF5RXZlbnQge1xuICBwdWJsaWMgc3RhdGljIFNUQUdFX1JFU0laRTpzdHJpbmcgPSAnc3RhZ2UtcmVzaXplJ1xuICBwdWJsaWMgc3RhdGljIEVOVEVSX0ZSQU1FOnN0cmluZyA9ICdlbnRlci1mcmFtZSdcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29yZS9ldmVudHMvRGlzcGxheUV2ZW50LnRzIiwiaW1wb3J0IERpc3BsYXlPYmplY3QgZnJvbSAnLi9EaXNwbGF5T2JqZWN0J1xuaW1wb3J0IFN0YWdlIGZyb20gJy4vU3RhZ2UnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRhaW5lciBleHRlbmRzIERpc3BsYXlPYmplY3Qge1xuXG4gIHByb3RlY3RlZCBfY2hpbGRyZW46IERpc3BsYXlPYmplY3RbXSA9IFtdXG5cbiAgcHJvdGVjdGVkIF9wYXJlbnQ6IENvbnRhaW5lcjtcblxuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgc3VwZXIoKVxuICB9XG5cbiAgcHVibGljIGdldENoaWxkSW5kZXggKGNoaWxkOiBEaXNwbGF5T2JqZWN0KTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fY2hpbGRyZW4uaW5kZXhPZihjaGlsZClcbiAgfVxuXG4gIHB1YmxpYyBhZGRDaGlsZCAoY2hpbGQ6IERpc3BsYXlPYmplY3QpIHtcbiAgICBsZXQgY2hpbGRJbmRleCA9IHRoaXMuZ2V0Q2hpbGRJbmRleChjaGlsZClcbiAgICBpZiAoY2hpbGRJbmRleCA+PSAwKSB7XG4gICAgICB0aGlzLl9jaGlsZHJlbi5zcGxpY2UoY2hpbGRJbmRleCwgMSlcbiAgICAgIHRoaXMuX2NoaWxkcmVuLnB1c2goY2hpbGQpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2NoaWxkcmVuLnB1c2goY2hpbGQpXG4gICAgfVxuXG4gICAgY2hpbGQucGFyZW50ID0gdGhpc1xuICB9XG5cbiAgcHVibGljIHJlbW92ZUNoaWxkIChjaGlsZDogRGlzcGxheU9iamVjdCkge1xuICAgIGxldCBjaGlsZEluZGV4ID0gdGhpcy5nZXRDaGlsZEluZGV4KGNoaWxkKVxuICAgIGlmIChjaGlsZEluZGV4ID49IDApIHtcbiAgICAgIHRoaXMuX2NoaWxkcmVuLnNwbGljZShjaGlsZEluZGV4LCAxKVxuICAgICAgY2hpbGQucGFyZW50ID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBlbnRlckZyYW1lIChjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgIHRoaXMuX2NoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgY2hpbGQuZW50ZXJGcmFtZShjdHgpXG4gICAgfSlcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb3JlL2Rpc3BsYXkvQ29udGFpbmVyLnRzIiwiaW1wb3J0IEV2ZW50RGlzcGF0Y2hlciBmcm9tICcuLi9ldmVudHMvRXZlbnREaXNwYXRjaGVyJ1xuaW1wb3J0IERpc3BsYXlFdmVudCBmcm9tICcuLi9ldmVudHMvRGlzcGxheUV2ZW50J1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuL0NvbnRhaW5lcic7XG5pbXBvcnQgTWF0aHMgZnJvbSAnLi4vdXRpbHMvTWF0aHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpc3BsYXlPYmplY3QgZXh0ZW5kcyBFdmVudERpc3BhdGNoZXIge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgc3VwZXIoKVxuICB9XG5cbiAgcHJvdGVjdGVkIF94OiBudW1iZXIgPSAwO1xuXG4gIHByb3RlY3RlZCBfeTogbnVtYmVyID0gMDtcblxuICBwcm90ZWN0ZWQgX3JvdGF0aW9uOiBudW1iZXIgPSAwO1xuXG4gIHB1YmxpYyBnZXQgeCAoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5feDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgeCAodmFsOiBudW1iZXIpIHtcbiAgICB0aGlzLl94ID0gdmFsO1xuICB9XG5cbiAgcHVibGljIGdldCB5ICgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl95O1xuICB9XG5cbiAgcHVibGljIHNldCB5ICh2YWw6IG51bWJlcikge1xuICAgIHRoaXMuX3kgPSB2YWw7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHJvdGF0aW9uICgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9yb3RhdGlvbjtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgcm90YXRpb24gKHZhbDogbnVtYmVyKSB7XG4gICAgdGhpcy5fcm90YXRpb24gPSB2YWw7XG4gIH1cblxuICAvLz09PVxuICBwcm90ZWN0ZWQgX3BhcmVudDogQ29udGFpbmVyO1xuICBwdWJsaWMgZ2V0IHBhcmVudCAoKTogQ29udGFpbmVyIHtcbiAgICByZXR1cm4gdGhpcy5fcGFyZW50XG4gIH1cblxuICBwdWJsaWMgc2V0IHBhcmVudCAodmFsOiBDb250YWluZXIpIHtcbiAgICB0aGlzLl9wYXJlbnQgPSB2YWxcbiAgfVxuXG4gIHByaXZhdGUgX2dldFBhcmVudHMgKCk6Q29udGFpbmVyW10ge1xuICAgIGxldCBwYXJlbnRzOiBDb250YWluZXJbXSA9IFtdXG4gICAgbGV0IHAgPSB0aGlzLl9wYXJlbnRcbiAgICB3aGlsZSAocCkge1xuICAgICAgcGFyZW50cy5wdXNoKHApXG4gICAgICBwID0gcC5wYXJlbnRcbiAgICB9XG4gICAgcmV0dXJuIHBhcmVudHNcbiAgfVxuXG4gIC8vICBjYWxsZWQgaW50ZXJuYWxseVxuICBwdWJsaWMgZW50ZXJGcmFtZSAoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpOnZvaWQge1xuICAgIHRoaXMuZGlzcGF0Y2goRGlzcGxheUV2ZW50LkVOVEVSX0ZSQU1FKVxuICAgIGxldCBwYXJlbnRzOiBDb250YWluZXJbXSA9IHRoaXMuX2dldFBhcmVudHMoKVxuICAgIGN0eC5zZXRUcmFuc2Zvcm0oMSwgMCwgMCwgMSwgMCwgMClcbiAgICBjdHgucmVzdG9yZSgpXG4gICAgcGFyZW50cy5mb3JFYWNoKGNvbnRhaW5lciA9PiB7XG4gICAgICBjdHgudHJhbnNsYXRlKGNvbnRhaW5lci54LCBjb250YWluZXIueSlcbiAgICAgIGN0eC5yb3RhdGUoTWF0aHMuZGVnVG9SYWQoY29udGFpbmVyLnJvdGF0aW9uKSlcbiAgICB9KVxuXG4gICAgY3R4LnRyYW5zbGF0ZSh0aGlzLl94LCB0aGlzLl95KVxuICAgIGN0eC5yb3RhdGUoTWF0aHMuZGVnVG9SYWQodGhpcy5fcm90YXRpb24pKVxuXG4gICAgdGhpcy5yZW5kZXIoY3R4KVxuICB9XG5cbiAgcHVibGljIHJlbmRlciAoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcbiAgICAvLyBUb2RvOiBpbXBsaWVkIGJ5IHN1YmNsYXNzZXNcbiAgfVxufSBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29yZS9kaXNwbGF5L0Rpc3BsYXlPYmplY3QudHMiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNYXRocyB7XG4gIHB1YmxpYyBzdGF0aWMgcmFkVG9EZWcgKHJhZDogbnVtYmVyKSB7XG4gICAgcmV0dXJuIHJhZCAqIDE4MCAvIE1hdGguUElcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZGVnVG9SYWQgKGRlZzogbnVtYmVyKSB7XG4gICAgcmV0dXJuIGRlZyAqIE1hdGguUEkgLyAxODBcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb3JlL3V0aWxzL01hdGhzLnRzIiwiaW1wb3J0IFN0YWdlIGZyb20gJy4vY29yZS9kaXNwbGF5L1N0YWdlJ1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuL2NvcmUvZGlzcGxheS9Db250YWluZXInXG5pbXBvcnQgVGlja2VyIGZyb20gJy4vY29yZS90aWNrZXIvVGlja2VyJ1xuaW1wb3J0IFNlZ21lbnQgZnJvbSAnLi9TZWdtZW50J1xuaW1wb3J0IFBvaW50IGZyb20gJy4vY29yZS91dGlscy9Qb2ludCc7XG5cbmNvbnN0IHN0YWdlOlN0YWdlID0gbmV3IFN0YWdlKCdyb290JylcbmNvbnNvbGUubG9nKHN0YWdlKVxuXG5jb25zdCBtYWluOiBDb250YWluZXIgPSBuZXcgQ29udGFpbmVyKClcbm1haW4ueCA9IHN0YWdlLndpZHRoIC8gMlxubWFpbi55ID0gc3RhZ2UuaGVpZ2h0IC8gMlxuc3RhZ2UuYWRkQ2hpbGQobWFpbilcblxuY29uc3Qgc2VnMSA9IG5ldyBTZWdtZW50KDIwMCwgNDApXG5tYWluLmFkZENoaWxkKHNlZzEpXG5cbmNvbnN0IHNlZzIgPSBuZXcgU2VnbWVudCgyMDAsIDQwKVxubWFpbi5hZGRDaGlsZChzZWcyKVxuXG5UaWNrZXIucmVnaXN0ZXIoKCkgPT4ge1xuICBzZWcxLnJvdGF0aW9uICs9IDFcbiAgbGV0IHBpbjE6UG9pbnQgPSBzZWcxLmdldFBpbigpXG4gIHNlZzIueCA9IHBpbjEueFxuICBzZWcyLnkgPSBwaW4xLnlcblxuICBzZWcyLnJvdGF0aW9uIC09IDAuNVxuXG4gIHN0YWdlLnVwZGF0ZSgpXG59KVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC50cyIsImltcG9ydCBFdmVudERpc3BhdGNoZXIgZnJvbSAnLi4vZXZlbnRzL0V2ZW50RGlzcGF0Y2hlcidcbmltcG9ydCBEaXNwbGF5RXZlbnQgZnJvbSAnLi4vZXZlbnRzL0Rpc3BsYXlFdmVudCdcbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi9Db250YWluZXInXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YWdlIGV4dGVuZHMgQ29udGFpbmVyIHtcblxuICBwcml2YXRlIF9yb290RWw6IEhUTUxDYW52YXNFbGVtZW50O1xuICBwcml2YXRlIF93aWR0aDogbnVtYmVyO1xuICBwdWJsaWMgZ2V0IHdpZHRoICgpIHtcbiAgICByZXR1cm4gdGhpcy5fd2lkdGhcbiAgfVxuXG4gIHByaXZhdGUgX2hlaWdodDogbnVtYmVyO1xuICBwdWJsaWMgZ2V0IGhlaWdodCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hlaWdodFxuICB9XG5cbiAgcHJpdmF0ZSBfY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG5cbiAgY29uc3RydWN0b3IgKHJvb3RJZDogc3RyaW5nKSB7XG4gICAgc3VwZXIoKVxuXG4gICAgbGV0IHJvb3RFbDogSFRNTENhbnZhc0VsZW1lbnQgPSA8SFRNTENhbnZhc0VsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocm9vdElkKVxuICAgIGlmICghcm9vdEVsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFJvb3QgRWxlbWVudCB3aXRoIGlkPSR7cm9vdElkfSBub3QgZm91bmQhYClcbiAgICB9XG5cbiAgICB0aGlzLl9yb290RWwgPSByb290RWxcblxuICAgIHRoaXMuX2luaXRFdmVudHMoKVxuICAgIHRoaXMuX2luaXRDb250ZXh0cygpXG4gIH1cblxuICBwcml2YXRlIF9pbml0Q29udGV4dHMgKCk6dm9pZCB7XG4gICAgaWYgKHRoaXMuX3Jvb3RFbCBpbnN0YW5jZW9mIEhUTUxDYW52YXNFbGVtZW50KSB7XG4gICAgICB0aGlzLl9jdHggPSAoPEhUTUxDYW52YXNFbGVtZW50PnRoaXMuX3Jvb3RFbCkuZ2V0Q29udGV4dCgnMmQnKVxuICAgIH1cbiAgICAvLyAgc2F2ZSBkZWZhdWx0IGN0eCBzdGF0ZVxuICAgIHRoaXMuX2N0eC5zZXRUcmFuc2Zvcm0oMSwgMCwgMCwgMSwgMCwgMClcbiAgICB0aGlzLl9jdHguc2F2ZSgpXG4gIH1cblxuICBwcml2YXRlIF9pbml0RXZlbnRzICgpOnZvaWQge1xuICAgIHRoaXMucmVzaXplKClcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgICAgdGhpcy5yZXNpemUodHJ1ZSlcbiAgICB9KVxuICB9XG5cbiAgcHVibGljIHJlc2l6ZSAoc2VuZEV2ZW50OiBib29sZWFuID0gZmFsc2UpOnZvaWQge1xuICAgIGxldCByZWN0ID0gdGhpcy5fcm9vdEVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgdGhpcy5fcm9vdEVsLndpZHRoID0gdGhpcy5fd2lkdGggPSByZWN0LndpZHRoXG4gICAgdGhpcy5fcm9vdEVsLmhlaWdodCA9IHRoaXMuX2hlaWdodCA9IHJlY3QuaGVpZ2h0XG4gICAgdGhpcy5kaXNwYXRjaChEaXNwbGF5RXZlbnQuU1RBR0VfUkVTSVpFKVxuICB9XG5cbiAgcHVibGljIHVwZGF0ZSAoKTp2b2lkIHtcbiAgICB0aGlzLl9jdHgucmVzdG9yZSgpXG4gICAgdGhpcy5fY3R4LnNldFRyYW5zZm9ybSgxLCAwLCAwLCAxLCAwLCAwKVxuICAgIHRoaXMuX2N0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5fd2lkdGgsIHRoaXMuX2hlaWdodClcbiAgICB0aGlzLmVudGVyRnJhbWUodGhpcy5fY3R4KVxuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvcmUvZGlzcGxheS9TdGFnZS50cyIsIi8qKlxuICog5LqL5Lu25Y6f5Z6LXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50RGlzcGF0Y2hlciB7XG4gIFxuICAvLyAg5bey5pyJ55qE5LqL5Lu25YiX6KGoXG4gIHByaXZhdGUgX2xpc3RlbmVyczogYW55W10gPSBbXVxuICBcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIFxuICB9XG5cbiAgLyoqXG4gICAqIOafpeaJvuaYr+WQpuacieazqOWGjOi/h+eahOebuOWQjOS6i+S7tlxuICAgKiBAcGFyYW0gZXZlbnROYW1lIFxuICAgKiBAcGFyYW0gY2FsbGJhY2sgXG4gICAqIEBwYXJhbSBzY29wZSBcbiAgICovXG4gIHByaXZhdGUgX2ZpbmRMaXN0ZW5lciAoZXZlbnROYW1lOiBzdHJpbmcsIGNhbGxiYWNrOiBGdW5jdGlvbiwgc2NvcGU6IGFueSA9IG51bGwpOnZvaWQge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fbGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgbGlzdGVuZXIgPSB0aGlzLl9saXN0ZW5lcnNbaV1cbiAgICAgIGlmIChsaXN0ZW5lci50eXBlID09PSBldmVudE5hbWUgJiYgXG4gICAgICAgIGxpc3RlbmVyLmNhbGxiYWNrID09PSBjYWxsYmFjayAmJiBcbiAgICAgICAgbGlzdGVuZXIuc2NvcGUgPT09IGNhbGxiYWNrKSB7XG4gICAgICAgICAgcmV0dXJuIGxpc3RlbmVyXG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog5rS+5Y+R5LqL5Lu2XG4gICAqIEBwYXJhbSBldmVudE5hbWUgXG4gICAqIEBwYXJhbSBkYXRhXG4gICAqL1xuICBwdWJsaWMgZGlzcGF0Y2ggKGV2ZW50TmFtZTogc3RyaW5nLCAuLi5kYXRhOiBhbnlbXSk6dm9pZCB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9saXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBsaXN0ZW5lciA9IHRoaXMuX2xpc3RlbmVyc1tpXVxuICAgICAgaWYgKGxpc3RlbmVyLnR5cGUgPT09IGV2ZW50TmFtZSkge1xuICAgICAgICAgIGxpc3RlbmVyLmNhbGxiYWNrLmFwcGx5KGxpc3RlbmVyLnNjb3BlLCBkYXRhKVxuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOa3u+WKoOafkOS4gOS4quS6i+S7tuS+puWQrFxuICAgKiBAcGFyYW0gZXZlbnROYW1lIFxuICAgKiBAcGFyYW0gY2FsbGJhY2sgXG4gICAqIEBwYXJhbSBzY29wZSBcbiAgICovXG4gIHB1YmxpYyBhZGRMaXN0ZW5lciAoZXZlbnROYW1lOiBzdHJpbmcsIGNhbGxiYWNrOiBGdW5jdGlvbiwgc2NvcGU6IGFueSA9IG51bGwpOnZvaWQge1xuICAgIGxldCBleGlzdGVkTGlzdGVuZXIgPSB0aGlzLl9maW5kTGlzdGVuZXIoZXZlbnROYW1lLCBjYWxsYmFjaywgc2NvcGUpXG4gICAgaWYgKCFleGlzdGVkTGlzdGVuZXIpIHtcbiAgICAgIHRoaXMuX2xpc3RlbmVycy5wdXNoKHtcbiAgICAgICAgdHlwZTogZXZlbnROYW1lLFxuICAgICAgICBjYWxsYmFjayxcbiAgICAgICAgc2NvcGVcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOenu+mZpOafkOS4gOS4quS6i+S7tuS+puWQrFxuICAgKiBAcGFyYW0gZXZlbnROYW1lIFxuICAgKiBAcGFyYW0gY2FsbGJhY2sgXG4gICAqIEBwYXJhbSBzY29wZSBcbiAgICovXG4gIHB1YmxpYyByZW1vdmVMaXN0ZW5lciAoZXZlbnROYW1lOiBzdHJpbmcsIGNhbGxiYWNrOiBGdW5jdGlvbiwgc2NvcGU6IGFueSA9IG51bGwpOnZvaWQge1xuICAgIGxldCBleGlzdGVkTGlzdGVuZXIgPSB0aGlzLl9maW5kTGlzdGVuZXIoZXZlbnROYW1lLCBjYWxsYmFjaywgc2NvcGUpXG4gICAgaWYgKGV4aXN0ZWRMaXN0ZW5lcikge1xuICAgICAgdGhpcy5fbGlzdGVuZXJzLnNwbGljZSh0aGlzLl9saXN0ZW5lcnMuaW5kZXhPZihleGlzdGVkTGlzdGVuZXIpLCAxKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDnp7vpmaTmiYDmnInnmoTkuovku7bkvqblkKxcbiAgICovXG4gIHB1YmxpYyByZW1vdmVBbGxMaXN0ZW5lcnMgKCkge1xuICAgIHRoaXMuX2xpc3RlbmVycy5zcGxpY2UoMClcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb3JlL2V2ZW50cy9FdmVudERpc3BhdGNoZXIudHMiLCIvLyAg5oC755qE5q+P5bin5LqL5Lu2XG5cbnZhciBfcmFmOm51bWJlciA9IG51bGxcbnZhciBfY2JMaXN0OmFueVtdID0gW11cbnZhciBfbGFzdFRpY2tUaW1lOiBudW1iZXJcbnZhciBfaXNQYXVzZWQ6IEJvb2xlYW4gPSBmYWxzZVxudmFyIF9pZDpudW1iZXIgPSAwXG52YXIgX2Zwc0ludGVydmFsOiBudW1iZXIgPSAxMDAwIC8gNjBcblxuLy8gIOaAu+eahOW4p+S6i+S7tlxuZnVuY3Rpb24gdGljayAoKTp2b2lkIHtcbiAgX3JhZiA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGljaylcbiAgdmFyIG5vdyA9IERhdGUubm93KClcbiAgLy8gIHRpY2sgZHVyYXRpb25cbiAgdmFyIGRlbHRhID0gbm93IC0gX2xhc3RUaWNrVGltZVxuICBpZiAoZGVsdGEgPj0gX2Zwc0ludGVydmFsKSB7XG4gICAgX2xhc3RUaWNrVGltZSA9IG5vd1xuICAgIC8vICBpZiBwYXVzZWQsIGRvIG5vdCBjYWxsIHR3ZWVuIHRpY2tcbiAgICBpZiAoIV9pc1BhdXNlZCkge1xuICAgICAgX2NiTGlzdC5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICBpdGVtWzBdLmNhbGwoaXRlbVsxXSlcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgaWYgKCEoX2NiTGlzdC5sZW5ndGgpKSB7XG4gICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKF9yYWYpXG4gICAgX3JhZiA9IG51bGxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWNrZXIge1xuICBwdWJsaWMgc3RhdGljIHNldEZQUyAoZnBzOiBudW1iZXIpIHtcbiAgICBfZnBzSW50ZXJ2YWwgPSBNYXRoLmZsb29yKDEwMDAgLyBmcHMpXG4gIH1cblxuICBwdWJsaWMgc3RhdGljIHJlZ2lzdGVyIChhOiBGdW5jdGlvbiwgYjogYW55ID0gbnVsbCk6dm9pZCB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBfY2JMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IF9jYkxpc3RbaV1cbiAgICAgIGlmIChpdGVtIGluc3RhbmNlb2YgQXJyYXkgJiYgaXRlbVswXSA9PT0gYSAmJiBpdGVtWzFdID09PSBiKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cbiAgICBfY2JMaXN0LnB1c2goW2EsIGJdKVxuXG4gICAgLy8gIHN0YXJ0IHJhZlxuICAgIGlmKCFfcmFmKXtcbiAgICAgIF9sYXN0VGlja1RpbWUgPSBEYXRlLm5vdygpXG4gICAgICBfcmFmID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aWNrKVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgdW5yZWdpc3RlciAoYTogRnVuY3Rpb24sIGI6IGFueSA9IG51bGwpOnZvaWQge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgX2NiTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBfY2JMaXN0W2ldXG4gICAgICBpZiAoaXRlbSBpbnN0YW5jZW9mIEFycmF5ICYmIGl0ZW1bMF0gPT09IGEgJiYgaXRlbVsxXSA9PT0gYikge1xuICAgICAgICBfY2JMaXN0LnNwbGljZShpLCAxKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29yZS90aWNrZXIvVGlja2VyLnRzIiwiaW1wb3J0IERpc3BsYXlPYmplY3QgZnJvbSAnLi9jb3JlL2Rpc3BsYXkvRGlzcGxheU9iamVjdCdcbmltcG9ydCBQb2ludCBmcm9tICcuL2NvcmUvdXRpbHMvUG9pbnQnXG5pbXBvcnQgTWF0aHMgZnJvbSAnLi9jb3JlL3V0aWxzL01hdGhzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWdtZW50IGV4dGVuZHMgRGlzcGxheU9iamVjdCB7XG5cbiAgcHJpdmF0ZSBfd2lkdGg6IG51bWJlcjtcbiAgcHJpdmF0ZSBfaGVpZ2h0OiBudW1iZXI7XG4gIHByaXZhdGUgX2NvbG9yOiBhbnk7XG5cbiAgY29uc3RydWN0b3IgKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBjb2xvcjogYW55ID0gJ3JnYmEoMjAwLCAyMDAsIDIwMCwgMC45KScpIHtcbiAgICBzdXBlcigpXG5cbiAgICB0aGlzLl93aWR0aCA9IHdpZHRoXG4gICAgdGhpcy5faGVpZ2h0ID0gaGVpZ2h0XG4gICAgdGhpcy5fY29sb3IgPSBjb2xvclxuICB9XG5cbiAgcmVuZGVyIChjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgIC8vICBCR1xuICAgIGxldCByYWRpdXMgPSB0aGlzLl9oZWlnaHQgLyAyXG4gICAgbGV0IGhhbGZQSSA9IE1hdGguUEkgLyAyXG4gICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuX2NvbG9yXG4gICAgY3R4LmJlZ2luUGF0aCgpXG4gICAgY3R4Lm1vdmVUbygwLCAtcmFkaXVzKVxuICAgIGN0eC5saW5lVG8odGhpcy5fd2lkdGgsIC1yYWRpdXMpXG4gICAgY3R4LmFyYyh0aGlzLl93aWR0aCwgMCwgcmFkaXVzLCAtaGFsZlBJLCBoYWxmUEkpXG4gICAgY3R4LmxpbmVUbygwLCByYWRpdXMpXG4gICAgY3R4LmFyYygwLCAwLCByYWRpdXMsIGhhbGZQSSwgMyAqIGhhbGZQSSlcbiAgICBjdHguY2xvc2VQYXRoKClcbiAgICBjdHguZmlsbCgpXG4gICAgY3R4LnN0cm9rZSgpXG5cbiAgICAvLyAgMuS4qlBJTueCuVxuICAgIGxldCBjcm9zc1IgPSByYWRpdXMgKiAwLjNcblxuICAgIGN0eC5tb3ZlVG8oLWNyb3NzUiwgMClcbiAgICBjdHgubGluZVRvKGNyb3NzUiwgMClcblxuICAgIGN0eC5tb3ZlVG8oMCwgLWNyb3NzUilcbiAgICBjdHgubGluZVRvKDAsIGNyb3NzUilcblxuICAgIGN0eC5tb3ZlVG8odGhpcy5fd2lkdGggLSBjcm9zc1IsIDApXG4gICAgY3R4LmxpbmVUbyh0aGlzLl93aWR0aCArIGNyb3NzUiwgMClcblxuICAgIGN0eC5tb3ZlVG8odGhpcy5fd2lkdGgsIC1jcm9zc1IpXG4gICAgY3R4LmxpbmVUbyh0aGlzLl93aWR0aCwgY3Jvc3NSKVxuXG4gICAgY3R4LnN0cm9rZSgpXG4gIH1cblxuICBwdWJsaWMgZ2V0UGluICgpOiBQb2ludCB7XG4gICAgbGV0IHggPSB0aGlzLnggKyB0aGlzLl93aWR0aCAqIE1hdGguY29zKE1hdGhzLmRlZ1RvUmFkKHRoaXMucm90YXRpb24pKVxuICAgIGxldCB5ID0gdGhpcy55ICsgdGhpcy5fd2lkdGggKiBNYXRoLnNpbihNYXRocy5kZWdUb1JhZCh0aGlzLnJvdGF0aW9uKSlcbiAgICByZXR1cm4gbmV3IFBvaW50KHgsIHkpXG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvU2VnbWVudC50cyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvaW50IHtcblxuICBwdWJsaWMgc3RhdGljIGRpc3RhbmNlIChwMTogUG9pbnQsIHAyOiBQb2ludCk6bnVtYmVyIHtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KHAxLnggLSBwMi54LCAyKSArIE1hdGgucG93KHAxLnkgLSBwMi55LCAyKSlcbiAgfVxuXG4gIHB1YmxpYyB4OiBudW1iZXJcbiAgcHVibGljIHk6IG51bWJlclxuICBcbiAgcHVibGljIGNvbnN0cnVjdG9yICh4OiBudW1iZXIgPSAwLCB5OiBudW1iZXIgPSAwKSB7XG4gICAgdGhpcy54ID0geFxuICAgIHRoaXMueSA9IHlcbiAgfVxuXG4gIHB1YmxpYyBkaXN0YW5jZVRvIChwOiBQb2ludCk6bnVtYmVyIHtcbiAgICByZXR1cm4gUG9pbnQuZGlzdGFuY2UodGhpcywgcClcbiAgfVxuXG4gIHB1YmxpYyB0b1N0cmluZyAoKTpzdHJpbmcge1xuICAgIHJldHVybiBgUG9pbnQoeD0ke3RoaXMueH0sIHk9JHt0aGlzLnl9YFxuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvcmUvdXRpbHMvUG9pbnQudHMiXSwic291cmNlUm9vdCI6IiJ9