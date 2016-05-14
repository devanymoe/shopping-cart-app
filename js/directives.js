angular
  .module('myApp')
  .directive('dmProduct', dmProduct)

function dmProduct() {
  return {
    templateUrl: '../partials/product.html',
    scope: {
      product: '=productData'
    },
    controller: function($scope) {
      this.getStars = function(num) {
        return new Array(num);
      }

      this.getNoStars = function(num) {
        return new Array(5 - num);
      }
    },
    controllerAs: 'ctrl'
  }
}
