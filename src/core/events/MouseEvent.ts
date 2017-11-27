import Event from "./Event";
import EventDispatcher from "./EventDispatcher";

export default class MouseEvent extends Event {
  public static MOUSE_MOVE: string = 'mouse_move';

  readonly stageX: number;
  readonly stageY: number;

  constructor (type: string, target: EventDispatcher, stageX: number, stageY: number) {
    super(type, target)

    this.stageX = stageX;
    this.stageY = stageY;
  }
}