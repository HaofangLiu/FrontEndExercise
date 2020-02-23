let expect = require("chai").expect;
let addShoppingCart = require("../index.js");
let calculateTotalPrice = require("../calculateTotalPrice");
describe("add two apple one orange", function() {
  it("should return two added apple", function() {
    expect(addShoppingCart({ name: "Apple", price: 4.95 }, 2)).to.deep.equal([
      { name: "Apple", price: 4.95, quantity: 2 }
    ]);
  });
  it("should return two apple and one orange in shopping cart", function() {
    expect(addShoppingCart({ name: "Orange", price: 3.99 }, 1)).to.deep.equal([
      { name: "Apple", price: 4.95, quantity: 2 },
      { name: "Orange", price: 3.99, quantity: 1 }
    ]);
  });
  it("calculate the total price of all products", function() {
    expect(
      calculateTotalPrice([
        { name: "Apple", price: 4.95, quantity: 2 },
        { name: "Orange", price: 3.99, quantity: 1 }
      ])
    ).to.be.equal(13.89);
  });
});


describe("add two apple one orange", function() {
 
});