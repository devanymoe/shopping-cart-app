angular
  .module('myApp')
  .factory('StoreServices', StoreServices)

function StoreServices() {
  return {

    returnProducts: function() {
      return [
        {
          "_id": "55c8ee82152165d244b98300",
          "name": "Wild Orange Wulong Oolong Tea",
          "ingredients": "oolong tea, hibiscus flowers, rose hip peels, citrus peels",
          "caffeineScale": 244,
          "price": 1540,
          "inStock": true,
          "rating": 1,
          "imageUrl": "https://sits-pod26.demandware.net/dw/image/v2/AAFV_PRD/on/demandware.static/-/Sites-Teavana_Master_Catalog/default/dw9e9c55a4/images/Product%20Images/Tea/Oolong%20Tea/30869_wildorangewulongtea.jpg?sw=500&sh=500",
          "__v": 0,
          "categories": [ "Oolong", "Fruity"]
        },
        {
          "_id": "55c8ee82152165d244b98301",
          "name": "Spiced Apple Cider Black Tea",
          "ingredients": "cinnamon, black tea, apple pieces, carob bits, chicory root, plum pieces",
          "caffeineScale": 49,
          "price": 7348,
          "inStock": false,
          "rating": 2,
          "imageUrl": "https://sits-pod26.demandware.net/dw/image/v2/AAFV_PRD/on/demandware.static/-/Sites-Teavana_Master_Catalog/default/dw8578a293/images/Product%20Images/Tea/Rooibos/31501_spicedapplecidertea.jpg?sw=500&sh=500",
          "__v": 0,
          "categories": ["Black", "Fruity", "Dessert"]
        },
        {
          "_id": "55c8ee82152165d244b98302",
          "name": "Strawberry Grapefruit Green Tea",
          "ingredients": "hibiscus, strawberry pieces, lemongrass, orange peel, green tea",
          "caffeineScale": 38,
          "price": 4991,
          "inStock": true,
          "rating": 4,
          "imageUrl": "http://demandware.edgesuite.net/sits_pod26/dw/image/v2/AAFV_PRD/on/demandware.static/-/Sites-Teavana_Master_Catalog/default/dw8f90d5dd/images/Product%20Images/Tea/Green%20Tea/31834_strawberrygrapefruitxuelongtea.jpg?sw=500&sh=500",
          "__v": 0,
          "categories": ["Green", "Fruity"]
        },
        {
          "_id": "55c8ee82152165d244b98303",
          "name": "Caramel Almond Herbal Tea",
          "ingredients": "apple pieces, white tea, cinnamon, coconut chips, beetroot pieces",
          "caffeineScale": 153,
          "price": 5496,
          "inStock": true,
          "rating": 1,
          "imageUrl": "http://demandware.edgesuite.net/sits_pod26/dw/image/v2/AAFV_PRD/on/demandware.static/-/Sites-Teavana_Master_Catalog/default/dw103b4424/images/Product%20Images/Tea/Herbal/31638_caramelalmondamarettitea.jpg?sw=500&sh=500",
          "__v": 0,
          "categories": ["White", "Herbal", "Dessert"]
        },
        {
          "_id": "55c8ee82152165d244b98304",
          "name": "Peachberry Jasmine Green Tea",
          "ingredients": "green tea, hibiscus flowers, apple pieces, kiwi pieces, peach pieces",
          "caffeineScale": 181,
          "price": 2445,
          "inStock": true,
          "rating": 1,
          "imageUrl": "https://sits-pod26.demandware.net/dw/image/v2/AAFV_PRD/on/demandware.static/-/Sites-Teavana_Master_Catalog/default/dwa34b4fe1/images/Product%20Images/Tea/Green%20Tea/10004431_peachberryjasminesutratea.jpg?sw=500&sh=500",
          "__v": 0,
          "categories": ["Green", "Floral", "Fruity"]
        },
        {
          "_id": "55c8ee82152165d244b98305",
          "name": "Tung Ting Oolong Tea",
          "ingredients": "oolong tea scented with jasmine blossoms, rose hips, hibiscus flowers",
          "caffeineScale": 241,
          "price": 4486,
          "inStock": true,
          "rating": 3,
          "imageUrl": "https://sits-pod26.demandware.net/dw/image/v2/AAFV_PRD/on/demandware.static/-/Sites-Teavana_Master_Catalog/default/dw7a616ead/images/Product%20Images/Tea/Oolong%20Tea/011064695_b.jpg?sw=500&sh=500",
          "__v": 0,
          "categories": ["Oolong", "Floral"]
        },
        {
          "_id": "55c8ee82152165d244b98306",
          "name": "Earl Grey Black Tea",
          "ingredients": "black tea, rose hips, oil of bergamot, artificial flavoring",
          "caffeineScale": 230,
          "price": 6973,
          "inStock": true,
          "rating": 3,
          "imageUrl": "https://sits-pod26.demandware.net/dw/image/v2/AAFV_PRD/on/demandware.static/-/Sites-Teavana_Master_Catalog/default/dw470e0a6c/images/Product%20Images/Tea/Black%20Tea/32258_earlgreytea.jpg?sw=500&sh=500",
          "__v": 0,
          "categories": ["Black"]
        },
        {
          "_id": "55c8ee82152165d244b98307",
          "name": "Jasmine Silver Needle White Tea",
          "ingredients": "white tea scented with jasmine blossoms, rose hips, hibiscus flowers",
          "caffeineScale": 122,
          "price": 6003,
          "inStock": true,
          "rating": 2,
          "imageUrl": "https://sits-pod26.demandware.net/dw/image/v2/AAFV_PRD/on/demandware.static/-/Sites-Teavana_Master_Catalog/default/dwc6833f69/images/Product%20Images/Tea/White%20Tea/30890_jasminesilverneedletea.jpg?sw=500&sh=500",
          "__v": 0,
          "categories": ["White", "Floral"]
        },
        {
          "_id": "55c8ee82152165d244b98308",
          "name": "Citrus Lavender Sage Herbal Tea",
          "ingredients": "candied pineapple pieces, citrus peels, berries, lavender blossoms, sage",
          "caffeineScale": 196,
          "price": 1374,
          "inStock": true,
          "rating": 3,
          "imageUrl": "https://sits-pod26.demandware.net/dw/image/v2/AAFV_PRD/on/demandware.static/-/Sites-Teavana_Master_Catalog/default/dw25674740/images/Product%20Images/Tea/Herbal/30467_citruslavendersagetea.jpg?sw=500&sh=500",
          "__v": 0,
          "categories": ["Herbal", "Floral", "Fruity", "Savory"]
        },
        {
          "_id": "55c8ee82152165d244b98309",
          "name": "Snow Geisha White Tea",
          "ingredients": "White tea, cherries, cranberries, rosebuds, rose petals, hibiscus flowers",
          "caffeineScale": 196,
          "price": 4158,
          "inStock": true,
          "rating": 2,
          "imageUrl": "https://sits-pod26.demandware.net/dw/image/v2/AAFV_PRD/on/demandware.static/-/Sites-Teavana_Master_Catalog/default/dw1be01842/images/Product%20Images/Tea/White%20Tea/X01040302_snowgeishatea.jpg?sw=500&sh=500",
          "__v": 0,
          "categories": ["White", "Floral", ]
        }
      ]
    }
  }
}
