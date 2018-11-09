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
    function Chapter(title) {
        var _this = _super.call(this) || this;
        _this.sceneIndex = 0;
        _this.sceneCount = 1;
        _this.title = title;
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
        var title = document.querySelector('#title');
        if (title) {
            title.innerHTML = this.title;
        }
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
        // alert(`已经是${index < 0 ? '第一页' : '最后一页'}了`)
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
        return _super.call(this, 'one segment') || this;
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
        var _this = _super.call(this, 'two segments') || this;
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
        var _this = _super.call(this, 'start walk') || this;
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
        var _this = _super.call(this, 'walk with 2 legs') || this;
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
        var _this = _super.call(this, 'walk on the ground') || this;
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
        var _this = _super.call(this, 'fetch play') || this;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgM2Q3OGMzZTk4N2M0YWUzZDIyZWYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2hhcHRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TZWdtZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9Db250cm9scy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9kaXNwbGF5L0Rpc3BsYXlPYmplY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvdXRpbHMvTWF0aHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvZXZlbnRzL0Rpc3BsYXlFdmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9ldmVudHMvRXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvZGlzcGxheS9Db250YWluZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NpbmV3YXZlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2Rpc3BsYXkvU3RhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvZXZlbnRzL0V2ZW50RGlzcGF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9ldmVudHMvTW91c2VFdmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS91dGlscy9Qb2ludC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Hcm91bmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL3RpY2tlci9UaWNrZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2NoYXB0ZXIxX29uZV9zZWdtZW50LnRzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9jaGFwdGVyMl90d29fc2VnbWVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU2xpZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9jaGFwdGVyM19zdGFydF93YWxrLnRzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9jaGFwdGVyNF93YWxrX3dpdGhfMl9sZWdzLnRzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9jaGFwdGVyNV93YWxrX29uX3RoZV9ncm91bmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2NoYXB0ZXI2X2ZldGNoX3BsYXkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQmFsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdEa0Q7QUFDSztBQUVKO0FBRW5EO0lBQXFDLDJCQUFTO0lBTTVDLGlCQUFhLEtBQWE7UUFBMUIsWUFDRSxpQkFBTyxTQUlSO1FBVE0sZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFDdkIsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFLNUIsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsS0FBSSxDQUFDLFdBQVcsQ0FBQywwRUFBWSxDQUFDLFlBQVksRUFBRSxLQUFJLENBQUMsT0FBTyxFQUFFLEtBQUksQ0FBQztRQUMvRCxLQUFJLENBQUMsV0FBVyxDQUFDLDBFQUFZLENBQUMsaUJBQWlCLEVBQUUsS0FBSSxDQUFDLFNBQVMsRUFBRSxLQUFJLENBQUM7O0lBQ3hFLENBQUM7SUFFUyx5QkFBTyxHQUFqQjtR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LEdBQUcsQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQztRQUM3QixDQUFDO1FBRUQsSUFBSSxDQUFDLGVBQWUsRUFBRTtJQUN4QixDQUFDO0lBQ0gsMEJBQUM7QUFBRCxDQUFDLENBN0dnRCxvRUFBTyxHQTZHdkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEh5RDtBQUUxRDtJQUFrQyx3QkFBYTtJQU83QyxjQUFhLE1BQW1CLEVBQUUsS0FBdUM7UUFBNUQsb0NBQW1CO1FBQUUsMERBQXVDO1FBQXpFLFlBQ0UsaUJBQU8sU0FJUjtRQVJNLFFBQUUsR0FBVyxDQUFDO1FBQ2QsUUFBRSxHQUFXLENBQUM7UUFLbkIsS0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7O0lBQ3JCLENBQUM7SUFFTSxxQkFBTSxHQUFiLFVBQWUsR0FBNkI7UUFDMUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSztRQUMxQixHQUFHLENBQUMsU0FBUyxFQUFFO1FBQ2YsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzFDLEdBQUcsQ0FBQyxTQUFTLEVBQUU7UUFDZixHQUFHLENBQUMsSUFBSSxFQUFFO1FBQ1YsR0FBRyxDQUFDLE1BQU0sRUFBRTtJQUNkLENBQUM7SUFDSCxXQUFDO0FBQUQsQ0FBQyxDQXRCaUMsNEVBQWEsR0FzQjlDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDE0KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAzZDc4YzNlOTg3YzRhZTNkMjJlZiIsImltcG9ydCBDb250YWluZXIgZnJvbSBcIi4uL2NvcmUvZGlzcGxheS9Db250YWluZXJcIjtcclxuaW1wb3J0IERpc3BsYXlFdmVudCBmcm9tIFwiLi4vY29yZS9ldmVudHMvRGlzcGxheUV2ZW50XCI7XHJcbmltcG9ydCBTZWdtZW50IGZyb20gXCIuL1NlZ21lbnRcIjtcclxuaW1wb3J0IE1vdXNlRXZlbnQgZnJvbSBcIi4uL2NvcmUvZXZlbnRzL01vdXNlRXZlbnRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXB0ZXIgZXh0ZW5kcyBDb250YWluZXIge1xyXG5cclxuICBwdWJsaWMgc2NlbmVJbmRleDogbnVtYmVyID0gMDtcclxuICBwdWJsaWMgc2NlbmVDb3VudDogbnVtYmVyID0gMTtcclxuICBwdWJsaWMgdGl0bGU6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IgKHRpdGxlOiBzdHJpbmcpIHtcclxuICAgIHN1cGVyKClcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgIHRoaXMuYWRkTGlzdGVuZXIoRGlzcGxheUV2ZW50LkFERF9UT19TVEFHRSwgdGhpcy5vbkFkZGVkLCB0aGlzKVxyXG4gICAgdGhpcy5hZGRMaXN0ZW5lcihEaXNwbGF5RXZlbnQuUkVNT1ZFX0ZST01fU1RBR0UsIHRoaXMub25SZW1vdmVkLCB0aGlzKVxyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIG9uQWRkZWQgKCkge1xyXG4gICAgdGhpcy5pbml0KClcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBvblJlbW92ZWQgKCkge1xyXG4gICAgdGhpcy5kaXNwb3NlKClcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBpbml0ICgpIHtcclxuICAgIHRoaXMuYWRkTGlzdGVuZXIoRGlzcGxheUV2ZW50LkVOVEVSX0ZSQU1FLCB0aGlzLm9uVGljaywgdGhpcylcclxuICAgIHRoaXMuc3RhZ2UuYWRkTGlzdGVuZXIoTW91c2VFdmVudC5NT1VTRV9NT1ZFLCB0aGlzLm9uTW91c2VNb3ZlLCB0aGlzKVxyXG4gICAgXHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZScpO1xyXG4gICAgaWYgKHRpdGxlKSB7XHJcbiAgICAgIHRpdGxlLmlubmVySFRNTCA9IHRoaXMudGl0bGVcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBkaXNwb3NlICgpIHtcclxuICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIoRGlzcGxheUV2ZW50LkVOVEVSX0ZSQU1FLCB0aGlzLm9uVGljaywgdGhpcylcclxuICAgIHRoaXMuc3RhZ2UucmVtb3ZlTGlzdGVuZXIoTW91c2VFdmVudC5NT1VTRV9NT1ZFLCB0aGlzLm9uTW91c2VNb3ZlLCB0aGlzKVxyXG4gIH1cclxuXHJcbiAgcHVibGljIG5leHRTY2VuZSAoKSB7XHJcbiAgICB0aGlzLnNjZW5lSW5kZXggKz0gMVxyXG4gICAgY29uc29sZS5sb2coJ25leHQgc2NlbmU6JywgdGhpcy5zY2VuZUluZGV4KVxyXG4gICAgdGhpcy5zd2l0Y2hTY2VuZSh0aGlzLnNjZW5lSW5kZXgpXHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgb25Nb3VzZU1vdmUgKGU6IE1vdXNlRXZlbnQpIHtcclxuICAgIC8vIG92ZXJyaWRlIGJ5IHN1YmNsYXNzZXNcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBvblRpY2sgKCkge1xyXG4gICAgLy8gb3ZlcnJpZGUgYnkgc3ViY2xhc3Nlc1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHN3aXRjaFNjZW5lIChpbmRleDogbnVtYmVyKSB7XHJcbiAgICAvLyBvdmVycmlkZSBieSBzdWJjbGFzc2VzXHJcbiAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvQ2hhcHRlci50cyIsImltcG9ydCBEaXNwbGF5T2JqZWN0IGZyb20gJy4uL2NvcmUvZGlzcGxheS9EaXNwbGF5T2JqZWN0J1xyXG5pbXBvcnQgUG9pbnQgZnJvbSAnLi4vY29yZS91dGlscy9Qb2ludCdcclxuaW1wb3J0IE1hdGhzIGZyb20gJy4uL2NvcmUvdXRpbHMvTWF0aHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWdtZW50IGV4dGVuZHMgRGlzcGxheU9iamVjdCB7XHJcblxyXG4gIHByaXZhdGUgX3dpZHRoOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfaGVpZ2h0OiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfY29sb3I6IGFueTtcclxuXHJcbiAgcHVibGljIHZ4OiBudW1iZXIgPSAwXHJcbiAgcHVibGljIHZ5OiBudW1iZXIgPSAwXHJcblxyXG4gIGNvbnN0cnVjdG9yICh3aWR0aDogbnVtYmVyID0gMjAwLCBoZWlnaHQ6IG51bWJlciA9IDQwLCBjb2xvcjogYW55ID0gJ3JnYmEoMjAwLCAyMDAsIDIwMCwgMC45KScpIHtcclxuICAgIHN1cGVyKClcclxuXHJcbiAgICB0aGlzLl93aWR0aCA9IHdpZHRoXHJcbiAgICB0aGlzLl9oZWlnaHQgPSBoZWlnaHRcclxuICAgIHRoaXMuX2NvbG9yID0gY29sb3JcclxuICB9XHJcblxyXG4gIHJlbmRlciAoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcclxuICAgIC8vICBCR1xyXG4gICAgbGV0IHJhZGl1cyA9IHRoaXMuX2hlaWdodCAvIDJcclxuICAgIGxldCBoYWxmUEkgPSBNYXRoLlBJIC8gMlxyXG4gICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuX2NvbG9yXHJcbiAgICBjdHguYmVnaW5QYXRoKClcclxuICAgIGN0eC5tb3ZlVG8oMCwgLXJhZGl1cylcclxuICAgIGN0eC5saW5lVG8odGhpcy5fd2lkdGgsIC1yYWRpdXMpXHJcbiAgICBjdHguYXJjKHRoaXMuX3dpZHRoLCAwLCByYWRpdXMsIC1oYWxmUEksIGhhbGZQSSlcclxuICAgIGN0eC5saW5lVG8oMCwgcmFkaXVzKVxyXG4gICAgY3R4LmFyYygwLCAwLCByYWRpdXMsIGhhbGZQSSwgMyAqIGhhbGZQSSlcclxuICAgIGN0eC5jbG9zZVBhdGgoKVxyXG4gICAgY3R4LmZpbGwoKVxyXG4gICAgY3R4LnN0cm9rZSgpXHJcblxyXG4gICAgLy8gIDLkuKpQSU7ngrlcclxuICAgIGxldCBjcm9zc1IgPSByYWRpdXMgKiAwLjNcclxuXHJcbiAgICBjdHgubW92ZVRvKC1jcm9zc1IsIDApXHJcbiAgICBjdHgubGluZVRvKGNyb3NzUiwgMClcclxuXHJcbiAgICBjdHgubW92ZVRvKDAsIC1jcm9zc1IpXHJcbiAgICBjdHgubGluZVRvKDAsIGNyb3NzUilcclxuXHJcbiAgICBjdHgubW92ZVRvKHRoaXMuX3dpZHRoIC0gY3Jvc3NSLCAwKVxyXG4gICAgY3R4LmxpbmVUbyh0aGlzLl93aWR0aCArIGNyb3NzUiwgMClcclxuXHJcbiAgICBjdHgubW92ZVRvKHRoaXMuX3dpZHRoLCAtY3Jvc3NSKVxyXG4gICAgY3R4LmxpbmVUbyh0aGlzLl93aWR0aCwgY3Jvc3NSKVxyXG5cclxuICAgIGN0eC5zdHJva2UoKVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFBpbiAoKTogUG9pbnQge1xyXG4gICAgbGV0IHggPSB0aGlzLnggKyB0aGlzLl93aWR0aCAqIE1hdGguY29zKE1hdGhzLmRlZ1RvUmFkKHRoaXMucm90YXRpb24pKVxyXG4gICAgbGV0IHkgPSB0aGlzLnkgKyB0aGlzLl93aWR0aCAqIE1hdGguc2luKE1hdGhzLmRlZ1RvUmFkKHRoaXMucm90YXRpb24pKVxyXG4gICAgcmV0dXJuIG5ldyBQb2ludCh4LCB5KVxyXG4gIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1NlZ21lbnQudHMiLCJpbXBvcnQgRXZlbnREaXNwYXRjaGVyIGZyb20gXCIuL2NvcmUvZXZlbnRzL0V2ZW50RGlzcGF0Y2hlclwiO1xyXG5pbXBvcnQgU2xpZGVyIGZyb20gXCIuL1NsaWRlclwiO1xyXG5cclxuY29uc3Qgcm9vdEVsOkhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRyb2xzJylcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRyb2xzIHtcclxuICBwdWJsaWMgc3RhdGljIHJvb3RFbDogSFRNTEVsZW1lbnQgPSByb290RWxcclxuICBwdWJsaWMgc3RhdGljIGdldFNsaWRlciAobGFiZWw6IHN0cmluZywga2V5OiBzdHJpbmcsIHZhbHVlOiBudW1iZXIsIG1pbjogbnVtYmVyLCBtYXg6IG51bWJlciwgc3RlcDogbnVtYmVyID0gMC4xKSB7XHJcbiAgICByZXR1cm4gbmV3IFNsaWRlcihsYWJlbCwga2V5LCB2YWx1ZSwgbWluLCBtYXgsIHN0ZXApXHJcbiAgfVxyXG4gIHB1YmxpYyBzdGF0aWMgcmVtb3ZlQWxsICgpIHtcclxuICAgIHJvb3RFbC5pbm5lckhUTUwgPSAnJ1xyXG4gIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Db250cm9scy50cyIsImltcG9ydCBFdmVudERpc3BhdGNoZXIgZnJvbSAnLi4vZXZlbnRzL0V2ZW50RGlzcGF0Y2hlcidcclxuaW1wb3J0IERpc3BsYXlFdmVudCBmcm9tICcuLi9ldmVudHMvRGlzcGxheUV2ZW50J1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4vQ29udGFpbmVyJztcclxuaW1wb3J0IE1hdGhzIGZyb20gJy4uL3V0aWxzL01hdGhzJ1xyXG5pbXBvcnQgU3RhZ2UgZnJvbSAnLi9TdGFnZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXNwbGF5T2JqZWN0IGV4dGVuZHMgRXZlbnREaXNwYXRjaGVyIHtcclxuICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICBzdXBlcigpXHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgX3g6IG51bWJlciA9IDA7XHJcblxyXG4gIHByb3RlY3RlZCBfeTogbnVtYmVyID0gMDtcclxuXHJcbiAgcHJvdGVjdGVkIF9yb3RhdGlvbjogbnVtYmVyID0gMDtcclxuXHJcbiAgcHVibGljIGdldCB4ICgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX3g7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0IHggKHZhbDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl94ID0gdmFsO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCB5ICgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX3k7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0IHkgKHZhbDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl95ID0gdmFsO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCByb3RhdGlvbiAoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9yb3RhdGlvbjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQgcm90YXRpb24gKHZhbDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl9yb3RhdGlvbiA9IHZhbDtcclxuICB9XHJcblxyXG4gIC8vPT09XHJcbiAgcHJvdGVjdGVkIF9wYXJlbnQ6IENvbnRhaW5lcjtcclxuICBwdWJsaWMgZ2V0IHBhcmVudCAoKTogQ29udGFpbmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9wYXJlbnRcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQgcGFyZW50ICh2YWw6IENvbnRhaW5lcikge1xyXG4gICAgdGhpcy5fcGFyZW50ID0gdmFsXHJcbiAgICBsZXQgcGFyZW50czogQ29udGFpbmVyW10gPSB0aGlzLl9nZXRQYXJlbnRzKClcclxuICAgIGxldCByb290UGFyZW50ID0gcGFyZW50c1swXVxyXG4gICAgbGV0IG9uU3RhZ2U6IEJvb2xlYW5cclxuICAgIGlmIChyb290UGFyZW50IGluc3RhbmNlb2YgU3RhZ2UpIHtcclxuICAgICAgb25TdGFnZSA9IHRydWVcclxuICAgICAgdGhpcy5fc3RhZ2UgPSByb290UGFyZW50XHJcbiAgICB9XHJcbiAgICBpZiAob25TdGFnZSAhPT0gdGhpcy5fb25TdGFnZSkge1xyXG4gICAgICBpZiAob25TdGFnZSkge1xyXG4gICAgICAgIHRoaXMuZGlzcGF0Y2gobmV3IERpc3BsYXlFdmVudChEaXNwbGF5RXZlbnQuQUREX1RPX1NUQUdFLCB0aGlzKSlcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmRpc3BhdGNoKG5ldyBEaXNwbGF5RXZlbnQoRGlzcGxheUV2ZW50LlJFTU9WRV9GUk9NX1NUQUdFLCB0aGlzKSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKCFvblN0YWdlKSB7XHJcbiAgICAgIHRoaXMuX3N0YWdlID0gdW5kZWZpbmVkXHJcbiAgICB9XHJcbiAgICB0aGlzLl9vblN0YWdlID0gb25TdGFnZVxyXG4gIH1cclxuXHJcbiAgLy8gIHdoZXRoZXIgdGhlIGRpc3BsYXkgb2JqZWN0IGlzIG9uIHRoZSBzdGFnZSBhbmQgbmVlZGVkIHRvIGJlIHJlbmRlcmVkXHJcbiAgcHJpdmF0ZSBfb25TdGFnZTogQm9vbGVhbiA9IGZhbHNlXHJcblxyXG4gIHByaXZhdGUgX3N0YWdlOiBTdGFnZTtcclxuICBwdWJsaWMgZ2V0IHN0YWdlICgpIHtcclxuICAgIHJldHVybiB0aGlzLl9zdGFnZVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfZ2V0UGFyZW50cyAoKTpDb250YWluZXJbXSB7XHJcbiAgICBsZXQgcGFyZW50czogQ29udGFpbmVyW10gPSBbXVxyXG4gICAgbGV0IHAgPSB0aGlzLl9wYXJlbnRcclxuICAgIHdoaWxlIChwKSB7XHJcbiAgICAgIHBhcmVudHMudW5zaGlmdChwKVxyXG4gICAgICBwID0gcC5wYXJlbnRcclxuICAgIH1cclxuICAgIHJldHVybiBwYXJlbnRzXHJcbiAgfVxyXG5cclxuICAvLyAgY2FsbGVkIGludGVybmFsbHlcclxuICBwdWJsaWMgZW50ZXJGcmFtZSAoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpOnZvaWQge1xyXG4gICAgdGhpcy5kaXNwYXRjaChuZXcgRGlzcGxheUV2ZW50KERpc3BsYXlFdmVudC5FTlRFUl9GUkFNRSwgdGhpcykpXHJcbiAgICBsZXQgcGFyZW50czogQ29udGFpbmVyW10gPSB0aGlzLl9nZXRQYXJlbnRzKClcclxuICAgIGN0eC5zZXRUcmFuc2Zvcm0oMSwgMCwgMCwgMSwgMCwgMClcclxuICAgIGN0eC5yZXN0b3JlKClcclxuICAgIHBhcmVudHMuZm9yRWFjaChjb250YWluZXIgPT4ge1xyXG4gICAgICBjdHgudHJhbnNsYXRlKGNvbnRhaW5lci54LCBjb250YWluZXIueSlcclxuICAgICAgY3R4LnJvdGF0ZShNYXRocy5kZWdUb1JhZChjb250YWluZXIucm90YXRpb24pKVxyXG4gICAgfSlcclxuXHJcbiAgICBjdHgudHJhbnNsYXRlKHRoaXMuX3gsIHRoaXMuX3kpXHJcbiAgICBjdHgucm90YXRlKE1hdGhzLmRlZ1RvUmFkKHRoaXMuX3JvdGF0aW9uKSlcclxuXHJcbiAgICB0aGlzLnJlbmRlcihjdHgpXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVuZGVyIChjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xyXG4gICAgLy8gVG9kbzogaW1wbGllZCBieSBzdWJjbGFzc2VzXHJcbiAgfVxyXG59IFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb3JlL2Rpc3BsYXkvRGlzcGxheU9iamVjdC50cyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hdGhzIHtcclxuICBwdWJsaWMgc3RhdGljIHJhZFRvRGVnIChyYWQ6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIHJhZCAqIDE4MCAvIE1hdGguUElcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZGVnVG9SYWQgKGRlZzogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gZGVnICogTWF0aC5QSSAvIDE4MFxyXG4gIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb3JlL3V0aWxzL01hdGhzLnRzIiwiaW1wb3J0IEV2ZW50IGZyb20gXCIuL0V2ZW50XCI7XHJcbmltcG9ydCBFdmVudERpc3BhdGNoZXIgZnJvbSBcIi4vRXZlbnREaXNwYXRjaGVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXNwbGF5RXZlbnQgZXh0ZW5kcyBFdmVudCB7XHJcbiAgcHVibGljIHN0YXRpYyBTVEFHRV9SRVNJWkU6IHN0cmluZyA9ICdzdGFnZV9yZXNpemUnXHJcbiAgcHVibGljIHN0YXRpYyBFTlRFUl9GUkFNRTogc3RyaW5nID0gJ2VudGVyX2ZyYW1lJ1xyXG4gIHB1YmxpYyBzdGF0aWMgQUREX1RPX1NUQUdFOiBzdHJpbmcgPSAnYWRkX3RvX3N0YWdlJ1xyXG4gIHB1YmxpYyBzdGF0aWMgUkVNT1ZFX0ZST01fU1RBR0U6IHN0cmluZyA9ICdyZW1vdmVfZnJvbV9zdGFnZSdcclxuXHJcbiAgY29uc3RydWN0b3IgKHR5cGU6IHN0cmluZywgdGFyZ2V0OiBFdmVudERpc3BhdGNoZXIpIHtcclxuICAgIHN1cGVyKHR5cGUsIHRhcmdldClcclxuICB9IFxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvcmUvZXZlbnRzL0Rpc3BsYXlFdmVudC50cyIsImltcG9ydCBFdmVudERpc3BhdGNoZXIgZnJvbSBcIi4vRXZlbnREaXNwYXRjaGVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudCB7XHJcbiAgcHJvdGVjdGVkIF90eXBlOiBzdHJpbmc7XHJcbiAgcHVibGljIGdldCB0eXBlICgpIHtcclxuICAgIHJldHVybiB0aGlzLl90eXBlXHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgX3RhcmdldDogRXZlbnREaXNwYXRjaGVyO1xyXG4gIHB1YmxpYyBnZXQgdGFyZ2V0ICgpIHtcclxuICAgIHJldHVybiB0aGlzLl90YXJnZXRcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBfZGF0YTogYW55O1xyXG4gIHB1YmxpYyBnZXQgZGF0YSAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGF0YVxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IgKHR5cGU6IHN0cmluZywgdGFyZ2V0OiBFdmVudERpc3BhdGNoZXIsIC4uLmRhdGE6YW55W10pIHtcclxuICAgIHRoaXMuX3R5cGUgPSB0eXBlXHJcbiAgICB0aGlzLl90YXJnZXQgPSB0YXJnZXRcclxuICAgIHRoaXMuX2RhdGEgPSBkYXRhXHJcbiAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvcmUvZXZlbnRzL0V2ZW50LnRzIiwiaW1wb3J0IERpc3BsYXlPYmplY3QgZnJvbSAnLi9EaXNwbGF5T2JqZWN0J1xyXG5pbXBvcnQgU3RhZ2UgZnJvbSAnLi9TdGFnZSdcclxuaW1wb3J0IERpc3BsYXlFdmVudCBmcm9tICcuLi9ldmVudHMvRGlzcGxheUV2ZW50JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRhaW5lciBleHRlbmRzIERpc3BsYXlPYmplY3Qge1xyXG5cclxuICBwcm90ZWN0ZWQgX2NoaWxkcmVuOiBEaXNwbGF5T2JqZWN0W10gPSBbXVxyXG5cclxuICBwcm90ZWN0ZWQgX3BhcmVudDogQ29udGFpbmVyO1xyXG5cclxuICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICBzdXBlcigpXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0Q2hpbGRJbmRleCAoY2hpbGQ6IERpc3BsYXlPYmplY3QpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NoaWxkcmVuLmluZGV4T2YoY2hpbGQpXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0Q2hpbGRBdCAoaW5kZXg6IG51bWJlcik6IERpc3BsYXlPYmplY3Qge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NoaWxkcmVuW2luZGV4XVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGFkZENoaWxkIChjaGlsZDogRGlzcGxheU9iamVjdCkge1xyXG4gICAgbGV0IGNoaWxkSW5kZXggPSB0aGlzLmdldENoaWxkSW5kZXgoY2hpbGQpXHJcbiAgICBpZiAoY2hpbGRJbmRleCA+PSAwKSB7XHJcbiAgICAgIHRoaXMuX2NoaWxkcmVuLnNwbGljZShjaGlsZEluZGV4LCAxKVxyXG4gICAgICB0aGlzLl9jaGlsZHJlbi5wdXNoKGNoaWxkKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fY2hpbGRyZW4ucHVzaChjaGlsZClcclxuICAgIH1cclxuXHJcbiAgICBjaGlsZC5wYXJlbnQgPSB0aGlzXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVtb3ZlQ2hpbGQgKGNoaWxkOiBEaXNwbGF5T2JqZWN0KSB7XHJcbiAgICBsZXQgY2hpbGRJbmRleCA9IHRoaXMuZ2V0Q2hpbGRJbmRleChjaGlsZClcclxuICAgIGlmIChjaGlsZEluZGV4ID49IDApIHtcclxuICAgICAgdGhpcy5fY2hpbGRyZW4uc3BsaWNlKGNoaWxkSW5kZXgsIDEpXHJcbiAgICAgIGNoaWxkLnBhcmVudCA9IG51bGxcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBlbnRlckZyYW1lIChjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xyXG4gICAgc3VwZXIuZW50ZXJGcmFtZShjdHgpXHJcbiAgICB0aGlzLl9jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcclxuICAgICAgY2hpbGQuZW50ZXJGcmFtZShjdHgpXHJcbiAgICB9KVxyXG4gIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb3JlL2Rpc3BsYXkvQ29udGFpbmVyLnRzIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2luZXdhdmUge1xyXG4gIHB1YmxpYyBwaGFzZURlZzogbnVtYmVyXHJcbiAgcHVibGljIHBoYXNlSW5jOiBudW1iZXJcclxuICBwdWJsaWMgYW1wbGl0dWRlOiBudW1iZXJcclxuXHJcbiAgLy8gIG91dHB1dCB2YWx1ZVxyXG4gIHB1YmxpYyBnZXQgdmFsdWUgKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlXHJcbiAgfVxyXG4gIHByaXZhdGUgX3ZhbHVlOiBudW1iZXJcclxuXHJcbiAgY29uc3RydWN0b3IgKGluaXRQaGFzZTogbnVtYmVyID0gMCwgcGhhc2VJbmM6IG51bWJlciA9IDAuMSwgYW1wbGl0dWRlOiBudW1iZXIgPSAxKSB7XHJcbiAgICB0aGlzLnBoYXNlRGVnID0gaW5pdFBoYXNlXHJcbiAgICB0aGlzLnBoYXNlSW5jID0gcGhhc2VJbmNcclxuICAgIHRoaXMuYW1wbGl0dWRlID0gYW1wbGl0dWRlXHJcblxyXG4gICAgdGhpcy5fdmFsdWUgPSB0aGlzLmFtcGxpdHVkZSAqIE1hdGguc2luKHRoaXMucGhhc2VEZWcpXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlICgpIHtcclxuICAgIHRoaXMucGhhc2VEZWcgKz0gdGhpcy5waGFzZUluY1xyXG4gICAgdGhpcy5fdmFsdWUgPSB0aGlzLmFtcGxpdHVkZSAqIE1hdGguc2luKHRoaXMucGhhc2VEZWcpXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0T2Zmc2V0VmFsdWUgKG9mZnNldFBoYXNlRGVnOiBudW1iZXIpIHtcclxuICAgIHJldHVybiB0aGlzLmFtcGxpdHVkZSAqIE1hdGguc2luKHRoaXMucGhhc2VEZWcgKyBvZmZzZXRQaGFzZURlZylcclxuICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvU2luZXdhdmUudHMiLCJpbXBvcnQgRXZlbnREaXNwYXRjaGVyIGZyb20gJy4uL2V2ZW50cy9FdmVudERpc3BhdGNoZXInXHJcbmltcG9ydCBEaXNwbGF5RXZlbnQgZnJvbSAnLi4vZXZlbnRzL0Rpc3BsYXlFdmVudCdcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuL0NvbnRhaW5lcidcclxuaW1wb3J0IE1vdXNlRXZlbnQgZnJvbSAnLi4vZXZlbnRzL01vdXNlRXZlbnQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhZ2UgZXh0ZW5kcyBDb250YWluZXIge1xyXG5cclxuICBwcml2YXRlIF9yb290RWw6IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gIHByaXZhdGUgX3dpZHRoOiBudW1iZXI7XHJcbiAgcHVibGljIGdldCB3aWR0aCAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fd2lkdGhcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2hlaWdodDogbnVtYmVyO1xyXG4gIHB1YmxpYyBnZXQgaGVpZ2h0ICgpIHtcclxuICAgIHJldHVybiB0aGlzLl9oZWlnaHRcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2N0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG5cclxuICBjb25zdHJ1Y3RvciAocm9vdElkOiBzdHJpbmcpIHtcclxuICAgIHN1cGVyKClcclxuXHJcbiAgICBsZXQgcm9vdEVsOiBIVE1MQ2FudmFzRWxlbWVudCA9IDxIVE1MQ2FudmFzRWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChyb290SWQpXHJcbiAgICBpZiAoIXJvb3RFbCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFJvb3QgRWxlbWVudCB3aXRoIGlkPSR7cm9vdElkfSBub3QgZm91bmQhYClcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9yb290RWwgPSByb290RWxcclxuXHJcbiAgICB0aGlzLl9pbml0RXZlbnRzKClcclxuICAgIHRoaXMuX2luaXRDb250ZXh0cygpXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9pbml0Q29udGV4dHMgKCk6dm9pZCB7XHJcbiAgICBpZiAodGhpcy5fcm9vdEVsIGluc3RhbmNlb2YgSFRNTENhbnZhc0VsZW1lbnQpIHtcclxuICAgICAgdGhpcy5fY3R4ID0gKDxIVE1MQ2FudmFzRWxlbWVudD50aGlzLl9yb290RWwpLmdldENvbnRleHQoJzJkJylcclxuICAgIH1cclxuICAgIC8vICBzYXZlIGRlZmF1bHQgY3R4IHN0YXRlXHJcbiAgICB0aGlzLl9jdHguc2V0VHJhbnNmb3JtKDEsIDAsIDAsIDEsIDAsIDApXHJcbiAgICB0aGlzLl9jdHguc2F2ZSgpXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9pbml0RXZlbnRzICgpOnZvaWQge1xyXG4gICAgdGhpcy5yZXNpemUoKVxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcclxuICAgICAgdGhpcy5yZXNpemUodHJ1ZSlcclxuICAgIH0pXHJcblxyXG4gICAgLy8gVG9kbzog5YWI5Y+q57uZIHN0YWdlIOa0vuWPkem8oOagh+S6i+S7tlxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChlOiBhbnkpID0+IHtcclxuICAgICAgdGhpcy5kaXNwYXRjaChuZXcgTW91c2VFdmVudChNb3VzZUV2ZW50Lk1PVVNFX01PVkUsIHRoaXMsIGUub2Zmc2V0WCwgZS5vZmZzZXRZKSlcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVzaXplIChzZW5kRXZlbnQ6IGJvb2xlYW4gPSBmYWxzZSk6dm9pZCB7XHJcbiAgICBsZXQgcmVjdCA9IHRoaXMuX3Jvb3RFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxyXG4gICAgdGhpcy5fcm9vdEVsLndpZHRoID0gdGhpcy5fd2lkdGggPSByZWN0LndpZHRoXHJcbiAgICB0aGlzLl9yb290RWwuaGVpZ2h0ID0gdGhpcy5faGVpZ2h0ID0gcmVjdC5oZWlnaHRcclxuICAgIHRoaXMuZGlzcGF0Y2gobmV3IERpc3BsYXlFdmVudChEaXNwbGF5RXZlbnQuU1RBR0VfUkVTSVpFLCB0aGlzKSlcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGUgKCk6dm9pZCB7XHJcbiAgICB0aGlzLl9jdHgucmVzdG9yZSgpXHJcbiAgICB0aGlzLl9jdHguc2V0VHJhbnNmb3JtKDEsIDAsIDAsIDEsIDAsIDApXHJcbiAgICB0aGlzLl9jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuX3dpZHRoLCB0aGlzLl9oZWlnaHQpXHJcbiAgICB0aGlzLmVudGVyRnJhbWUodGhpcy5fY3R4KVxyXG4gIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb3JlL2Rpc3BsYXkvU3RhZ2UudHMiLCJpbXBvcnQgRXZlbnQgZnJvbSBcIi4vRXZlbnRcIjtcclxuXHJcbi8qKlxyXG4gKiDkuovku7bljp/lnotcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50RGlzcGF0Y2hlciB7XHJcbiAgXHJcbiAgLy8gIOW3suacieeahOS6i+S7tuWIl+ihqFxyXG4gIHByaXZhdGUgX2xpc3RlbmVyczogYW55W10gPSBbXVxyXG4gIFxyXG4gIGNvbnN0cnVjdG9yICgpIHtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5p+l5om+5piv5ZCm5pyJ5rOo5YaM6L+H55qE55u45ZCM5LqL5Lu2XHJcbiAgICogQHBhcmFtIGV2ZW50TmFtZSBcclxuICAgKiBAcGFyYW0gY2FsbGJhY2sgXHJcbiAgICogQHBhcmFtIHNjb3BlIFxyXG4gICAqL1xyXG4gIHByaXZhdGUgX2ZpbmRMaXN0ZW5lciAoZXZlbnROYW1lOiBzdHJpbmcsIGNhbGxiYWNrOiBGdW5jdGlvbiwgc2NvcGU6IGFueSA9IG51bGwpOnZvaWQge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9saXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgbGV0IGxpc3RlbmVyID0gdGhpcy5fbGlzdGVuZXJzW2ldXHJcbiAgICAgIGlmIChsaXN0ZW5lci50eXBlID09PSBldmVudE5hbWUgJiYgXHJcbiAgICAgICAgbGlzdGVuZXIuY2FsbGJhY2sgPT09IGNhbGxiYWNrICYmIFxyXG4gICAgICAgIGxpc3RlbmVyLnNjb3BlID09PSBzY29wZSkge1xyXG4gICAgICAgICAgcmV0dXJuIGxpc3RlbmVyXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog55So5LqL5Lu25ZCN55u05o6l5rS+5Y+R5LqL5Lu2XHJcbiAgICogQHBhcmFtIGV2ZW50TmFtZSBcclxuICAgKiBAcGFyYW0gZGF0YVxyXG4gICAqL1xyXG4gIHB1YmxpYyBkaXNwYXRjaFdpdGggKGV2ZW50TmFtZTogc3RyaW5nLCAuLi5kYXRhOiBhbnlbXSk6dm9pZCB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2xpc3RlbmVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBsZXQgbGlzdGVuZXIgPSB0aGlzLl9saXN0ZW5lcnNbaV1cclxuICAgICAgaWYgKGxpc3RlbmVyLnR5cGUgPT09IGV2ZW50TmFtZSkge1xyXG4gICAgICAgIGxpc3RlbmVyLmNhbGxiYWNrLmNhbGwobGlzdGVuZXIuc2NvcGUsIG5ldyBFdmVudChldmVudE5hbWUsIHRoaXMsIC4uLmRhdGEpKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDmtL7lj5Hkuovku7ZcclxuICAgKiBAcGFyYW0gZXZlbnQgXHJcbiAgICovXHJcbiAgcHVibGljIGRpc3BhdGNoIChldmVudDogRXZlbnQpOnZvaWQge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9saXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgbGV0IGxpc3RlbmVyID0gdGhpcy5fbGlzdGVuZXJzW2ldXHJcbiAgICAgIGlmIChsaXN0ZW5lci50eXBlID09PSBldmVudC50eXBlKSB7XHJcbiAgICAgICAgbGlzdGVuZXIuY2FsbGJhY2suY2FsbChsaXN0ZW5lci5zY29wZSwgZXZlbnQpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOa3u+WKoOafkOS4gOS4quS6i+S7tuS+puWQrFxyXG4gICAqIEBwYXJhbSBldmVudE5hbWUgXHJcbiAgICogQHBhcmFtIGNhbGxiYWNrIFxyXG4gICAqIEBwYXJhbSBzY29wZSBcclxuICAgKi9cclxuICBwdWJsaWMgYWRkTGlzdGVuZXIgKGV2ZW50TmFtZTogc3RyaW5nLCBjYWxsYmFjazogRnVuY3Rpb24sIHNjb3BlOiBhbnkgPSBudWxsKTp2b2lkIHtcclxuICAgIGxldCBleGlzdGVkTGlzdGVuZXIgPSB0aGlzLl9maW5kTGlzdGVuZXIoZXZlbnROYW1lLCBjYWxsYmFjaywgc2NvcGUpXHJcbiAgICBpZiAoIWV4aXN0ZWRMaXN0ZW5lcikge1xyXG4gICAgICB0aGlzLl9saXN0ZW5lcnMucHVzaCh7XHJcbiAgICAgICAgdHlwZTogZXZlbnROYW1lLFxyXG4gICAgICAgIGNhbGxiYWNrLFxyXG4gICAgICAgIHNjb3BlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDnp7vpmaTmn5DkuIDkuKrkuovku7bkvqblkKxcclxuICAgKiBAcGFyYW0gZXZlbnROYW1lIFxyXG4gICAqIEBwYXJhbSBjYWxsYmFjayBcclxuICAgKiBAcGFyYW0gc2NvcGVcclxuICAgKi9cclxuICBwdWJsaWMgcmVtb3ZlTGlzdGVuZXIgKGV2ZW50TmFtZTogc3RyaW5nLCBjYWxsYmFjazogRnVuY3Rpb24sIHNjb3BlOiBhbnkgPSBudWxsKTp2b2lkIHtcclxuICAgIGxldCBleGlzdGVkTGlzdGVuZXIgPSB0aGlzLl9maW5kTGlzdGVuZXIoZXZlbnROYW1lLCBjYWxsYmFjaywgc2NvcGUpXHJcbiAgICBpZiAoZXhpc3RlZExpc3RlbmVyKSB7XHJcbiAgICAgIHRoaXMuX2xpc3RlbmVycy5zcGxpY2UodGhpcy5fbGlzdGVuZXJzLmluZGV4T2YoZXhpc3RlZExpc3RlbmVyKSwgMSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOenu+mZpOaJgOacieeahOS6i+S7tuS+puWQrFxyXG4gICAqL1xyXG4gIHB1YmxpYyByZW1vdmVBbGxMaXN0ZW5lcnMgKCkge1xyXG4gICAgdGhpcy5fbGlzdGVuZXJzLnNwbGljZSgwKVxyXG4gIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb3JlL2V2ZW50cy9FdmVudERpc3BhdGNoZXIudHMiLCJpbXBvcnQgRXZlbnQgZnJvbSBcIi4vRXZlbnRcIjtcclxuaW1wb3J0IEV2ZW50RGlzcGF0Y2hlciBmcm9tIFwiLi9FdmVudERpc3BhdGNoZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vdXNlRXZlbnQgZXh0ZW5kcyBFdmVudCB7XHJcbiAgcHVibGljIHN0YXRpYyBNT1VTRV9NT1ZFOiBzdHJpbmcgPSAnbW91c2VfbW92ZSc7XHJcblxyXG4gIHJlYWRvbmx5IHN0YWdlWDogbnVtYmVyO1xyXG4gIHJlYWRvbmx5IHN0YWdlWTogbnVtYmVyO1xyXG5cclxuICBjb25zdHJ1Y3RvciAodHlwZTogc3RyaW5nLCB0YXJnZXQ6IEV2ZW50RGlzcGF0Y2hlciwgc3RhZ2VYOiBudW1iZXIsIHN0YWdlWTogbnVtYmVyKSB7XHJcbiAgICBzdXBlcih0eXBlLCB0YXJnZXQpXHJcblxyXG4gICAgdGhpcy5zdGFnZVggPSBzdGFnZVg7XHJcbiAgICB0aGlzLnN0YWdlWSA9IHN0YWdlWTtcclxuICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29yZS9ldmVudHMvTW91c2VFdmVudC50cyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvaW50IHtcclxuXHJcbiAgcHVibGljIHN0YXRpYyBkaXN0YW5jZSAocDE6IFBvaW50LCBwMjogUG9pbnQpOm51bWJlciB7XHJcbiAgICByZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KHAxLnggLSBwMi54LCAyKSArIE1hdGgucG93KHAxLnkgLSBwMi55LCAyKSlcclxuICB9XHJcblxyXG4gIHB1YmxpYyB4OiBudW1iZXJcclxuICBwdWJsaWMgeTogbnVtYmVyXHJcbiAgXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yICh4OiBudW1iZXIgPSAwLCB5OiBudW1iZXIgPSAwKSB7XHJcbiAgICB0aGlzLnggPSB4XHJcbiAgICB0aGlzLnkgPSB5XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGlzdGFuY2VUbyAocDogUG9pbnQpOm51bWJlciB7XHJcbiAgICByZXR1cm4gUG9pbnQuZGlzdGFuY2UodGhpcywgcClcclxuICB9XHJcblxyXG4gIHB1YmxpYyB0b1N0cmluZyAoKTpzdHJpbmcge1xyXG4gICAgcmV0dXJuIGBQb2ludCh4PSR7dGhpcy54fSwgeT0ke3RoaXMueX1gXHJcbiAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvcmUvdXRpbHMvUG9pbnQudHMiLCJpbXBvcnQgRGlzcGxheU9iamVjdCBmcm9tIFwiLi4vY29yZS9kaXNwbGF5L0Rpc3BsYXlPYmplY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyb3VuZCBleHRlbmRzIERpc3BsYXlPYmplY3Qge1xyXG4gIHJlYWRvbmx5IGhlaWdodDogbnVtYmVyID0gNTBcclxuICBcclxuICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICBzdXBlcigpXHJcbiAgICB0aGlzLmhlaWdodCA9IDUwXHJcbiAgfVxyXG5cclxuICByZW5kZXIgKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XHJcbiAgICBjdHguZmlsbFN0eWxlID0gJyM2RjRFMzcnXHJcbiAgICBsZXQgdzogbnVtYmVyID0gdGhpcy5zdGFnZS53aWR0aFxyXG4gICAgY3R4LmZpbGxSZWN0KC13IC8gMiwgMCwgdywgdGhpcy5oZWlnaHQpXHJcbiAgICBcclxuICAgIGN0eC5iZWdpblBhdGgoKVxyXG4gICAgY3R4Lm1vdmVUbygtdyAvIDIsIDApXHJcbiAgICBjdHgubGluZVRvKHcgLzIsIDApXHJcbiAgICBjdHguY2xvc2VQYXRoKClcclxuICAgIGN0eC5zdHJva2UoKVxyXG5cclxuICAgIGxldCBuOm51bWJlciA9IE1hdGguY2VpbCh3IC8gNTApICsgMVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpICsrKSB7XHJcbiAgICAgIGN0eC5iZWdpblBhdGgoKVxyXG4gICAgICBjdHgubW92ZVRvKChpICsgMSkqIDUwIC0gdyAvIDIsIDApXHJcbiAgICAgIGN0eC5saW5lVG8oaSAqIDUwIC0gdyAvIDIsIHRoaXMuaGVpZ2h0KVxyXG4gICAgICBjdHguY2xvc2VQYXRoKClcclxuICAgICAgY3R4LnN0cm9rZSgpXHJcbiAgICB9XHJcbiAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvR3JvdW5kLnRzIiwiaW1wb3J0IFN0YWdlIGZyb20gJy4vY29yZS9kaXNwbGF5L1N0YWdlJ1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4vY29yZS9kaXNwbGF5L0NvbnRhaW5lcidcclxuaW1wb3J0IFRpY2tlciBmcm9tICcuL2NvcmUvdGlja2VyL1RpY2tlcidcclxuaW1wb3J0IFBvaW50IGZyb20gJy4vY29yZS91dGlscy9Qb2ludCc7XHJcbmltcG9ydCBEaXNwbGF5RXZlbnQgZnJvbSAnLi9jb3JlL2V2ZW50cy9EaXNwbGF5RXZlbnQnO1xyXG5pbXBvcnQgY2hhcHRlcjFfb25lX3NlZ21lbnQgZnJvbSAnLi92aWV3cy9jaGFwdGVyMV9vbmVfc2VnbWVudCc7XHJcbmltcG9ydCBDaGFwdGVyIGZyb20gJy4vY29tcG9uZW50cy9DaGFwdGVyJztcclxuaW1wb3J0IGNoYXB0ZXIyX3R3b19zZWdtZW50IGZyb20gJy4vdmlld3MvY2hhcHRlcjJfdHdvX3NlZ21lbnQnO1xyXG5pbXBvcnQgY2hhcHRlcjNfc3RhcnRfd2FsayBmcm9tICcuL3ZpZXdzL2NoYXB0ZXIzX3N0YXJ0X3dhbGsnO1xyXG5pbXBvcnQgQ29udHJvbHMgZnJvbSAnLi9Db250cm9scyc7XHJcbmltcG9ydCBjaGFwdGVyNF93YWxrX3dpdGhfMl9sZWdzIGZyb20gJy4vdmlld3MvY2hhcHRlcjRfd2Fsa193aXRoXzJfbGVncyc7XHJcbmltcG9ydCBjaGFwdGVyNV93YWxrX29uX3RoZV9ncm91bmQgZnJvbSAnLi92aWV3cy9jaGFwdGVyNV93YWxrX29uX3RoZV9ncm91bmQnO1xyXG5pbXBvcnQgY2hhcHRlcjZfZmV0Y2hfcGxheSBmcm9tICcuL3ZpZXdzL2NoYXB0ZXI2X2ZldGNoX3BsYXknO1xyXG5cclxuY29uc3Qgc3RhZ2U6U3RhZ2UgPSBuZXcgU3RhZ2UoJ3Jvb3QnKVxyXG5cclxuY29uc3QgbWFpbjogQ29udGFpbmVyID0gbmV3IENvbnRhaW5lcigpXHJcbm1haW4ueCA9IHN0YWdlLndpZHRoIC8gMlxyXG5tYWluLnkgPSBzdGFnZS5oZWlnaHQgLyAyXHJcbnN0YWdlLmFkZENoaWxkKG1haW4pXHJcblxyXG5UaWNrZXIucmVnaXN0ZXIoKCkgPT4ge1xyXG4gIHN0YWdlLnVwZGF0ZSgpXHJcbn0pXHJcblxyXG5jb25zdCBjaGFwdGVyTWFwOiBhbnkgPSB7XHJcbiAgMTogY2hhcHRlcjFfb25lX3NlZ21lbnQsXHJcbiAgMjogY2hhcHRlcjJfdHdvX3NlZ21lbnQsXHJcbiAgMzogY2hhcHRlcjNfc3RhcnRfd2FsayxcclxuICA0OiBjaGFwdGVyNF93YWxrX3dpdGhfMl9sZWdzLFxyXG4gIDU6IGNoYXB0ZXI1X3dhbGtfb25fdGhlX2dyb3VuZCxcclxuICA2OiBjaGFwdGVyNl9mZXRjaF9wbGF5XHJcbn1cclxuXHJcbmxldCBjdXJyZW50OiBhbnkgPSB7XHJcbiAgaW5kZXg6IDAsXHJcbiAgY2hhcHRlcjogbnVsbFxyXG59XHJcblxyXG5mdW5jdGlvbiBuYXZpZ2F0ZVRvQ2hhcHRlciAoaW5kZXg6IG51bWJlcikge1xyXG4gIGxldCBjaGFwdGVyQ2xhc3M6IGFueSA9IGNoYXB0ZXJNYXBbaW5kZXhdXHJcbiAgaWYgKGNoYXB0ZXJDbGFzcykge1xyXG4gICAgaWYgKGN1cnJlbnQuY2hhcHRlcikge1xyXG4gICAgICBtYWluLnJlbW92ZUNoaWxkKGN1cnJlbnQuY2hhcHRlcilcclxuICAgICAgQ29udHJvbHMucmVtb3ZlQWxsKClcclxuICAgIH1cclxuICAgIGxldCBjaGFwdGVyOiBDaGFwdGVyID0gbmV3IGNoYXB0ZXJDbGFzcygpIGFzIENoYXB0ZXJcclxuICAgIG1haW4uYWRkQ2hpbGQoY2hhcHRlcilcclxuICAgIGN1cnJlbnQuY2hhcHRlciA9IGNoYXB0ZXJcclxuICAgIGN1cnJlbnQuaW5kZXggPSBpbmRleFxyXG4gICAgY29uc29sZS5sb2coaW5kZXgsIGNoYXB0ZXIpXHJcbiAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9ICcjY2hhcHRlcicgKyBpbmRleFxyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyBhbGVydChg5bey57uP5pivJHtpbmRleCA8IDAgPyAn56ys5LiA6aG1JyA6ICfmnIDlkI7kuIDpobUnfeS6hmApXHJcbiAgfVxyXG59XHJcblxyXG4vLyB1cD0zOCwgZG93bj00MCwgc3BhY2U9MzJcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGUua2V5Q29kZSlcclxuICBzd2l0Y2ggKGUua2V5Q29kZSkge1xyXG4gICAgY2FzZSAzODpcclxuICAgICAgbmF2aWdhdGVUb0NoYXB0ZXIoY3VycmVudC5pbmRleCAtIDEpXHJcbiAgICAgIGJyZWFrXHJcbiAgICBjYXNlIDQwOlxyXG4gICAgICBuYXZpZ2F0ZVRvQ2hhcHRlcihjdXJyZW50LmluZGV4ICsgMSlcclxuICAgICAgYnJlYWtcclxuICAgIGNhc2UgMzI6XHJcbiAgICAgIGlmIChjdXJyZW50LmNoYXB0ZXIpIHtcclxuICAgICAgICBjdXJyZW50LmNoYXB0ZXIubmV4dFNjZW5lKClcclxuICAgICAgfVxyXG4gICAgICBicmVha1xyXG4gIH1cclxufSlcclxuXHJcbmZ1bmN0aW9uIG9uSGFzaENoYW5nZSAoKSB7XHJcbiAgbGV0IGhhc2g6c3RyaW5nID0gd2luZG93LmxvY2F0aW9uLmhhc2hcclxuICBsZXQgY2hhcHRlckluZGV4OiBudW1iZXJcclxuICBpZiAoaGFzaC5pbmRleE9mKCcjY2hhcHRlcicpID49IDApIHtcclxuICAgIGNoYXB0ZXJJbmRleCA9ICtoYXNoLnN1YnN0cig4KVxyXG4gIH1cclxuICBuYXZpZ2F0ZVRvQ2hhcHRlcihjaGFwdGVySW5kZXggfHwgMSlcclxufVxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCBvbkhhc2hDaGFuZ2UpO1xyXG5vbkhhc2hDaGFuZ2UoKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LnRzIiwiLy8gIOaAu+eahOavj+W4p+S6i+S7tlxyXG5cclxudmFyIF9yYWY6bnVtYmVyID0gbnVsbFxyXG52YXIgX2NiTGlzdDphbnlbXSA9IFtdXHJcbnZhciBfbGFzdFRpY2tUaW1lOiBudW1iZXJcclxudmFyIF9pc1BhdXNlZDogQm9vbGVhbiA9IGZhbHNlXHJcbnZhciBfaWQ6bnVtYmVyID0gMFxyXG52YXIgX2Zwc0ludGVydmFsOiBudW1iZXIgPSAxMDAwIC8gNjBcclxuXHJcbi8vICDmgLvnmoTluKfkuovku7ZcclxuZnVuY3Rpb24gdGljayAoKTp2b2lkIHtcclxuICBfcmFmID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aWNrKVxyXG4gIHZhciBub3cgPSBEYXRlLm5vdygpXHJcbiAgLy8gIHRpY2sgZHVyYXRpb25cclxuICB2YXIgZGVsdGEgPSBub3cgLSBfbGFzdFRpY2tUaW1lXHJcbiAgaWYgKGRlbHRhID49IF9mcHNJbnRlcnZhbCkge1xyXG4gICAgX2xhc3RUaWNrVGltZSA9IG5vd1xyXG4gICAgLy8gIGlmIHBhdXNlZCwgZG8gbm90IGNhbGwgdHdlZW4gdGlja1xyXG4gICAgaWYgKCFfaXNQYXVzZWQpIHtcclxuICAgICAgX2NiTGlzdC5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGl0ZW1bMF0uY2FsbChpdGVtWzFdKVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKCEoX2NiTGlzdC5sZW5ndGgpKSB7XHJcbiAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUoX3JhZilcclxuICAgIF9yYWYgPSBudWxsXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWNrZXIge1xyXG4gIHB1YmxpYyBzdGF0aWMgc2V0RlBTIChmcHM6IG51bWJlcikge1xyXG4gICAgX2Zwc0ludGVydmFsID0gTWF0aC5mbG9vcigxMDAwIC8gZnBzKVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyByZWdpc3RlciAoYTogRnVuY3Rpb24sIGI6IGFueSA9IG51bGwpOnZvaWQge1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBfY2JMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHZhciBpdGVtID0gX2NiTGlzdFtpXVxyXG4gICAgICBpZiAoaXRlbSBpbnN0YW5jZW9mIEFycmF5ICYmIGl0ZW1bMF0gPT09IGEgJiYgaXRlbVsxXSA9PT0gYikge1xyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBfY2JMaXN0LnB1c2goW2EsIGJdKVxyXG5cclxuICAgIC8vICBzdGFydCByYWZcclxuICAgIGlmKCFfcmFmKXtcclxuICAgICAgX2xhc3RUaWNrVGltZSA9IERhdGUubm93KClcclxuICAgICAgX3JhZiA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGljaylcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgdW5yZWdpc3RlciAoYTogRnVuY3Rpb24sIGI6IGFueSA9IG51bGwpOnZvaWQge1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBfY2JMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHZhciBpdGVtID0gX2NiTGlzdFtpXVxyXG4gICAgICBpZiAoaXRlbSBpbnN0YW5jZW9mIEFycmF5ICYmIGl0ZW1bMF0gPT09IGEgJiYgaXRlbVsxXSA9PT0gYikge1xyXG4gICAgICAgIF9jYkxpc3Quc3BsaWNlKGksIDEpXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29yZS90aWNrZXIvVGlja2VyLnRzIiwiaW1wb3J0IENoYXB0ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2hhcHRlclwiO1xyXG5pbXBvcnQgU2VnbWVudCBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWdtZW50XCI7XHJcbmltcG9ydCBNb3VzZUV2ZW50IGZyb20gXCIuLi9jb3JlL2V2ZW50cy9Nb3VzZUV2ZW50XCI7XHJcbmltcG9ydCBNYXRocyBmcm9tIFwiLi4vY29yZS91dGlscy9NYXRoc1wiO1xyXG5pbXBvcnQgQ29udHJvbHMgZnJvbSBcIi4uL0NvbnRyb2xzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBjaGFwdGVyMV9vbmVfc2VnbWVudCBleHRlbmRzIENoYXB0ZXIge1xyXG4gIFxyXG4gIC8vPT09PT09PT09PT09PT09XHJcbiAgcHVibGljIHNlZzogU2VnbWVudFxyXG5cclxuICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICBzdXBlcignb25lIHNlZ21lbnQnKVxyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGluaXQoKSB7XHJcbiAgICBzdXBlci5pbml0KClcclxuXHJcbiAgICB0aGlzLnNlZyA9IG5ldyBTZWdtZW50KClcclxuICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5zZWcpXHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgb25Nb3VzZU1vdmUgKGU6IE1vdXNlRXZlbnQpIHtcclxuICAgIHZhciBsb2NhbFg6IG51bWJlciA9IGUuc3RhZ2VYIC0gdGhpcy5zdGFnZS53aWR0aCAvIDJcclxuICAgIHZhciBsb2NhbFk6IG51bWJlciA9IGUuc3RhZ2VZIC0gdGhpcy5zdGFnZS5oZWlnaHQgLyAyXHJcblxyXG4gICAgdmFyIHJhZDogbnVtYmVyID0gTWF0aC5hdGFuMihsb2NhbFkgLSB0aGlzLnNlZy55LCBsb2NhbFggLSB0aGlzLnNlZy54KVxyXG4gICAgdGhpcy5zZWcucm90YXRpb24gPSBNYXRocy5yYWRUb0RlZyhyYWQpXHJcbiAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZpZXdzL2NoYXB0ZXIxX29uZV9zZWdtZW50LnRzIiwiaW1wb3J0IENoYXB0ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2hhcHRlclwiO1xyXG5pbXBvcnQgU2VnbWVudCBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWdtZW50XCI7XHJcbmltcG9ydCBNb3VzZUV2ZW50IGZyb20gXCIuLi9jb3JlL2V2ZW50cy9Nb3VzZUV2ZW50XCI7XHJcbmltcG9ydCBNYXRocyBmcm9tIFwiLi4vY29yZS91dGlscy9NYXRoc1wiO1xyXG5pbXBvcnQgUG9pbnQgZnJvbSBcIi4uL2NvcmUvdXRpbHMvUG9pbnRcIjtcclxuaW1wb3J0IENvbnRyb2xzIGZyb20gXCIuLi9Db250cm9sc1wiO1xyXG5pbXBvcnQgU2xpZGVyIGZyb20gXCIuLi9TbGlkZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGNoYXB0ZXIyX3R3b19zZWdtZW50IGV4dGVuZHMgQ2hhcHRlciB7XHJcbiAgXHJcbiAgLy89PT09PT09PT09PT09PT1cclxuICBwdWJsaWMgc2VnMTogU2VnbWVudDtcclxuICBwdWJsaWMgc2VnMjogU2VnbWVudDtcclxuXHJcbiAgcHVibGljIHNsaWRlcjE6IFNsaWRlcjtcclxuICBwdWJsaWMgc2xpZGVyMjogU2xpZGVyO1xyXG4gIHB1YmxpYyByU2VnMkJhc2U6IG51bWJlciA9IDBcclxuXHJcbiAgcHVibGljIHNlZzJGb2xsb3dTZWcxOiBCb29sZWFuID0gZmFsc2VcclxuXHJcbiAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgc3VwZXIoJ3R3byBzZWdtZW50cycpXHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgaW5pdCgpIHtcclxuICAgIHN1cGVyLmluaXQoKVxyXG5cclxuICAgIHRoaXMuc2VnMSA9IG5ldyBTZWdtZW50KCk7XHJcbiAgICB0aGlzLmFkZENoaWxkKHRoaXMuc2VnMSk7XHJcbiAgICB0aGlzLnNsaWRlcjEgPSBDb250cm9scy5nZXRTbGlkZXIoJ1NlZzEnLCAncm90YXRpb24nLCAwLCAtMTgwLCAxODApLmF0dGFjaCgpXHJcblxyXG4gICAgdGhpcy5zZWcyID0gbmV3IFNlZ21lbnQoKTtcclxuICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5zZWcyKTtcclxuICAgIHRoaXMuc2xpZGVyMiA9IENvbnRyb2xzLmdldFNsaWRlcignU2VnMicsICdyb3RhdGlvbicsIDAsIC0xODAsIDE4MCkuYXR0YWNoKClcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBzd2l0Y2hTY2VuZSAoaW5kZXg6IG51bWJlcikge1xyXG4gICAgc3dpdGNoIChpbmRleCkge1xyXG4gICAgICBjYXNlIDE6XHJcbiAgICAgICAgdGhpcy5zZWcyRm9sbG93U2VnMSA9IHRydWVcclxuICAgICAgICBicmVha1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gcHJvdGVjdGVkIG9uTW91c2VNb3ZlIChlOiBNb3VzZUV2ZW50KSB7XHJcbiAgLy8gICB2YXIgbG9jYWxYOiBudW1iZXIgPSBlLnN0YWdlWCAtIHRoaXMuc3RhZ2Uud2lkdGggLyAyXHJcbiAgLy8gICB2YXIgbG9jYWxZOiBudW1iZXIgPSBlLnN0YWdlWSAtIHRoaXMuc3RhZ2UuaGVpZ2h0IC8gMlxyXG5cclxuICAvLyAgIHZhciByYWQ6IG51bWJlciA9IE1hdGguYXRhbjIobG9jYWxZIC0gdGhpcy5zZWcxLnksIGxvY2FsWCAtIHRoaXMuc2VnMS54KVxyXG4gIC8vICAgdGhpcy5zZWcxLnJvdGF0aW9uID0gTWF0aHMucmFkVG9EZWcocmFkKVxyXG4gIC8vIH1cclxuXHJcbiAgcHJvdGVjdGVkIG9uVGljayAoKSB7XHJcbiAgICB0aGlzLnNlZzEucm90YXRpb24gPSB0aGlzLnNsaWRlcjEudmFsdWVcclxuICAgIGxldCBwaW4xOiBQb2ludCA9IHRoaXMuc2VnMS5nZXRQaW4oKVxyXG4gICAgdGhpcy5zZWcyLnggPSBwaW4xLnhcclxuICAgIHRoaXMuc2VnMi55ID0gcGluMS55XHJcblxyXG4gICAgdGhpcy5zZWcyLnJvdGF0aW9uID0gdGhpcy5zbGlkZXIyLnZhbHVlXHJcbiAgICBpZiAodGhpcy5zZWcyRm9sbG93U2VnMSkge1xyXG4gICAgICB0aGlzLnNlZzIucm90YXRpb24gKz0gdGhpcy5zZWcxLnJvdGF0aW9uXHJcbiAgICB9XHJcbiAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZpZXdzL2NoYXB0ZXIyX3R3b19zZWdtZW50LnRzIiwiaW1wb3J0IENvbnRyb2xzIGZyb20gJy4vQ29udHJvbHMnXHJcbmltcG9ydCBFdmVudERpc3BhdGNoZXIgZnJvbSAnLi9jb3JlL2V2ZW50cy9FdmVudERpc3BhdGNoZXInXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50ICh0ZXh0OiBzdHJpbmcpOkhUTUxFbGVtZW50IHtcclxuICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICBkaXYuaW5uZXJIVE1MID0gdGV4dFxyXG4gIHJldHVybiBkaXYuZmlyc3RFbGVtZW50Q2hpbGQgYXMgSFRNTEVsZW1lbnRcclxufVxyXG5cclxubGV0IGlkID0gMFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2xpZGVyIGV4dGVuZHMgRXZlbnREaXNwYXRjaGVyIHtcclxuICBcclxuICAgIHB1YmxpYyBpZDogbnVtYmVyXHJcbiAgICBwdWJsaWMgbGFiZWw6IHN0cmluZ1xyXG4gICAgcHVibGljIGtleTogc3RyaW5nXHJcbiAgICBwdWJsaWMgbWluOiBudW1iZXJcclxuICAgIHB1YmxpYyBtYXg6IG51bWJlclxyXG4gIFxyXG4gICAgcHVibGljIGVsOiBIVE1MRWxlbWVudFxyXG4gICAgcHVibGljIGlucHV0OiBIVE1MSW5wdXRFbGVtZW50XHJcbiAgXHJcbiAgICBwdWJsaWMgZ2V0IHZhbHVlICgpIHtcclxuICAgICAgcmV0dXJuICt0aGlzLmlucHV0LnZhbHVlXHJcbiAgICB9XHJcbiAgXHJcbiAgICBwdWJsaWMgY2FsbGJhY2s6IEZ1bmN0aW9uO1xyXG4gICAgcHVibGljIHNjb3BlOiBhbnk7XHJcbiAgXHJcbiAgICBjb25zdHJ1Y3RvciAobGFiZWw6IHN0cmluZywga2V5OiBzdHJpbmcsIGluaXRWYWx1ZTogbnVtYmVyLCBtaW46IG51bWJlciwgbWF4OiBudW1iZXIsIHN0ZXA6IG51bWJlciA9IDAuMSkge1xyXG4gICAgICBzdXBlcigpXHJcbiAgXHJcbiAgICAgIHRoaXMuaWQgPSArK2lkXHJcbiAgICAgIHRoaXMubGFiZWwgPSBsYWJlbFxyXG4gICAgICB0aGlzLmtleSA9IGtleVxyXG4gICAgICB0aGlzLm1pbiA9IG1pblxyXG4gICAgICB0aGlzLm1heCA9IG1heFxyXG4gICAgICBcclxuICAgICAgdGhpcy5pbml0KGluaXRWYWx1ZSwgc3RlcClcclxuICAgIH1cclxuICBcclxuICAgIHB1YmxpYyBpbml0IChpbml0VmFsdWU6IG51bWJlciwgc3RlcDogbnVtYmVyKSB7XHJcbiAgICAgIGxldCBzdHIgPSBgXHJcbiAgICAgIDxkaXYgaWQ9XCJzbGlkZXIke3RoaXMuaWR9XCIgY2xhc3M9XCJzZWdtZW50XCI+XHJcbiAgICAgICAgPGgzPiR7dGhpcy5sYWJlbH0gPHNtYWxsPjwvc21hbGw+PC9oMz5cclxuICAgICAgICA8bGFiZWw+JHt0aGlzLmtleX08aW5wdXQgdHlwZT1cInJhbmdlXCIgbWluPVwiJHt0aGlzLm1pbn1cIiBtYXg9XCIke3RoaXMubWF4fVwiIHN0ZXA9XCIke3N0ZXB9XCI+PC9sYWJlbD5cclxuICAgICAgICA8c3Bhbj4ke2luaXRWYWx1ZX08L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICBgXHJcbiAgICAgIHRoaXMuZWwgPSBjcmVhdGVFbGVtZW50KHN0cilcclxuICAgICAgdGhpcy5pbnB1dD0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpXHJcbiAgICAgIHRoaXMuaW5wdXQudmFsdWUgPSBpbml0VmFsdWUgKyAnJ1xyXG4gICAgICBsZXQgc3BhbjphbnkgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKVxyXG4gICAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGU6YW55KSA9PiB7XHJcbiAgICAgICAgc3Bhbi5pbm5lclRleHQgPSB0aGlzLmlucHV0LnZhbHVlXHJcbiAgICAgICAgaWYgKHRoaXMuY2FsbGJhY2spIHtcclxuICAgICAgICAgIHRoaXMuY2FsbGJhY2suY2FsbCh0aGlzLnNjb3BlLCArdGhpcy5pbnB1dC52YWx1ZSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgXHJcbiAgICBwdWJsaWMgYXR0YWNoIChjYWxsYmFjazogRnVuY3Rpb24gPSBudWxsLCBzY29wZTogYW55ID0gbnVsbCkge1xyXG4gICAgICBDb250cm9scy5yb290RWwuYXBwZW5kQ2hpbGQodGhpcy5lbClcclxuICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrXHJcbiAgICAgIHRoaXMuc2NvcGUgPSBudWxsXHJcbiAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcbiAgXHJcbiAgICBwdWJsaWMgZGV0YWNoICgpIHtcclxuICAgICAgQ29udHJvbHMucm9vdEVsLnJlbW92ZUNoaWxkKHRoaXMuZWwpXHJcbiAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcbiAgfVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9TbGlkZXIudHMiLCJpbXBvcnQgQ2hhcHRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9DaGFwdGVyXCI7XHJcbmltcG9ydCBTZWdtZW50IGZyb20gXCIuLi9jb21wb25lbnRzL1NlZ21lbnRcIjtcclxuaW1wb3J0IE1vdXNlRXZlbnQgZnJvbSBcIi4uL2NvcmUvZXZlbnRzL01vdXNlRXZlbnRcIjtcclxuaW1wb3J0IE1hdGhzIGZyb20gXCIuLi9jb3JlL3V0aWxzL01hdGhzXCI7XHJcbmltcG9ydCBQb2ludCBmcm9tIFwiLi4vY29yZS91dGlscy9Qb2ludFwiO1xyXG5pbXBvcnQgU2xpZGVyIGZyb20gXCIuLi9TbGlkZXJcIjtcclxuaW1wb3J0IENvbnRyb2xzIGZyb20gXCIuLi9Db250cm9sc1wiO1xyXG5pbXBvcnQgU2luZXdhdmUgZnJvbSBcIi4uL1NpbmV3YXZlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBjaGFwdGVyM19zdGFydF93YWxrIGV4dGVuZHMgQ2hhcHRlciB7XHJcbiAgXHJcbiAgLy89PT09PT09PT09PT09PT1cclxuICBwdWJsaWMgc2VnMTogU2VnbWVudDtcclxuICBwdWJsaWMgc2VnMjogU2VnbWVudDtcclxuXHJcbiAgcHVibGljIHNsaWRlcjE6IFNsaWRlcjtcclxuICBwdWJsaWMgc2xpZGVyMjogU2xpZGVyO1xyXG5cclxuICAvLyAg5q2j5bym6ZyH6I2hXHJcbiAgcHVibGljIHNpbmV3YXZlOiBTaW5ld2F2ZTtcclxuXHJcbiAgcHVibGljIGFwcGx5T2Zmc2V0UGhhc2VEZWc6IGJvb2xlYW4gPSBmYWxzZVxyXG5cclxuICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICBzdXBlcignc3RhcnQgd2FsaycpXHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgaW5pdCgpIHtcclxuICAgIHN1cGVyLmluaXQoKVxyXG5cclxuICAgIHRoaXMuc2VnMSA9IG5ldyBTZWdtZW50KCk7XHJcbiAgICB0aGlzLmFkZENoaWxkKHRoaXMuc2VnMSk7XHJcbiAgICB0aGlzLnNlZzEucm90YXRpb24gPSA5MFxyXG4gICAgdGhpcy5zbGlkZXIxID0gQ29udHJvbHMuZ2V0U2xpZGVyKCdTZWcxJywgJ3JvdGF0aW9uJywgOTAsIDQ1LCAxMzUpLmF0dGFjaCgpXHJcblxyXG4gICAgdGhpcy5zZWcyID0gbmV3IFNlZ21lbnQoKTtcclxuICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5zZWcyKTtcclxuICAgIHRoaXMuc2xpZGVyMiA9IENvbnRyb2xzLmdldFNsaWRlcignU2VnMicsICdyb3RhdGlvbicsIDAsIC0xODAsIDE4MCkuYXR0YWNoKClcclxuXHJcbiAgICB0aGlzLnNpbmV3YXZlID0gbmV3IFNpbmV3YXZlKCk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgc3dpdGNoU2NlbmUgKGluZGV4OiBudW1iZXIpIHtcclxuICAgIHN3aXRjaCAoaW5kZXgpIHtcclxuICAgICAgY2FzZSAxOlxyXG4gICAgICAgIHRoaXMuYXBwbHlPZmZzZXRQaGFzZURlZyA9IHRydWVcclxuICAgICAgICBicmVha1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIG9uVGljayAoKSB7XHJcbiAgICB0aGlzLnNpbmV3YXZlLnVwZGF0ZSgpXHJcblxyXG4gICAgdGhpcy5zZWcxLnJvdGF0aW9uID0gdGhpcy5zbGlkZXIxLnZhbHVlICsgMzAgKiB0aGlzLnNpbmV3YXZlLnZhbHVlXHJcbiAgICBsZXQgcGluMTogUG9pbnQgPSB0aGlzLnNlZzEuZ2V0UGluKClcclxuICAgIHRoaXMuc2VnMi54ID0gcGluMS54XHJcbiAgICB0aGlzLnNlZzIueSA9IHBpbjEueVxyXG5cclxuICAgIGlmICghdGhpcy5hcHBseU9mZnNldFBoYXNlRGVnKSB7XHJcbiAgICAgIHRoaXMuc2VnMi5yb3RhdGlvbiA9IHRoaXMuc2xpZGVyMi52YWx1ZSArIHRoaXMuc2VnMS5yb3RhdGlvblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZWcyLnJvdGF0aW9uID0gdGhpcy5zbGlkZXIyLnZhbHVlICsgdGhpcy5zbGlkZXIxLnZhbHVlICsgMzAgKyAzMCAqIHRoaXMuc2luZXdhdmUuZ2V0T2Zmc2V0VmFsdWUoLTQ1KVxyXG4gICAgfVxyXG4gIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92aWV3cy9jaGFwdGVyM19zdGFydF93YWxrLnRzIiwiaW1wb3J0IENoYXB0ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2hhcHRlclwiO1xyXG5pbXBvcnQgU2VnbWVudCBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWdtZW50XCI7XHJcbmltcG9ydCBNb3VzZUV2ZW50IGZyb20gXCIuLi9jb3JlL2V2ZW50cy9Nb3VzZUV2ZW50XCI7XHJcbmltcG9ydCBNYXRocyBmcm9tIFwiLi4vY29yZS91dGlscy9NYXRoc1wiO1xyXG5pbXBvcnQgUG9pbnQgZnJvbSBcIi4uL2NvcmUvdXRpbHMvUG9pbnRcIjtcclxuaW1wb3J0IFNsaWRlciBmcm9tIFwiLi4vU2xpZGVyXCI7XHJcbmltcG9ydCBDb250cm9scyBmcm9tIFwiLi4vQ29udHJvbHNcIjtcclxuaW1wb3J0IFNpbmV3YXZlIGZyb20gXCIuLi9TaW5ld2F2ZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgY2hhcHRlcjRfd2Fsa193aXRoXzJfbGVncyBleHRlbmRzIENoYXB0ZXIge1xyXG4gIFxyXG4gIC8vPT09PT09PT09PT09PT09XHJcbiAgcHVibGljIHNlZzE6IFNlZ21lbnQ7XHJcbiAgcHVibGljIHNlZzI6IFNlZ21lbnQ7XHJcblxyXG4gIHB1YmxpYyBzZWczOiBTZWdtZW50O1xyXG4gIHB1YmxpYyBzZWc0OiBTZWdtZW50O1xyXG5cclxuICBwdWJsaWMgc2xpZGVyU2luZUluYzogU2xpZGVyO1xyXG4gIHB1YmxpYyBzbGlkZXJNYWluU2VnUmFuZ2U6IFNsaWRlcjtcclxuICBwdWJsaWMgc2xpZGVyTWFpblNlZ0luaXQ6IFNsaWRlcjtcclxuICBwdWJsaWMgc2xpZGVyU3ViU2VnUmFuZ2U6IFNsaWRlcjtcclxuXHJcbiAgLy8gIOato+W8pumch+iNoVxyXG4gIHB1YmxpYyBzaW5ld2F2ZTogU2luZXdhdmU7XHJcbiAgXHJcbiAgcHVibGljIHdhbGtQaGFzZU9mZnNldDogbnVtYmVyID0gLTkwO1xyXG5cclxuICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICBzdXBlcignd2FsayB3aXRoIDIgbGVncycpXHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgaW5pdCgpIHtcclxuICAgIHN1cGVyLmluaXQoKVxyXG5cclxuICAgIHRoaXMuc2VnMSA9IG5ldyBTZWdtZW50KDIwMCwgNDApO1xyXG4gICAgdGhpcy5hZGRDaGlsZCh0aGlzLnNlZzEpO1xyXG4gICAgdGhpcy5zZWcxLnJvdGF0aW9uID0gOTBcclxuXHJcbiAgICB0aGlzLnNlZzIgPSBuZXcgU2VnbWVudCgyMDAsIDMwKTtcclxuICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5zZWcyKTtcclxuXHJcbiAgICB0aGlzLnNlZzMgPSBuZXcgU2VnbWVudCgyMDAsIDQwKTtcclxuICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5zZWczKTtcclxuICAgIHRoaXMuc2VnMy5yb3RhdGlvbiA9IDkwXHJcblxyXG4gICAgdGhpcy5zZWc0ID0gbmV3IFNlZ21lbnQoMjAwLCAzMCk7XHJcbiAgICB0aGlzLmFkZENoaWxkKHRoaXMuc2VnNCk7XHJcblxyXG4gICAgdGhpcy5zbGlkZXJTaW5lSW5jID0gQ29udHJvbHMuZ2V0U2xpZGVyKCdTaW5ld2F2ZSBQaGFzZSBJbmMnLCAncGhhc2VJbmMnLCAwLjA1LCAwLCAwLjMpLmF0dGFjaCgpXHJcbiAgICB0aGlzLnNsaWRlclNpbmVJbmMuaW5wdXQuc3RlcCA9ICcwLjAxJ1xyXG4gICAgdGhpcy5zbGlkZXJNYWluU2VnUmFuZ2UgPSBDb250cm9scy5nZXRTbGlkZXIoJ01haW4gU2VnIFJvdGF0ZSBSYW5nZScsICdyb3RhdGUnLCA0NSwgMCwgOTApLmF0dGFjaCgpXHJcbiAgICB0aGlzLnNsaWRlck1haW5TZWdJbml0ID0gQ29udHJvbHMuZ2V0U2xpZGVyKCdNYWluIFNlZyBJbml0IFJvdGF0ZScsICdyb3RhdGUnLCA5MCwgMCwgMTgwKS5hdHRhY2goKVxyXG4gICAgdGhpcy5zbGlkZXJTdWJTZWdSYW5nZSA9IENvbnRyb2xzLmdldFNsaWRlcignU3ViIFNlZyBSb3RhdGUgUmFuZ2UnLCAncm90YXRlJywgNDUsIDAsIDkwKS5hdHRhY2goKVxyXG5cclxuICAgIHRoaXMuc2luZXdhdmUgPSBuZXcgU2luZXdhdmUoKVxyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHN3aXRjaFNjZW5lIChpbmRleDogbnVtYmVyKSB7XHJcbiAgICBzd2l0Y2ggKGluZGV4KSB7XHJcbiAgICAgIGNhc2UgMTpcclxuICAgICAgICBicmVha1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB3YWxrKG1haW5TZWc6IFNlZ21lbnQsIGF0dGFjaFNlZzogU2VnbWVudCwgcGhhc2VPZmZzZXQ6IG51bWJlciA9IDApIHtcclxuICAgIG1haW5TZWcucm90YXRpb24gPSB0aGlzLnNsaWRlck1haW5TZWdJbml0LnZhbHVlICsgdGhpcy5zbGlkZXJNYWluU2VnUmFuZ2UudmFsdWUgKiB0aGlzLnNpbmV3YXZlLmdldE9mZnNldFZhbHVlKHBoYXNlT2Zmc2V0KVxyXG4gICAgbGV0IHBpbjogUG9pbnQgPSBtYWluU2VnLmdldFBpbigpXHJcbiAgICBhdHRhY2hTZWcueCA9IHBpbi54XHJcbiAgICBhdHRhY2hTZWcueSA9IHBpbi55XHJcbiAgICBhdHRhY2hTZWcucm90YXRpb24gPSBtYWluU2VnLnJvdGF0aW9uICsgIHRoaXMuc2xpZGVyU3ViU2VnUmFuZ2UudmFsdWUgKyB0aGlzLnNsaWRlclN1YlNlZ1JhbmdlLnZhbHVlICogdGhpcy5zaW5ld2F2ZS5nZXRPZmZzZXRWYWx1ZShwaGFzZU9mZnNldCArIHRoaXMud2Fsa1BoYXNlT2Zmc2V0KVxyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIG9uVGljayAoKSB7XHJcbiAgICB0aGlzLnNpbmV3YXZlLnBoYXNlSW5jID0gdGhpcy5zbGlkZXJTaW5lSW5jLnZhbHVlXHJcbiAgICB0aGlzLnNpbmV3YXZlLnVwZGF0ZSgpXHJcblxyXG4gICAgdGhpcy53YWxrKHRoaXMuc2VnMSwgdGhpcy5zZWcyLCAwKVxyXG4gICAgdGhpcy53YWxrKHRoaXMuc2VnMywgdGhpcy5zZWc0LCAtMTgwKVxyXG4gIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92aWV3cy9jaGFwdGVyNF93YWxrX3dpdGhfMl9sZWdzLnRzIiwiaW1wb3J0IENoYXB0ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2hhcHRlclwiO1xyXG5pbXBvcnQgU2VnbWVudCBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWdtZW50XCI7XHJcbmltcG9ydCBNb3VzZUV2ZW50IGZyb20gXCIuLi9jb3JlL2V2ZW50cy9Nb3VzZUV2ZW50XCI7XHJcbmltcG9ydCBNYXRocyBmcm9tIFwiLi4vY29yZS91dGlscy9NYXRoc1wiO1xyXG5pbXBvcnQgUG9pbnQgZnJvbSBcIi4uL2NvcmUvdXRpbHMvUG9pbnRcIjtcclxuaW1wb3J0IFNsaWRlciBmcm9tIFwiLi4vU2xpZGVyXCI7XHJcbmltcG9ydCBDb250cm9scyBmcm9tIFwiLi4vQ29udHJvbHNcIjtcclxuaW1wb3J0IFNpbmV3YXZlIGZyb20gXCIuLi9TaW5ld2F2ZVwiO1xyXG5pbXBvcnQgR3JvdW5kIGZyb20gXCIuLi9jb21wb25lbnRzL0dyb3VuZFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgY2hhcHRlcjVfd2Fsa19vbl90aGVfZ3JvdW5kIGV4dGVuZHMgQ2hhcHRlciB7XHJcbiAgXHJcbiAgLy89PT09PT09PT09PT09PT1cclxuICBwdWJsaWMgc2VnMTogU2VnbWVudDtcclxuICBwdWJsaWMgc2VnMjogU2VnbWVudDtcclxuXHJcbiAgcHVibGljIHNlZzM6IFNlZ21lbnQ7XHJcbiAgcHVibGljIHNlZzQ6IFNlZ21lbnQ7XHJcblxyXG4gIHB1YmxpYyBzbGlkZXJTaW5lSW5jOiBTbGlkZXI7XHJcbiAgcHVibGljIHNsaWRlck1haW5TZWdSYW5nZTogU2xpZGVyO1xyXG4gIHB1YmxpYyBzbGlkZXJNYWluU2VnSW5pdDogU2xpZGVyO1xyXG4gIHB1YmxpYyBzbGlkZXJTdWJTZWdSYW5nZTogU2xpZGVyO1xyXG4gIHB1YmxpYyBzbGlkZXJHcmF2aXR5OiBTbGlkZXI7XHJcblxyXG4gIHB1YmxpYyBncm91bmQ6R3JvdW5kO1xyXG5cclxuICAvLyAg5q2j5bym6ZyH6I2hXHJcbiAgcHVibGljIHNpbmV3YXZlOiBTaW5ld2F2ZTtcclxuICBcclxuICBwdWJsaWMgd2Fsa1BoYXNlT2Zmc2V0OiBudW1iZXIgPSAtOTA7XHJcbiAgcHVibGljIGxlZ3NQaGFzZU9mZnNldDogbnVtYmVyID0gLTE4MDtcclxuXHJcbiAgcHVibGljIHZ4OiBudW1iZXIgPSAwXHJcbiAgcHVibGljIHZ5OiBudW1iZXIgPSAwXHJcblxyXG4gIC8vICDnorDliLDlnLDpnaLlj43lvLlcclxuICBwdWJsaWMgZ3JvdW5kUmVib3VuY2U6IEJvb2xlYW4gPSBmYWxzZVxyXG5cclxuICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICBzdXBlcignd2FsayBvbiB0aGUgZ3JvdW5kJylcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBpbml0KCkge1xyXG4gICAgc3VwZXIuaW5pdCgpXHJcbiAgICBcclxuICAgIHRoaXMuZ3JvdW5kID0gbmV3IEdyb3VuZCgpXHJcbiAgICB0aGlzLmdyb3VuZC55ID0gdGhpcy5zdGFnZS5oZWlnaHQgLyAyIC0gdGhpcy5ncm91bmQuaGVpZ2h0XHJcbiAgICB0aGlzLmFkZENoaWxkKHRoaXMuZ3JvdW5kKVxyXG5cclxuICAgIHRoaXMuc2VnMSA9IG5ldyBTZWdtZW50KDEwMCwgMzApO1xyXG4gICAgdGhpcy5hZGRDaGlsZCh0aGlzLnNlZzEpO1xyXG4gICAgdGhpcy5zZWcxLnJvdGF0aW9uID0gOTBcclxuXHJcbiAgICB0aGlzLnNlZzIgPSBuZXcgU2VnbWVudCgxMDAsIDIwKTtcclxuICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5zZWcyKTtcclxuXHJcbiAgICB0aGlzLnNlZzMgPSBuZXcgU2VnbWVudCgxMDAsIDMwKTtcclxuICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5zZWczKTtcclxuICAgIHRoaXMuc2VnMy5yb3RhdGlvbiA9IDkwXHJcblxyXG4gICAgdGhpcy5zZWc0ID0gbmV3IFNlZ21lbnQoMTAwLCAyMCk7XHJcbiAgICB0aGlzLmFkZENoaWxkKHRoaXMuc2VnNCk7XHJcblxyXG4gICAgdGhpcy5zbGlkZXJTaW5lSW5jID0gQ29udHJvbHMuZ2V0U2xpZGVyKCdTaW5ld2F2ZSBQaGFzZSBJbmMnLCAncGhhc2VJbmMnLCAwLjEyLCAwLCAwLjMsIDAuMDEpLmF0dGFjaCgpXHJcbiAgICB0aGlzLnNsaWRlck1haW5TZWdSYW5nZSA9IENvbnRyb2xzLmdldFNsaWRlcignTWFpbiBTZWcgUm90YXRlIFJhbmdlJywgJ3JvdGF0ZScsIDQ1LCAwLCA5MCkuYXR0YWNoKClcclxuICAgIHRoaXMuc2xpZGVyTWFpblNlZ0luaXQgPSBDb250cm9scy5nZXRTbGlkZXIoJ01haW4gU2VnIEluaXQgUm90YXRlJywgJ3JvdGF0ZScsIDkwLCAwLCAxODApLmF0dGFjaCgpXHJcbiAgICB0aGlzLnNsaWRlclN1YlNlZ1JhbmdlID0gQ29udHJvbHMuZ2V0U2xpZGVyKCdTdWIgU2VnIFJvdGF0ZSBSYW5nZScsICdyb3RhdGUnLCA0NSwgMCwgOTApLmF0dGFjaCgpXHJcbiAgICB0aGlzLnNsaWRlckdyYXZpdHkgPSBDb250cm9scy5nZXRTbGlkZXIoJ0dyYXZpdHknLCAnZ3Jhdml0eScsIDAuMzYsIDAsIDEsIDAuMDEpLmF0dGFjaCgpXHJcblxyXG4gICAgdGhpcy5zaW5ld2F2ZSA9IG5ldyBTaW5ld2F2ZSgpXHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgc3dpdGNoU2NlbmUgKGluZGV4OiBudW1iZXIpIHtcclxuICAgIHN3aXRjaCAoaW5kZXgpIHtcclxuICAgICAgY2FzZSAxOlxyXG4gICAgICAgIHRoaXMuZ3JvdW5kUmVib3VuY2UgPSB0cnVlXHJcbiAgICAgICAgYnJlYWtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgYXBwbHlHcmF2aXR5ICgpIHtcclxuICAgIHRoaXMudnkgKz0gdGhpcy5zbGlkZXJHcmF2aXR5LnZhbHVlXHJcbiAgICB0aGlzLnNlZzEueCArPSB0aGlzLnZ4XHJcbiAgICB0aGlzLnNlZzEueSArPSB0aGlzLnZ5XHJcbiAgICB0aGlzLnNlZzMueCArPSB0aGlzLnZ4XHJcbiAgICB0aGlzLnNlZzMueSArPSB0aGlzLnZ5XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRldGVjdEdyb3VuZCAoc3ViU2VnOiBTZWdtZW50KSB7XHJcbiAgICBsZXQgbWF4OiBudW1iZXIgPSB0aGlzLmdyb3VuZC55XHJcbiAgICBsZXQgYm90dG9tOiBudW1iZXIgPSBzdWJTZWcuZ2V0UGluKCkueVxyXG4gICAgaWYgKGJvdHRvbSA+IG1heCkge1xyXG4gICAgICB2YXIgb2Zmc2V0ID0gYm90dG9tIC0gbWF4XHJcbiAgICAgIHRoaXMuc2VnMS55IC09IG9mZnNldFxyXG4gICAgICB0aGlzLnNlZzIueSAtPSBvZmZzZXRcclxuICAgICAgdGhpcy5zZWczLnkgLT0gb2Zmc2V0XHJcbiAgICAgIHRoaXMuc2VnNC55IC09IG9mZnNldFxyXG5cclxuICAgICAgbGV0IGVhc2U6IG51bWJlciA9IDFcclxuXHJcbiAgICAgIGlmICh0aGlzLmdyb3VuZFJlYm91bmNlKSB7XHJcbiAgICAgICAgdGhpcy52eCAtPSBzdWJTZWcudnggKiBlYXNlXHJcbiAgICAgICAgdGhpcy52eSAtPSBzdWJTZWcudnkgKiBlYXNlXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy52eCA9IDBcclxuICAgICAgICB0aGlzLnZ5ID0gMFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRldGVjdFdhbGwgKCkge1xyXG4gICAgbGV0IHg6bnVtYmVyID0gdGhpcy5zZWcxLnhcclxuICAgIGxldCB3OiBudW1iZXIgPSB0aGlzLnN0YWdlLndpZHRoICsgMjAwXHJcbiAgICBsZXQgb2Zmc2V0OiBudW1iZXIgPSAwXHJcbiAgICBpZiAoeCA+IHcgLyAyKSB7XHJcbiAgICAgIG9mZnNldCA9IC13XHJcbiAgICB9IGVsc2UgaWYgKHcgPCAtIHcgLyAyKSB7XHJcbiAgICAgIG9mZnNldCA9IHdcclxuICAgIH1cclxuICAgIHRoaXMuc2VnMS54ICs9IG9mZnNldFxyXG4gICAgdGhpcy5zZWcyLnggKz0gb2Zmc2V0XHJcbiAgICB0aGlzLnNlZzMueCArPSBvZmZzZXRcclxuICAgIHRoaXMuc2VnNC54ICs9IG9mZnNldFxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB3YWxrKG1haW5TZWc6IFNlZ21lbnQsIGF0dGFjaFNlZzogU2VnbWVudCwgcGhhc2VPZmZzZXQ6IG51bWJlciA9IDApIHtcclxuICAgIGxldCBmb290QmVmb3JlOiBQb2ludCA9IGF0dGFjaFNlZy5nZXRQaW4oKVxyXG4gICAgbWFpblNlZy5yb3RhdGlvbiA9IHRoaXMuc2xpZGVyTWFpblNlZ0luaXQudmFsdWUgKyB0aGlzLnNsaWRlck1haW5TZWdSYW5nZS52YWx1ZSAqIHRoaXMuc2luZXdhdmUuZ2V0T2Zmc2V0VmFsdWUocGhhc2VPZmZzZXQpXHJcbiAgICBsZXQgcGluOiBQb2ludCA9IG1haW5TZWcuZ2V0UGluKClcclxuICAgIGF0dGFjaFNlZy54ID0gcGluLnhcclxuICAgIGF0dGFjaFNlZy55ID0gcGluLnlcclxuICAgIGF0dGFjaFNlZy5yb3RhdGlvbiA9IG1haW5TZWcucm90YXRpb24gKyAgdGhpcy5zbGlkZXJTdWJTZWdSYW5nZS52YWx1ZSArIHRoaXMuc2xpZGVyU3ViU2VnUmFuZ2UudmFsdWUgKiB0aGlzLnNpbmV3YXZlLmdldE9mZnNldFZhbHVlKHBoYXNlT2Zmc2V0ICsgdGhpcy53YWxrUGhhc2VPZmZzZXQpXHJcbiAgICBsZXQgZm9vdEFmdGVyOiBQb2ludCA9IGF0dGFjaFNlZy5nZXRQaW4oKVxyXG4gICAgYXR0YWNoU2VnLnZ4ID0gZm9vdEFmdGVyLnggLSBmb290QmVmb3JlLnhcclxuICAgIGF0dGFjaFNlZy52eSA9IGZvb3RBZnRlci55IC0gZm9vdEJlZm9yZS55XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgb25UaWNrICgpIHtcclxuICAgIHRoaXMuc2luZXdhdmUucGhhc2VJbmMgPSB0aGlzLnNsaWRlclNpbmVJbmMudmFsdWVcclxuICAgIHRoaXMuc2luZXdhdmUudXBkYXRlKClcclxuXHJcbiAgICB0aGlzLmFwcGx5R3Jhdml0eSgpXHJcblxyXG4gICAgdGhpcy53YWxrKHRoaXMuc2VnMSwgdGhpcy5zZWcyLCAwKVxyXG4gICAgdGhpcy53YWxrKHRoaXMuc2VnMywgdGhpcy5zZWc0LCB0aGlzLmxlZ3NQaGFzZU9mZnNldClcclxuXHJcbiAgICB0aGlzLmRldGVjdEdyb3VuZCh0aGlzLnNlZzIpXHJcbiAgICB0aGlzLmRldGVjdEdyb3VuZCh0aGlzLnNlZzQpXHJcblxyXG4gICAgdGhpcy5kZXRlY3RXYWxsKClcclxuICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmlld3MvY2hhcHRlcjVfd2Fsa19vbl90aGVfZ3JvdW5kLnRzIiwiaW1wb3J0IENoYXB0ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2hhcHRlclwiO1xyXG5pbXBvcnQgU2VnbWVudCBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWdtZW50XCI7XHJcbmltcG9ydCBNb3VzZUV2ZW50IGZyb20gXCIuLi9jb3JlL2V2ZW50cy9Nb3VzZUV2ZW50XCI7XHJcbmltcG9ydCBNYXRocyBmcm9tIFwiLi4vY29yZS91dGlscy9NYXRoc1wiO1xyXG5pbXBvcnQgUG9pbnQgZnJvbSBcIi4uL2NvcmUvdXRpbHMvUG9pbnRcIjtcclxuaW1wb3J0IFNsaWRlciBmcm9tIFwiLi4vU2xpZGVyXCI7XHJcbmltcG9ydCBDb250cm9scyBmcm9tIFwiLi4vQ29udHJvbHNcIjtcclxuaW1wb3J0IFNpbmV3YXZlIGZyb20gXCIuLi9TaW5ld2F2ZVwiO1xyXG5pbXBvcnQgR3JvdW5kIGZyb20gXCIuLi9jb21wb25lbnRzL0dyb3VuZFwiO1xyXG5pbXBvcnQgQmFsbCBmcm9tIFwiLi4vY29tcG9uZW50cy9CYWxsXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBjaGFwdGVyNl9mZXRjaF9wbGF5IGV4dGVuZHMgQ2hhcHRlciB7XHJcbiAgXHJcbiAgLy89PT09PT09PT09PT09PT1cclxuICBwdWJsaWMgbnVtU2VnczogbnVtYmVyID0gNTtcclxuICBwdWJsaWMgc2VnbWVudHM6IFNlZ21lbnRbXSA9IFtdXHJcbiAgcHVibGljIGJhbGw6IEJhbGw7XHJcbiAgcHVibGljIGdyb3VuZDpHcm91bmQ7XHJcblxyXG4gIC8vICDmraPlvKbpnIfojaFcclxuICBwdWJsaWMgc2luZXdhdmU6IFNpbmV3YXZlO1xyXG5cclxuICBwdWJsaWMgZ3Jhdml0eTogbnVtYmVyID0gMVxyXG4gIHB1YmxpYyBlYXNlOiBudW1iZXIgPSAtMC45XHJcblxyXG4gIHB1YmxpYyB2eDogbnVtYmVyID0gMFxyXG4gIHB1YmxpYyB2eTogbnVtYmVyID0gMFxyXG5cclxuICAvLyAg56Kw5Yiw5Zyw6Z2i5Y+N5by5XHJcbiAgcHVibGljIGdyb3VuZFJlYm91bmNlOiBCb29sZWFuID0gZmFsc2VcclxuXHJcbiAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgc3VwZXIoJ2ZldGNoIHBsYXknKVxyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGluaXQoKSB7XHJcbiAgICBzdXBlci5pbml0KClcclxuXHJcbiAgICB0aGlzLmdyb3VuZCA9IG5ldyBHcm91bmQoKVxyXG4gICAgdGhpcy5ncm91bmQueSA9IHRoaXMuc3RhZ2UuaGVpZ2h0IC8gMiAtIHRoaXMuZ3JvdW5kLmhlaWdodFxyXG4gICAgdGhpcy5hZGRDaGlsZCh0aGlzLmdyb3VuZClcclxuXHJcbiAgICBmb3IgKGxldCBpOiBudW1iZXIgPSB0aGlzLm51bVNlZ3MgLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICBsZXQgc2VnOiBTZWdtZW50ID0gbmV3IFNlZ21lbnQoODAsIDE1KVxyXG4gICAgICB0aGlzLnNlZ21lbnRzLnB1c2goc2VnKVxyXG4gICAgICB0aGlzLmFkZENoaWxkKHNlZylcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmJhbGwgPSBuZXcgQmFsbCgyMClcclxuICAgIHRoaXMuYmFsbC52eSA9IDEwXHJcbiAgICB0aGlzLmFkZENoaWxkKHRoaXMuYmFsbClcclxuICB9XHJcblxyXG4gIHB1YmxpYyBmZXRjaCAoc2VnOiBTZWdtZW50LCB4OiBudW1iZXIsIHk6IG51bWJlcik6IFBvaW50IHtcclxuICAgIGxldCBkeCA9IHggLSBzZWcueFxyXG4gICAgbGV0IGR5ID0geSAtIHNlZy55XHJcbiAgICBsZXQgcmFkID0gTWF0aC5hdGFuMihkeSwgZHgpXHJcbiAgICBzZWcucm90YXRpb24gPSBNYXRocy5yYWRUb0RlZyhyYWQpXHJcblxyXG4gICAgbGV0IHBpbiA9IHNlZy5nZXRQaW4oKVxyXG4gICAgbGV0IHcgPSBwaW4ueCAtIHNlZy54XHJcbiAgICBsZXQgaCA9IHBpbi55IC0gc2VnLnlcclxuXHJcbiAgICByZXR1cm4gbmV3IFBvaW50KHggLSB3LCB5IC0gaClcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjaGFpbiAobWFpblNlZzogU2VnbWVudCwgc3ViU2VnOiBTZWdtZW50KSB7XHJcbiAgICBsZXQgcGluID0gbWFpblNlZy5nZXRQaW4oKVxyXG4gICAgc3ViU2VnLnggPSBwaW4ueFxyXG4gICAgc3ViU2VnLnkgPSBwaW4ueVxyXG4gIH1cclxuXHJcbiAgcHVibGljIG1vdmVCYWxsICgpIHtcclxuICAgIHRoaXMuYmFsbC52eSArPSB0aGlzLmdyYXZpdHlcclxuICAgIHRoaXMuYmFsbC54ICs9IHRoaXMuYmFsbC52eFxyXG4gICAgdGhpcy5iYWxsLnkgKz0gdGhpcy5iYWxsLnZ5XHJcbiAgICBsZXQgdzogbnVtYmVyID0gdGhpcy5zdGFnZS53aWR0aFxyXG4gICAgbGV0IGg6IG51bWJlciA9IHRoaXMuc3RhZ2UuaGVpZ2h0XHJcbiAgICBpZiAodGhpcy5iYWxsLnggPj0gdyAvIDIpIHtcclxuICAgICAgdGhpcy5iYWxsLnggPSB3IC8gMlxyXG4gICAgICB0aGlzLmJhbGwudnggKj0gdGhpcy5lYXNlXHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuYmFsbC54IDw9IC13IC8gMikge1xyXG4gICAgICB0aGlzLmJhbGwueCA9IC13IC8gMlxyXG4gICAgICB0aGlzLmJhbGwudnggKj0gdGhpcy5lYXNlXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuYmFsbC55IDw9IC1oIC8gMikge1xyXG4gICAgICB0aGlzLmJhbGwueSA9IC1oIC8gMlxyXG4gICAgICB0aGlzLmJhbGwudnkgKj0gdGhpcy5lYXNlXHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuYmFsbC55ID49IHRoaXMuZ3JvdW5kLnkpIHtcclxuICAgICAgdGhpcy5iYWxsLnkgPSB0aGlzLmdyb3VuZC55XHJcbiAgICAgIHRoaXMuYmFsbC52eSAqPSB0aGlzLmVhc2VcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBkZXRlY3RDb2xsaXNpb24gKCkge1xyXG4gICAgbGV0IHNlZzogU2VnbWVudCA9IHRoaXMuc2VnbWVudHNbMF1cclxuICAgIGlmIChzZWcuZ2V0UGluKCkuZGlzdGFuY2VUbyhuZXcgUG9pbnQodGhpcy5iYWxsLngsIHRoaXMuYmFsbC55KSkgPD0gdGhpcy5iYWxsLnJhZGl1cykge1xyXG4gICAgICB0aGlzLmJhbGwudnggKz0gNCAqIE1hdGgucmFuZG9tKCkgLSAyXHJcbiAgICAgIHRoaXMuYmFsbC52eSAtPSAyXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgb25UaWNrICgpIHtcclxuICAgIHRoaXMubW92ZUJhbGwoKVxyXG5cclxuICAgIGxldCB0YXJnZXQ6IFBvaW50ID0gdGhpcy5mZXRjaCh0aGlzLnNlZ21lbnRzWzBdLCB0aGlzLmJhbGwueCwgdGhpcy5iYWxsLnkpXHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRoaXMubnVtU2VnczsgaSsrKSB7XHJcbiAgICAgIGxldCBzZWcgPSB0aGlzLnNlZ21lbnRzW2ldXHJcbiAgICAgIHRhcmdldCA9IHRoaXMuZmV0Y2goc2VnLCB0YXJnZXQueCwgdGFyZ2V0LnkpXHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IHRoaXMubnVtU2VncyAtIDE7IGkgPiAwOyBpLS0pIHtcclxuICAgICAgbGV0IG1haW5TZWcgPSB0aGlzLnNlZ21lbnRzW2ldXHJcbiAgICAgIGxldCBzdWJTZWcgPSB0aGlzLnNlZ21lbnRzW2kgLSAxXVxyXG4gICAgICB0aGlzLmNoYWluKG1haW5TZWcsIHN1YlNlZylcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmRldGVjdENvbGxpc2lvbigpXHJcbiAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZpZXdzL2NoYXB0ZXI2X2ZldGNoX3BsYXkudHMiLCJpbXBvcnQgRGlzcGxheU9iamVjdCBmcm9tIFwiLi4vY29yZS9kaXNwbGF5L0Rpc3BsYXlPYmplY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhbGwgZXh0ZW5kcyBEaXNwbGF5T2JqZWN0IHtcclxuXHJcbiAgcmVhZG9ubHkgcmFkaXVzOiBudW1iZXI7XHJcbiAgcmVhZG9ubHkgY29sb3I6IGFueTtcclxuICBwdWJsaWMgdng6IG51bWJlciA9IDBcclxuICBwdWJsaWMgdnk6IG51bWJlciA9IDBcclxuXHJcbiAgY29uc3RydWN0b3IgKHJhZGl1czogbnVtYmVyID0gNTAsIGNvbG9yOiBhbnkgPSAncmdiYSgyMDAsIDIwMCwgMjAwLCAwLjkpJykge1xyXG4gICAgc3VwZXIoKVxyXG5cclxuICAgIHRoaXMucmFkaXVzID0gcmFkaXVzO1xyXG4gICAgdGhpcy5jb2xvciA9IGNvbG9yO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbmRlciAoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcclxuICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yXHJcbiAgICBjdHguYmVnaW5QYXRoKClcclxuICAgIGN0eC5hcmMoMCwgMCwgdGhpcy5yYWRpdXMsIDAsIE1hdGguUEkgKiAyKVxyXG4gICAgY3R4LmNsb3NlUGF0aCgpXHJcbiAgICBjdHguZmlsbCgpXHJcbiAgICBjdHguc3Ryb2tlKClcclxuICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9CYWxsLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==