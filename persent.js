'use strict';

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount() {
        this.price = this.price - (this.price / 100 * 25);
    }
}

const Product1 = new Product('Одежда', 500);
Product1.make25PercentDiscount();

console.log(Product1);



function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.make25PercentDiscount = function () {
    this.price = this.price - (this.price / 100 * 25)
};

const Product1 = new Product('Одежда', 500);
Product1.make25PercentDiscount();

console.log(Product1);