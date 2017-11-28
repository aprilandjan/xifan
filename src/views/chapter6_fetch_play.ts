import Chapter from "../components/Chapter";
import Segment from "../components/Segment";
import MouseEvent from "../core/events/MouseEvent";
import Maths from "../core/utils/Maths";
import Point from "../core/utils/Point";
import Slider from "../Slider";
import Controls from "../Controls";
import Sinewave from "../Sinewave";
import Ground from "../components/Ground";
import Ball from "../components/Ball";

export default class chapter6_fetch_play extends Chapter {
  
  //===============
  public numSegs: number = 5;
  public segments: Segment[] = []
  public ball: Ball;
  public ground:Ground;

  //  正弦震荡
  public sinewave: Sinewave;

  public gravity: number = 1
  public ease: number = -0.9

  public vx: number = 0
  public vy: number = 0

  //  碰到地面反弹
  public groundRebounce: Boolean = false

  constructor () {
    super()
  }

  protected init() {
    super.init()

    this.ground = new Ground()
    this.ground.y = this.stage.height / 2 - this.ground.height
    this.addChild(this.ground)

    for (let i: number = this.numSegs - 1; i >= 0; i--) {
      let seg: Segment = new Segment(80, 15)
      this.segments.push(seg)
      this.addChild(seg)
    }

    this.ball = new Ball(20)
    this.ball.vy = 10
    this.addChild(this.ball)
  }

  public fetch (seg: Segment, x: number, y: number): Point {
    let dx = x - seg.x
    let dy = y - seg.y
    let rad = Math.atan2(dy, dx)
    seg.rotation = Maths.radToDeg(rad)

    let pin = seg.getPin()
    let w = pin.x - seg.x
    let h = pin.y - seg.y

    return new Point(x - w, y - h)
  }

  public chain (mainSeg: Segment, subSeg: Segment) {
    let pin = mainSeg.getPin()
    subSeg.x = pin.x
    subSeg.y = pin.y
  }

  public moveBall () {
    this.ball.vy += this.gravity
    this.ball.x += this.ball.vx
    this.ball.y += this.ball.vy
    let w: number = this.stage.width
    let h: number = this.stage.height
    if (this.ball.x >= w / 2) {
      this.ball.x = w / 2
      this.ball.vx *= this.ease
    } else if (this.ball.x <= -w / 2) {
      this.ball.x = -w / 2
      this.ball.vx *= this.ease
    }

    if (this.ball.y <= -h / 2) {
      this.ball.y = -h / 2
      this.ball.vy *= this.ease
    } else if (this.ball.y >= this.ground.y) {
      this.ball.y = this.ground.y
      this.ball.vy *= this.ease
    }
  }

  public detectCollision () {
    let seg: Segment = this.segments[0]
    if (seg.getPin().distanceTo(new Point(this.ball.x, this.ball.y)) <= this.ball.radius) {
      this.ball.vx += 4 * Math.random() - 2
      this.ball.vy -= 2
    }
  }

  protected onTick () {
    this.moveBall()

    let target: Point = this.fetch(this.segments[0], this.ball.x, this.ball.y)
    for (let i = 1; i < this.numSegs; i++) {
      let seg = this.segments[i]
      target = this.fetch(seg, target.x, target.y)
    }

    for (let i = this.numSegs - 1; i > 0; i--) {
      let mainSeg = this.segments[i]
      let subSeg = this.segments[i - 1]
      this.chain(mainSeg, subSeg)
    }

    this.detectCollision()
  }
}