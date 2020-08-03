import { emit, on } from './Utils.js'

const MenuView = {}

MenuView.setup = function (el) {
  this.el = el
  this.emit = emit
  this.on = on
  this.bindEvents()
  return this
}

MenuView.render = function (data) {
  this.el.innerHTML = this.generateHtml(data)
}

MenuView.generateHtml = function (menus) {
  let html = '';

  html += '<ul>'
  menus.forEach(menu => {
    html += `<li><a href="" data-href="${menu.href}">${menu.name}</a></li>`
  })
  html += '</ul>'

  return html
}

MenuView.bindEvents = function () {
  this.el.addEventListener('click', e =>{
    e.preventDefault()
    const target = e.target

    if(target.tagName === 'A') {
      this.emit('@click', { href : target.dataset.href })
    }
  })
}

export default MenuView