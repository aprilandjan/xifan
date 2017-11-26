import DisplayObject from './DisplayObject'

export default class Bitmap extends DisplayObject {
  private _asset: any;

  constructor (asset: any) {
    super()

    this._asset = asset
  }

  public render (ctx: CanvasRenderingContext2D) {
    //
  }
}