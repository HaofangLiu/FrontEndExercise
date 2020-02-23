const Product = require("./product");

let shoppingCart = [];

// [{productName, price , amount},{productName, price , amount},{productName, price , amount}]

function createProduct(name, price) {
  let newProduct = new Product(name, price);
  // console.log(newProduct.name + " create success");
  return newProduct;
}

function addShoppingCart(product, amount) {
  let productFound = shoppingCart.find(ele => ele.name === product.name);
  if (productFound == undefined) {
    shoppingCart.push({
      ...product,
      quantity: amount
    });
  } else {
    productFound.quantity += amount;
  }
  // console.log(shoppingCart)
  return shoppingCart
}

module.exports = addShoppingCart;


// let apple = createProduct('Apple',4.95);
// let orange = createProduct('Orange',3.99);
// addShoppingCart(apple,2)
// addShoppingCart(orange,1)
// let amount = calculateTotalPrice();
// console.log(amount);

// let apple = createProduct("Apple", 4.95);
// addShoppingCart(apple, 3);
// addShoppingCart(apple, 3);
// deleteItem(apple,1);
// let amount = calculateTotalPrice();
// console.log(amount);
