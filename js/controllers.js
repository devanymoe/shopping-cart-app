angular
  .module('myApp')
    .controller('ShopController', ShopController)
    .controller('CheckoutController', CheckoutController)

ShopController.$inject = ['$route', 'StoreServices'];
CheckoutController.$inject = ['$route', 'StoreServices'];

function ShopController($route, StoreServices) {
  this.allProducts = StoreServices.returnProducts();
}

function CheckoutController($route, StoreServices) {

}
