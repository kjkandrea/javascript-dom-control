import { on, emit } from './Utils.js'

const FormView = {}

FormView.setup = function(el){
  this.el = el
  this.on = on
  this.emit = emit
  this.bindEvents()
  return this
}

FormView.bindEvents = function(){
  this.el.addEventListener('submit', (e => {
    e.preventDefault()
    this.emit('@submit', {e:e})
  }))
}

FormView.formValidate = function(e){
  const target = e.target.querySelectorAll("[data-rule=require]")

  target.forEach((el) => {
    if(el.type === 'text') {
      !!el.value.trim() ? true : console.log(el, 'false')
    }

    if(el.type === 'email') {
      !!el.value.trim() ? true : console.log(el, 'false')
    }
  })
}



export default FormView