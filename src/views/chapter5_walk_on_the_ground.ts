import Chapter from "../components/Chapter";
import Segment from "../components/Segment";
import MouseEvent from "../core/events/MouseEvent";
import Maths from "../core/utils/Maths";
import Point from "../core/utils/Point";
import Slider from "../Slider";
import Controls from "../Controls";
import Sinewave from "../Sinewave";
import Ground from "../components/Ground";

export default class chapter5_walk_on_the_ground extends Chapter {
  
  //===============
  public seg1: Segment;
  public seg2: Segment;

  public seg3: Segment;
  public seg4: Segment;

  public sliderSineInc: Slider;
  public sliderMainSegRange: Slider;
  public sliderMainSegInit: Slider;
  public sliderSubSegRange: Slider;
  public sliderGravity: Slider;

  public ground:Ground;

  //  正弦震荡
  public sinewave: Sinewave;
  
  public walkPhaseOffset: number = -90;
  public legsPhaseOffset: number = -180;

  public vx: number = 0
  public vy: number = 0

  //  碰到地面反弹
  public groundRebounce: Boolean = false

  constructor () {
    super('walk on the ground')
  }

  protected init() {
    super.init()
    
    this.ground = new Ground()
    this.ground.y = this.stage.height / 2 - this.ground.height
    this.addChild(this.ground)

    this.seg1 = new Segment(100, 30);
    this.addChild(this.seg1);
    this.seg1.rotation = 90

    this.seg2 = new Segment(100, 20);
    this.addChild(this.seg2);

    this.seg3 = new Segment(100, 30);
    this.addChild(this.seg3);
    this.seg3.rotation = 90

    this.seg4 = new Segment(100, 20);
    this.addChild(this.seg4);

    this.sliderSineInc = Controls.getSlider('Sinewave Phase Inc', 'phaseInc', 0.12, 0, 0.3, 0.01).attach()
    this.sliderMainSegRange = Controls.getSlider('Main Seg Rotate Range', 'rotate', 45, 0, 90).attach()
    this.sliderMainSegInit = Controls.getSlider('Main Seg Init Rotate', 'rotate', 90, 0, 180).attach()
    this.sliderSubSegRange = Controls.getSlider('Sub Seg Rotate Range', 'rotate', 45, 0, 90).attach()
    this.sliderGravity = Controls.getSlider('Gravity', 'gravity', 0.36, 0, 1, 0.01).attach()

    this.sinewave = new Sinewave()
  }

  protected switchScene (index: number) {
    switch (index) {
      case 1:
        this.groundRebounce = true
        break
    }
  }

  private applyGravity () {
    this.vy += this.sliderGravity.value
    this.seg1.x += this.vx
    this.seg1.y += this.vy
    this.seg3.x += this.vx
    this.seg3.y += this.vy
  }

  private detectGround (subSeg: Segment) {
    let max: number = this.ground.y
    let bottom: number = subSeg.getPin().y
    if (bottom > max) {
      var offset = bottom - max
      this.seg1.y -= offset
      this.seg2.y -= offset
      this.seg3.y -= offset
      this.seg4.y -= offset

      let ease: number = 1

      if (this.groundRebounce) {
        this.vx -= subSeg.vx * ease
        this.vy -= subSeg.vy * ease
      } else {
        this.vx = 0
        this.vy = 0
      }
    }
  }

  private detectWall () {
    let x:number = this.seg1.x
    let w: number = this.stage.width + 200
    let offset: number = 0
    if (x > w / 2) {
      offset = -w
    } else if (w < - w / 2) {
      offset = w
    }
    this.seg1.x += offset
    this.seg2.x += offset
    this.seg3.x += offset
    this.seg4.x += offset
  }

  private walk(mainSeg: Segment, attachSeg: Segment, phaseOffset: number = 0) {
    let footBefore: Point = attachSeg.getPin()
    mainSeg.rotation = this.sliderMainSegInit.value + this.sliderMainSegRange.value * this.sinewave.getOffsetValue(phaseOffset)
    let pin: Point = mainSeg.getPin()
    attachSeg.x = pin.x
    attachSeg.y = pin.y
    attachSeg.rotation = mainSeg.rotation +  this.sliderSubSegRange.value + this.sliderSubSegRange.value * this.sinewave.getOffsetValue(phaseOffset + this.walkPhaseOffset)
    let footAfter: Point = attachSeg.getPin()
    attachSeg.vx = footAfter.x - footBefore.x
    attachSeg.vy = footAfter.y - footBefore.y
  }

  protected onTick () {
    this.sinewave.phaseInc = this.sliderSineInc.value
    this.sinewave.update()

    this.applyGravity()

    this.walk(this.seg1, this.seg2, 0)
    this.walk(this.seg3, this.seg4, this.legsPhaseOffset)

    this.detectGround(this.seg2)
    this.detectGround(this.seg4)

    this.detectWall()
  }
}