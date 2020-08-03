import MenuView from '../views/MenuView.js'
import MenuModel from '../models/MenuModel.js'

export default {
  init() {
    MenuView.setup(document.querySelector('#navbar'))
    this.fetchMenus()
  },

  fetchMenus() {
    MenuModel.list().then(data => {
      MenuView.render(data)
    })
  }
}