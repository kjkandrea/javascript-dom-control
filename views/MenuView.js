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
    html += `<li><a href="/${menu.hash}" data-hash="${menu.hash}">${menu.name}</a></li>`
  })
  html += '</ul>'

  return html
}

MenuView.bindEvents = function () {
  this.el.addEventListener('click', e =>{
    e.preventDefault()
    const target = e.target

    if(target.tagName === 'A') {
      this.emit('@click', { hash : target.dataset.hash })
    }
  })
}

export default MenuView