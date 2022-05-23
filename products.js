'use strict';

const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

const productsPhoto = products.filter(results => "photos" in results && results.photos.length > 0);
console.log(productsPhoto);

const productPrice = products.sort(function (result1, result2) {
    return result1.price - result2.price;
});