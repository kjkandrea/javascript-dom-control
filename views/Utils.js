function emit(event, data) {
  var evt = new CustomEvent(event, { detail: data })
  this.el.dispatchEvent(evt)
}

function on(event, handler) {
  this.el.addEventListener(event, handler)
}

export { emit, on }