import DisplayObject from './DisplayObject'
import Stage from './Stage'

export default class Container extends DisplayObject {

  protected _children: DisplayObject[] = []

  protected _parent: Container;

  constructor () {
    super()
  }

  public getChildIndex (child: DisplayObject): number {
    return this._children.indexOf(child)
  }

  public addChild (child: DisplayObject) {
    let childIndex = this.getChildIndex(child)
    if (childIndex >= 0) {
      this._children.splice(childIndex, 1)
      this._children.push(child)
    } else {
      this._children.push(child)
    }

    child.parent = this
  }

  public removeChild (child: DisplayObject) {
    let childIndex = this.getChildIndex(child)
    if (childIndex >= 0) {
      this._children.splice(childIndex, 1)
      child.parent = null
    }
  }

  public enterFrame (ctx: CanvasRenderingContext2D) {
    this._children.forEach(child => {
      child.enterFrame(ctx)
    })
  }
}