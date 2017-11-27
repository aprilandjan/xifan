import Container from "../core/display/Container";
import DisplayEvent from "../core/events/DisplayEvent";
import Segment from "./Segment";
import MouseEvent from "../core/events/MouseEvent";

export default class Chapter extends Container {

  public sceneIndex: number = 0;
  public sceneCount: number = 1;

  constructor () {
    super()

    this.addListener(DisplayEvent.ADD_TO_STAGE, this.onAdded, this)
    this.addListener(DisplayEvent.REMOVE_FROM_STAGE, this.onRemoved, this)
  }

  protected onAdded () {
    this.init()
  }

  protected onRemoved () {
    this.dispose()
  }

  protected init () {
    this.addListener(DisplayEvent.ENTER_FRAME, this.onTick, this)
    this.stage.addListener(MouseEvent.MOUSE_MOVE, this.onMouseMove, this)
  }

  protected dispose () {
    this.removeListener(DisplayEvent.ENTER_FRAME, this.onTick, this)
    this.stage.removeListener(MouseEvent.MOUSE_MOVE, this.onMouseMove, this)
  }

  public nextScene () {
    this.sceneIndex += 1
    console.log('next scene:', this.sceneIndex)
    this.switchScene(this.sceneIndex)
  }

  protected onMouseMove (e: MouseEvent) {
    // override by subclasses
  }

  protected onTick () {
    // override by subclasses
  }

  protected switchScene (index: number) {
    // override by subclasses
  }
}