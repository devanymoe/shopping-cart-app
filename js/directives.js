angular
  .module('myApp')
  .directive('dmProduct', dmProduct)

function dmProduct() {
  return {
    templateUrl: '../partials/product.html',
    scope: {
      product: '=productData'
    }
  }
}
