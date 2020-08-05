export default {
  data: {
    home : {
      pageTitle: 'Root Page'
    },
    products: {
      pageTitle: 'Products',
      pageContent: {
        products: "products"
      }
    },
    contact: {
      pageTitle: 'Contact Page',
      pageContent: {
        form : [
          { title: 'your name', element: 'input', type: 'text', name: 'name', rule: 'require' },
          { title: 'E-mail', element: 'input', type: 'email', name: 'email', rule: 'require' },
          { title: 'comment', element: 'textarea', type: 'textarea', name: 'comment', rule: 'require'}
        ]
      }
    }
  },

  getPage(page) {
    return new Promise(res => {
      setTimeout(_ => {
        page ? res(this.data[page]) : res(this.data.home)
      }, 200)
    })
  }
}