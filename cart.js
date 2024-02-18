'use strict';

const Cart = function() {
  this.goods = [];
  this.count = 0;
  this.totalPrice = 0;

  this.addGoods = function(product, count = 1) {
    this.goods.push(product);
    this.increaseCount(count);
  };
};

const cart = new Cart();

Cart.prototype.increaseCount = function(count) {
  return this.count += count;
};

Cart.prototype.calculateGoodsPrice = function() {
  let totalPrice = 0;
  this.goods.forEach(item => {
    totalPrice += item.price;
  });

  return this.totalPrice = totalPrice;
};

Cart.prototype.print = function() {
  console.log(JSON.stringify(cart.goods));
  console.log(`Общая стоимость корзины составляет ${cart.totalPrice}`);
};

Cart.prototype.clear = function() {
  this.goods = [];
  this.count = 0;
  this.totalPrice = 0;
};

const Goods = function(name, price, discount) {
  this.name = name;
  this.price = price;
  this.discount = discount;
};

const FoodGoods = function(name, price, discount, calories) {
  return {
    name,
    price,
    discount,
    calories,
  };
};

const ClothingGoods = function(name, price, discount, material) {
  return {
    name,
    price,
    discount,
    material,
  };
};

const TechnicsGoods = function(name, price, discount, type) {
  return {
    name,
    price,
    discount,
    type,
  };
};

cart.addGoods(new FoodGoods('Молоко', 50, 10, 80));
cart.addGoods(new ClothingGoods('Кофта', 1500, 0, 'Шерсть'));
cart.addGoods(new TechnicsGoods('Телефон', 20000, 3, 'Смартфон'));
cart.addGoods(new TechnicsGoods('Телефизор', 60000, 0, 'Быт техника'));
cart.calculateGoodsPrice();
cart.print();
cart.clear();
console.log(cart);
