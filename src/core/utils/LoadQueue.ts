import EventDispatcher from '../events/EventDispatcher'
import UtilsEvent from '../events/UtilsEvent'

/**
 * 加载序列
 */
export default class LoadQueue extends EventDispatcher {
  private _currentIndex: number = 0;
  private _list: string[] = [];
  private _loading: Boolean;
  
  constructor (assetsList: string[]) {
    super()

    this._list = assetsList
  }

  public start ():void {
    if (this._loading) {
      return
    }
    this._loading = true
    this._loadAsset(this._list[this._currentIndex])
  }

  private _loadAsset (src: string):void {
    var img:HTMLImageElement = new Image()
    img.onload = () => {
      this._currentIndex ++
      this.dispatchWith(UtilsEvent.LOAD_QUEUE_PROGRESS,  this._currentIndex, this._list.length, img)
      if (this._currentIndex >= this._list.length) {
        this.dispatchWith(UtilsEvent.LOAD_QUEUE_COMPLETE)
      }
    }
    img.onerror = (e: any) => {
      this.dispatchWith(UtilsEvent.LOAD_QUEUE_ERROR, e, src)
      this.dispatchWith(UtilsEvent.LOAD_QUEUE_PROGRESS,  this._currentIndex, this._list.length, img)
      if (this._currentIndex >= this._list.length) {
        this.dispatchWith(UtilsEvent.LOAD_QUEUE_COMPLETE)
      }
    }
    img.src = src
  }
}