import Event from "./Event";
import EventDispatcher from "./EventDispatcher";

export default class DisplayEvent extends Event {
  public static STAGE_RESIZE: string = 'stage_resize'
  public static ENTER_FRAME: string = 'enter_frame'
  public static ADD_TO_STAGE: string = 'add_to_stage'
  public static REMOVE_FROM_STAGE: string = 'remove_from_stage'

  constructor (type: string, target: EventDispatcher) {
    super(type, target)
  } 
}