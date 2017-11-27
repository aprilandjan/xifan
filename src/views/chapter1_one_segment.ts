import Chapter from "../components/Chapter";
import Segment from "../components/Segment";
import MouseEvent from "../core/events/MouseEvent";
import Maths from "../core/utils/Maths";

export default class chapter1_one_segment extends Chapter {
  
  //===============
  public seg: Segment

  constructor () {
    super()
  }

  protected init() {
    super.init()

    this.seg = new Segment()
    this.addChild(this.seg)
  }

  protected onMouseMove (e: MouseEvent) {
    var localX: number = e.stageX - this.stage.width / 2
    var localY: number = e.stageY - this.stage.height / 2

    var rad: number = Math.atan2(localY - this.seg.y, localX - this.seg.x)
    this.seg.rotation = Maths.radToDeg(rad)
  }
}