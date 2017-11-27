import EventDispatcher from '../events/EventDispatcher'
import DisplayEvent from '../events/DisplayEvent'
import Container from './Container';
import Maths from '../utils/Maths'
import Stage from './Stage';

export default class DisplayObject extends EventDispatcher {
  constructor () {
    super()
  }

  protected _x: number = 0;

  protected _y: number = 0;

  protected _rotation: number = 0;

  public get x (): number {
    return this._x;
  }

  public set x (val: number) {
    this._x = val;
  }

  public get y (): number {
    return this._y;
  }

  public set y (val: number) {
    this._y = val;
  }

  public get rotation (): number {
    return this._rotation;
  }

  public set rotation (val: number) {
    this._rotation = val;
  }

  //===
  protected _parent: Container;
  public get parent (): Container {
    return this._parent
  }

  public set parent (val: Container) {
    this._parent = val
    let parents: Container[] = this._getParents()
    let rootParent = parents[0]
    let onStage: Boolean
    if (rootParent instanceof Stage) {
      onStage = true
      this._stage = rootParent
    }
    if (onStage !== this._onStage) {
      if (onStage) {
        this.dispatch(new DisplayEvent(DisplayEvent.ADD_TO_STAGE, this))
      } else {
        this.dispatch(new DisplayEvent(DisplayEvent.REMOVE_FROM_STAGE, this))
      }
    }
    if (!onStage) {
      this._stage = undefined
    }
    this._onStage = onStage
  }

  //  whether the display object is on the stage and needed to be rendered
  private _onStage: Boolean = false

  private _stage: Stage;
  public get stage () {
    return this._stage
  }

  private _getParents ():Container[] {
    let parents: Container[] = []
    let p = this._parent
    while (p) {
      parents.unshift(p)
      p = p.parent
    }
    return parents
  }

  //  called internally
  public enterFrame (ctx: CanvasRenderingContext2D):void {
    this.dispatch(new DisplayEvent(DisplayEvent.ENTER_FRAME, this))
    let parents: Container[] = this._getParents()
    ctx.setTransform(1, 0, 0, 1, 0, 0)
    ctx.restore()
    parents.forEach(container => {
      ctx.translate(container.x, container.y)
      ctx.rotate(Maths.degToRad(container.rotation))
    })

    ctx.translate(this._x, this._y)
    ctx.rotate(Maths.degToRad(this._rotation))

    this.render(ctx)
  }

  public render (ctx: CanvasRenderingContext2D) {
    // Todo: implied by subclasses
  }
} 