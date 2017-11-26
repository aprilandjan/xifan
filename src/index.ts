import DisplayObject from './core/display/DisplayObject'
// import * as Tween from 'tiny-tween'
// console.log(Tween)

const obj = new DisplayObject()
console.log(obj)

obj.addListener('abc', (a: number, b: number) => {
  console.log('receive:', a, b)
})

obj.dispatch('abc', 1, 2)