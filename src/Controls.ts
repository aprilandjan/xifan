import EventDispatcher from "./core/events/EventDispatcher";
import Slider from "./Slider";

const rootEl:HTMLElement = document.querySelector('.controls')

export default class Controls {
  public static rootEl: HTMLElement = rootEl
  public static getSlider (label: string, key: string, value: number, min: number, max: number, step: number = 0.1) {
    return new Slider(label, key, value, min, max, step)
  }
  public static removeAll () {
    rootEl.innerHTML = ''
  }
}