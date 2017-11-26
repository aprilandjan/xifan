/**
 * 事件原型
 */
export default class EventDispatcher {
  
  //  已有的事件列表
  private _listeners: any[] = []
  
  constructor () {
    
  }

  /**
   * 查找是否有注册过的相同事件
   * @param eventName 
   * @param callback 
   * @param scope 
   */
  private _findListener (eventName: string, callback: Function, scope: any = null):void {
    for (let i = 0; i < this._listeners.length; i++) {
      let listener = this._listeners[i]
      if (listener.type === eventName && 
        listener.callback === callback && 
        listener.scope === callback) {
          return listener
        }
    }
  }

  /**
   * 派发事件
   * @param eventName 
   * @param data
   */
  public dispatch (eventName: string, ...data: any[]):void {
    for (let i = 0; i < this._listeners.length; i++) {
      let listener = this._listeners[i]
      if (listener.type === eventName) {
          listener.callback.apply(listener.scope, data)
        }
    }
  }

  /**
   * 添加某一个事件侦听
   * @param eventName 
   * @param callback 
   * @param scope 
   */
  public addListener (eventName: string, callback: Function, scope: any = null):void {
    let existedListener = this._findListener(eventName, callback, scope)
    if (!existedListener) {
      this._listeners.push({
        type: eventName,
        callback,
        scope
      })
    }
  }

  /**
   * 移除某一个事件侦听
   * @param eventName 
   * @param callback 
   * @param scope 
   */
  public removeListener (eventName: string, callback: Function, scope: any = null):void {
    let existedListener = this._findListener(eventName, callback, scope)
    if (existedListener) {
      this._listeners.splice(this._listeners.indexOf(existedListener), 1)
    }
  }

  /**
   * 移除所有的事件侦听
   */
  public removeAllListeners () {
    this._listeners.splice(0)
  }
}