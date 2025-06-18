// 业务流水账代码
// 封装
function Button(id) {
  this.element = document.querySelector(`#${id}`)
  this.bindEvent();
}

Button.prototype.bindEvent = function () {
  // this 丢失问题 // this -> Button
  // this.element.addEventListener('click', function() {
  //   // this => this element 改为箭头函数可以解决
  //   this.elemnt.style.backgroundColor = 'red';
  // }.bind(this))
  this.element.addEventListener('click', this.setBgColor.bind(this))

}

Button.prototype.setBgColor = function() {
  this.element.style.backgroundColor = '#1abc9c'
  // this.element2...
}