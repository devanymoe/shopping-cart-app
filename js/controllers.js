angular
  .module('myApp')
    .controller('ShopController', ShopController)
    .controller('NavController', NavController)

ShopController.$inject = ['$route', 'StoreServices'];
NavController.$inject = ['$route', 'StoreServices'];

function ShopController($route, StoreServices) {
  this.service = StoreServices;
  this.categoryFilter = '';
  this.allProducts = StoreServices.returnProducts();
  this.allCategories = StoreServices.returnCategories(this.allProducts);

  this.getStars = function(num) {
    return new Array(num);
  }

  this.getNoStars = function(num) {
    return new Array(5 - num);
  }
}

function NavController($route, StoreServices) {
  this.service = StoreServices;
  this.cart = this.service.getCart();

  this.toggleCart = function() {
    this.service.toggleCart();
  }
}
