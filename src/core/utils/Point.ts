export default class Point {

  public static distance (p1: Point, p2: Point):number {
    return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2))
  }

  public x: number
  public y: number
  
  public constructor (x: number = 0, y: number = 0) {
    this.x = x
    this.y = y
  }

  public distanceTo (p: Point):number {
    return Point.distance(this, p)
  }

  public toString ():string {
    return `Point(x=${this.x}, y=${this.y}`
  }
}