//  总的每帧事件

var _raf:number = null
var _cbList:any[] = []
var _lastTickTime: number
var _isPaused: Boolean = false
var _id:number = 0
var _fpsInterval: number = 1000 / 60

//  总的帧事件
function tick ():void {
  _raf = window.requestAnimationFrame(tick)
  var now = Date.now()
  //  tick duration
  var delta = now - _lastTickTime
  if (delta >= _fpsInterval) {
    _lastTickTime = now
    //  if paused, do not call tween tick
    if (!_isPaused) {
      _cbList.forEach((item, index) => {
        item[0].call(item[1])
      })
    }
  }

  if (!(_cbList.length)) {
    window.cancelAnimationFrame(_raf)
    _raf = null
  }
}

export default class Ticker {
  public static setFPS (fps: number) {
    _fpsInterval = Math.floor(1000 / fps)
  }

  public static register (a: Function, b: any = null):void {
    for (var i = 0; i < _cbList.length; i++) {
      var item = _cbList[i]
      if (item instanceof Array && item[0] === a && item[1] === b) {
        return
      }
    }
    _cbList.push([a, b])

    //  start raf
    if(!_raf){
      _lastTickTime = Date.now()
      _raf = window.requestAnimationFrame(tick)
    }
  }

  public static unregister (a: Function, b: any = null):void {
    for (var i = 0; i < _cbList.length; i++) {
      var item = _cbList[i]
      if (item instanceof Array && item[0] === a && item[1] === b) {
        _cbList.splice(i, 1)
        return
      }
    }
  }
}