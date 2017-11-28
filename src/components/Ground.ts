import DisplayObject from "../core/display/DisplayObject";

export default class Ground extends DisplayObject {
  readonly height: number = 50
  
  constructor () {
    super()
    this.height = 50
  }

  render (ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = '#6F4E37'
    let w: number = this.stage.width
    ctx.fillRect(-w / 2, 0, w, this.height)
    
    ctx.beginPath()
    ctx.moveTo(-w / 2, 0)
    ctx.lineTo(w /2, 0)
    ctx.closePath()
    ctx.stroke()

    let n:number = Math.ceil(w / 50) + 1
    for (let i = 0; i < n; i ++) {
      ctx.beginPath()
      ctx.moveTo((i + 1)* 50 - w / 2, 0)
      ctx.lineTo(i * 50 - w / 2, this.height)
      ctx.closePath()
      ctx.stroke()
    }
  }
}