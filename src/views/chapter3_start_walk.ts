import Chapter from "../components/Chapter";
import Segment from "../components/Segment";
import MouseEvent from "../core/events/MouseEvent";
import Maths from "../core/utils/Maths";
import Point from "../core/utils/Point";
import Slider from "../Slider";
import Controls from "../Controls";
import Sinewave from "../Sinewave";

export default class chapter3_start_walk extends Chapter {
  
  //===============
  public seg1: Segment;
  public seg2: Segment;

  public slider1: Slider;
  public slider2: Slider;

  //  正弦震荡
  public sinewave: Sinewave;

  public applyOffsetPhaseDeg: boolean = false

  constructor () {
    super('start walk')
  }

  protected init() {
    super.init()

    this.seg1 = new Segment();
    this.addChild(this.seg1);
    this.seg1.rotation = 90
    this.slider1 = Controls.getSlider('Seg1', 'rotation', 90, 45, 135).attach()

    this.seg2 = new Segment();
    this.addChild(this.seg2);
    this.slider2 = Controls.getSlider('Seg2', 'rotation', 0, -180, 180).attach()

    this.sinewave = new Sinewave();
  }

  protected switchScene (index: number) {
    switch (index) {
      case 1:
        this.applyOffsetPhaseDeg = true
        break
    }
  }

  protected onTick () {
    this.sinewave.update()

    this.seg1.rotation = this.slider1.value + 30 * this.sinewave.value
    let pin1: Point = this.seg1.getPin()
    this.seg2.x = pin1.x
    this.seg2.y = pin1.y

    if (!this.applyOffsetPhaseDeg) {
      this.seg2.rotation = this.slider2.value + this.seg1.rotation
    } else {
      this.seg2.rotation = this.slider2.value + this.slider1.value + 30 + 30 * this.sinewave.getOffsetValue(-45)
    }
  }
}