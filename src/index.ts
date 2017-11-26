import Stage from './core/display/Stage'
import Ticker from './core/ticker/Ticker'
import Segment from './Segment'
import Point from './core/utils/Point';

const stg:Stage = new Stage('root')
console.log(stg)

stg.x = 100
stg.y = 200
stg.rotation = 30

const seg1 = new Segment(200, 40)
stg.addChild(seg1)

// seg1.x = 300
// seg1.y = 100

const seg2 = new Segment(200, 40)
stg.addChild(seg2)

Ticker.register(() => {
  seg1.rotation += 1
  let pin1:Point = seg1.getPin()
  seg2.x = pin1.x
  seg2.y = pin1.y

  // seg2.rotation -= 1

  stg.update()
})