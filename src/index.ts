import Stage from './core/display/Stage'
import Container from './core/display/Container'
import Ticker from './core/ticker/Ticker'
import Segment from './Segment'
import Point from './core/utils/Point';

const stage:Stage = new Stage('root')
console.log(stage)

const main: Container = new Container()
main.x = stage.width / 2
main.y = stage.height / 2
stage.addChild(main)

const seg1 = new Segment(200, 40)
main.addChild(seg1)

const seg2 = new Segment(200, 40)
main.addChild(seg2)

Ticker.register(() => {
  seg1.rotation += 1
  let pin1:Point = seg1.getPin()
  seg2.x = pin1.x
  seg2.y = pin1.y

  seg2.rotation -= 0.5

  stage.update()
})