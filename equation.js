'use strict';

let a = 2;
let x = 1 + (a *= 2);

/*
1. Значение переменной а равно 2
2. В скобках происходит следующее действие: 2 умножаем на 2, но при этом к значению а присваевается 2 (получаем а=4) 
3. к 1 прибавляем выражение, которое в скобках (4), получаем ответ 5
4. Таким образом, а = 4, х = 5. 
/*