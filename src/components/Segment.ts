import DisplayObject from '../core/display/DisplayObject'
import Point from '../core/utils/Point'
import Maths from '../core/utils/Maths'

export default class Segment extends DisplayObject {

  private _width: number;
  private _height: number;
  private _color: any;

  public vx: number = 0
  public vy: number = 0

  constructor (width: number = 200, height: number = 40, color: any = 'rgba(200, 200, 200, 0.9)') {
    super()

    this._width = width
    this._height = height
    this._color = color
  }

  render (ctx: CanvasRenderingContext2D) {
    //  BG
    let radius = this._height / 2
    let halfPI = Math.PI / 2
    ctx.fillStyle = this._color
    ctx.beginPath()
    ctx.moveTo(0, -radius)
    ctx.lineTo(this._width, -radius)
    ctx.arc(this._width, 0, radius, -halfPI, halfPI)
    ctx.lineTo(0, radius)
    ctx.arc(0, 0, radius, halfPI, 3 * halfPI)
    ctx.closePath()
    ctx.fill()
    ctx.stroke()

    //  2个PIN点
    let crossR = radius * 0.3

    ctx.moveTo(-crossR, 0)
    ctx.lineTo(crossR, 0)

    ctx.moveTo(0, -crossR)
    ctx.lineTo(0, crossR)

    ctx.moveTo(this._width - crossR, 0)
    ctx.lineTo(this._width + crossR, 0)

    ctx.moveTo(this._width, -crossR)
    ctx.lineTo(this._width, crossR)

    ctx.stroke()
  }

  public getPin (): Point {
    let x = this.x + this._width * Math.cos(Maths.degToRad(this.rotation))
    let y = this.y + this._width * Math.sin(Maths.degToRad(this.rotation))
    return new Point(x, y)
  }
}