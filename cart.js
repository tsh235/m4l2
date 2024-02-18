'use strict';

// Cart

const Cart = function() {
  this.goods = [];
  console.log('this.goods: ', this.goods);
  this.count = 0;
  this.totalPrice = 0;
};

Cart.addGoods = function(good) {
  console.log('this.goods: ', this.goods);
  this.goods.push(good);
};

Cart.increaseCount = function(count) {
  return this.count += count;
};

// Goods

const Goods = function(name, price, discount) {
  Cart.call(this, name, price, discount);
  this.name = name;
  this.price = price;
  this.discount = discount;
  return this;
};

const FoodGoods = function(name, price, discount, calories) {
  Goods.call(this, name, price, discount);
  console.log('this: ', this);
  this.calories = calories;
};

const ClothingGoods = function(name, price, discount, material) {
  Goods.call(this, name, price, discount, material);
  this.material = material;
};

const TechnicsGoods = function(name, price, discount, type) {
  Goods.call(this, name, price, discount);
  this.type = type;
};

const p1 = new FoodGoods('Молоко', 50, 10, 80);
console.log('p1: ', p1);
Cart.addGoods(p1);
const p2 = new ClothingGoods('Кофта', 20, 0, 'Шерсть');
Cart.addGoods(p2);
const p3 = new TechnicsGoods('Телефон', 20, 0, 'Смартфон');
Cart.addGoods(p3);


