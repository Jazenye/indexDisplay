import Controller from './Controller'

new Controller({
  element: '.module3',
  events: {
    'change input': function (e) {
      console.log('change3')
    },
    'click button': function (e) {
      console.log('click3')
    }
  }
})