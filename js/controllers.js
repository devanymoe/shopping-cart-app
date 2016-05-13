angular
  .module('myApp')
    .controller('ShopController', ShopController)
    .controller('CheckoutController', CheckoutController)

ShopController.$inject = ['$route', 'StoreServices'];
CheckoutController.$inject = ['$route', 'StoreServices'];

function ShopController($route, StoreServices) {

}

function CheckoutController($route, StoreServices) {

}
