import Controller from './Controller'
import $ from 'jquery'

let model = {
  data: {
    number: 0
  },
  get() {
    return $.get('/data.json').then((response) => {
      this.data = response
      return this.data
    })
  },
  increase() { // 向服务器发请求
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('500ms 过去了')
        this.data.number += 1
        resolve(this.data)
      }, 500)
    })
  },
  decrease() { // 向服务器发请求
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('500ms 过去了')
        this.data.number -= 1
        resolve(this.data)
      }, 500)
    })
  }
}

new Controller({
  element: '.module2',
  template: '#module2Template',
  model: model,
  events: {
    'click button[name=increase]': 'increase',
    'click button[name=decrease]': 'decrease',
  },
  init() {
    this.model.get().then(() => {
      this.render()
    })
  },
  increase() {
    this.model.increase().then(() => {
      this.render()
    })
  },
  decrease() {
    this.model.decrease().then(() => {
      this.render()
    })
  }
})