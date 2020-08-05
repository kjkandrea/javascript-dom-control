export default {
  data : [
    {id: 1, name: 'home', hash: 'home'},
    {id: 2, name: 'products', hash: 'products'},
    {id: 3, name: 'contact', hash: 'contact'}
  ],

  list () {
    return new Promise(res => {
      setTimeout(_ => {
        res(this.data)
      }, 200)
    })
  }
}