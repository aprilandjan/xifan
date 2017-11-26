export default class Maths {
  public static radToDeg (rad: number) {
    return rad * 180 / Math.PI
  }

  public static degToRad (deg: number) {
    return deg * Math.PI / 180
  }
}