import EventDispatcher from '../events/EventDispatcher'
import DisplayEvent from '../events/DisplayEvent'
import Container from './Container'

export default class Stage extends Container {

  private _rootEl: HTMLCanvasElement;
  private _width: number;
  public get width () {
    return this._width
  }

  private _height: number;
  public get height () {
    return this._height
  }

  private _ctx: CanvasRenderingContext2D;

  constructor (rootId: string) {
    super()

    let rootEl: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById(rootId)
    if (!rootEl) {
      throw new Error(`Root Element with id=${rootId} not found!`)
    }

    this._rootEl = rootEl

    this._initEvents()
    this._initContexts()
  }

  private _initContexts ():void {
    if (this._rootEl instanceof HTMLCanvasElement) {
      this._ctx = (<HTMLCanvasElement>this._rootEl).getContext('2d')
    }
    //  save default ctx state
    this._ctx.setTransform(1, 0, 0, 1, 0, 0)
    this._ctx.save()
  }

  private _initEvents ():void {
    this.resize()
    window.addEventListener('resize', () => {
      this.resize(true)
    })

    window.addEventListener('mousemove', (e:MouseEvent) => {
      
    })
  }

  public resize (sendEvent: boolean = false):void {
    let rect = this._rootEl.getBoundingClientRect()
    this._rootEl.width = this._width = rect.width
    this._rootEl.height = this._height = rect.height
    this.dispatch(new DisplayEvent(DisplayEvent.STAGE_RESIZE, this))
  }

  public update ():void {
    this._ctx.restore()
    this._ctx.setTransform(1, 0, 0, 1, 0, 0)
    this._ctx.clearRect(0, 0, this._width, this._height)
    this.enterFrame(this._ctx)
  }
}