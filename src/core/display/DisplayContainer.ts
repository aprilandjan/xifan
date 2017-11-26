import DisplayObject from './DisplayObject'

export default class DisplayContainer extends DisplayObject {

  protected _children: DisplayObject[] = []

  protected _parent: DisplayContainer;

  constructor () {
    super()
  }

  getChildIndex (child: DisplayObject): number {
    return this._children.indexOf(child)
  }

  addChild (child: DisplayObject) {
    let childIndex = this.getChildIndex(child)
    if (childIndex >= 0) {
      this._children.splice(childIndex, 1)
      this._children.push(child)
    } else {
      this._children.push(child)
    }
  }

  removeChild (child: DisplayObject) {
    let childIndex = this.getChildIndex(child)
    if (childIndex >= 0) {
      this._children.splice(childIndex, 1)
    }
  }
}