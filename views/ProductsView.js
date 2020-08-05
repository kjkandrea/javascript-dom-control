const ProductsView = {}

ProductsView.viewLength = 3

ProductsView.setup = function(el) {
  this.el = el
}

ProductsView.render = function(data) {
  this.el.innerHTML = this.generateHtml(data)
}

ProductsView.generateHtml = function(data) {
  let html = ""
  html += this.generateProducts(data)
  html += this.generatePagenation(data[0].id)

  console.log(html)
  return html
}

ProductsView.generateProducts = function(data) {
  let html = ""

  html += `<ul id="product-list">`
  data.forEach(product => {
    html += `
      <a href="" data-hash="product-${product.hash}">
        <li>
          <div class="left">
            <div class="image-wrap">
              <img src="${product.image}" />
            </div>
          </div>
          <div class="right">
            <h2>${product.name}</h2>
            <div><strong>price : </strong>${product.price}</div>
          <div>
        </li>
      </a>
    `
  });
  html += '</ul>'

  return html
}

ProductsView.generatePagenation = function(higherID) {
  const pages = Math.ceil((higherID * 1)/this.viewLength)
  let html = ""
  html += `<ol class="pagenation">`
  html += `<li><a href="" data-page="1">prev</a></li>`
  for (let i = 0;i < pages;i++) {
    html += `<li><a href="" data-page="${i + 1}">${i + 1}</a></li>`
  }
  html += `<li><a href="" data-page="${pages}">next</a></li>`
  html += `</ol>`

  return html
}

export default ProductsView