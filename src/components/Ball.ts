import DisplayObject from "../core/display/DisplayObject";

export default class Ball extends DisplayObject {

  readonly radius: number;
  readonly color: any;
  public vx: number = 0
  public vy: number = 0

  constructor (radius: number = 50, color: any = 'rgba(200, 200, 200, 0.9)') {
    super()

    this.radius = radius;
    this.color = color;
  }

  public render (ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.color
    ctx.beginPath()
    ctx.arc(0, 0, this.radius, 0, Math.PI * 2)
    ctx.closePath()
    ctx.fill()
    ctx.stroke()
  }
}