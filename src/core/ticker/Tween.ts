import Ticker from './Ticker'

let _id = 0

//  定义不同的状态类型
const stateType = {
  TO: 0,
  WAIT: 1,
  CALL: 2,
  APPEND: 3,
  SET: 4
}

//  tween 列表
const _tList: Tween[] = []

function _registerTween (t: Tween) {
  if (_tList.indexOf(t) != -1) {
    return
  }
  _tList.push(t)
  // Todo: regist on Ticker
}

function _unregisterTween (t: Tween) {
  var index = _tList.indexOf(t)
  if (index >= 0) {
    _tList.splice(_tList.indexOf(t), 1)
  }
  // Todo: unregister on Ticker
}

function mapping (val: number, inputMin: number, inputMax: number, outputMin: number, outputMax: number): number {
  return ((outputMax - outputMin) * ((val - inputMin) / (inputMax - inputMin))) + outputMin
}

var _pushState = function (t: Tween, state: any) {
  t.states.push(state)
  _readState(t)
  _registerTween(t)
  return t
}

var _readState = function (t: Tween) {
  if(t.currentState || !t.states.length) {
    return
  }

  //  暂存当前状态, 作为这个state的启动状态
  var state = t.states[0]
  t.currentState = state
  var obj = t.obj
  switch(state.type) {
    case stateType.TO:
    case stateType.APPEND:
      let from:any = {};
      for(let key in state.to){
        if(state.to.hasOwnProperty(key)  && (obj.hasOwnProperty(key) || obj.__lookupGetter__(key))) {
          from[key] = obj[key];  //  start state
          if(state.type == stateType.APPEND) {
            state.to[key] += from[key]
          }
        }
      }

      if(state.type == stateType.APPEND) {
        state.type = stateType.TO
      }

      state.from = from;
      state.elapsedTime = 0;
      break;
    case stateType.WAIT:
      state.elapsedTime = 0;
      break;
    case stateType.CALL:
      state.duration = 0;
      state.elapsedTime = 0;
      break;
    case stateType.SET:
      state.duration = 0;     //  will not wait util next tick
      state.elapsedTime = 0
      _assignProps(t, state, 1)
      break;
  }
}

//  assign
var _assignProps = function (t: Tween, state:any, p:number) {
  var obj = t.obj
  var to = state.to
  for(var key in to){
    if(to.hasOwnProperty(key)){
      obj[key] = to[key]
    }
  }
}

var _tweenTick = function (t: Tween, delta: number) {
  //  当前所处的状态
  var state = t.currentState
  if(!t.currentState) {
    return
  }

  state.elapsedTime += delta

  //  找到这个状态的百分比
  var p = state.duration == 0 ? 1 : (state.elapsedTime / state.duration)
  if (p > 1) {
    p = 1
  } else if (p < 0) {
    p = 0
  }

  //  判断状态类型
  switch(state.type){
    case stateType.TO:
    case stateType.APPEND:
      let from = state.from
      let to = state.to
      let ease = state.ease

      let ep = p
      if (p != 1 && ease && typeof ease == 'function') {
        ep = ease(p)
      }

      let obj = t.obj;
      for (let key in to) {
        if(to.hasOwnProperty(key)){
          let v = mapping(ep, 0, 1, from[key], to[key])
          obj[key] = v
        }
      }

      if (t.config && t.config.onChange) {
        t.config.onChange.call(t.config.onChangeObj)
      }
      break
    case stateType.WAIT:
      //  do nothing
      break
    case stateType.CALL:
      let callback = state.callback
      let scope = state.scope
      let args = state.args
      callback.apply(scope, args)
      break
    case stateType.SET:
      //  do nothing, just wait for one tick
      break
  }

  //  此状态结束了
  if(p >= 1){
    t.passedStates.push(t.states.shift())
    t.currentState = null
    if(t.states.length) {
      _readState(t)
    }
    else {
      //  loop, swap states
      //  如果是set调用的,会导致循环
      if(t.config && t.config.loop) {
        t.states = t.passedStates
        t.passedStates.slice(0)
        _readState(t)
      }
      else {
        if(t.config && t.config.onComplete){
          t.config.onComplete.call(t.config.onCompleteObj)
        }
        _unregisterTween(t)
      }
    }
  }
}

export default class Tween {
  private _uid: number;
  public obj: any;
  public config: any;
  public states: any[];
  public passedStates: any[];
  public currentState: any;
  
  /**
   * 可以配置:
   *  onChange,
   *  onChangeObj,
   *  onComplete,
   *  onCompleteObj,
   *  override,
   *  loop
   *
   * @param obj
   * @param config
   */
  constructor (obj: any, config: any) {
    this._uid = _id++
    // if(typeof obj === 'string' || obj instanceof HTMLElement) {
    //   obj = ElementWrapper.get(obj)
    //   this.isElement = true
    // }
    // else if(obj instanceof ElementWrapper) {
    //   this.isElement = true
    // }

    this.obj = obj;
    this.config = config;
    this.states = [];   //  状态列表
    this.passedStates = []; //  过去了的状态
  }

  static get(obj:any, config:any) {
    if(config && config.override){
      Tween.kill(obj)
    }
    //  如果动画没开始, 开启动画
    return new Tween(obj, config);
  }

  /**
   *
   * 移除某对象的全部缓动
   *
   * @param obj, DOM Element, Element ID, ElementWrapper instance
   *
   */
  static kill(obj:any) {
    _tList.forEach(t => {
      if (t instanceof Tween) {
        if (t.obj == obj) {
          _unregisterTween(t)
        }
      }
    })
  }

  /**
   * 移除队列里的全部缓动
   */
  static killAll () {
    _tList.length = 0
  }

  /**
   *
   * 缓动到某种状态。当进入到当前状态的时候, 取这个状态的初始值
   * @param target
   * @param duration
   * @param ease, function from Ease.js
   *
   */
  to (target: any, duration: number, ease: Function){
    //  定义一个状态
    var state = {
      type: stateType.TO,
      ease: ease,
      duration: duration || 0,
      to: target
    };

    return _pushState(this, state)
  }

  append (target: any, duration: number, ease: Function) {
    var state = {
      type: stateType.APPEND,
      ease: ease,
      duration: duration || 0,
      to: target
    }

    return _pushState(this, state)
  }

  /**
   * 设置此 tween obj 的属性
   *
   * set 是立即的过程, 不会等到下一帧
   *
   * @param target
   */
  set (target: any) {
    var state = {
      type: stateType.SET,
      to: target
    }

    return _pushState(this, state)
  }

  /**
   *
   * 在当前状态等待多久
   *
   * @param duration
   */
  wait (duration: number) {
    var state = {
      type: stateType.WAIT,
      duration: duration
    }

    return _pushState(this, state)
  }

  /**
   *
   * 回调
   *
   * @param callback
   * @param scope
   * @param args 参数数组
   */
  call (callback: Function, scope:any, args: any) {
    var state = {
      type: stateType.CALL,
      callback: callback,
      scope: scope,
      args: args
    }

    this.states.push(state);
    _readState(this);
    _registerTween(this);
    return this;
  }
}