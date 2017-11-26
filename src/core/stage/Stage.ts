import EventDispatcher from '../events/EventDispatcher'
import DisplayEvent from '../events/DisplayEvent'

export default class Stage extends EventDispatcher {

  private _rootEl: HTMLElement;
  private _width: number;
  private _height: number;

  constructor (rootId: string) {
    super()

    let rootEl = document.getElementById(rootId)
    if (!rootEl) {
      throw new Error(`Root Element with id=${rootId} not found!`)
    }

    this._rootEl = rootEl

    this.resize()
    window.addEventListener('resize', () => {
      this.resize(true)
    })
  }

  public resize (sendEvent: boolean = false) {
    let rect = this._rootEl.getBoundingClientRect()
    this._width = rect.width
    this._height = rect.height
    this.dispatch(DisplayEvent.STAGE_RESIZE)
  }

  /**
   * 总的渲染事件，再这里执行一帧
   */
  public render () {

  }
}