import EventDispatcher from "./EventDispatcher";

export default class Event {
  protected _type: string;
  public get type () {
    return this._type
  }

  protected _target: EventDispatcher;
  public get target () {
    return this._target
  }

  protected _data: any;
  public get data () {
    return this._data
  }

  constructor (type: string, target: EventDispatcher, ...data:any[]) {
    this._type = type
    this._target = target
    this._data = data
  }
}