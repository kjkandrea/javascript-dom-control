export default {
  data: {
    home : {
      pageTitle: 'Root Page'
    },
    contact: {
      pageTitle: 'Contact Page',
      pageContent: {
        form : [
          { title: 'your name', element: 'input', type: 'text' },
          { title: 'E-mail', element: 'input', type: 'email' },
          { title: 'comment', element: 'textarea', type: 'textarea' }
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