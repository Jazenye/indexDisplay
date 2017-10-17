import Controller from './Controller'
import $ from 'jquery'

new Controller({
  element: '.module1',
  template: `
    <input type="text" name="number1" value="{{output}}">
    <button name="button1">点我</button>
    <div class="output">{{output}}</div>
  `,
  data: {
    output: ''
  },
  events: {
    'change input': 'onChangeInput',
    'click button': 'onClickButton'
  },
  onClickButton: function (e) {
    let value = this.$element.find('input').val()
    this.data.output = value
    this.render()
  },
  onChangeInput: function (e) {
    let input = e.currentTarget
  },
})