/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma

function sum(num1, num2) {
    return num1 + num2;    
}

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

function findMax(data){
    let max = data[0];
    for (let i = 1; i < data.length; i++) {
        if (data[i] > max) {
            max = data[i];
        }
    }
    return max;
}

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

function countVowels(str) {
    let count = 0;
    const vowels = "aeiou";
    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

function toUpperCaseArray(arr) {
    let uppercasedArr = [];
    for (let str of arr) {
        uppercasedArr.push(str.toUpperCase());
    }
    return uppercasedArr;
}

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

function commonElements(arr1, arr2) {
    let common = [];
    for (let elem of arr1) {
        if (arr2.includes(elem) && !common.includes(elem)) {
            common.push(elem);
        }
    }
    return common;
}

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

function sumEvenNumbers(arr) {
    let sum = 0;
    for (let num of arr) {
        if (num % 2 === 0) {
            sum += num;
        }
    }
    return sum;
}

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

function squareNumbers(arr) {
    let squaredArr = [];
    for (let num of arr) {
        squaredArr.push(num ** 2);
    }
    return squaredArr;
}

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

function reverseWords(str) {
    return str.split(" ").reverse().join(" ");
}


// 10. Crea una función que calcule el factorial de un número dado

function factorial(num) {
    if (num < 0) return null; // Factorial no definido para números negativos
    if (num === 0 || num === 1) return 1;
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}
