angular
  .module('myApp')
    .controller('ShopController', ShopController)
    .controller('CheckoutController', CheckoutController)

ShopController.$inject = ['$route', 'StoreServices'];
CheckoutController.$inject = ['$route', 'StoreServices'];

function ShopController($route, StoreServices) {
  this.allProducts = StoreServices.returnProducts();

  this.getStars = function(num) {
    return new Array(num);
  }

  this.getNoStars = function(num) {
    return new Array(5 - num);
  }
}

function CheckoutController($route, StoreServices) {

}
