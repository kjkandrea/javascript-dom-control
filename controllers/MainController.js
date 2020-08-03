import MenuView from '../views/MenuView.js'
import PageView from '../views/PageView.js'

import MenuModel from '../models/MenuModel.js'
import PageModel from '../models/PageModel.js'

export default {
  init() {
    MenuView.setup(document.querySelector('#navbar'))
      .on('@click', e => this.fetchPage(e.detail.hash))

    PageView.setup(document.querySelector('#main'))
      .on('@fetch', e => this.fetchPage(e.detail.hash))

    this.fetchMenus()
    this.fetchPage(window.location.hash.substring(1))
    window.addEventListener("hashchange", () => this.fetchPage(window.location.hash.substring(1)))
  },

  fetchMenus() {
    MenuModel.list().then(data => {
      MenuView.render(data)
    })
  },

  fetchPage(hash) {
    PageModel.getPage(hash)
      .then(data => {
        PageView.render(data, hash)
      })
      .catch(e => console.log(e))
  }
}