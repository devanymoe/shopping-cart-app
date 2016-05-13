angular
  .module('myApp')
    .controller('ShopController', ShopController)
    .controller('CheckoutController', CheckoutController)

ShopController.$inject = ['$route', 'StoreServices'];
CheckoutConroller.$inject = ['$route', 'StoreServices'];

function ShopController($route, StoreServices) {

}

function CheckoutController($route, StoreServices) {

}
