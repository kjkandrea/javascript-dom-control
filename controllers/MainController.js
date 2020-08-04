import MenuView from '../views/MenuView.js'
import PageView from '../views/PageView.js'

import MenuModel from '../models/MenuModel.js'
import PageModel from '../models/PageModel.js'

export default {
  init() {
    MenuView.setup(document.querySelector('#navbar'))
      .on('@click', e => PageView.locationSetup(e.detail.hash))

    PageView.setup(document.querySelector('#main'))
      .on('@mounted', e => this.bindEvents(e.detail.type))

    this.fetchMenus()
    this.fetchPage(window.location.hash.substring(1))
    this.watchHash()
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
  },

  watchHash() {
    window.addEventListener("hashchange", () => this.fetchPage(window.location.hash.substring(1)))
  },

  bindEvents(type){
    console.log(type)
    if(type === 'default') {
      
    }

    if(type === 'form') {

    }
  }
}