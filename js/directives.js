angular
  .module('myApp')
  .directive('dmProduct', dmProduct)
  .directive('dmCart', dmCart)

dmProduct.$inject = ['StoreServices'];
dmCart.$inject = ['StoreServices'];

function dmProduct() {
  return {
    templateUrl: '../partials/product.html',
    scope: {
      product: '=productData'
    },
    controller: function($scope, StoreServices) {
      this.quantity = "1";

      this.getStars = function(num) {
        return new Array(num);
      };

      this.getNoStars = function(num) {
        return new Array(5 - num);
      };

      this.addToCart = product => {
        if (!product.quantity) {
          product.quantity = this.quantity;
        }
        else {
          product.quantity = parseInt(product.quantity) + parseInt(this.quantity);
        }
        StoreServices.addToCart(product);
      }
    },
    controllerAs: 'ctrl'
  }
}

function dmCart() {
  return {
    templateUrl: '../partials/cart.html',
    controller: function($scope, StoreServices) {
      this.service = StoreServices;
      this.cart = this.service.getCart();
    },
    controllerAs: 'ctrl'
  }
}
