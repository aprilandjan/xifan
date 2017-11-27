import Stage from './core/display/Stage'
import Container from './core/display/Container'
import Ticker from './core/ticker/Ticker'
import Point from './core/utils/Point';
import DisplayEvent from './core/events/DisplayEvent';
import chapter1_one_segment from './views/chapter1_one_segment';
import Chapter from './components/Chapter';
import chapter2_two_segment from './views/chapter2_two_segment';

const stage:Stage = new Stage('root')

const main: Container = new Container()
main.x = stage.width / 2
main.y = stage.height / 2
stage.addChild(main)

Ticker.register(() => {
  stage.update()
})

const chapterMap: any = {
  1: chapter1_one_segment,
  2: chapter2_two_segment
}

let current: any = {
  index: 0,
  chapter: null
}

function navigateToChapter (index: number) {
  let chapterClass: any = chapterMap[index]
  if (chapterClass) {
    if (current.chapter) {
      main.removeChild(current.chapter)
    }
    let chapter: Chapter = new chapterClass() as Chapter
    main.addChild(chapter)
    current.chapter = chapter
    current.index = index
    console.log(index, chapter)
  } else {
    alert(`已经是${index < 0 ? '第一页' : '最后一页'}了`)
  }
}

navigateToChapter(2)

// up=38, down=40, space=32
window.addEventListener('keydown', (e: KeyboardEvent) => {
  console.log(e.keyCode)
  switch (e.keyCode) {
    case 38:
      navigateToChapter(current.index - 1)
      break
    case 40:
      navigateToChapter(current.index + 1)
      break
    case 32:
      if (current.chapter) {
        current.chapter.nextScene()
      }
      break
  }
})