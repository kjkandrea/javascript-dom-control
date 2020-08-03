import { emit, on } from './Utils.js'

const PageView = {}

PageView.setup = function (el) {
  this.el = el
  this.emit = emit
  this.on = on
  return this
},

PageView.render = function (data, hash) {
  this.el.innerHTML = this.generateHtml(data)
  this.locationSetup(hash)
},

PageView.locationSetup = function (hash) {
  if(hash) window.location.hash = hash
},

PageView.generateHtml = function (data) {
  console.log(data)

  let html = '';

  html += `<h2>${data.pageTitle}</h2>`
  if (data.pageContent) {
    const content = data.pageContent
    if (content.form) html += this.generateForm(content.form)
  }

  return html
}

PageView.generateForm = function (data) {
  let html = '';

  html += '<form>'
  data.forEach((el, idx) => {
    html += `<label for="${el.element}-${idx}">${el.title}</label>`
    if (el.element === 'input') html += `
      <input 
        type="${el.type}"
        id="${el.element}-${idx}"
      />
    `

    if (el.element === 'textarea') html += `
      <textarea id="${el.element}-${idx}"></textarea>
    `
  });
  html += '</form>'

  return html
}

export default PageView