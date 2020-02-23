module.exports = function deleteItem(product, amount, shoppingCart) {
    let productFound = shoppingCart.find(ele => ele.name === product.name);
    productFound.quantity -= amount;
    return shoppingCart;
  }