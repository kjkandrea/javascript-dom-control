import MenuModel from './models/MenuModel.js'

document.addEventListener('DOMContentLoaded', () => {
  (function navbarController(){
    const navbar = document.querySelector('#navbar')

    function fetchMenus(){
      MenuModel.list().then(data => {
        renderMenus(data)
      })
    }fetchMenus()

    function renderMenus(menus){
      let html = '';
      menus.forEach(menu => {
        html += `<li><a href="" data-href="${menu.href}">${menu.name}</a></li>`
      })

      navbar.innerHTML = html
    }
  }())
})