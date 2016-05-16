angular
  .module('myApp', ['ngRoute', 'ngAnimate'])
  .config(routeHandler)

routeHandler.$inject = ['$routeProvider', '$locationProvider'];

function routeHandler($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/shop.html',
      controller: 'ShopController as ctrl'
    })
    .when('/checkout', {
      templateUrl: 'partials/checkout.html',
      controller: 'CheckoutController as ctrl'
    })
    .otherwise({
      templateUrl: 'partials/shop.html',
      controller: 'ShopController as ctrl'
    })
  $locationProvider.html5Mode(true);
}
