'use strict';

console.log(10 + 10 + "10");
console.log(10 + "10" + 10);
console.log(10 + 10 + +"10");
console.log(10 / -"");
console.log(10 / +"2,5");

/* 
1. к 10 прибавляем 10 получаем 20 и пристраиваем к этому числу 10 получаем 2010
2. к 10 пристраиваем значение 10 и к нему число 10 получаем 101010
3. к 10 прибавляем 10 получаем 20 и прибавляем 10 получаем 30
4. 10 делим на -0 получаем -Infinity
5. 10 делим на NaN получаем NaN 
*/