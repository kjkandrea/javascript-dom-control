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
      !!el.value.trim() ? 
      this.displayInputStatus(true, el) : this.displayInputStatus(false, el, "this field is required")
    }

    if(el.type === 'email') {
      !!/.+@.+/.test(el.value.trim()) ?
      this.displayInputStatus(true, el) : this.displayInputStatus(false, el, "email is required")
    }
  })
}

FormView.displayInputStatus = function(valid, el, message) {
  let control = el.closest(".form-control")
  let errorHTML = `<p class="error-message">${message}</p>`

  if (valid) {
    el.classList.remove("error")
    if(control.querySelector('.error-message')) {
      control.querySelector('.error-message').remove()
    }
  }

  else {
    el.classList.add("error")
    if (!control.querySelector('.error-message')) {
      control.insertAdjacentHTML('beforeend', errorHTML)
    }
  }
}



export default FormView