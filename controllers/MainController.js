import MenuView from '../views/MenuView.js'
import PageView from '../views/PageView.js'
import ProductsView from '../views/ProductsView.js'
import FormView from '../views/FormView.js'

import MenuModel from '../models/MenuModel.js'
import PageModel from '../models/PageModel.js'
import ProductsModel from '../models/ProductsModel.js'

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

  initProducts() {
    this.fetchProducts()
  },

  initForm() {
    FormView.setup(document.querySelector('#main #form'))
      .on('@submit', e => FormView.formValidate(e))
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

  fetchProducts(perpage) {
    ProductsModel.list(perpage ? perpage : {perpage: 1})
      .then(data => {
        ProductsView.render(data)
      })
  },

  watchHash() {
    window.addEventListener("hashchange", () => this.fetchPage(window.location.hash.substring(1)))
  },

  bindEvents(type){
    if(type === 'form') {
      this.initForm()
    }

    if(type === 'products') {
      this.initProducts()
    }
  }
}