module.exports = function calculateTotalPrice(shoppingCart) {
    let totalPrice = 0;
    shoppingCart.forEach(val => {
      let currentProPrice = val.price * val.quantity;
      totalPrice += currentProPrice;
    });
    return totalPrice;
  }
