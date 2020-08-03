const MenuView = {}

MenuView.setup = function (el) {
  this.el = el
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

export default MenuView