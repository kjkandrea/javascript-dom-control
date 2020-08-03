export default {
  data : [
    {id: 1, name: 'menu 1', href: 'menu-1'},
    {id: 2, name: 'menu 2', href: 'menu-2'}
  ],

  list () {
    return new Promise(res => {
      setTimeout(_ => {
        res(this.data)
      }, 200)
    })
  }
}