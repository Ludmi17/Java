'use strict';

let operation = prompt("Введите операцию");
switch (operation) {
    case "addition":
        function addition(arg1, arg2) {
            return arg1 + arg2;
        }
        break;
    case "substraction":
        function substraction(arg1, arg2) {
            return arg1 - arg2;
        }
        break;
    case "division":
        function division(arg1, arg2) {
            return arg1 / arg2;
        }
        break;
    case "умножение":
        function multiplication(arg1, arg2) {
            return arg1 * arg2;
        }
        break;
}