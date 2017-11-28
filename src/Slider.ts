import Controls from './Controls'
import EventDispatcher from './core/events/EventDispatcher'

function createElement (text: string):HTMLElement {
  let div = document.createElement('div')
  div.innerHTML = text
  return div.firstElementChild as HTMLElement
}

let id = 0

export default class Slider extends EventDispatcher {
  
    public id: number
    public label: string
    public key: string
    public min: number
    public max: number
  
    public el: HTMLElement
    public input: HTMLInputElement
  
    public get value () {
      return +this.input.value
    }
  
    public callback: Function;
    public scope: any;
  
    constructor (label: string, key: string, initValue: number, min: number, max: number, step: number = 0.1) {
      super()
  
      this.id = ++id
      this.label = label
      this.key = key
      this.min = min
      this.max = max
      
      this.init(initValue, step)
    }
  
    public init (initValue: number, step: number) {
      let str = `
      <div id="slider${this.id}" class="segment">
        <h3>${this.label} <small></small></h3>
        <label>${this.key}<input type="range" min="${this.min}" max="${this.max}" step="${step}"></label>
        <span>${initValue}</span>
      </div>
      `
      this.el = createElement(str)
      this.input= this.el.querySelector('input')
      this.input.value = initValue + ''
      let span:any = this.el.querySelector('span')
      this.input.addEventListener('input', (e:any) => {
        span.innerText = this.input.value
        if (this.callback) {
          this.callback.call(this.scope, +this.input.value)
        }
      })
    }
  
    public attach (callback: Function = null, scope: any = null) {
      Controls.rootEl.appendChild(this.el)
      this.callback = callback
      this.scope = null
      return this
    }
  
    public detach () {
      Controls.rootEl.removeChild(this.el)
      return this
    }
  }