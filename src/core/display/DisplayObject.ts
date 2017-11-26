import EventDispatcher from '../events/EventDispatcher'
import DisplayContainer from './DisplayContainer';

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
  protected _parent: DisplayContainer;
  public get parent (): DisplayContainer {
    return this._parent
  }

  protected render ():void {
    // Todo: implied by subclasses
  }
} 