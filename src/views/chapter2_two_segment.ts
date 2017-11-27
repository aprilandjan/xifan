import Chapter from "../components/Chapter";
import Segment from "../components/Segment";
import MouseEvent from "../core/events/MouseEvent";
import Maths from "../core/utils/Maths";
import Point from "../core/utils/Point";

export default class chapter2_two_segment extends Chapter {
  
  //===============
  public seg1: Segment;
  public seg2: Segment;

  public seg2FollowSeg1: Boolean = false

  constructor () {
    super()
  }

  protected init() {
    super.init()

    this.seg1 = new Segment();
    this.addChild(this.seg1);

    this.seg2 = new Segment();
    this.seg2.rotation = 30
    this.addChild(this.seg2);
  }

  protected switchScene (index: number) {
    switch (index) {
      case 1:
        this.seg2FollowSeg1 = true
        break
    }
  }

  protected onMouseMove (e: MouseEvent) {
    var localX: number = e.stageX - this.stage.width / 2
    var localY: number = e.stageY - this.stage.height / 2

    var rad: number = Math.atan2(localY - this.seg1.y, localX - this.seg1.x)
    this.seg1.rotation = Maths.radToDeg(rad)
  }

  protected onTick () {
    let pin1: Point = this.seg1.getPin()
    this.seg2.x = pin1.x
    this.seg2.y = pin1.y

    if (this.seg2FollowSeg1) {
      this.seg2.rotation = 30 + this.seg1.rotation
    }
  }
}