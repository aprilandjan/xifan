import Chapter from "../components/Chapter";
import Segment from "../components/Segment";
import MouseEvent from "../core/events/MouseEvent";
import Maths from "../core/utils/Maths";
import Point from "../core/utils/Point";
import Slider from "../Slider";
import Controls from "../Controls";
import Sinewave from "../Sinewave";

export default class chapter4_walk_with_2_legs extends Chapter {
  
  //===============
  public seg1: Segment;
  public seg2: Segment;

  public seg3: Segment;
  public seg4: Segment;

  public sliderSineInc: Slider;
  public sliderMainSegRange: Slider;
  public sliderMainSegInit: Slider;
  public sliderSubSegRange: Slider;

  //  正弦震荡
  public sinewave: Sinewave;
  
  public walkPhaseOffset: number = -90;

  constructor () {
    super()
  }

  protected init() {
    super.init()

    this.seg1 = new Segment(200, 40);
    this.addChild(this.seg1);
    this.seg1.rotation = 90

    this.seg2 = new Segment(200, 30);
    this.addChild(this.seg2);

    this.seg3 = new Segment(200, 40);
    this.addChild(this.seg3);
    this.seg3.rotation = 90

    this.seg4 = new Segment(200, 30);
    this.addChild(this.seg4);

    this.sliderSineInc = Controls.getSlider('Sinewave Phase Inc', 'phaseInc', 0.05, 0, 0.3).attach()
    this.sliderSineInc.input.step = '0.01'
    this.sliderMainSegRange = Controls.getSlider('Main Seg Rotate Range', 'rotate', 45, 0, 90).attach()
    this.sliderMainSegInit = Controls.getSlider('Main Seg Init Rotate', 'rotate', 90, 0, 180).attach()
    this.sliderSubSegRange = Controls.getSlider('Sub Seg Rotate Range', 'rotate', 45, 0, 90).attach()

    this.sinewave = new Sinewave()
  }

  protected switchScene (index: number) {
    switch (index) {
      case 1:
        break
    }
  }

  private walk(mainSeg: Segment, attachSeg: Segment, phaseOffset: number = 0) {
    mainSeg.rotation = this.sliderMainSegInit.value + this.sliderMainSegRange.value * this.sinewave.getOffsetValue(phaseOffset)
    let pin: Point = mainSeg.getPin()
    attachSeg.x = pin.x
    attachSeg.y = pin.y
    attachSeg.rotation = mainSeg.rotation +  this.sliderSubSegRange.value + this.sliderSubSegRange.value * this.sinewave.getOffsetValue(phaseOffset + this.walkPhaseOffset)
  }

  protected onTick () {
    this.sinewave.phaseInc = this.sliderSineInc.value
    this.sinewave.update()

    this.walk(this.seg1, this.seg2, 0)
    this.walk(this.seg3, this.seg4, -180)
  }
}