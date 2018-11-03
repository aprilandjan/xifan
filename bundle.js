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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_display_Container__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_events_DisplayEvent__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_events_MouseEvent__ = __webpack_require__(11);
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



var Chapter = /** @class */ (function (_super) {
    __extends(Chapter, _super);
    function Chapter() {
        var _this = _super.call(this) || this;
        _this.sceneIndex = 0;
        _this.sceneCount = 1;
        _this.addListener(__WEBPACK_IMPORTED_MODULE_1__core_events_DisplayEvent__["a" /* default */].ADD_TO_STAGE, _this.onAdded, _this);
        _this.addListener(__WEBPACK_IMPORTED_MODULE_1__core_events_DisplayEvent__["a" /* default */].REMOVE_FROM_STAGE, _this.onRemoved, _this);
        return _this;
    }
    Chapter.prototype.onAdded = function () {
        this.init();
    };
    Chapter.prototype.onRemoved = function () {
        this.dispose();
    };
    Chapter.prototype.init = function () {
        this.addListener(__WEBPACK_IMPORTED_MODULE_1__core_events_DisplayEvent__["a" /* default */].ENTER_FRAME, this.onTick, this);
        this.stage.addListener(__WEBPACK_IMPORTED_MODULE_2__core_events_MouseEvent__["a" /* default */].MOUSE_MOVE, this.onMouseMove, this);
    };
    Chapter.prototype.dispose = function () {
        this.removeListener(__WEBPACK_IMPORTED_MODULE_1__core_events_DisplayEvent__["a" /* default */].ENTER_FRAME, this.onTick, this);
        this.stage.removeListener(__WEBPACK_IMPORTED_MODULE_2__core_events_MouseEvent__["a" /* default */].MOUSE_MOVE, this.onMouseMove, this);
    };
    Chapter.prototype.nextScene = function () {
        this.sceneIndex += 1;
        console.log('next scene:', this.sceneIndex);
        this.switchScene(this.sceneIndex);
    };
    Chapter.prototype.onMouseMove = function (e) {
        // override by subclasses
    };
    Chapter.prototype.onTick = function () {
        // override by subclasses
    };
    Chapter.prototype.switchScene = function (index) {
        // override by subclasses
    };
    return Chapter;
}(__WEBPACK_IMPORTED_MODULE_0__core_display_Container__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (Chapter);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_display_DisplayObject__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_utils_Point__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_utils_Maths__ = __webpack_require__(4);
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
        if (width === void 0) { width = 200; }
        if (height === void 0) { height = 40; }
        if (color === void 0) { color = 'rgba(200, 200, 200, 0.9)'; }
        var _this = _super.call(this) || this;
        _this.vx = 0;
        _this.vy = 0;
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
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Slider__ = __webpack_require__(18);

var rootEl = document.querySelector('.controls');
var Controls = /** @class */ (function () {
    function Controls() {
    }
    Controls.getSlider = function (label, key, value, min, max, step) {
        if (step === void 0) { step = 0.1; }
        return new __WEBPACK_IMPORTED_MODULE_0__Slider__["a" /* default */](label, key, value, min, max, step);
    };
    Controls.removeAll = function () {
        rootEl.innerHTML = '';
    };
    Controls.rootEl = rootEl;
    return Controls;
}());
/* harmony default export */ __webpack_exports__["a"] = (Controls);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__events_EventDispatcher__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__events_DisplayEvent__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_Maths__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Stage__ = __webpack_require__(9);
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
        //  whether the display object is on the stage and needed to be rendered
        _this._onStage = false;
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
            var parents = this._getParents();
            var rootParent = parents[0];
            var onStage;
            if (rootParent instanceof __WEBPACK_IMPORTED_MODULE_3__Stage__["a" /* default */]) {
                onStage = true;
                this._stage = rootParent;
            }
            if (onStage !== this._onStage) {
                if (onStage) {
                    this.dispatch(new __WEBPACK_IMPORTED_MODULE_1__events_DisplayEvent__["a" /* default */](__WEBPACK_IMPORTED_MODULE_1__events_DisplayEvent__["a" /* default */].ADD_TO_STAGE, this));
                }
                else {
                    this.dispatch(new __WEBPACK_IMPORTED_MODULE_1__events_DisplayEvent__["a" /* default */](__WEBPACK_IMPORTED_MODULE_1__events_DisplayEvent__["a" /* default */].REMOVE_FROM_STAGE, this));
                }
            }
            if (!onStage) {
                this._stage = undefined;
            }
            this._onStage = onStage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DisplayObject.prototype, "stage", {
        get: function () {
            return this._stage;
        },
        enumerable: true,
        configurable: true
    });
    DisplayObject.prototype._getParents = function () {
        var parents = [];
        var p = this._parent;
        while (p) {
            parents.unshift(p);
            p = p.parent;
        }
        return parents;
    };
    //  called internally
    DisplayObject.prototype.enterFrame = function (ctx) {
        this.dispatch(new __WEBPACK_IMPORTED_MODULE_1__events_DisplayEvent__["a" /* default */](__WEBPACK_IMPORTED_MODULE_1__events_DisplayEvent__["a" /* default */].ENTER_FRAME, this));
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
/* 4 */
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
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Event__ = __webpack_require__(6);
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

var DisplayEvent = /** @class */ (function (_super) {
    __extends(DisplayEvent, _super);
    function DisplayEvent(type, target) {
        return _super.call(this, type, target) || this;
    }
    DisplayEvent.STAGE_RESIZE = 'stage_resize';
    DisplayEvent.ENTER_FRAME = 'enter_frame';
    DisplayEvent.ADD_TO_STAGE = 'add_to_stage';
    DisplayEvent.REMOVE_FROM_STAGE = 'remove_from_stage';
    return DisplayEvent;
}(__WEBPACK_IMPORTED_MODULE_0__Event__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (DisplayEvent);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var Event = /** @class */ (function () {
    function Event(type, target) {
        var data = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            data[_i - 2] = arguments[_i];
        }
        this._type = type;
        this._target = target;
        this._data = data;
    }
    Object.defineProperty(Event.prototype, "type", {
        get: function () {
            return this._type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Event.prototype, "target", {
        get: function () {
            return this._target;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Event.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: true,
        configurable: true
    });
    return Event;
}());
/* harmony default export */ __webpack_exports__["a"] = (Event);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DisplayObject__ = __webpack_require__(3);
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
    Container.prototype.getChildAt = function (index) {
        return this._children[index];
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
        _super.prototype.enterFrame.call(this, ctx);
        this._children.forEach(function (child) {
            child.enterFrame(ctx);
        });
    };
    return Container;
}(__WEBPACK_IMPORTED_MODULE_0__DisplayObject__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (Container);


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var Sinewave = /** @class */ (function () {
    function Sinewave(initPhase, phaseInc, amplitude) {
        if (initPhase === void 0) { initPhase = 0; }
        if (phaseInc === void 0) { phaseInc = 0.1; }
        if (amplitude === void 0) { amplitude = 1; }
        this.phaseDeg = initPhase;
        this.phaseInc = phaseInc;
        this.amplitude = amplitude;
        this._value = this.amplitude * Math.sin(this.phaseDeg);
    }
    Object.defineProperty(Sinewave.prototype, "value", {
        //  output value
        get: function () {
            return this._value;
        },
        enumerable: true,
        configurable: true
    });
    Sinewave.prototype.update = function () {
        this.phaseDeg += this.phaseInc;
        this._value = this.amplitude * Math.sin(this.phaseDeg);
    };
    Sinewave.prototype.getOffsetValue = function (offsetPhaseDeg) {
        return this.amplitude * Math.sin(this.phaseDeg + offsetPhaseDeg);
    };
    return Sinewave;
}());
/* harmony default export */ __webpack_exports__["a"] = (Sinewave);


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__events_DisplayEvent__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Container__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__events_MouseEvent__ = __webpack_require__(11);
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
        // Todo: 先只给 stage 派发鼠标事件
        window.addEventListener('mousemove', function (e) {
            _this.dispatch(new __WEBPACK_IMPORTED_MODULE_2__events_MouseEvent__["a" /* default */](__WEBPACK_IMPORTED_MODULE_2__events_MouseEvent__["a" /* default */].MOUSE_MOVE, _this, e.offsetX, e.offsetY));
        });
    };
    Stage.prototype.resize = function (sendEvent) {
        if (sendEvent === void 0) { sendEvent = false; }
        var rect = this._rootEl.getBoundingClientRect();
        this._rootEl.width = this._width = rect.width;
        this._rootEl.height = this._height = rect.height;
        this.dispatch(new __WEBPACK_IMPORTED_MODULE_0__events_DisplayEvent__["a" /* default */](__WEBPACK_IMPORTED_MODULE_0__events_DisplayEvent__["a" /* default */].STAGE_RESIZE, this));
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
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Event__ = __webpack_require__(6);

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
                listener.scope === scope) {
                return listener;
            }
        }
    };
    /**
     * 用事件名直接派发事件
     * @param eventName
     * @param data
     */
    EventDispatcher.prototype.dispatchWith = function (eventName) {
        var data = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            data[_i - 1] = arguments[_i];
        }
        for (var i = 0; i < this._listeners.length; i++) {
            var listener = this._listeners[i];
            if (listener.type === eventName) {
                listener.callback.call(listener.scope, new (__WEBPACK_IMPORTED_MODULE_0__Event__["a" /* default */].bind.apply(__WEBPACK_IMPORTED_MODULE_0__Event__["a" /* default */], [void 0, eventName, this].concat(data)))());
            }
        }
    };
    /**
     * 派发事件
     * @param event
     */
    EventDispatcher.prototype.dispatch = function (event) {
        for (var i = 0; i < this._listeners.length; i++) {
            var listener = this._listeners[i];
            if (listener.type === event.type) {
                listener.callback.call(listener.scope, event);
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
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Event__ = __webpack_require__(6);
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

var MouseEvent = /** @class */ (function (_super) {
    __extends(MouseEvent, _super);
    function MouseEvent(type, target, stageX, stageY) {
        var _this = _super.call(this, type, target) || this;
        _this.stageX = stageX;
        _this.stageY = stageY;
        return _this;
    }
    MouseEvent.MOUSE_MOVE = 'mouse_move';
    return MouseEvent;
}(__WEBPACK_IMPORTED_MODULE_0__Event__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (MouseEvent);


/***/ }),
/* 12 */
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


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_display_DisplayObject__ = __webpack_require__(3);
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

var Ground = /** @class */ (function (_super) {
    __extends(Ground, _super);
    function Ground() {
        var _this = _super.call(this) || this;
        _this.height = 50;
        _this.height = 50;
        return _this;
    }
    Ground.prototype.render = function (ctx) {
        ctx.fillStyle = '#6F4E37';
        var w = this.stage.width;
        ctx.fillRect(-w / 2, 0, w, this.height);
        ctx.beginPath();
        ctx.moveTo(-w / 2, 0);
        ctx.lineTo(w / 2, 0);
        ctx.closePath();
        ctx.stroke();
        var n = Math.ceil(w / 50) + 1;
        for (var i = 0; i < n; i++) {
            ctx.beginPath();
            ctx.moveTo((i + 1) * 50 - w / 2, 0);
            ctx.lineTo(i * 50 - w / 2, this.height);
            ctx.closePath();
            ctx.stroke();
        }
    };
    return Ground;
}(__WEBPACK_IMPORTED_MODULE_0__core_display_DisplayObject__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (Ground);


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_display_Stage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_display_Container__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_ticker_Ticker__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_chapter1_one_segment__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__views_chapter2_two_segment__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__views_chapter3_start_walk__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Controls__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__views_chapter4_walk_with_2_legs__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__views_chapter5_walk_on_the_ground__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__views_chapter6_fetch_play__ = __webpack_require__(22);










var stage = new __WEBPACK_IMPORTED_MODULE_0__core_display_Stage__["a" /* default */]('root');
var main = new __WEBPACK_IMPORTED_MODULE_1__core_display_Container__["a" /* default */]();
main.x = stage.width / 2;
main.y = stage.height / 2;
stage.addChild(main);
__WEBPACK_IMPORTED_MODULE_2__core_ticker_Ticker__["a" /* default */].register(function () {
    stage.update();
});
var chapterMap = {
    1: __WEBPACK_IMPORTED_MODULE_3__views_chapter1_one_segment__["a" /* default */],
    2: __WEBPACK_IMPORTED_MODULE_4__views_chapter2_two_segment__["a" /* default */],
    3: __WEBPACK_IMPORTED_MODULE_5__views_chapter3_start_walk__["a" /* default */],
    4: __WEBPACK_IMPORTED_MODULE_7__views_chapter4_walk_with_2_legs__["a" /* default */],
    5: __WEBPACK_IMPORTED_MODULE_8__views_chapter5_walk_on_the_ground__["a" /* default */],
    6: __WEBPACK_IMPORTED_MODULE_9__views_chapter6_fetch_play__["a" /* default */]
};
var current = {
    index: 0,
    chapter: null
};
function navigateToChapter(index) {
    var chapterClass = chapterMap[index];
    if (chapterClass) {
        if (current.chapter) {
            main.removeChild(current.chapter);
            __WEBPACK_IMPORTED_MODULE_6__Controls__["a" /* default */].removeAll();
        }
        var chapter = new chapterClass();
        main.addChild(chapter);
        current.chapter = chapter;
        current.index = index;
        console.log(index, chapter);
        window.location.hash = '#chapter' + index;
    }
    else {
        alert("\u5DF2\u7ECF\u662F" + (index < 0 ? '第一页' : '最后一页') + "\u4E86");
    }
}
// up=38, down=40, space=32
window.addEventListener('keydown', function (e) {
    console.log(e.keyCode);
    switch (e.keyCode) {
        case 38:
            navigateToChapter(current.index - 1);
            break;
        case 40:
            navigateToChapter(current.index + 1);
            break;
        case 32:
            if (current.chapter) {
                current.chapter.nextScene();
            }
            break;
    }
});
function onHashChange() {
    var hash = window.location.hash;
    var chapterIndex;
    if (hash.indexOf('#chapter') >= 0) {
        chapterIndex = +hash.substr(8);
    }
    navigateToChapter(chapterIndex || 1);
}
window.addEventListener('hashchange', onHashChange);
onHashChange();


/***/ }),
/* 15 */
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
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Chapter__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Segment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_utils_Maths__ = __webpack_require__(4);
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



var chapter1_one_segment = /** @class */ (function (_super) {
    __extends(chapter1_one_segment, _super);
    function chapter1_one_segment() {
        return _super.call(this) || this;
    }
    chapter1_one_segment.prototype.init = function () {
        _super.prototype.init.call(this);
        this.seg = new __WEBPACK_IMPORTED_MODULE_1__components_Segment__["a" /* default */]();
        this.addChild(this.seg);
    };
    chapter1_one_segment.prototype.onMouseMove = function (e) {
        var localX = e.stageX - this.stage.width / 2;
        var localY = e.stageY - this.stage.height / 2;
        var rad = Math.atan2(localY - this.seg.y, localX - this.seg.x);
        this.seg.rotation = __WEBPACK_IMPORTED_MODULE_2__core_utils_Maths__["a" /* default */].radToDeg(rad);
    };
    return chapter1_one_segment;
}(__WEBPACK_IMPORTED_MODULE_0__components_Chapter__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (chapter1_one_segment);


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Chapter__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Segment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Controls__ = __webpack_require__(2);
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



var chapter2_two_segment = /** @class */ (function (_super) {
    __extends(chapter2_two_segment, _super);
    function chapter2_two_segment() {
        var _this = _super.call(this) || this;
        _this.rSeg2Base = 0;
        _this.seg2FollowSeg1 = false;
        return _this;
    }
    chapter2_two_segment.prototype.init = function () {
        _super.prototype.init.call(this);
        this.seg1 = new __WEBPACK_IMPORTED_MODULE_1__components_Segment__["a" /* default */]();
        this.addChild(this.seg1);
        this.slider1 = __WEBPACK_IMPORTED_MODULE_2__Controls__["a" /* default */].getSlider('Seg1', 'rotation', 0, -180, 180).attach();
        this.seg2 = new __WEBPACK_IMPORTED_MODULE_1__components_Segment__["a" /* default */]();
        this.addChild(this.seg2);
        this.slider2 = __WEBPACK_IMPORTED_MODULE_2__Controls__["a" /* default */].getSlider('Seg2', 'rotation', 0, -180, 180).attach();
    };
    chapter2_two_segment.prototype.switchScene = function (index) {
        switch (index) {
            case 1:
                this.seg2FollowSeg1 = true;
                break;
        }
    };
    // protected onMouseMove (e: MouseEvent) {
    //   var localX: number = e.stageX - this.stage.width / 2
    //   var localY: number = e.stageY - this.stage.height / 2
    //   var rad: number = Math.atan2(localY - this.seg1.y, localX - this.seg1.x)
    //   this.seg1.rotation = Maths.radToDeg(rad)
    // }
    chapter2_two_segment.prototype.onTick = function () {
        this.seg1.rotation = this.slider1.value;
        var pin1 = this.seg1.getPin();
        this.seg2.x = pin1.x;
        this.seg2.y = pin1.y;
        this.seg2.rotation = this.slider2.value;
        if (this.seg2FollowSeg1) {
            this.seg2.rotation += this.seg1.rotation;
        }
    };
    return chapter2_two_segment;
}(__WEBPACK_IMPORTED_MODULE_0__components_Chapter__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (chapter2_two_segment);


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Controls__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_events_EventDispatcher__ = __webpack_require__(10);
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


function createElement(text) {
    var div = document.createElement('div');
    div.innerHTML = text;
    return div.firstElementChild;
}
var id = 0;
var Slider = /** @class */ (function (_super) {
    __extends(Slider, _super);
    function Slider(label, key, initValue, min, max, step) {
        if (step === void 0) { step = 0.1; }
        var _this = _super.call(this) || this;
        _this.id = ++id;
        _this.label = label;
        _this.key = key;
        _this.min = min;
        _this.max = max;
        _this.init(initValue, step);
        return _this;
    }
    Object.defineProperty(Slider.prototype, "value", {
        get: function () {
            return +this.input.value;
        },
        enumerable: true,
        configurable: true
    });
    Slider.prototype.init = function (initValue, step) {
        var _this = this;
        var str = "\n      <div id=\"slider" + this.id + "\" class=\"segment\">\n        <h3>" + this.label + " <small></small></h3>\n        <label>" + this.key + "<input type=\"range\" min=\"" + this.min + "\" max=\"" + this.max + "\" step=\"" + step + "\"></label>\n        <span>" + initValue + "</span>\n      </div>\n      ";
        this.el = createElement(str);
        this.input = this.el.querySelector('input');
        this.input.value = initValue + '';
        var span = this.el.querySelector('span');
        this.input.addEventListener('input', function (e) {
            span.innerText = _this.input.value;
            if (_this.callback) {
                _this.callback.call(_this.scope, +_this.input.value);
            }
        });
    };
    Slider.prototype.attach = function (callback, scope) {
        if (callback === void 0) { callback = null; }
        if (scope === void 0) { scope = null; }
        __WEBPACK_IMPORTED_MODULE_0__Controls__["a" /* default */].rootEl.appendChild(this.el);
        this.callback = callback;
        this.scope = null;
        return this;
    };
    Slider.prototype.detach = function () {
        __WEBPACK_IMPORTED_MODULE_0__Controls__["a" /* default */].rootEl.removeChild(this.el);
        return this;
    };
    return Slider;
}(__WEBPACK_IMPORTED_MODULE_1__core_events_EventDispatcher__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (Slider);


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Chapter__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Segment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Controls__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Sinewave__ = __webpack_require__(8);
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




var chapter3_start_walk = /** @class */ (function (_super) {
    __extends(chapter3_start_walk, _super);
    function chapter3_start_walk() {
        var _this = _super.call(this) || this;
        _this.applyOffsetPhaseDeg = false;
        return _this;
    }
    chapter3_start_walk.prototype.init = function () {
        _super.prototype.init.call(this);
        this.seg1 = new __WEBPACK_IMPORTED_MODULE_1__components_Segment__["a" /* default */]();
        this.addChild(this.seg1);
        this.seg1.rotation = 90;
        this.slider1 = __WEBPACK_IMPORTED_MODULE_2__Controls__["a" /* default */].getSlider('Seg1', 'rotation', 90, 45, 135).attach();
        this.seg2 = new __WEBPACK_IMPORTED_MODULE_1__components_Segment__["a" /* default */]();
        this.addChild(this.seg2);
        this.slider2 = __WEBPACK_IMPORTED_MODULE_2__Controls__["a" /* default */].getSlider('Seg2', 'rotation', 0, -180, 180).attach();
        this.sinewave = new __WEBPACK_IMPORTED_MODULE_3__Sinewave__["a" /* default */]();
    };
    chapter3_start_walk.prototype.switchScene = function (index) {
        switch (index) {
            case 1:
                this.applyOffsetPhaseDeg = true;
                break;
        }
    };
    chapter3_start_walk.prototype.onTick = function () {
        this.sinewave.update();
        this.seg1.rotation = this.slider1.value + 30 * this.sinewave.value;
        var pin1 = this.seg1.getPin();
        this.seg2.x = pin1.x;
        this.seg2.y = pin1.y;
        if (!this.applyOffsetPhaseDeg) {
            this.seg2.rotation = this.slider2.value + this.seg1.rotation;
        }
        else {
            this.seg2.rotation = this.slider2.value + this.slider1.value + 30 + 30 * this.sinewave.getOffsetValue(-45);
        }
    };
    return chapter3_start_walk;
}(__WEBPACK_IMPORTED_MODULE_0__components_Chapter__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (chapter3_start_walk);


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Chapter__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Segment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Controls__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Sinewave__ = __webpack_require__(8);
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




var chapter4_walk_with_2_legs = /** @class */ (function (_super) {
    __extends(chapter4_walk_with_2_legs, _super);
    function chapter4_walk_with_2_legs() {
        var _this = _super.call(this) || this;
        _this.walkPhaseOffset = -90;
        return _this;
    }
    chapter4_walk_with_2_legs.prototype.init = function () {
        _super.prototype.init.call(this);
        this.seg1 = new __WEBPACK_IMPORTED_MODULE_1__components_Segment__["a" /* default */](200, 40);
        this.addChild(this.seg1);
        this.seg1.rotation = 90;
        this.seg2 = new __WEBPACK_IMPORTED_MODULE_1__components_Segment__["a" /* default */](200, 30);
        this.addChild(this.seg2);
        this.seg3 = new __WEBPACK_IMPORTED_MODULE_1__components_Segment__["a" /* default */](200, 40);
        this.addChild(this.seg3);
        this.seg3.rotation = 90;
        this.seg4 = new __WEBPACK_IMPORTED_MODULE_1__components_Segment__["a" /* default */](200, 30);
        this.addChild(this.seg4);
        this.sliderSineInc = __WEBPACK_IMPORTED_MODULE_2__Controls__["a" /* default */].getSlider('Sinewave Phase Inc', 'phaseInc', 0.05, 0, 0.3).attach();
        this.sliderSineInc.input.step = '0.01';
        this.sliderMainSegRange = __WEBPACK_IMPORTED_MODULE_2__Controls__["a" /* default */].getSlider('Main Seg Rotate Range', 'rotate', 45, 0, 90).attach();
        this.sliderMainSegInit = __WEBPACK_IMPORTED_MODULE_2__Controls__["a" /* default */].getSlider('Main Seg Init Rotate', 'rotate', 90, 0, 180).attach();
        this.sliderSubSegRange = __WEBPACK_IMPORTED_MODULE_2__Controls__["a" /* default */].getSlider('Sub Seg Rotate Range', 'rotate', 45, 0, 90).attach();
        this.sinewave = new __WEBPACK_IMPORTED_MODULE_3__Sinewave__["a" /* default */]();
    };
    chapter4_walk_with_2_legs.prototype.switchScene = function (index) {
        switch (index) {
            case 1:
                break;
        }
    };
    chapter4_walk_with_2_legs.prototype.walk = function (mainSeg, attachSeg, phaseOffset) {
        if (phaseOffset === void 0) { phaseOffset = 0; }
        mainSeg.rotation = this.sliderMainSegInit.value + this.sliderMainSegRange.value * this.sinewave.getOffsetValue(phaseOffset);
        var pin = mainSeg.getPin();
        attachSeg.x = pin.x;
        attachSeg.y = pin.y;
        attachSeg.rotation = mainSeg.rotation + this.sliderSubSegRange.value + this.sliderSubSegRange.value * this.sinewave.getOffsetValue(phaseOffset + this.walkPhaseOffset);
    };
    chapter4_walk_with_2_legs.prototype.onTick = function () {
        this.sinewave.phaseInc = this.sliderSineInc.value;
        this.sinewave.update();
        this.walk(this.seg1, this.seg2, 0);
        this.walk(this.seg3, this.seg4, -180);
    };
    return chapter4_walk_with_2_legs;
}(__WEBPACK_IMPORTED_MODULE_0__components_Chapter__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (chapter4_walk_with_2_legs);


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Chapter__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Segment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Controls__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Sinewave__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Ground__ = __webpack_require__(13);
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





var chapter5_walk_on_the_ground = /** @class */ (function (_super) {
    __extends(chapter5_walk_on_the_ground, _super);
    function chapter5_walk_on_the_ground() {
        var _this = _super.call(this) || this;
        _this.walkPhaseOffset = -90;
        _this.legsPhaseOffset = -180;
        _this.vx = 0;
        _this.vy = 0;
        //  碰到地面反弹
        _this.groundRebounce = false;
        return _this;
    }
    chapter5_walk_on_the_ground.prototype.init = function () {
        _super.prototype.init.call(this);
        this.ground = new __WEBPACK_IMPORTED_MODULE_4__components_Ground__["a" /* default */]();
        this.ground.y = this.stage.height / 2 - this.ground.height;
        this.addChild(this.ground);
        this.seg1 = new __WEBPACK_IMPORTED_MODULE_1__components_Segment__["a" /* default */](100, 30);
        this.addChild(this.seg1);
        this.seg1.rotation = 90;
        this.seg2 = new __WEBPACK_IMPORTED_MODULE_1__components_Segment__["a" /* default */](100, 20);
        this.addChild(this.seg2);
        this.seg3 = new __WEBPACK_IMPORTED_MODULE_1__components_Segment__["a" /* default */](100, 30);
        this.addChild(this.seg3);
        this.seg3.rotation = 90;
        this.seg4 = new __WEBPACK_IMPORTED_MODULE_1__components_Segment__["a" /* default */](100, 20);
        this.addChild(this.seg4);
        this.sliderSineInc = __WEBPACK_IMPORTED_MODULE_2__Controls__["a" /* default */].getSlider('Sinewave Phase Inc', 'phaseInc', 0.12, 0, 0.3, 0.01).attach();
        this.sliderMainSegRange = __WEBPACK_IMPORTED_MODULE_2__Controls__["a" /* default */].getSlider('Main Seg Rotate Range', 'rotate', 45, 0, 90).attach();
        this.sliderMainSegInit = __WEBPACK_IMPORTED_MODULE_2__Controls__["a" /* default */].getSlider('Main Seg Init Rotate', 'rotate', 90, 0, 180).attach();
        this.sliderSubSegRange = __WEBPACK_IMPORTED_MODULE_2__Controls__["a" /* default */].getSlider('Sub Seg Rotate Range', 'rotate', 45, 0, 90).attach();
        this.sliderGravity = __WEBPACK_IMPORTED_MODULE_2__Controls__["a" /* default */].getSlider('Gravity', 'gravity', 0.36, 0, 1, 0.01).attach();
        this.sinewave = new __WEBPACK_IMPORTED_MODULE_3__Sinewave__["a" /* default */]();
    };
    chapter5_walk_on_the_ground.prototype.switchScene = function (index) {
        switch (index) {
            case 1:
                this.groundRebounce = true;
                break;
        }
    };
    chapter5_walk_on_the_ground.prototype.applyGravity = function () {
        this.vy += this.sliderGravity.value;
        this.seg1.x += this.vx;
        this.seg1.y += this.vy;
        this.seg3.x += this.vx;
        this.seg3.y += this.vy;
    };
    chapter5_walk_on_the_ground.prototype.detectGround = function (subSeg) {
        var max = this.ground.y;
        var bottom = subSeg.getPin().y;
        if (bottom > max) {
            var offset = bottom - max;
            this.seg1.y -= offset;
            this.seg2.y -= offset;
            this.seg3.y -= offset;
            this.seg4.y -= offset;
            var ease = 1;
            if (this.groundRebounce) {
                this.vx -= subSeg.vx * ease;
                this.vy -= subSeg.vy * ease;
            }
            else {
                this.vx = 0;
                this.vy = 0;
            }
        }
    };
    chapter5_walk_on_the_ground.prototype.detectWall = function () {
        var x = this.seg1.x;
        var w = this.stage.width + 200;
        var offset = 0;
        if (x > w / 2) {
            offset = -w;
        }
        else if (w < -w / 2) {
            offset = w;
        }
        this.seg1.x += offset;
        this.seg2.x += offset;
        this.seg3.x += offset;
        this.seg4.x += offset;
    };
    chapter5_walk_on_the_ground.prototype.walk = function (mainSeg, attachSeg, phaseOffset) {
        if (phaseOffset === void 0) { phaseOffset = 0; }
        var footBefore = attachSeg.getPin();
        mainSeg.rotation = this.sliderMainSegInit.value + this.sliderMainSegRange.value * this.sinewave.getOffsetValue(phaseOffset);
        var pin = mainSeg.getPin();
        attachSeg.x = pin.x;
        attachSeg.y = pin.y;
        attachSeg.rotation = mainSeg.rotation + this.sliderSubSegRange.value + this.sliderSubSegRange.value * this.sinewave.getOffsetValue(phaseOffset + this.walkPhaseOffset);
        var footAfter = attachSeg.getPin();
        attachSeg.vx = footAfter.x - footBefore.x;
        attachSeg.vy = footAfter.y - footBefore.y;
    };
    chapter5_walk_on_the_ground.prototype.onTick = function () {
        this.sinewave.phaseInc = this.sliderSineInc.value;
        this.sinewave.update();
        this.applyGravity();
        this.walk(this.seg1, this.seg2, 0);
        this.walk(this.seg3, this.seg4, this.legsPhaseOffset);
        this.detectGround(this.seg2);
        this.detectGround(this.seg4);
        this.detectWall();
    };
    return chapter5_walk_on_the_ground;
}(__WEBPACK_IMPORTED_MODULE_0__components_Chapter__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (chapter5_walk_on_the_ground);


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Chapter__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Segment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_utils_Maths__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_utils_Point__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Ground__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Ball__ = __webpack_require__(23);
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






var chapter6_fetch_play = /** @class */ (function (_super) {
    __extends(chapter6_fetch_play, _super);
    function chapter6_fetch_play() {
        var _this = _super.call(this) || this;
        //===============
        _this.numSegs = 5;
        _this.segments = [];
        _this.gravity = 1;
        _this.ease = -0.9;
        _this.vx = 0;
        _this.vy = 0;
        //  碰到地面反弹
        _this.groundRebounce = false;
        return _this;
    }
    chapter6_fetch_play.prototype.init = function () {
        _super.prototype.init.call(this);
        this.ground = new __WEBPACK_IMPORTED_MODULE_4__components_Ground__["a" /* default */]();
        this.ground.y = this.stage.height / 2 - this.ground.height;
        this.addChild(this.ground);
        for (var i = this.numSegs - 1; i >= 0; i--) {
            var seg = new __WEBPACK_IMPORTED_MODULE_1__components_Segment__["a" /* default */](80, 15);
            this.segments.push(seg);
            this.addChild(seg);
        }
        this.ball = new __WEBPACK_IMPORTED_MODULE_5__components_Ball__["a" /* default */](20);
        this.ball.vy = 10;
        this.addChild(this.ball);
    };
    chapter6_fetch_play.prototype.fetch = function (seg, x, y) {
        var dx = x - seg.x;
        var dy = y - seg.y;
        var rad = Math.atan2(dy, dx);
        seg.rotation = __WEBPACK_IMPORTED_MODULE_2__core_utils_Maths__["a" /* default */].radToDeg(rad);
        var pin = seg.getPin();
        var w = pin.x - seg.x;
        var h = pin.y - seg.y;
        return new __WEBPACK_IMPORTED_MODULE_3__core_utils_Point__["a" /* default */](x - w, y - h);
    };
    chapter6_fetch_play.prototype.chain = function (mainSeg, subSeg) {
        var pin = mainSeg.getPin();
        subSeg.x = pin.x;
        subSeg.y = pin.y;
    };
    chapter6_fetch_play.prototype.moveBall = function () {
        this.ball.vy += this.gravity;
        this.ball.x += this.ball.vx;
        this.ball.y += this.ball.vy;
        var w = this.stage.width;
        var h = this.stage.height;
        if (this.ball.x >= w / 2) {
            this.ball.x = w / 2;
            this.ball.vx *= this.ease;
        }
        else if (this.ball.x <= -w / 2) {
            this.ball.x = -w / 2;
            this.ball.vx *= this.ease;
        }
        if (this.ball.y <= -h / 2) {
            this.ball.y = -h / 2;
            this.ball.vy *= this.ease;
        }
        else if (this.ball.y >= this.ground.y) {
            this.ball.y = this.ground.y;
            this.ball.vy *= this.ease;
        }
    };
    chapter6_fetch_play.prototype.detectCollision = function () {
        var seg = this.segments[0];
        if (seg.getPin().distanceTo(new __WEBPACK_IMPORTED_MODULE_3__core_utils_Point__["a" /* default */](this.ball.x, this.ball.y)) <= this.ball.radius) {
            this.ball.vx += 4 * Math.random() - 2;
            this.ball.vy -= 2;
        }
    };
    chapter6_fetch_play.prototype.onTick = function () {
        this.moveBall();
        var target = this.fetch(this.segments[0], this.ball.x, this.ball.y);
        for (var i = 1; i < this.numSegs; i++) {
            var seg = this.segments[i];
            target = this.fetch(seg, target.x, target.y);
        }
        for (var i = this.numSegs - 1; i > 0; i--) {
            var mainSeg = this.segments[i];
            var subSeg = this.segments[i - 1];
            this.chain(mainSeg, subSeg);
        }
        this.detectCollision();
    };
    return chapter6_fetch_play;
}(__WEBPACK_IMPORTED_MODULE_0__components_Chapter__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (chapter6_fetch_play);


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_display_DisplayObject__ = __webpack_require__(3);
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

var Ball = /** @class */ (function (_super) {
    __extends(Ball, _super);
    function Ball(radius, color) {
        if (radius === void 0) { radius = 50; }
        if (color === void 0) { color = 'rgba(200, 200, 200, 0.9)'; }
        var _this = _super.call(this) || this;
        _this.vx = 0;
        _this.vy = 0;
        _this.radius = radius;
        _this.color = color;
        return _this;
    }
    Ball.prototype.render = function (ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(0, 0, this.radius, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    };
    return Ball;
}(__WEBPACK_IMPORTED_MODULE_0__core_display_DisplayObject__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (Ball);


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzA1ODI3OTVhOTNkYjVkM2NjMjIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2hhcHRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TZWdtZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9Db250cm9scy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9kaXNwbGF5L0Rpc3BsYXlPYmplY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvdXRpbHMvTWF0aHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvZXZlbnRzL0Rpc3BsYXlFdmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9ldmVudHMvRXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvZGlzcGxheS9Db250YWluZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NpbmV3YXZlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2Rpc3BsYXkvU3RhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvZXZlbnRzL0V2ZW50RGlzcGF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9ldmVudHMvTW91c2VFdmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS91dGlscy9Qb2ludC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Hcm91bmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL3RpY2tlci9UaWNrZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2NoYXB0ZXIxX29uZV9zZWdtZW50LnRzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9jaGFwdGVyMl90d29fc2VnbWVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU2xpZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9jaGFwdGVyM19zdGFydF93YWxrLnRzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9jaGFwdGVyNF93YWxrX3dpdGhfMl9sZWdzLnRzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9jaGFwdGVyNV93YWxrX29uX3RoZV9ncm91bmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2NoYXB0ZXI2X2ZldGNoX3BsYXkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQmFsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdEa0Q7QUFDSztBQUVKO0FBRW5EO0lBQXFDLDJCQUFTO0lBSzVDO1FBQUEsWUFDRSxpQkFBTyxTQUlSO1FBUk0sZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFDdkIsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFLNUIsS0FBSSxDQUFDLFdBQVcsQ0FBQywwRUFBWSxDQUFDLFlBQVksRUFBRSxLQUFJLENBQUMsT0FBTyxFQUFFLEtBQUksQ0FBQztRQUMvRCxLQUFJLENBQUMsV0FBVyxDQUFDLDBFQUFZLENBQUMsaUJBQWlCLEVBQUUsS0FBSSxDQUFDLFNBQVMsRUFBRSxLQUFJLENBQUM7O0lBQ3hFLENBQUM7SUFFUyx5QkFBTyxHQUFqQjtRQUNFLElBQUksQ0FBQyxJQUFJLEVBQUU7SUFDYixDQUFDO0lBRVMsMkJBQVMsR0FB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QUFBRCxDQUFDLENBdEJpQyw0RUFBYSxHQXNCOUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTQpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDMwNTgyNzk1YTkzZGI1ZDNjYzIyIiwiaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi4vY29yZS9kaXNwbGF5L0NvbnRhaW5lclwiO1xuaW1wb3J0IERpc3BsYXlFdmVudCBmcm9tIFwiLi4vY29yZS9ldmVudHMvRGlzcGxheUV2ZW50XCI7XG5pbXBvcnQgU2VnbWVudCBmcm9tIFwiLi9TZWdtZW50XCI7XG5pbXBvcnQgTW91c2VFdmVudCBmcm9tIFwiLi4vY29yZS9ldmVudHMvTW91c2VFdmVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGFwdGVyIGV4dGVuZHMgQ29udGFpbmVyIHtcblxuICBwdWJsaWMgc2NlbmVJbmRleDogbnVtYmVyID0gMDtcbiAgcHVibGljIHNjZW5lQ291bnQ6IG51bWJlciA9IDE7XG5cbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHN1cGVyKClcblxuICAgIHRoaXMuYWRkTGlzdGVuZXIoRGlzcGxheUV2ZW50LkFERF9UT19TVEFHRSwgdGhpcy5vbkFkZGVkLCB0aGlzKVxuICAgIHRoaXMuYWRkTGlzdGVuZXIoRGlzcGxheUV2ZW50LlJFTU9WRV9GUk9NX1NUQUdFLCB0aGlzLm9uUmVtb3ZlZCwgdGhpcylcbiAgfVxuXG4gIHByb3RlY3RlZCBvbkFkZGVkICgpIHtcbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgcHJvdGVjdGVkIG9uUmVtb3ZlZCAoKSB7XG4gICAgdGhpcy5kaXNwb3NlKClcbiAgfVxuXG4gIHByb3RlY3RlZCBpbml0ICgpIHtcbiAgICB0aGlzLmFkZExpc3RlbmVyKERpc3BsYXlFdmVudC5FTlRFUl9GUkFNRSwgdGhpcy5vblRpY2ssIHRoaXMpXG4gICAgdGhpcy5zdGFnZS5hZGRMaXN0ZW5lcihNb3VzZUV2ZW50Lk1PVVNFX01PVkUsIHRoaXMub25Nb3VzZU1vdmUsIHRoaXMpXG4gIH1cblxuICBwcm90ZWN0ZWQgZGlzcG9zZSAoKSB7XG4gICAgdGhpcy5yZW1vdmVMaXN0ZW5lcihEaXNwbGF5RXZlbnQuRU5URVJfRlJBTUUsIHRoaXMub25UaWNrLCB0aGlzKVxuICAgIHRoaXMuc3RhZ2UucmVtb3ZlTGlzdGVuZXIoTW91c2VFdmVudC5NT1VTRV9NT1ZFLCB0aGlzLm9uTW91c2VNb3ZlLCB0aGlzKVxuICB9XG5cbiAgcHVibGljIG5leHRTY2VuZSAoKSB7XG4gICAgdGhpcy5zY2VuZUluZGV4ICs9IDFcbiAgICBjb25zb2xlLmxvZygnbmV4dCBzY2VuZTonLCB0aGlzLnNjZW5lSW5kZXgpXG4gICAgdGhpcy5zd2l0Y2hTY2VuZSh0aGlzLnNjZW5lSW5kZXgpXG4gIH1cblxuICBwcm90ZWN0ZWQgb25Nb3VzZU1vdmUgKGU6IE1vdXNlRXZlbnQpIHtcbiAgICAvLyBvdmVycmlkZSBieSBzdWJjbGFzc2VzXG4gIH1cblxuICBwcm90ZWN0ZWQgb25UaWNrICgpIHtcbiAgICAvLyBvdmVycmlkZSBieSBzdWJjbGFzc2VzXG4gIH1cblxuICBwcm90ZWN0ZWQgc3dpdGNoU2NlbmUgKGluZGV4OiBudW1iZXIpIHtcbiAgICAvLyBvdmVycmlkZSBieSBzdWJjbGFzc2VzXG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9DaGFwdGVyLnRzIiwiaW1wb3J0IERpc3BsYXlPYmplY3QgZnJvbSAnLi4vY29yZS9kaXNwbGF5L0Rpc3BsYXlPYmplY3QnXG5pbXBvcnQgUG9pbnQgZnJvbSAnLi4vY29yZS91dGlscy9Qb2ludCdcbmltcG9ydCBNYXRocyBmcm9tICcuLi9jb3JlL3V0aWxzL01hdGhzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWdtZW50IGV4dGVuZHMgRGlzcGxheU9iamVjdCB7XG5cbiAgcHJpdmF0ZSBfd2lkdGg6IG51bWJlcjtcbiAgcHJpdmF0ZSBfaGVpZ2h0OiBudW1iZXI7XG4gIHByaXZhdGUgX2NvbG9yOiBhbnk7XG5cbiAgcHVibGljIHZ4OiBudW1iZXIgPSAwXG4gIHB1YmxpYyB2eTogbnVtYmVyID0gMFxuXG4gIGNvbnN0cnVjdG9yICh3aWR0aDogbnVtYmVyID0gMjAwLCBoZWlnaHQ6IG51bWJlciA9IDQwLCBjb2xvcjogYW55ID0gJ3JnYmEoMjAwLCAyMDAsIDIwMCwgMC45KScpIHtcbiAgICBzdXBlcigpXG5cbiAgICB0aGlzLl93aWR0aCA9IHdpZHRoXG4gICAgdGhpcy5faGVpZ2h0ID0gaGVpZ2h0XG4gICAgdGhpcy5fY29sb3IgPSBjb2xvclxuICB9XG5cbiAgcmVuZGVyIChjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgIC8vICBCR1xuICAgIGxldCByYWRpdXMgPSB0aGlzLl9oZWlnaHQgLyAyXG4gICAgbGV0IGhhbGZQSSA9IE1hdGguUEkgLyAyXG4gICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuX2NvbG9yXG4gICAgY3R4LmJlZ2luUGF0aCgpXG4gICAgY3R4Lm1vdmVUbygwLCAtcmFkaXVzKVxuICAgIGN0eC5saW5lVG8odGhpcy5fd2lkdGgsIC1yYWRpdXMpXG4gICAgY3R4LmFyYyh0aGlzLl93aWR0aCwgMCwgcmFkaXVzLCAtaGFsZlBJLCBoYWxmUEkpXG4gICAgY3R4LmxpbmVUbygwLCByYWRpdXMpXG4gICAgY3R4LmFyYygwLCAwLCByYWRpdXMsIGhhbGZQSSwgMyAqIGhhbGZQSSlcbiAgICBjdHguY2xvc2VQYXRoKClcbiAgICBjdHguZmlsbCgpXG4gICAgY3R4LnN0cm9rZSgpXG5cbiAgICAvLyAgMuS4qlBJTueCuVxuICAgIGxldCBjcm9zc1IgPSByYWRpdXMgKiAwLjNcblxuICAgIGN0eC5tb3ZlVG8oLWNyb3NzUiwgMClcbiAgICBjdHgubGluZVRvKGNyb3NzUiwgMClcblxuICAgIGN0eC5tb3ZlVG8oMCwgLWNyb3NzUilcbiAgICBjdHgubGluZVRvKDAsIGNyb3NzUilcblxuICAgIGN0eC5tb3ZlVG8odGhpcy5fd2lkdGggLSBjcm9zc1IsIDApXG4gICAgY3R4LmxpbmVUbyh0aGlzLl93aWR0aCArIGNyb3NzUiwgMClcblxuICAgIGN0eC5tb3ZlVG8odGhpcy5fd2lkdGgsIC1jcm9zc1IpXG4gICAgY3R4LmxpbmVUbyh0aGlzLl93aWR0aCwgY3Jvc3NSKVxuXG4gICAgY3R4LnN0cm9rZSgpXG4gIH1cblxuICBwdWJsaWMgZ2V0UGluICgpOiBQb2ludCB7XG4gICAgbGV0IHggPSB0aGlzLnggKyB0aGlzLl93aWR0aCAqIE1hdGguY29zKE1hdGhzLmRlZ1RvUmFkKHRoaXMucm90YXRpb24pKVxuICAgIGxldCB5ID0gdGhpcy55ICsgdGhpcy5fd2lkdGggKiBNYXRoLnNpbihNYXRocy5kZWdUb1JhZCh0aGlzLnJvdGF0aW9uKSlcbiAgICByZXR1cm4gbmV3IFBvaW50KHgsIHkpXG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9TZWdtZW50LnRzIiwiaW1wb3J0IEV2ZW50RGlzcGF0Y2hlciBmcm9tIFwiLi9jb3JlL2V2ZW50cy9FdmVudERpc3BhdGNoZXJcIjtcbmltcG9ydCBTbGlkZXIgZnJvbSBcIi4vU2xpZGVyXCI7XG5cbmNvbnN0IHJvb3RFbDpIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250cm9scycpXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRyb2xzIHtcbiAgcHVibGljIHN0YXRpYyByb290RWw6IEhUTUxFbGVtZW50ID0gcm9vdEVsXG4gIHB1YmxpYyBzdGF0aWMgZ2V0U2xpZGVyIChsYWJlbDogc3RyaW5nLCBrZXk6IHN0cmluZywgdmFsdWU6IG51bWJlciwgbWluOiBudW1iZXIsIG1heDogbnVtYmVyLCBzdGVwOiBudW1iZXIgPSAwLjEpIHtcbiAgICByZXR1cm4gbmV3IFNsaWRlcihsYWJlbCwga2V5LCB2YWx1ZSwgbWluLCBtYXgsIHN0ZXApXG4gIH1cbiAgcHVibGljIHN0YXRpYyByZW1vdmVBbGwgKCkge1xuICAgIHJvb3RFbC5pbm5lckhUTUwgPSAnJ1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0NvbnRyb2xzLnRzIiwiaW1wb3J0IEV2ZW50RGlzcGF0Y2hlciBmcm9tICcuLi9ldmVudHMvRXZlbnREaXNwYXRjaGVyJ1xuaW1wb3J0IERpc3BsYXlFdmVudCBmcm9tICcuLi9ldmVudHMvRGlzcGxheUV2ZW50J1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuL0NvbnRhaW5lcic7XG5pbXBvcnQgTWF0aHMgZnJvbSAnLi4vdXRpbHMvTWF0aHMnXG5pbXBvcnQgU3RhZ2UgZnJvbSAnLi9TdGFnZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpc3BsYXlPYmplY3QgZXh0ZW5kcyBFdmVudERpc3BhdGNoZXIge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgc3VwZXIoKVxuICB9XG5cbiAgcHJvdGVjdGVkIF94OiBudW1iZXIgPSAwO1xuXG4gIHByb3RlY3RlZCBfeTogbnVtYmVyID0gMDtcblxuICBwcm90ZWN0ZWQgX3JvdGF0aW9uOiBudW1iZXIgPSAwO1xuXG4gIHB1YmxpYyBnZXQgeCAoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5feDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgeCAodmFsOiBudW1iZXIpIHtcbiAgICB0aGlzLl94ID0gdmFsO1xuICB9XG5cbiAgcHVibGljIGdldCB5ICgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl95O1xuICB9XG5cbiAgcHVibGljIHNldCB5ICh2YWw6IG51bWJlcikge1xuICAgIHRoaXMuX3kgPSB2YWw7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHJvdGF0aW9uICgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9yb3RhdGlvbjtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgcm90YXRpb24gKHZhbDogbnVtYmVyKSB7XG4gICAgdGhpcy5fcm90YXRpb24gPSB2YWw7XG4gIH1cblxuICAvLz09PVxuICBwcm90ZWN0ZWQgX3BhcmVudDogQ29udGFpbmVyO1xuICBwdWJsaWMgZ2V0IHBhcmVudCAoKTogQ29udGFpbmVyIHtcbiAgICByZXR1cm4gdGhpcy5fcGFyZW50XG4gIH1cblxuICBwdWJsaWMgc2V0IHBhcmVudCAodmFsOiBDb250YWluZXIpIHtcbiAgICB0aGlzLl9wYXJlbnQgPSB2YWxcbiAgICBsZXQgcGFyZW50czogQ29udGFpbmVyW10gPSB0aGlzLl9nZXRQYXJlbnRzKClcbiAgICBsZXQgcm9vdFBhcmVudCA9IHBhcmVudHNbMF1cbiAgICBsZXQgb25TdGFnZTogQm9vbGVhblxuICAgIGlmIChyb290UGFyZW50IGluc3RhbmNlb2YgU3RhZ2UpIHtcbiAgICAgIG9uU3RhZ2UgPSB0cnVlXG4gICAgICB0aGlzLl9zdGFnZSA9IHJvb3RQYXJlbnRcbiAgICB9XG4gICAgaWYgKG9uU3RhZ2UgIT09IHRoaXMuX29uU3RhZ2UpIHtcbiAgICAgIGlmIChvblN0YWdlKSB7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2gobmV3IERpc3BsYXlFdmVudChEaXNwbGF5RXZlbnQuQUREX1RPX1NUQUdFLCB0aGlzKSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2gobmV3IERpc3BsYXlFdmVudChEaXNwbGF5RXZlbnQuUkVNT1ZFX0ZST01fU1RBR0UsIHRoaXMpKVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIW9uU3RhZ2UpIHtcbiAgICAgIHRoaXMuX3N0YWdlID0gdW5kZWZpbmVkXG4gICAgfVxuICAgIHRoaXMuX29uU3RhZ2UgPSBvblN0YWdlXG4gIH1cblxuICAvLyAgd2hldGhlciB0aGUgZGlzcGxheSBvYmplY3QgaXMgb24gdGhlIHN0YWdlIGFuZCBuZWVkZWQgdG8gYmUgcmVuZGVyZWRcbiAgcHJpdmF0ZSBfb25TdGFnZTogQm9vbGVhbiA9IGZhbHNlXG5cbiAgcHJpdmF0ZSBfc3RhZ2U6IFN0YWdlO1xuICBwdWJsaWMgZ2V0IHN0YWdlICgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhZ2VcbiAgfVxuXG4gIHByaXZhdGUgX2dldFBhcmVudHMgKCk6Q29udGFpbmVyW10ge1xuICAgIGxldCBwYXJlbnRzOiBDb250YWluZXJbXSA9IFtdXG4gICAgbGV0IHAgPSB0aGlzLl9wYXJlbnRcbiAgICB3aGlsZSAocCkge1xuICAgICAgcGFyZW50cy51bnNoaWZ0KHApXG4gICAgICBwID0gcC5wYXJlbnRcbiAgICB9XG4gICAgcmV0dXJuIHBhcmVudHNcbiAgfVxuXG4gIC8vICBjYWxsZWQgaW50ZXJuYWxseVxuICBwdWJsaWMgZW50ZXJGcmFtZSAoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpOnZvaWQge1xuICAgIHRoaXMuZGlzcGF0Y2gobmV3IERpc3BsYXlFdmVudChEaXNwbGF5RXZlbnQuRU5URVJfRlJBTUUsIHRoaXMpKVxuICAgIGxldCBwYXJlbnRzOiBDb250YWluZXJbXSA9IHRoaXMuX2dldFBhcmVudHMoKVxuICAgIGN0eC5zZXRUcmFuc2Zvcm0oMSwgMCwgMCwgMSwgMCwgMClcbiAgICBjdHgucmVzdG9yZSgpXG4gICAgcGFyZW50cy5mb3JFYWNoKGNvbnRhaW5lciA9PiB7XG4gICAgICBjdHgudHJhbnNsYXRlKGNvbnRhaW5lci54LCBjb250YWluZXIueSlcbiAgICAgIGN0eC5yb3RhdGUoTWF0aHMuZGVnVG9SYWQoY29udGFpbmVyLnJvdGF0aW9uKSlcbiAgICB9KVxuXG4gICAgY3R4LnRyYW5zbGF0ZSh0aGlzLl94LCB0aGlzLl95KVxuICAgIGN0eC5yb3RhdGUoTWF0aHMuZGVnVG9SYWQodGhpcy5fcm90YXRpb24pKVxuXG4gICAgdGhpcy5yZW5kZXIoY3R4KVxuICB9XG5cbiAgcHVibGljIHJlbmRlciAoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcbiAgICAvLyBUb2RvOiBpbXBsaWVkIGJ5IHN1YmNsYXNzZXNcbiAgfVxufSBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29yZS9kaXNwbGF5L0Rpc3BsYXlPYmplY3QudHMiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNYXRocyB7XG4gIHB1YmxpYyBzdGF0aWMgcmFkVG9EZWcgKHJhZDogbnVtYmVyKSB7XG4gICAgcmV0dXJuIHJhZCAqIDE4MCAvIE1hdGguUElcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZGVnVG9SYWQgKGRlZzogbnVtYmVyKSB7XG4gICAgcmV0dXJuIGRlZyAqIE1hdGguUEkgLyAxODBcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb3JlL3V0aWxzL01hdGhzLnRzIiwiaW1wb3J0IEV2ZW50IGZyb20gXCIuL0V2ZW50XCI7XG5pbXBvcnQgRXZlbnREaXNwYXRjaGVyIGZyb20gXCIuL0V2ZW50RGlzcGF0Y2hlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXNwbGF5RXZlbnQgZXh0ZW5kcyBFdmVudCB7XG4gIHB1YmxpYyBzdGF0aWMgU1RBR0VfUkVTSVpFOiBzdHJpbmcgPSAnc3RhZ2VfcmVzaXplJ1xuICBwdWJsaWMgc3RhdGljIEVOVEVSX0ZSQU1FOiBzdHJpbmcgPSAnZW50ZXJfZnJhbWUnXG4gIHB1YmxpYyBzdGF0aWMgQUREX1RPX1NUQUdFOiBzdHJpbmcgPSAnYWRkX3RvX3N0YWdlJ1xuICBwdWJsaWMgc3RhdGljIFJFTU9WRV9GUk9NX1NUQUdFOiBzdHJpbmcgPSAncmVtb3ZlX2Zyb21fc3RhZ2UnXG5cbiAgY29uc3RydWN0b3IgKHR5cGU6IHN0cmluZywgdGFyZ2V0OiBFdmVudERpc3BhdGNoZXIpIHtcbiAgICBzdXBlcih0eXBlLCB0YXJnZXQpXG4gIH0gXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvcmUvZXZlbnRzL0Rpc3BsYXlFdmVudC50cyIsImltcG9ydCBFdmVudERpc3BhdGNoZXIgZnJvbSBcIi4vRXZlbnREaXNwYXRjaGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50IHtcbiAgcHJvdGVjdGVkIF90eXBlOiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3R5cGVcbiAgfVxuXG4gIHByb3RlY3RlZCBfdGFyZ2V0OiBFdmVudERpc3BhdGNoZXI7XG4gIHB1YmxpYyBnZXQgdGFyZ2V0ICgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFyZ2V0XG4gIH1cblxuICBwcm90ZWN0ZWQgX2RhdGE6IGFueTtcbiAgcHVibGljIGdldCBkYXRhICgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YVxuICB9XG5cbiAgY29uc3RydWN0b3IgKHR5cGU6IHN0cmluZywgdGFyZ2V0OiBFdmVudERpc3BhdGNoZXIsIC4uLmRhdGE6YW55W10pIHtcbiAgICB0aGlzLl90eXBlID0gdHlwZVxuICAgIHRoaXMuX3RhcmdldCA9IHRhcmdldFxuICAgIHRoaXMuX2RhdGEgPSBkYXRhXG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29yZS9ldmVudHMvRXZlbnQudHMiLCJpbXBvcnQgRGlzcGxheU9iamVjdCBmcm9tICcuL0Rpc3BsYXlPYmplY3QnXG5pbXBvcnQgU3RhZ2UgZnJvbSAnLi9TdGFnZSdcbmltcG9ydCBEaXNwbGF5RXZlbnQgZnJvbSAnLi4vZXZlbnRzL0Rpc3BsYXlFdmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRhaW5lciBleHRlbmRzIERpc3BsYXlPYmplY3Qge1xuXG4gIHByb3RlY3RlZCBfY2hpbGRyZW46IERpc3BsYXlPYmplY3RbXSA9IFtdXG5cbiAgcHJvdGVjdGVkIF9wYXJlbnQ6IENvbnRhaW5lcjtcblxuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgc3VwZXIoKVxuICB9XG5cbiAgcHVibGljIGdldENoaWxkSW5kZXggKGNoaWxkOiBEaXNwbGF5T2JqZWN0KTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fY2hpbGRyZW4uaW5kZXhPZihjaGlsZClcbiAgfVxuXG4gIHB1YmxpYyBnZXRDaGlsZEF0IChpbmRleDogbnVtYmVyKTogRGlzcGxheU9iamVjdCB7XG4gICAgcmV0dXJuIHRoaXMuX2NoaWxkcmVuW2luZGV4XVxuICB9XG5cbiAgcHVibGljIGFkZENoaWxkIChjaGlsZDogRGlzcGxheU9iamVjdCkge1xuICAgIGxldCBjaGlsZEluZGV4ID0gdGhpcy5nZXRDaGlsZEluZGV4KGNoaWxkKVxuICAgIGlmIChjaGlsZEluZGV4ID49IDApIHtcbiAgICAgIHRoaXMuX2NoaWxkcmVuLnNwbGljZShjaGlsZEluZGV4LCAxKVxuICAgICAgdGhpcy5fY2hpbGRyZW4ucHVzaChjaGlsZClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fY2hpbGRyZW4ucHVzaChjaGlsZClcbiAgICB9XG5cbiAgICBjaGlsZC5wYXJlbnQgPSB0aGlzXG4gIH1cblxuICBwdWJsaWMgcmVtb3ZlQ2hpbGQgKGNoaWxkOiBEaXNwbGF5T2JqZWN0KSB7XG4gICAgbGV0IGNoaWxkSW5kZXggPSB0aGlzLmdldENoaWxkSW5kZXgoY2hpbGQpXG4gICAgaWYgKGNoaWxkSW5kZXggPj0gMCkge1xuICAgICAgdGhpcy5fY2hpbGRyZW4uc3BsaWNlKGNoaWxkSW5kZXgsIDEpXG4gICAgICBjaGlsZC5wYXJlbnQgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgcHVibGljIGVudGVyRnJhbWUgKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gICAgc3VwZXIuZW50ZXJGcmFtZShjdHgpXG4gICAgdGhpcy5fY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICBjaGlsZC5lbnRlckZyYW1lKGN0eClcbiAgICB9KVxuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvcmUvZGlzcGxheS9Db250YWluZXIudHMiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTaW5ld2F2ZSB7XG4gIHB1YmxpYyBwaGFzZURlZzogbnVtYmVyXG4gIHB1YmxpYyBwaGFzZUluYzogbnVtYmVyXG4gIHB1YmxpYyBhbXBsaXR1ZGU6IG51bWJlclxuXG4gIC8vICBvdXRwdXQgdmFsdWVcbiAgcHVibGljIGdldCB2YWx1ZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlXG4gIH1cbiAgcHJpdmF0ZSBfdmFsdWU6IG51bWJlclxuXG4gIGNvbnN0cnVjdG9yIChpbml0UGhhc2U6IG51bWJlciA9IDAsIHBoYXNlSW5jOiBudW1iZXIgPSAwLjEsIGFtcGxpdHVkZTogbnVtYmVyID0gMSkge1xuICAgIHRoaXMucGhhc2VEZWcgPSBpbml0UGhhc2VcbiAgICB0aGlzLnBoYXNlSW5jID0gcGhhc2VJbmNcbiAgICB0aGlzLmFtcGxpdHVkZSA9IGFtcGxpdHVkZVxuXG4gICAgdGhpcy5fdmFsdWUgPSB0aGlzLmFtcGxpdHVkZSAqIE1hdGguc2luKHRoaXMucGhhc2VEZWcpXG4gIH1cblxuICBwdWJsaWMgdXBkYXRlICgpIHtcbiAgICB0aGlzLnBoYXNlRGVnICs9IHRoaXMucGhhc2VJbmNcbiAgICB0aGlzLl92YWx1ZSA9IHRoaXMuYW1wbGl0dWRlICogTWF0aC5zaW4odGhpcy5waGFzZURlZylcbiAgfVxuXG4gIHB1YmxpYyBnZXRPZmZzZXRWYWx1ZSAob2Zmc2V0UGhhc2VEZWc6IG51bWJlcikge1xuICAgIHJldHVybiB0aGlzLmFtcGxpdHVkZSAqIE1hdGguc2luKHRoaXMucGhhc2VEZWcgKyBvZmZzZXRQaGFzZURlZylcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9TaW5ld2F2ZS50cyIsImltcG9ydCBFdmVudERpc3BhdGNoZXIgZnJvbSAnLi4vZXZlbnRzL0V2ZW50RGlzcGF0Y2hlcidcbmltcG9ydCBEaXNwbGF5RXZlbnQgZnJvbSAnLi4vZXZlbnRzL0Rpc3BsYXlFdmVudCdcbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi9Db250YWluZXInXG5pbXBvcnQgTW91c2VFdmVudCBmcm9tICcuLi9ldmVudHMvTW91c2VFdmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YWdlIGV4dGVuZHMgQ29udGFpbmVyIHtcblxuICBwcml2YXRlIF9yb290RWw6IEhUTUxDYW52YXNFbGVtZW50O1xuICBwcml2YXRlIF93aWR0aDogbnVtYmVyO1xuICBwdWJsaWMgZ2V0IHdpZHRoICgpIHtcbiAgICByZXR1cm4gdGhpcy5fd2lkdGhcbiAgfVxuXG4gIHByaXZhdGUgX2hlaWdodDogbnVtYmVyO1xuICBwdWJsaWMgZ2V0IGhlaWdodCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hlaWdodFxuICB9XG5cbiAgcHJpdmF0ZSBfY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG5cbiAgY29uc3RydWN0b3IgKHJvb3RJZDogc3RyaW5nKSB7XG4gICAgc3VwZXIoKVxuXG4gICAgbGV0IHJvb3RFbDogSFRNTENhbnZhc0VsZW1lbnQgPSA8SFRNTENhbnZhc0VsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocm9vdElkKVxuICAgIGlmICghcm9vdEVsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFJvb3QgRWxlbWVudCB3aXRoIGlkPSR7cm9vdElkfSBub3QgZm91bmQhYClcbiAgICB9XG5cbiAgICB0aGlzLl9yb290RWwgPSByb290RWxcblxuICAgIHRoaXMuX2luaXRFdmVudHMoKVxuICAgIHRoaXMuX2luaXRDb250ZXh0cygpXG4gIH1cblxuICBwcml2YXRlIF9pbml0Q29udGV4dHMgKCk6dm9pZCB7XG4gICAgaWYgKHRoaXMuX3Jvb3RFbCBpbnN0YW5jZW9mIEhUTUxDYW52YXNFbGVtZW50KSB7XG4gICAgICB0aGlzLl9jdHggPSAoPEhUTUxDYW52YXNFbGVtZW50PnRoaXMuX3Jvb3RFbCkuZ2V0Q29udGV4dCgnMmQnKVxuICAgIH1cbiAgICAvLyAgc2F2ZSBkZWZhdWx0IGN0eCBzdGF0ZVxuICAgIHRoaXMuX2N0eC5zZXRUcmFuc2Zvcm0oMSwgMCwgMCwgMSwgMCwgMClcbiAgICB0aGlzLl9jdHguc2F2ZSgpXG4gIH1cblxuICBwcml2YXRlIF9pbml0RXZlbnRzICgpOnZvaWQge1xuICAgIHRoaXMucmVzaXplKClcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgICAgdGhpcy5yZXNpemUodHJ1ZSlcbiAgICB9KVxuXG4gICAgLy8gVG9kbzog5YWI5Y+q57uZIHN0YWdlIOa0vuWPkem8oOagh+S6i+S7tlxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZTogYW55KSA9PiB7XG4gICAgICB0aGlzLmRpc3BhdGNoKG5ldyBNb3VzZUV2ZW50KE1vdXNlRXZlbnQuTU9VU0VfTU9WRSwgdGhpcywgZS5vZmZzZXRYLCBlLm9mZnNldFkpKVxuICAgIH0pXG4gIH1cblxuICBwdWJsaWMgcmVzaXplIChzZW5kRXZlbnQ6IGJvb2xlYW4gPSBmYWxzZSk6dm9pZCB7XG4gICAgbGV0IHJlY3QgPSB0aGlzLl9yb290RWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICB0aGlzLl9yb290RWwud2lkdGggPSB0aGlzLl93aWR0aCA9IHJlY3Qud2lkdGhcbiAgICB0aGlzLl9yb290RWwuaGVpZ2h0ID0gdGhpcy5faGVpZ2h0ID0gcmVjdC5oZWlnaHRcbiAgICB0aGlzLmRpc3BhdGNoKG5ldyBEaXNwbGF5RXZlbnQoRGlzcGxheUV2ZW50LlNUQUdFX1JFU0laRSwgdGhpcykpXG4gIH1cblxuICBwdWJsaWMgdXBkYXRlICgpOnZvaWQge1xuICAgIHRoaXMuX2N0eC5yZXN0b3JlKClcbiAgICB0aGlzLl9jdHguc2V0VHJhbnNmb3JtKDEsIDAsIDAsIDEsIDAsIDApXG4gICAgdGhpcy5fY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLl93aWR0aCwgdGhpcy5faGVpZ2h0KVxuICAgIHRoaXMuZW50ZXJGcmFtZSh0aGlzLl9jdHgpXG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29yZS9kaXNwbGF5L1N0YWdlLnRzIiwiaW1wb3J0IEV2ZW50IGZyb20gXCIuL0V2ZW50XCI7XG5cbi8qKlxuICog5LqL5Lu25Y6f5Z6LXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50RGlzcGF0Y2hlciB7XG4gIFxuICAvLyAg5bey5pyJ55qE5LqL5Lu25YiX6KGoXG4gIHByaXZhdGUgX2xpc3RlbmVyczogYW55W10gPSBbXVxuICBcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIFxuICB9XG5cbiAgLyoqXG4gICAqIOafpeaJvuaYr+WQpuacieazqOWGjOi/h+eahOebuOWQjOS6i+S7tlxuICAgKiBAcGFyYW0gZXZlbnROYW1lIFxuICAgKiBAcGFyYW0gY2FsbGJhY2sgXG4gICAqIEBwYXJhbSBzY29wZSBcbiAgICovXG4gIHByaXZhdGUgX2ZpbmRMaXN0ZW5lciAoZXZlbnROYW1lOiBzdHJpbmcsIGNhbGxiYWNrOiBGdW5jdGlvbiwgc2NvcGU6IGFueSA9IG51bGwpOnZvaWQge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fbGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgbGlzdGVuZXIgPSB0aGlzLl9saXN0ZW5lcnNbaV1cbiAgICAgIGlmIChsaXN0ZW5lci50eXBlID09PSBldmVudE5hbWUgJiYgXG4gICAgICAgIGxpc3RlbmVyLmNhbGxiYWNrID09PSBjYWxsYmFjayAmJiBcbiAgICAgICAgbGlzdGVuZXIuc2NvcGUgPT09IHNjb3BlKSB7XG4gICAgICAgICAgcmV0dXJuIGxpc3RlbmVyXG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog55So5LqL5Lu25ZCN55u05o6l5rS+5Y+R5LqL5Lu2XG4gICAqIEBwYXJhbSBldmVudE5hbWUgXG4gICAqIEBwYXJhbSBkYXRhXG4gICAqL1xuICBwdWJsaWMgZGlzcGF0Y2hXaXRoIChldmVudE5hbWU6IHN0cmluZywgLi4uZGF0YTogYW55W10pOnZvaWQge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fbGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgbGlzdGVuZXIgPSB0aGlzLl9saXN0ZW5lcnNbaV1cbiAgICAgIGlmIChsaXN0ZW5lci50eXBlID09PSBldmVudE5hbWUpIHtcbiAgICAgICAgbGlzdGVuZXIuY2FsbGJhY2suY2FsbChsaXN0ZW5lci5zY29wZSwgbmV3IEV2ZW50KGV2ZW50TmFtZSwgdGhpcywgLi4uZGF0YSkpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOa0vuWPkeS6i+S7tlxuICAgKiBAcGFyYW0gZXZlbnQgXG4gICAqL1xuICBwdWJsaWMgZGlzcGF0Y2ggKGV2ZW50OiBFdmVudCk6dm9pZCB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9saXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBsaXN0ZW5lciA9IHRoaXMuX2xpc3RlbmVyc1tpXVxuICAgICAgaWYgKGxpc3RlbmVyLnR5cGUgPT09IGV2ZW50LnR5cGUpIHtcbiAgICAgICAgbGlzdGVuZXIuY2FsbGJhY2suY2FsbChsaXN0ZW5lci5zY29wZSwgZXZlbnQpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOa3u+WKoOafkOS4gOS4quS6i+S7tuS+puWQrFxuICAgKiBAcGFyYW0gZXZlbnROYW1lIFxuICAgKiBAcGFyYW0gY2FsbGJhY2sgXG4gICAqIEBwYXJhbSBzY29wZSBcbiAgICovXG4gIHB1YmxpYyBhZGRMaXN0ZW5lciAoZXZlbnROYW1lOiBzdHJpbmcsIGNhbGxiYWNrOiBGdW5jdGlvbiwgc2NvcGU6IGFueSA9IG51bGwpOnZvaWQge1xuICAgIGxldCBleGlzdGVkTGlzdGVuZXIgPSB0aGlzLl9maW5kTGlzdGVuZXIoZXZlbnROYW1lLCBjYWxsYmFjaywgc2NvcGUpXG4gICAgaWYgKCFleGlzdGVkTGlzdGVuZXIpIHtcbiAgICAgIHRoaXMuX2xpc3RlbmVycy5wdXNoKHtcbiAgICAgICAgdHlwZTogZXZlbnROYW1lLFxuICAgICAgICBjYWxsYmFjayxcbiAgICAgICAgc2NvcGVcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOenu+mZpOafkOS4gOS4quS6i+S7tuS+puWQrFxuICAgKiBAcGFyYW0gZXZlbnROYW1lIFxuICAgKiBAcGFyYW0gY2FsbGJhY2sgXG4gICAqIEBwYXJhbSBzY29wZVxuICAgKi9cbiAgcHVibGljIHJlbW92ZUxpc3RlbmVyIChldmVudE5hbWU6IHN0cmluZywgY2FsbGJhY2s6IEZ1bmN0aW9uLCBzY29wZTogYW55ID0gbnVsbCk6dm9pZCB7XG4gICAgbGV0IGV4aXN0ZWRMaXN0ZW5lciA9IHRoaXMuX2ZpbmRMaXN0ZW5lcihldmVudE5hbWUsIGNhbGxiYWNrLCBzY29wZSlcbiAgICBpZiAoZXhpc3RlZExpc3RlbmVyKSB7XG4gICAgICB0aGlzLl9saXN0ZW5lcnMuc3BsaWNlKHRoaXMuX2xpc3RlbmVycy5pbmRleE9mKGV4aXN0ZWRMaXN0ZW5lciksIDEpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOenu+mZpOaJgOacieeahOS6i+S7tuS+puWQrFxuICAgKi9cbiAgcHVibGljIHJlbW92ZUFsbExpc3RlbmVycyAoKSB7XG4gICAgdGhpcy5fbGlzdGVuZXJzLnNwbGljZSgwKVxuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvcmUvZXZlbnRzL0V2ZW50RGlzcGF0Y2hlci50cyIsImltcG9ydCBFdmVudCBmcm9tIFwiLi9FdmVudFwiO1xuaW1wb3J0IEV2ZW50RGlzcGF0Y2hlciBmcm9tIFwiLi9FdmVudERpc3BhdGNoZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW91c2VFdmVudCBleHRlbmRzIEV2ZW50IHtcbiAgcHVibGljIHN0YXRpYyBNT1VTRV9NT1ZFOiBzdHJpbmcgPSAnbW91c2VfbW92ZSc7XG5cbiAgcmVhZG9ubHkgc3RhZ2VYOiBudW1iZXI7XG4gIHJlYWRvbmx5IHN0YWdlWTogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yICh0eXBlOiBzdHJpbmcsIHRhcmdldDogRXZlbnREaXNwYXRjaGVyLCBzdGFnZVg6IG51bWJlciwgc3RhZ2VZOiBudW1iZXIpIHtcbiAgICBzdXBlcih0eXBlLCB0YXJnZXQpXG5cbiAgICB0aGlzLnN0YWdlWCA9IHN0YWdlWDtcbiAgICB0aGlzLnN0YWdlWSA9IHN0YWdlWTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb3JlL2V2ZW50cy9Nb3VzZUV2ZW50LnRzIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9pbnQge1xuXG4gIHB1YmxpYyBzdGF0aWMgZGlzdGFuY2UgKHAxOiBQb2ludCwgcDI6IFBvaW50KTpudW1iZXIge1xuICAgIHJldHVybiBNYXRoLnNxcnQoTWF0aC5wb3cocDEueCAtIHAyLngsIDIpICsgTWF0aC5wb3cocDEueSAtIHAyLnksIDIpKVxuICB9XG5cbiAgcHVibGljIHg6IG51bWJlclxuICBwdWJsaWMgeTogbnVtYmVyXG4gIFxuICBwdWJsaWMgY29uc3RydWN0b3IgKHg6IG51bWJlciA9IDAsIHk6IG51bWJlciA9IDApIHtcbiAgICB0aGlzLnggPSB4XG4gICAgdGhpcy55ID0geVxuICB9XG5cbiAgcHVibGljIGRpc3RhbmNlVG8gKHA6IFBvaW50KTpudW1iZXIge1xuICAgIHJldHVybiBQb2ludC5kaXN0YW5jZSh0aGlzLCBwKVxuICB9XG5cbiAgcHVibGljIHRvU3RyaW5nICgpOnN0cmluZyB7XG4gICAgcmV0dXJuIGBQb2ludCh4PSR7dGhpcy54fSwgeT0ke3RoaXMueX1gXG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29yZS91dGlscy9Qb2ludC50cyIsImltcG9ydCBEaXNwbGF5T2JqZWN0IGZyb20gXCIuLi9jb3JlL2Rpc3BsYXkvRGlzcGxheU9iamVjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcm91bmQgZXh0ZW5kcyBEaXNwbGF5T2JqZWN0IHtcbiAgcmVhZG9ubHkgaGVpZ2h0OiBudW1iZXIgPSA1MFxuICBcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLmhlaWdodCA9IDUwXG4gIH1cblxuICByZW5kZXIgKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICcjNkY0RTM3J1xuICAgIGxldCB3OiBudW1iZXIgPSB0aGlzLnN0YWdlLndpZHRoXG4gICAgY3R4LmZpbGxSZWN0KC13IC8gMiwgMCwgdywgdGhpcy5oZWlnaHQpXG4gICAgXG4gICAgY3R4LmJlZ2luUGF0aCgpXG4gICAgY3R4Lm1vdmVUbygtdyAvIDIsIDApXG4gICAgY3R4LmxpbmVUbyh3IC8yLCAwKVxuICAgIGN0eC5jbG9zZVBhdGgoKVxuICAgIGN0eC5zdHJva2UoKVxuXG4gICAgbGV0IG46bnVtYmVyID0gTWF0aC5jZWlsKHcgLyA1MCkgKyAxXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpICsrKSB7XG4gICAgICBjdHguYmVnaW5QYXRoKClcbiAgICAgIGN0eC5tb3ZlVG8oKGkgKyAxKSogNTAgLSB3IC8gMiwgMClcbiAgICAgIGN0eC5saW5lVG8oaSAqIDUwIC0gdyAvIDIsIHRoaXMuaGVpZ2h0KVxuICAgICAgY3R4LmNsb3NlUGF0aCgpXG4gICAgICBjdHguc3Ryb2tlKClcbiAgICB9XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9Hcm91bmQudHMiLCJpbXBvcnQgU3RhZ2UgZnJvbSAnLi9jb3JlL2Rpc3BsYXkvU3RhZ2UnXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4vY29yZS9kaXNwbGF5L0NvbnRhaW5lcidcbmltcG9ydCBUaWNrZXIgZnJvbSAnLi9jb3JlL3RpY2tlci9UaWNrZXInXG5pbXBvcnQgUG9pbnQgZnJvbSAnLi9jb3JlL3V0aWxzL1BvaW50JztcbmltcG9ydCBEaXNwbGF5RXZlbnQgZnJvbSAnLi9jb3JlL2V2ZW50cy9EaXNwbGF5RXZlbnQnO1xuaW1wb3J0IGNoYXB0ZXIxX29uZV9zZWdtZW50IGZyb20gJy4vdmlld3MvY2hhcHRlcjFfb25lX3NlZ21lbnQnO1xuaW1wb3J0IENoYXB0ZXIgZnJvbSAnLi9jb21wb25lbnRzL0NoYXB0ZXInO1xuaW1wb3J0IGNoYXB0ZXIyX3R3b19zZWdtZW50IGZyb20gJy4vdmlld3MvY2hhcHRlcjJfdHdvX3NlZ21lbnQnO1xuaW1wb3J0IGNoYXB0ZXIzX3N0YXJ0X3dhbGsgZnJvbSAnLi92aWV3cy9jaGFwdGVyM19zdGFydF93YWxrJztcbmltcG9ydCBDb250cm9scyBmcm9tICcuL0NvbnRyb2xzJztcbmltcG9ydCBjaGFwdGVyNF93YWxrX3dpdGhfMl9sZWdzIGZyb20gJy4vdmlld3MvY2hhcHRlcjRfd2Fsa193aXRoXzJfbGVncyc7XG5pbXBvcnQgY2hhcHRlcjVfd2Fsa19vbl90aGVfZ3JvdW5kIGZyb20gJy4vdmlld3MvY2hhcHRlcjVfd2Fsa19vbl90aGVfZ3JvdW5kJztcbmltcG9ydCBjaGFwdGVyNl9mZXRjaF9wbGF5IGZyb20gJy4vdmlld3MvY2hhcHRlcjZfZmV0Y2hfcGxheSc7XG5cbmNvbnN0IHN0YWdlOlN0YWdlID0gbmV3IFN0YWdlKCdyb290JylcblxuY29uc3QgbWFpbjogQ29udGFpbmVyID0gbmV3IENvbnRhaW5lcigpXG5tYWluLnggPSBzdGFnZS53aWR0aCAvIDJcbm1haW4ueSA9IHN0YWdlLmhlaWdodCAvIDJcbnN0YWdlLmFkZENoaWxkKG1haW4pXG5cblRpY2tlci5yZWdpc3RlcigoKSA9PiB7XG4gIHN0YWdlLnVwZGF0ZSgpXG59KVxuXG5jb25zdCBjaGFwdGVyTWFwOiBhbnkgPSB7XG4gIDE6IGNoYXB0ZXIxX29uZV9zZWdtZW50LFxuICAyOiBjaGFwdGVyMl90d29fc2VnbWVudCxcbiAgMzogY2hhcHRlcjNfc3RhcnRfd2FsayxcbiAgNDogY2hhcHRlcjRfd2Fsa193aXRoXzJfbGVncyxcbiAgNTogY2hhcHRlcjVfd2Fsa19vbl90aGVfZ3JvdW5kLFxuICA2OiBjaGFwdGVyNl9mZXRjaF9wbGF5XG59XG5cbmxldCBjdXJyZW50OiBhbnkgPSB7XG4gIGluZGV4OiAwLFxuICBjaGFwdGVyOiBudWxsXG59XG5cbmZ1bmN0aW9uIG5hdmlnYXRlVG9DaGFwdGVyIChpbmRleDogbnVtYmVyKSB7XG4gIGxldCBjaGFwdGVyQ2xhc3M6IGFueSA9IGNoYXB0ZXJNYXBbaW5kZXhdXG4gIGlmIChjaGFwdGVyQ2xhc3MpIHtcbiAgICBpZiAoY3VycmVudC5jaGFwdGVyKSB7XG4gICAgICBtYWluLnJlbW92ZUNoaWxkKGN1cnJlbnQuY2hhcHRlcilcbiAgICAgIENvbnRyb2xzLnJlbW92ZUFsbCgpXG4gICAgfVxuICAgIGxldCBjaGFwdGVyOiBDaGFwdGVyID0gbmV3IGNoYXB0ZXJDbGFzcygpIGFzIENoYXB0ZXJcbiAgICBtYWluLmFkZENoaWxkKGNoYXB0ZXIpXG4gICAgY3VycmVudC5jaGFwdGVyID0gY2hhcHRlclxuICAgIGN1cnJlbnQuaW5kZXggPSBpbmRleFxuICAgIGNvbnNvbGUubG9nKGluZGV4LCBjaGFwdGVyKVxuICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJyNjaGFwdGVyJyArIGluZGV4XG4gIH0gZWxzZSB7XG4gICAgYWxlcnQoYOW3sue7j+aYryR7aW5kZXggPCAwID8gJ+esrOS4gOmhtScgOiAn5pyA5ZCO5LiA6aG1J33kuoZgKVxuICB9XG59XG5cbi8vIHVwPTM4LCBkb3duPTQwLCBzcGFjZT0zMlxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICBjb25zb2xlLmxvZyhlLmtleUNvZGUpXG4gIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgY2FzZSAzODpcbiAgICAgIG5hdmlnYXRlVG9DaGFwdGVyKGN1cnJlbnQuaW5kZXggLSAxKVxuICAgICAgYnJlYWtcbiAgICBjYXNlIDQwOlxuICAgICAgbmF2aWdhdGVUb0NoYXB0ZXIoY3VycmVudC5pbmRleCArIDEpXG4gICAgICBicmVha1xuICAgIGNhc2UgMzI6XG4gICAgICBpZiAoY3VycmVudC5jaGFwdGVyKSB7XG4gICAgICAgIGN1cnJlbnQuY2hhcHRlci5uZXh0U2NlbmUoKVxuICAgICAgfVxuICAgICAgYnJlYWtcbiAgfVxufSlcblxuZnVuY3Rpb24gb25IYXNoQ2hhbmdlICgpIHtcbiAgbGV0IGhhc2g6c3RyaW5nID0gd2luZG93LmxvY2F0aW9uLmhhc2hcbiAgbGV0IGNoYXB0ZXJJbmRleDogbnVtYmVyXG4gIGlmIChoYXNoLmluZGV4T2YoJyNjaGFwdGVyJykgPj0gMCkge1xuICAgIGNoYXB0ZXJJbmRleCA9ICtoYXNoLnN1YnN0cig4KVxuICB9XG4gIG5hdmlnYXRlVG9DaGFwdGVyKGNoYXB0ZXJJbmRleCB8fCAxKVxufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsIG9uSGFzaENoYW5nZSk7XG5vbkhhc2hDaGFuZ2UoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC50cyIsIi8vICDmgLvnmoTmr4/luKfkuovku7ZcblxudmFyIF9yYWY6bnVtYmVyID0gbnVsbFxudmFyIF9jYkxpc3Q6YW55W10gPSBbXVxudmFyIF9sYXN0VGlja1RpbWU6IG51bWJlclxudmFyIF9pc1BhdXNlZDogQm9vbGVhbiA9IGZhbHNlXG52YXIgX2lkOm51bWJlciA9IDBcbnZhciBfZnBzSW50ZXJ2YWw6IG51bWJlciA9IDEwMDAgLyA2MFxuXG4vLyAg5oC755qE5bin5LqL5Lu2XG5mdW5jdGlvbiB0aWNrICgpOnZvaWQge1xuICBfcmFmID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aWNrKVxuICB2YXIgbm93ID0gRGF0ZS5ub3coKVxuICAvLyAgdGljayBkdXJhdGlvblxuICB2YXIgZGVsdGEgPSBub3cgLSBfbGFzdFRpY2tUaW1lXG4gIGlmIChkZWx0YSA+PSBfZnBzSW50ZXJ2YWwpIHtcbiAgICBfbGFzdFRpY2tUaW1lID0gbm93XG4gICAgLy8gIGlmIHBhdXNlZCwgZG8gbm90IGNhbGwgdHdlZW4gdGlja1xuICAgIGlmICghX2lzUGF1c2VkKSB7XG4gICAgICBfY2JMaXN0LmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIGl0ZW1bMF0uY2FsbChpdGVtWzFdKVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBpZiAoIShfY2JMaXN0Lmxlbmd0aCkpIHtcbiAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUoX3JhZilcbiAgICBfcmFmID0gbnVsbFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpY2tlciB7XG4gIHB1YmxpYyBzdGF0aWMgc2V0RlBTIChmcHM6IG51bWJlcikge1xuICAgIF9mcHNJbnRlcnZhbCA9IE1hdGguZmxvb3IoMTAwMCAvIGZwcylcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgcmVnaXN0ZXIgKGE6IEZ1bmN0aW9uLCBiOiBhbnkgPSBudWxsKTp2b2lkIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IF9jYkxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gX2NiTGlzdFtpXVxuICAgICAgaWYgKGl0ZW0gaW5zdGFuY2VvZiBBcnJheSAmJiBpdGVtWzBdID09PSBhICYmIGl0ZW1bMV0gPT09IGIpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuICAgIF9jYkxpc3QucHVzaChbYSwgYl0pXG5cbiAgICAvLyAgc3RhcnQgcmFmXG4gICAgaWYoIV9yYWYpe1xuICAgICAgX2xhc3RUaWNrVGltZSA9IERhdGUubm93KClcbiAgICAgIF9yYWYgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRpY2spXG4gICAgfVxuICB9XG5cbiAgcHVibGljIHN0YXRpYyB1bnJlZ2lzdGVyIChhOiBGdW5jdGlvbiwgYjogYW55ID0gbnVsbCk6dm9pZCB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBfY2JMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IF9jYkxpc3RbaV1cbiAgICAgIGlmIChpdGVtIGluc3RhbmNlb2YgQXJyYXkgJiYgaXRlbVswXSA9PT0gYSAmJiBpdGVtWzFdID09PSBiKSB7XG4gICAgICAgIF9jYkxpc3Quc3BsaWNlKGksIDEpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb3JlL3RpY2tlci9UaWNrZXIudHMiLCJpbXBvcnQgQ2hhcHRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9DaGFwdGVyXCI7XG5pbXBvcnQgU2VnbWVudCBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWdtZW50XCI7XG5pbXBvcnQgTW91c2VFdmVudCBmcm9tIFwiLi4vY29yZS9ldmVudHMvTW91c2VFdmVudFwiO1xuaW1wb3J0IE1hdGhzIGZyb20gXCIuLi9jb3JlL3V0aWxzL01hdGhzXCI7XG5pbXBvcnQgQ29udHJvbHMgZnJvbSBcIi4uL0NvbnRyb2xzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGNoYXB0ZXIxX29uZV9zZWdtZW50IGV4dGVuZHMgQ2hhcHRlciB7XG4gIFxuICAvLz09PT09PT09PT09PT09PVxuICBwdWJsaWMgc2VnOiBTZWdtZW50XG5cbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHN1cGVyKClcbiAgfVxuXG4gIHByb3RlY3RlZCBpbml0KCkge1xuICAgIHN1cGVyLmluaXQoKVxuXG4gICAgdGhpcy5zZWcgPSBuZXcgU2VnbWVudCgpXG4gICAgdGhpcy5hZGRDaGlsZCh0aGlzLnNlZylcbiAgfVxuXG4gIHByb3RlY3RlZCBvbk1vdXNlTW92ZSAoZTogTW91c2VFdmVudCkge1xuICAgIHZhciBsb2NhbFg6IG51bWJlciA9IGUuc3RhZ2VYIC0gdGhpcy5zdGFnZS53aWR0aCAvIDJcbiAgICB2YXIgbG9jYWxZOiBudW1iZXIgPSBlLnN0YWdlWSAtIHRoaXMuc3RhZ2UuaGVpZ2h0IC8gMlxuXG4gICAgdmFyIHJhZDogbnVtYmVyID0gTWF0aC5hdGFuMihsb2NhbFkgLSB0aGlzLnNlZy55LCBsb2NhbFggLSB0aGlzLnNlZy54KVxuICAgIHRoaXMuc2VnLnJvdGF0aW9uID0gTWF0aHMucmFkVG9EZWcocmFkKVxuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZpZXdzL2NoYXB0ZXIxX29uZV9zZWdtZW50LnRzIiwiaW1wb3J0IENoYXB0ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2hhcHRlclwiO1xuaW1wb3J0IFNlZ21lbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VnbWVudFwiO1xuaW1wb3J0IE1vdXNlRXZlbnQgZnJvbSBcIi4uL2NvcmUvZXZlbnRzL01vdXNlRXZlbnRcIjtcbmltcG9ydCBNYXRocyBmcm9tIFwiLi4vY29yZS91dGlscy9NYXRoc1wiO1xuaW1wb3J0IFBvaW50IGZyb20gXCIuLi9jb3JlL3V0aWxzL1BvaW50XCI7XG5pbXBvcnQgQ29udHJvbHMgZnJvbSBcIi4uL0NvbnRyb2xzXCI7XG5pbXBvcnQgU2xpZGVyIGZyb20gXCIuLi9TbGlkZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgY2hhcHRlcjJfdHdvX3NlZ21lbnQgZXh0ZW5kcyBDaGFwdGVyIHtcbiAgXG4gIC8vPT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzZWcxOiBTZWdtZW50O1xuICBwdWJsaWMgc2VnMjogU2VnbWVudDtcblxuICBwdWJsaWMgc2xpZGVyMTogU2xpZGVyO1xuICBwdWJsaWMgc2xpZGVyMjogU2xpZGVyO1xuICBwdWJsaWMgclNlZzJCYXNlOiBudW1iZXIgPSAwXG5cbiAgcHVibGljIHNlZzJGb2xsb3dTZWcxOiBCb29sZWFuID0gZmFsc2VcblxuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgc3VwZXIoKVxuICB9XG5cbiAgcHJvdGVjdGVkIGluaXQoKSB7XG4gICAgc3VwZXIuaW5pdCgpXG5cbiAgICB0aGlzLnNlZzEgPSBuZXcgU2VnbWVudCgpO1xuICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5zZWcxKTtcbiAgICB0aGlzLnNsaWRlcjEgPSBDb250cm9scy5nZXRTbGlkZXIoJ1NlZzEnLCAncm90YXRpb24nLCAwLCAtMTgwLCAxODApLmF0dGFjaCgpXG5cbiAgICB0aGlzLnNlZzIgPSBuZXcgU2VnbWVudCgpO1xuICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5zZWcyKTtcbiAgICB0aGlzLnNsaWRlcjIgPSBDb250cm9scy5nZXRTbGlkZXIoJ1NlZzInLCAncm90YXRpb24nLCAwLCAtMTgwLCAxODApLmF0dGFjaCgpXG4gIH1cblxuICBwcm90ZWN0ZWQgc3dpdGNoU2NlbmUgKGluZGV4OiBudW1iZXIpIHtcbiAgICBzd2l0Y2ggKGluZGV4KSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHRoaXMuc2VnMkZvbGxvd1NlZzEgPSB0cnVlXG4gICAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgLy8gcHJvdGVjdGVkIG9uTW91c2VNb3ZlIChlOiBNb3VzZUV2ZW50KSB7XG4gIC8vICAgdmFyIGxvY2FsWDogbnVtYmVyID0gZS5zdGFnZVggLSB0aGlzLnN0YWdlLndpZHRoIC8gMlxuICAvLyAgIHZhciBsb2NhbFk6IG51bWJlciA9IGUuc3RhZ2VZIC0gdGhpcy5zdGFnZS5oZWlnaHQgLyAyXG5cbiAgLy8gICB2YXIgcmFkOiBudW1iZXIgPSBNYXRoLmF0YW4yKGxvY2FsWSAtIHRoaXMuc2VnMS55LCBsb2NhbFggLSB0aGlzLnNlZzEueClcbiAgLy8gICB0aGlzLnNlZzEucm90YXRpb24gPSBNYXRocy5yYWRUb0RlZyhyYWQpXG4gIC8vIH1cblxuICBwcm90ZWN0ZWQgb25UaWNrICgpIHtcbiAgICB0aGlzLnNlZzEucm90YXRpb24gPSB0aGlzLnNsaWRlcjEudmFsdWVcbiAgICBsZXQgcGluMTogUG9pbnQgPSB0aGlzLnNlZzEuZ2V0UGluKClcbiAgICB0aGlzLnNlZzIueCA9IHBpbjEueFxuICAgIHRoaXMuc2VnMi55ID0gcGluMS55XG5cbiAgICB0aGlzLnNlZzIucm90YXRpb24gPSB0aGlzLnNsaWRlcjIudmFsdWVcbiAgICBpZiAodGhpcy5zZWcyRm9sbG93U2VnMSkge1xuICAgICAgdGhpcy5zZWcyLnJvdGF0aW9uICs9IHRoaXMuc2VnMS5yb3RhdGlvblxuICAgIH1cbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92aWV3cy9jaGFwdGVyMl90d29fc2VnbWVudC50cyIsImltcG9ydCBDb250cm9scyBmcm9tICcuL0NvbnRyb2xzJ1xuaW1wb3J0IEV2ZW50RGlzcGF0Y2hlciBmcm9tICcuL2NvcmUvZXZlbnRzL0V2ZW50RGlzcGF0Y2hlcidcblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudCAodGV4dDogc3RyaW5nKTpIVE1MRWxlbWVudCB7XG4gIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBkaXYuaW5uZXJIVE1MID0gdGV4dFxuICByZXR1cm4gZGl2LmZpcnN0RWxlbWVudENoaWxkIGFzIEhUTUxFbGVtZW50XG59XG5cbmxldCBpZCA9IDBcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2xpZGVyIGV4dGVuZHMgRXZlbnREaXNwYXRjaGVyIHtcbiAgXG4gICAgcHVibGljIGlkOiBudW1iZXJcbiAgICBwdWJsaWMgbGFiZWw6IHN0cmluZ1xuICAgIHB1YmxpYyBrZXk6IHN0cmluZ1xuICAgIHB1YmxpYyBtaW46IG51bWJlclxuICAgIHB1YmxpYyBtYXg6IG51bWJlclxuICBcbiAgICBwdWJsaWMgZWw6IEhUTUxFbGVtZW50XG4gICAgcHVibGljIGlucHV0OiBIVE1MSW5wdXRFbGVtZW50XG4gIFxuICAgIHB1YmxpYyBnZXQgdmFsdWUgKCkge1xuICAgICAgcmV0dXJuICt0aGlzLmlucHV0LnZhbHVlXG4gICAgfVxuICBcbiAgICBwdWJsaWMgY2FsbGJhY2s6IEZ1bmN0aW9uO1xuICAgIHB1YmxpYyBzY29wZTogYW55O1xuICBcbiAgICBjb25zdHJ1Y3RvciAobGFiZWw6IHN0cmluZywga2V5OiBzdHJpbmcsIGluaXRWYWx1ZTogbnVtYmVyLCBtaW46IG51bWJlciwgbWF4OiBudW1iZXIsIHN0ZXA6IG51bWJlciA9IDAuMSkge1xuICAgICAgc3VwZXIoKVxuICBcbiAgICAgIHRoaXMuaWQgPSArK2lkXG4gICAgICB0aGlzLmxhYmVsID0gbGFiZWxcbiAgICAgIHRoaXMua2V5ID0ga2V5XG4gICAgICB0aGlzLm1pbiA9IG1pblxuICAgICAgdGhpcy5tYXggPSBtYXhcbiAgICAgIFxuICAgICAgdGhpcy5pbml0KGluaXRWYWx1ZSwgc3RlcClcbiAgICB9XG4gIFxuICAgIHB1YmxpYyBpbml0IChpbml0VmFsdWU6IG51bWJlciwgc3RlcDogbnVtYmVyKSB7XG4gICAgICBsZXQgc3RyID0gYFxuICAgICAgPGRpdiBpZD1cInNsaWRlciR7dGhpcy5pZH1cIiBjbGFzcz1cInNlZ21lbnRcIj5cbiAgICAgICAgPGgzPiR7dGhpcy5sYWJlbH0gPHNtYWxsPjwvc21hbGw+PC9oMz5cbiAgICAgICAgPGxhYmVsPiR7dGhpcy5rZXl9PGlucHV0IHR5cGU9XCJyYW5nZVwiIG1pbj1cIiR7dGhpcy5taW59XCIgbWF4PVwiJHt0aGlzLm1heH1cIiBzdGVwPVwiJHtzdGVwfVwiPjwvbGFiZWw+XG4gICAgICAgIDxzcGFuPiR7aW5pdFZhbHVlfTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgYFxuICAgICAgdGhpcy5lbCA9IGNyZWF0ZUVsZW1lbnQoc3RyKVxuICAgICAgdGhpcy5pbnB1dD0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpXG4gICAgICB0aGlzLmlucHV0LnZhbHVlID0gaW5pdFZhbHVlICsgJydcbiAgICAgIGxldCBzcGFuOmFueSA9IHRoaXMuZWwucXVlcnlTZWxlY3Rvcignc3BhbicpXG4gICAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGU6YW55KSA9PiB7XG4gICAgICAgIHNwYW4uaW5uZXJUZXh0ID0gdGhpcy5pbnB1dC52YWx1ZVxuICAgICAgICBpZiAodGhpcy5jYWxsYmFjaykge1xuICAgICAgICAgIHRoaXMuY2FsbGJhY2suY2FsbCh0aGlzLnNjb3BlLCArdGhpcy5pbnB1dC52YWx1ZSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIFxuICAgIHB1YmxpYyBhdHRhY2ggKGNhbGxiYWNrOiBGdW5jdGlvbiA9IG51bGwsIHNjb3BlOiBhbnkgPSBudWxsKSB7XG4gICAgICBDb250cm9scy5yb290RWwuYXBwZW5kQ2hpbGQodGhpcy5lbClcbiAgICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFja1xuICAgICAgdGhpcy5zY29wZSA9IG51bGxcbiAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuICBcbiAgICBwdWJsaWMgZGV0YWNoICgpIHtcbiAgICAgIENvbnRyb2xzLnJvb3RFbC5yZW1vdmVDaGlsZCh0aGlzLmVsKVxuICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG4gIH1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvU2xpZGVyLnRzIiwiaW1wb3J0IENoYXB0ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2hhcHRlclwiO1xuaW1wb3J0IFNlZ21lbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VnbWVudFwiO1xuaW1wb3J0IE1vdXNlRXZlbnQgZnJvbSBcIi4uL2NvcmUvZXZlbnRzL01vdXNlRXZlbnRcIjtcbmltcG9ydCBNYXRocyBmcm9tIFwiLi4vY29yZS91dGlscy9NYXRoc1wiO1xuaW1wb3J0IFBvaW50IGZyb20gXCIuLi9jb3JlL3V0aWxzL1BvaW50XCI7XG5pbXBvcnQgU2xpZGVyIGZyb20gXCIuLi9TbGlkZXJcIjtcbmltcG9ydCBDb250cm9scyBmcm9tIFwiLi4vQ29udHJvbHNcIjtcbmltcG9ydCBTaW5ld2F2ZSBmcm9tIFwiLi4vU2luZXdhdmVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgY2hhcHRlcjNfc3RhcnRfd2FsayBleHRlbmRzIENoYXB0ZXIge1xuICBcbiAgLy89PT09PT09PT09PT09PT1cbiAgcHVibGljIHNlZzE6IFNlZ21lbnQ7XG4gIHB1YmxpYyBzZWcyOiBTZWdtZW50O1xuXG4gIHB1YmxpYyBzbGlkZXIxOiBTbGlkZXI7XG4gIHB1YmxpYyBzbGlkZXIyOiBTbGlkZXI7XG5cbiAgLy8gIOato+W8pumch+iNoVxuICBwdWJsaWMgc2luZXdhdmU6IFNpbmV3YXZlO1xuXG4gIHB1YmxpYyBhcHBseU9mZnNldFBoYXNlRGVnOiBib29sZWFuID0gZmFsc2VcblxuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgc3VwZXIoKVxuICB9XG5cbiAgcHJvdGVjdGVkIGluaXQoKSB7XG4gICAgc3VwZXIuaW5pdCgpXG5cbiAgICB0aGlzLnNlZzEgPSBuZXcgU2VnbWVudCgpO1xuICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5zZWcxKTtcbiAgICB0aGlzLnNlZzEucm90YXRpb24gPSA5MFxuICAgIHRoaXMuc2xpZGVyMSA9IENvbnRyb2xzLmdldFNsaWRlcignU2VnMScsICdyb3RhdGlvbicsIDkwLCA0NSwgMTM1KS5hdHRhY2goKVxuXG4gICAgdGhpcy5zZWcyID0gbmV3IFNlZ21lbnQoKTtcbiAgICB0aGlzLmFkZENoaWxkKHRoaXMuc2VnMik7XG4gICAgdGhpcy5zbGlkZXIyID0gQ29udHJvbHMuZ2V0U2xpZGVyKCdTZWcyJywgJ3JvdGF0aW9uJywgMCwgLTE4MCwgMTgwKS5hdHRhY2goKVxuXG4gICAgdGhpcy5zaW5ld2F2ZSA9IG5ldyBTaW5ld2F2ZSgpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHN3aXRjaFNjZW5lIChpbmRleDogbnVtYmVyKSB7XG4gICAgc3dpdGNoIChpbmRleCkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICB0aGlzLmFwcGx5T2Zmc2V0UGhhc2VEZWcgPSB0cnVlXG4gICAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIG9uVGljayAoKSB7XG4gICAgdGhpcy5zaW5ld2F2ZS51cGRhdGUoKVxuXG4gICAgdGhpcy5zZWcxLnJvdGF0aW9uID0gdGhpcy5zbGlkZXIxLnZhbHVlICsgMzAgKiB0aGlzLnNpbmV3YXZlLnZhbHVlXG4gICAgbGV0IHBpbjE6IFBvaW50ID0gdGhpcy5zZWcxLmdldFBpbigpXG4gICAgdGhpcy5zZWcyLnggPSBwaW4xLnhcbiAgICB0aGlzLnNlZzIueSA9IHBpbjEueVxuXG4gICAgaWYgKCF0aGlzLmFwcGx5T2Zmc2V0UGhhc2VEZWcpIHtcbiAgICAgIHRoaXMuc2VnMi5yb3RhdGlvbiA9IHRoaXMuc2xpZGVyMi52YWx1ZSArIHRoaXMuc2VnMS5yb3RhdGlvblxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlZzIucm90YXRpb24gPSB0aGlzLnNsaWRlcjIudmFsdWUgKyB0aGlzLnNsaWRlcjEudmFsdWUgKyAzMCArIDMwICogdGhpcy5zaW5ld2F2ZS5nZXRPZmZzZXRWYWx1ZSgtNDUpXG4gICAgfVxuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZpZXdzL2NoYXB0ZXIzX3N0YXJ0X3dhbGsudHMiLCJpbXBvcnQgQ2hhcHRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9DaGFwdGVyXCI7XG5pbXBvcnQgU2VnbWVudCBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWdtZW50XCI7XG5pbXBvcnQgTW91c2VFdmVudCBmcm9tIFwiLi4vY29yZS9ldmVudHMvTW91c2VFdmVudFwiO1xuaW1wb3J0IE1hdGhzIGZyb20gXCIuLi9jb3JlL3V0aWxzL01hdGhzXCI7XG5pbXBvcnQgUG9pbnQgZnJvbSBcIi4uL2NvcmUvdXRpbHMvUG9pbnRcIjtcbmltcG9ydCBTbGlkZXIgZnJvbSBcIi4uL1NsaWRlclwiO1xuaW1wb3J0IENvbnRyb2xzIGZyb20gXCIuLi9Db250cm9sc1wiO1xuaW1wb3J0IFNpbmV3YXZlIGZyb20gXCIuLi9TaW5ld2F2ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBjaGFwdGVyNF93YWxrX3dpdGhfMl9sZWdzIGV4dGVuZHMgQ2hhcHRlciB7XG4gIFxuICAvLz09PT09PT09PT09PT09PVxuICBwdWJsaWMgc2VnMTogU2VnbWVudDtcbiAgcHVibGljIHNlZzI6IFNlZ21lbnQ7XG5cbiAgcHVibGljIHNlZzM6IFNlZ21lbnQ7XG4gIHB1YmxpYyBzZWc0OiBTZWdtZW50O1xuXG4gIHB1YmxpYyBzbGlkZXJTaW5lSW5jOiBTbGlkZXI7XG4gIHB1YmxpYyBzbGlkZXJNYWluU2VnUmFuZ2U6IFNsaWRlcjtcbiAgcHVibGljIHNsaWRlck1haW5TZWdJbml0OiBTbGlkZXI7XG4gIHB1YmxpYyBzbGlkZXJTdWJTZWdSYW5nZTogU2xpZGVyO1xuXG4gIC8vICDmraPlvKbpnIfojaFcbiAgcHVibGljIHNpbmV3YXZlOiBTaW5ld2F2ZTtcbiAgXG4gIHB1YmxpYyB3YWxrUGhhc2VPZmZzZXQ6IG51bWJlciA9IC05MDtcblxuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgc3VwZXIoKVxuICB9XG5cbiAgcHJvdGVjdGVkIGluaXQoKSB7XG4gICAgc3VwZXIuaW5pdCgpXG5cbiAgICB0aGlzLnNlZzEgPSBuZXcgU2VnbWVudCgyMDAsIDQwKTtcbiAgICB0aGlzLmFkZENoaWxkKHRoaXMuc2VnMSk7XG4gICAgdGhpcy5zZWcxLnJvdGF0aW9uID0gOTBcblxuICAgIHRoaXMuc2VnMiA9IG5ldyBTZWdtZW50KDIwMCwgMzApO1xuICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5zZWcyKTtcblxuICAgIHRoaXMuc2VnMyA9IG5ldyBTZWdtZW50KDIwMCwgNDApO1xuICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5zZWczKTtcbiAgICB0aGlzLnNlZzMucm90YXRpb24gPSA5MFxuXG4gICAgdGhpcy5zZWc0ID0gbmV3IFNlZ21lbnQoMjAwLCAzMCk7XG4gICAgdGhpcy5hZGRDaGlsZCh0aGlzLnNlZzQpO1xuXG4gICAgdGhpcy5zbGlkZXJTaW5lSW5jID0gQ29udHJvbHMuZ2V0U2xpZGVyKCdTaW5ld2F2ZSBQaGFzZSBJbmMnLCAncGhhc2VJbmMnLCAwLjA1LCAwLCAwLjMpLmF0dGFjaCgpXG4gICAgdGhpcy5zbGlkZXJTaW5lSW5jLmlucHV0LnN0ZXAgPSAnMC4wMSdcbiAgICB0aGlzLnNsaWRlck1haW5TZWdSYW5nZSA9IENvbnRyb2xzLmdldFNsaWRlcignTWFpbiBTZWcgUm90YXRlIFJhbmdlJywgJ3JvdGF0ZScsIDQ1LCAwLCA5MCkuYXR0YWNoKClcbiAgICB0aGlzLnNsaWRlck1haW5TZWdJbml0ID0gQ29udHJvbHMuZ2V0U2xpZGVyKCdNYWluIFNlZyBJbml0IFJvdGF0ZScsICdyb3RhdGUnLCA5MCwgMCwgMTgwKS5hdHRhY2goKVxuICAgIHRoaXMuc2xpZGVyU3ViU2VnUmFuZ2UgPSBDb250cm9scy5nZXRTbGlkZXIoJ1N1YiBTZWcgUm90YXRlIFJhbmdlJywgJ3JvdGF0ZScsIDQ1LCAwLCA5MCkuYXR0YWNoKClcblxuICAgIHRoaXMuc2luZXdhdmUgPSBuZXcgU2luZXdhdmUoKVxuICB9XG5cbiAgcHJvdGVjdGVkIHN3aXRjaFNjZW5lIChpbmRleDogbnVtYmVyKSB7XG4gICAgc3dpdGNoIChpbmRleCkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgd2FsayhtYWluU2VnOiBTZWdtZW50LCBhdHRhY2hTZWc6IFNlZ21lbnQsIHBoYXNlT2Zmc2V0OiBudW1iZXIgPSAwKSB7XG4gICAgbWFpblNlZy5yb3RhdGlvbiA9IHRoaXMuc2xpZGVyTWFpblNlZ0luaXQudmFsdWUgKyB0aGlzLnNsaWRlck1haW5TZWdSYW5nZS52YWx1ZSAqIHRoaXMuc2luZXdhdmUuZ2V0T2Zmc2V0VmFsdWUocGhhc2VPZmZzZXQpXG4gICAgbGV0IHBpbjogUG9pbnQgPSBtYWluU2VnLmdldFBpbigpXG4gICAgYXR0YWNoU2VnLnggPSBwaW4ueFxuICAgIGF0dGFjaFNlZy55ID0gcGluLnlcbiAgICBhdHRhY2hTZWcucm90YXRpb24gPSBtYWluU2VnLnJvdGF0aW9uICsgIHRoaXMuc2xpZGVyU3ViU2VnUmFuZ2UudmFsdWUgKyB0aGlzLnNsaWRlclN1YlNlZ1JhbmdlLnZhbHVlICogdGhpcy5zaW5ld2F2ZS5nZXRPZmZzZXRWYWx1ZShwaGFzZU9mZnNldCArIHRoaXMud2Fsa1BoYXNlT2Zmc2V0KVxuICB9XG5cbiAgcHJvdGVjdGVkIG9uVGljayAoKSB7XG4gICAgdGhpcy5zaW5ld2F2ZS5waGFzZUluYyA9IHRoaXMuc2xpZGVyU2luZUluYy52YWx1ZVxuICAgIHRoaXMuc2luZXdhdmUudXBkYXRlKClcblxuICAgIHRoaXMud2Fsayh0aGlzLnNlZzEsIHRoaXMuc2VnMiwgMClcbiAgICB0aGlzLndhbGsodGhpcy5zZWczLCB0aGlzLnNlZzQsIC0xODApXG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmlld3MvY2hhcHRlcjRfd2Fsa193aXRoXzJfbGVncy50cyIsImltcG9ydCBDaGFwdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0NoYXB0ZXJcIjtcbmltcG9ydCBTZWdtZW50IGZyb20gXCIuLi9jb21wb25lbnRzL1NlZ21lbnRcIjtcbmltcG9ydCBNb3VzZUV2ZW50IGZyb20gXCIuLi9jb3JlL2V2ZW50cy9Nb3VzZUV2ZW50XCI7XG5pbXBvcnQgTWF0aHMgZnJvbSBcIi4uL2NvcmUvdXRpbHMvTWF0aHNcIjtcbmltcG9ydCBQb2ludCBmcm9tIFwiLi4vY29yZS91dGlscy9Qb2ludFwiO1xuaW1wb3J0IFNsaWRlciBmcm9tIFwiLi4vU2xpZGVyXCI7XG5pbXBvcnQgQ29udHJvbHMgZnJvbSBcIi4uL0NvbnRyb2xzXCI7XG5pbXBvcnQgU2luZXdhdmUgZnJvbSBcIi4uL1NpbmV3YXZlXCI7XG5pbXBvcnQgR3JvdW5kIGZyb20gXCIuLi9jb21wb25lbnRzL0dyb3VuZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBjaGFwdGVyNV93YWxrX29uX3RoZV9ncm91bmQgZXh0ZW5kcyBDaGFwdGVyIHtcbiAgXG4gIC8vPT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzZWcxOiBTZWdtZW50O1xuICBwdWJsaWMgc2VnMjogU2VnbWVudDtcblxuICBwdWJsaWMgc2VnMzogU2VnbWVudDtcbiAgcHVibGljIHNlZzQ6IFNlZ21lbnQ7XG5cbiAgcHVibGljIHNsaWRlclNpbmVJbmM6IFNsaWRlcjtcbiAgcHVibGljIHNsaWRlck1haW5TZWdSYW5nZTogU2xpZGVyO1xuICBwdWJsaWMgc2xpZGVyTWFpblNlZ0luaXQ6IFNsaWRlcjtcbiAgcHVibGljIHNsaWRlclN1YlNlZ1JhbmdlOiBTbGlkZXI7XG4gIHB1YmxpYyBzbGlkZXJHcmF2aXR5OiBTbGlkZXI7XG5cbiAgcHVibGljIGdyb3VuZDpHcm91bmQ7XG5cbiAgLy8gIOato+W8pumch+iNoVxuICBwdWJsaWMgc2luZXdhdmU6IFNpbmV3YXZlO1xuICBcbiAgcHVibGljIHdhbGtQaGFzZU9mZnNldDogbnVtYmVyID0gLTkwO1xuICBwdWJsaWMgbGVnc1BoYXNlT2Zmc2V0OiBudW1iZXIgPSAtMTgwO1xuXG4gIHB1YmxpYyB2eDogbnVtYmVyID0gMFxuICBwdWJsaWMgdnk6IG51bWJlciA9IDBcblxuICAvLyAg56Kw5Yiw5Zyw6Z2i5Y+N5by5XG4gIHB1YmxpYyBncm91bmRSZWJvdW5jZTogQm9vbGVhbiA9IGZhbHNlXG5cbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHN1cGVyKClcbiAgfVxuXG4gIHByb3RlY3RlZCBpbml0KCkge1xuICAgIHN1cGVyLmluaXQoKVxuICAgIFxuICAgIHRoaXMuZ3JvdW5kID0gbmV3IEdyb3VuZCgpXG4gICAgdGhpcy5ncm91bmQueSA9IHRoaXMuc3RhZ2UuaGVpZ2h0IC8gMiAtIHRoaXMuZ3JvdW5kLmhlaWdodFxuICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5ncm91bmQpXG5cbiAgICB0aGlzLnNlZzEgPSBuZXcgU2VnbWVudCgxMDAsIDMwKTtcbiAgICB0aGlzLmFkZENoaWxkKHRoaXMuc2VnMSk7XG4gICAgdGhpcy5zZWcxLnJvdGF0aW9uID0gOTBcblxuICAgIHRoaXMuc2VnMiA9IG5ldyBTZWdtZW50KDEwMCwgMjApO1xuICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5zZWcyKTtcblxuICAgIHRoaXMuc2VnMyA9IG5ldyBTZWdtZW50KDEwMCwgMzApO1xuICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5zZWczKTtcbiAgICB0aGlzLnNlZzMucm90YXRpb24gPSA5MFxuXG4gICAgdGhpcy5zZWc0ID0gbmV3IFNlZ21lbnQoMTAwLCAyMCk7XG4gICAgdGhpcy5hZGRDaGlsZCh0aGlzLnNlZzQpO1xuXG4gICAgdGhpcy5zbGlkZXJTaW5lSW5jID0gQ29udHJvbHMuZ2V0U2xpZGVyKCdTaW5ld2F2ZSBQaGFzZSBJbmMnLCAncGhhc2VJbmMnLCAwLjEyLCAwLCAwLjMsIDAuMDEpLmF0dGFjaCgpXG4gICAgdGhpcy5zbGlkZXJNYWluU2VnUmFuZ2UgPSBDb250cm9scy5nZXRTbGlkZXIoJ01haW4gU2VnIFJvdGF0ZSBSYW5nZScsICdyb3RhdGUnLCA0NSwgMCwgOTApLmF0dGFjaCgpXG4gICAgdGhpcy5zbGlkZXJNYWluU2VnSW5pdCA9IENvbnRyb2xzLmdldFNsaWRlcignTWFpbiBTZWcgSW5pdCBSb3RhdGUnLCAncm90YXRlJywgOTAsIDAsIDE4MCkuYXR0YWNoKClcbiAgICB0aGlzLnNsaWRlclN1YlNlZ1JhbmdlID0gQ29udHJvbHMuZ2V0U2xpZGVyKCdTdWIgU2VnIFJvdGF0ZSBSYW5nZScsICdyb3RhdGUnLCA0NSwgMCwgOTApLmF0dGFjaCgpXG4gICAgdGhpcy5zbGlkZXJHcmF2aXR5ID0gQ29udHJvbHMuZ2V0U2xpZGVyKCdHcmF2aXR5JywgJ2dyYXZpdHknLCAwLjM2LCAwLCAxLCAwLjAxKS5hdHRhY2goKVxuXG4gICAgdGhpcy5zaW5ld2F2ZSA9IG5ldyBTaW5ld2F2ZSgpXG4gIH1cblxuICBwcm90ZWN0ZWQgc3dpdGNoU2NlbmUgKGluZGV4OiBudW1iZXIpIHtcbiAgICBzd2l0Y2ggKGluZGV4KSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHRoaXMuZ3JvdW5kUmVib3VuY2UgPSB0cnVlXG4gICAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhcHBseUdyYXZpdHkgKCkge1xuICAgIHRoaXMudnkgKz0gdGhpcy5zbGlkZXJHcmF2aXR5LnZhbHVlXG4gICAgdGhpcy5zZWcxLnggKz0gdGhpcy52eFxuICAgIHRoaXMuc2VnMS55ICs9IHRoaXMudnlcbiAgICB0aGlzLnNlZzMueCArPSB0aGlzLnZ4XG4gICAgdGhpcy5zZWczLnkgKz0gdGhpcy52eVxuICB9XG5cbiAgcHJpdmF0ZSBkZXRlY3RHcm91bmQgKHN1YlNlZzogU2VnbWVudCkge1xuICAgIGxldCBtYXg6IG51bWJlciA9IHRoaXMuZ3JvdW5kLnlcbiAgICBsZXQgYm90dG9tOiBudW1iZXIgPSBzdWJTZWcuZ2V0UGluKCkueVxuICAgIGlmIChib3R0b20gPiBtYXgpIHtcbiAgICAgIHZhciBvZmZzZXQgPSBib3R0b20gLSBtYXhcbiAgICAgIHRoaXMuc2VnMS55IC09IG9mZnNldFxuICAgICAgdGhpcy5zZWcyLnkgLT0gb2Zmc2V0XG4gICAgICB0aGlzLnNlZzMueSAtPSBvZmZzZXRcbiAgICAgIHRoaXMuc2VnNC55IC09IG9mZnNldFxuXG4gICAgICBsZXQgZWFzZTogbnVtYmVyID0gMVxuXG4gICAgICBpZiAodGhpcy5ncm91bmRSZWJvdW5jZSkge1xuICAgICAgICB0aGlzLnZ4IC09IHN1YlNlZy52eCAqIGVhc2VcbiAgICAgICAgdGhpcy52eSAtPSBzdWJTZWcudnkgKiBlYXNlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnZ4ID0gMFxuICAgICAgICB0aGlzLnZ5ID0gMFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZGV0ZWN0V2FsbCAoKSB7XG4gICAgbGV0IHg6bnVtYmVyID0gdGhpcy5zZWcxLnhcbiAgICBsZXQgdzogbnVtYmVyID0gdGhpcy5zdGFnZS53aWR0aCArIDIwMFxuICAgIGxldCBvZmZzZXQ6IG51bWJlciA9IDBcbiAgICBpZiAoeCA+IHcgLyAyKSB7XG4gICAgICBvZmZzZXQgPSAtd1xuICAgIH0gZWxzZSBpZiAodyA8IC0gdyAvIDIpIHtcbiAgICAgIG9mZnNldCA9IHdcbiAgICB9XG4gICAgdGhpcy5zZWcxLnggKz0gb2Zmc2V0XG4gICAgdGhpcy5zZWcyLnggKz0gb2Zmc2V0XG4gICAgdGhpcy5zZWczLnggKz0gb2Zmc2V0XG4gICAgdGhpcy5zZWc0LnggKz0gb2Zmc2V0XG4gIH1cblxuICBwcml2YXRlIHdhbGsobWFpblNlZzogU2VnbWVudCwgYXR0YWNoU2VnOiBTZWdtZW50LCBwaGFzZU9mZnNldDogbnVtYmVyID0gMCkge1xuICAgIGxldCBmb290QmVmb3JlOiBQb2ludCA9IGF0dGFjaFNlZy5nZXRQaW4oKVxuICAgIG1haW5TZWcucm90YXRpb24gPSB0aGlzLnNsaWRlck1haW5TZWdJbml0LnZhbHVlICsgdGhpcy5zbGlkZXJNYWluU2VnUmFuZ2UudmFsdWUgKiB0aGlzLnNpbmV3YXZlLmdldE9mZnNldFZhbHVlKHBoYXNlT2Zmc2V0KVxuICAgIGxldCBwaW46IFBvaW50ID0gbWFpblNlZy5nZXRQaW4oKVxuICAgIGF0dGFjaFNlZy54ID0gcGluLnhcbiAgICBhdHRhY2hTZWcueSA9IHBpbi55XG4gICAgYXR0YWNoU2VnLnJvdGF0aW9uID0gbWFpblNlZy5yb3RhdGlvbiArICB0aGlzLnNsaWRlclN1YlNlZ1JhbmdlLnZhbHVlICsgdGhpcy5zbGlkZXJTdWJTZWdSYW5nZS52YWx1ZSAqIHRoaXMuc2luZXdhdmUuZ2V0T2Zmc2V0VmFsdWUocGhhc2VPZmZzZXQgKyB0aGlzLndhbGtQaGFzZU9mZnNldClcbiAgICBsZXQgZm9vdEFmdGVyOiBQb2ludCA9IGF0dGFjaFNlZy5nZXRQaW4oKVxuICAgIGF0dGFjaFNlZy52eCA9IGZvb3RBZnRlci54IC0gZm9vdEJlZm9yZS54XG4gICAgYXR0YWNoU2VnLnZ5ID0gZm9vdEFmdGVyLnkgLSBmb290QmVmb3JlLnlcbiAgfVxuXG4gIHByb3RlY3RlZCBvblRpY2sgKCkge1xuICAgIHRoaXMuc2luZXdhdmUucGhhc2VJbmMgPSB0aGlzLnNsaWRlclNpbmVJbmMudmFsdWVcbiAgICB0aGlzLnNpbmV3YXZlLnVwZGF0ZSgpXG5cbiAgICB0aGlzLmFwcGx5R3Jhdml0eSgpXG5cbiAgICB0aGlzLndhbGsodGhpcy5zZWcxLCB0aGlzLnNlZzIsIDApXG4gICAgdGhpcy53YWxrKHRoaXMuc2VnMywgdGhpcy5zZWc0LCB0aGlzLmxlZ3NQaGFzZU9mZnNldClcblxuICAgIHRoaXMuZGV0ZWN0R3JvdW5kKHRoaXMuc2VnMilcbiAgICB0aGlzLmRldGVjdEdyb3VuZCh0aGlzLnNlZzQpXG5cbiAgICB0aGlzLmRldGVjdFdhbGwoKVxuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZpZXdzL2NoYXB0ZXI1X3dhbGtfb25fdGhlX2dyb3VuZC50cyIsImltcG9ydCBDaGFwdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0NoYXB0ZXJcIjtcbmltcG9ydCBTZWdtZW50IGZyb20gXCIuLi9jb21wb25lbnRzL1NlZ21lbnRcIjtcbmltcG9ydCBNb3VzZUV2ZW50IGZyb20gXCIuLi9jb3JlL2V2ZW50cy9Nb3VzZUV2ZW50XCI7XG5pbXBvcnQgTWF0aHMgZnJvbSBcIi4uL2NvcmUvdXRpbHMvTWF0aHNcIjtcbmltcG9ydCBQb2ludCBmcm9tIFwiLi4vY29yZS91dGlscy9Qb2ludFwiO1xuaW1wb3J0IFNsaWRlciBmcm9tIFwiLi4vU2xpZGVyXCI7XG5pbXBvcnQgQ29udHJvbHMgZnJvbSBcIi4uL0NvbnRyb2xzXCI7XG5pbXBvcnQgU2luZXdhdmUgZnJvbSBcIi4uL1NpbmV3YXZlXCI7XG5pbXBvcnQgR3JvdW5kIGZyb20gXCIuLi9jb21wb25lbnRzL0dyb3VuZFwiO1xuaW1wb3J0IEJhbGwgZnJvbSBcIi4uL2NvbXBvbmVudHMvQmFsbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBjaGFwdGVyNl9mZXRjaF9wbGF5IGV4dGVuZHMgQ2hhcHRlciB7XG4gIFxuICAvLz09PT09PT09PT09PT09PVxuICBwdWJsaWMgbnVtU2VnczogbnVtYmVyID0gNTtcbiAgcHVibGljIHNlZ21lbnRzOiBTZWdtZW50W10gPSBbXVxuICBwdWJsaWMgYmFsbDogQmFsbDtcbiAgcHVibGljIGdyb3VuZDpHcm91bmQ7XG5cbiAgLy8gIOato+W8pumch+iNoVxuICBwdWJsaWMgc2luZXdhdmU6IFNpbmV3YXZlO1xuXG4gIHB1YmxpYyBncmF2aXR5OiBudW1iZXIgPSAxXG4gIHB1YmxpYyBlYXNlOiBudW1iZXIgPSAtMC45XG5cbiAgcHVibGljIHZ4OiBudW1iZXIgPSAwXG4gIHB1YmxpYyB2eTogbnVtYmVyID0gMFxuXG4gIC8vICDnorDliLDlnLDpnaLlj43lvLlcbiAgcHVibGljIGdyb3VuZFJlYm91bmNlOiBCb29sZWFuID0gZmFsc2VcblxuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgc3VwZXIoKVxuICB9XG5cbiAgcHJvdGVjdGVkIGluaXQoKSB7XG4gICAgc3VwZXIuaW5pdCgpXG5cbiAgICB0aGlzLmdyb3VuZCA9IG5ldyBHcm91bmQoKVxuICAgIHRoaXMuZ3JvdW5kLnkgPSB0aGlzLnN0YWdlLmhlaWdodCAvIDIgLSB0aGlzLmdyb3VuZC5oZWlnaHRcbiAgICB0aGlzLmFkZENoaWxkKHRoaXMuZ3JvdW5kKVxuXG4gICAgZm9yIChsZXQgaTogbnVtYmVyID0gdGhpcy5udW1TZWdzIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCBzZWc6IFNlZ21lbnQgPSBuZXcgU2VnbWVudCg4MCwgMTUpXG4gICAgICB0aGlzLnNlZ21lbnRzLnB1c2goc2VnKVxuICAgICAgdGhpcy5hZGRDaGlsZChzZWcpXG4gICAgfVxuXG4gICAgdGhpcy5iYWxsID0gbmV3IEJhbGwoMjApXG4gICAgdGhpcy5iYWxsLnZ5ID0gMTBcbiAgICB0aGlzLmFkZENoaWxkKHRoaXMuYmFsbClcbiAgfVxuXG4gIHB1YmxpYyBmZXRjaCAoc2VnOiBTZWdtZW50LCB4OiBudW1iZXIsIHk6IG51bWJlcik6IFBvaW50IHtcbiAgICBsZXQgZHggPSB4IC0gc2VnLnhcbiAgICBsZXQgZHkgPSB5IC0gc2VnLnlcbiAgICBsZXQgcmFkID0gTWF0aC5hdGFuMihkeSwgZHgpXG4gICAgc2VnLnJvdGF0aW9uID0gTWF0aHMucmFkVG9EZWcocmFkKVxuXG4gICAgbGV0IHBpbiA9IHNlZy5nZXRQaW4oKVxuICAgIGxldCB3ID0gcGluLnggLSBzZWcueFxuICAgIGxldCBoID0gcGluLnkgLSBzZWcueVxuXG4gICAgcmV0dXJuIG5ldyBQb2ludCh4IC0gdywgeSAtIGgpXG4gIH1cblxuICBwdWJsaWMgY2hhaW4gKG1haW5TZWc6IFNlZ21lbnQsIHN1YlNlZzogU2VnbWVudCkge1xuICAgIGxldCBwaW4gPSBtYWluU2VnLmdldFBpbigpXG4gICAgc3ViU2VnLnggPSBwaW4ueFxuICAgIHN1YlNlZy55ID0gcGluLnlcbiAgfVxuXG4gIHB1YmxpYyBtb3ZlQmFsbCAoKSB7XG4gICAgdGhpcy5iYWxsLnZ5ICs9IHRoaXMuZ3Jhdml0eVxuICAgIHRoaXMuYmFsbC54ICs9IHRoaXMuYmFsbC52eFxuICAgIHRoaXMuYmFsbC55ICs9IHRoaXMuYmFsbC52eVxuICAgIGxldCB3OiBudW1iZXIgPSB0aGlzLnN0YWdlLndpZHRoXG4gICAgbGV0IGg6IG51bWJlciA9IHRoaXMuc3RhZ2UuaGVpZ2h0XG4gICAgaWYgKHRoaXMuYmFsbC54ID49IHcgLyAyKSB7XG4gICAgICB0aGlzLmJhbGwueCA9IHcgLyAyXG4gICAgICB0aGlzLmJhbGwudnggKj0gdGhpcy5lYXNlXG4gICAgfSBlbHNlIGlmICh0aGlzLmJhbGwueCA8PSAtdyAvIDIpIHtcbiAgICAgIHRoaXMuYmFsbC54ID0gLXcgLyAyXG4gICAgICB0aGlzLmJhbGwudnggKj0gdGhpcy5lYXNlXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYmFsbC55IDw9IC1oIC8gMikge1xuICAgICAgdGhpcy5iYWxsLnkgPSAtaCAvIDJcbiAgICAgIHRoaXMuYmFsbC52eSAqPSB0aGlzLmVhc2VcbiAgICB9IGVsc2UgaWYgKHRoaXMuYmFsbC55ID49IHRoaXMuZ3JvdW5kLnkpIHtcbiAgICAgIHRoaXMuYmFsbC55ID0gdGhpcy5ncm91bmQueVxuICAgICAgdGhpcy5iYWxsLnZ5ICo9IHRoaXMuZWFzZVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBkZXRlY3RDb2xsaXNpb24gKCkge1xuICAgIGxldCBzZWc6IFNlZ21lbnQgPSB0aGlzLnNlZ21lbnRzWzBdXG4gICAgaWYgKHNlZy5nZXRQaW4oKS5kaXN0YW5jZVRvKG5ldyBQb2ludCh0aGlzLmJhbGwueCwgdGhpcy5iYWxsLnkpKSA8PSB0aGlzLmJhbGwucmFkaXVzKSB7XG4gICAgICB0aGlzLmJhbGwudnggKz0gNCAqIE1hdGgucmFuZG9tKCkgLSAyXG4gICAgICB0aGlzLmJhbGwudnkgLT0gMlxuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBvblRpY2sgKCkge1xuICAgIHRoaXMubW92ZUJhbGwoKVxuXG4gICAgbGV0IHRhcmdldDogUG9pbnQgPSB0aGlzLmZldGNoKHRoaXMuc2VnbWVudHNbMF0sIHRoaXMuYmFsbC54LCB0aGlzLmJhbGwueSlcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRoaXMubnVtU2VnczsgaSsrKSB7XG4gICAgICBsZXQgc2VnID0gdGhpcy5zZWdtZW50c1tpXVxuICAgICAgdGFyZ2V0ID0gdGhpcy5mZXRjaChzZWcsIHRhcmdldC54LCB0YXJnZXQueSlcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gdGhpcy5udW1TZWdzIC0gMTsgaSA+IDA7IGktLSkge1xuICAgICAgbGV0IG1haW5TZWcgPSB0aGlzLnNlZ21lbnRzW2ldXG4gICAgICBsZXQgc3ViU2VnID0gdGhpcy5zZWdtZW50c1tpIC0gMV1cbiAgICAgIHRoaXMuY2hhaW4obWFpblNlZywgc3ViU2VnKVxuICAgIH1cblxuICAgIHRoaXMuZGV0ZWN0Q29sbGlzaW9uKClcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92aWV3cy9jaGFwdGVyNl9mZXRjaF9wbGF5LnRzIiwiaW1wb3J0IERpc3BsYXlPYmplY3QgZnJvbSBcIi4uL2NvcmUvZGlzcGxheS9EaXNwbGF5T2JqZWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhbGwgZXh0ZW5kcyBEaXNwbGF5T2JqZWN0IHtcblxuICByZWFkb25seSByYWRpdXM6IG51bWJlcjtcbiAgcmVhZG9ubHkgY29sb3I6IGFueTtcbiAgcHVibGljIHZ4OiBudW1iZXIgPSAwXG4gIHB1YmxpYyB2eTogbnVtYmVyID0gMFxuXG4gIGNvbnN0cnVjdG9yIChyYWRpdXM6IG51bWJlciA9IDUwLCBjb2xvcjogYW55ID0gJ3JnYmEoMjAwLCAyMDAsIDIwMCwgMC45KScpIHtcbiAgICBzdXBlcigpXG5cbiAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcbiAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gIH1cblxuICBwdWJsaWMgcmVuZGVyIChjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yXG4gICAgY3R4LmJlZ2luUGF0aCgpXG4gICAgY3R4LmFyYygwLCAwLCB0aGlzLnJhZGl1cywgMCwgTWF0aC5QSSAqIDIpXG4gICAgY3R4LmNsb3NlUGF0aCgpXG4gICAgY3R4LmZpbGwoKVxuICAgIGN0eC5zdHJva2UoKVxuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvQmFsbC50cyJdLCJzb3VyY2VSb290IjoiIn0=