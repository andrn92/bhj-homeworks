const products = document.querySelector('.products')
const cartProducts = document.querySelector('.cart__products')
for (let product of products.children) {
  let productId = product.dataset.id
  let productImage = product.querySelector('.product__image')
  let productQuantity = product.querySelector('.product__quantity-value')
  let productQuantityValue = Number(productQuantity.innerHTML)
  product.addEventListener('click', (event) => {
    if (event.target.classList.contains('product__quantity-control_inc')) {
      productQuantityValue += 1
      productQuantity.innerHTML = productQuantityValue
    }
    if (event.target.classList.contains('product__quantity-control_dec')) {
      if (productQuantityValue > 1) {
        productQuantityValue -= 1
      }
      productQuantity.innerHTML = productQuantityValue
    }
    if (event.target.classList.contains('product__add')) {
      let cartProduct = Array.from(cartProducts.children).find((elem) => elem.dataset.id == productId)
      if (cartProduct) {
        let cartProductCount = Number(cartProduct.querySelector('.cart__product-count').innerHTML)
        cartProduct.querySelector('.cart__product-count').innerHTML = cartProductCount + productQuantityValue
      }
      else {
        let div = document.createElement('div')
        let name = 'cart__product'
        div.className = name
        div.setAttribute('data-id', productId)
        div.insertAdjacentHTML('afterbegin', `<img class="${name}-image" src="${productImage.src}"><div class="${name}-count">${productQuantityValue}</div>`)
        cartProducts.append(div)
      }
    }
  })
}