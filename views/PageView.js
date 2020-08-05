import { emit, on } from './Utils.js'

const PageView = {}
PageView.pageType = ""

PageView.setup = function (el) {
  this.el = el
  this.emit = emit
  this.on = on
  return this
},

PageView.initState = function () {
  this.pageType = ""
}

PageView.render = function (data, hash) {
  this.initState()
  this.locationSetup(hash)
  this.el.innerHTML = this.generateHtml(data)
  this.pageType === "form" ? this.emit('@mounted', {type: 'form'}) : this.emit('@mounted', {type: 'default'})
},

PageView.locationSetup = function (hash) {
  if(hash) window.location.hash = hash
},

PageView.generateHtml = function (data) {
  let html = '';

  html += `<h2>${data.pageTitle}</h2>`
  if (data.pageContent) {
    const content = data.pageContent
    if (content.form) html += this.generateForm(content.form)
    if (content.products) this.emit('@mounted', {type: 'products'})

  }

  return html
}

PageView.generateForm = function (data) {
  this.pageType = "form"
  let html = '';

  html += '<form id="form">'
  data.forEach((el, idx) => {
    html += `<div class="form-control">`
    html += `<label for="${el.element}-${idx}">${el.title}</label>`
    if (el.element === 'input') html += `
      <input 
        type="${el.type}"
        id="${el.element}-${idx}"
        name="${el.name}"
        data-rule="${el.rule}"
      />
    `

    if (el.element === 'textarea') html += `
      <textarea 
        type="${el.type}"
        id="${el.element}-${idx}"
        name="${el.name}"
        data-rule="${el.rule}"
      ></textarea>
    `
    html += `</div>`
  });

  html += '<input type="submit" />'
  html += '</form>'

  return html
}

export default PageView