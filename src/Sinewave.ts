export default class Sinewave {
  public phaseDeg: number
  public phaseInc: number
  public amplitude: number

  //  output value
  public get value () {
    return this._value
  }
  private _value: number

  constructor (initPhase: number = 0, phaseInc: number = 0.1, amplitude: number = 1) {
    this.phaseDeg = initPhase
    this.phaseInc = phaseInc
    this.amplitude = amplitude

    this._value = this.amplitude * Math.sin(this.phaseDeg)
  }

  public update () {
    this.phaseDeg += this.phaseInc
    this._value = this.amplitude * Math.sin(this.phaseDeg)
  }

  public getOffsetValue (offsetPhaseDeg: number) {
    return this.amplitude * Math.sin(this.phaseDeg + offsetPhaseDeg)
  }
}