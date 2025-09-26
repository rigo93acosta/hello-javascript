/*
Clase 34 - Ejercicios: Objetos
Vídeo: https://youtu.be/1glVfFxj8a4?t=15675
*/

// 1. Crea un objeto con 3 propiedades

let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020
}

// 2. Accede y muestra su valor

console.log(car.brand)
console.log(car["model"])
console.log(car.year)

// 3. Agrega una nueva propiedad

car.color = "Red"

// 4. Elimina una de las 3 primeras propiedades

delete car.year

// 5. Agrega una función e invócala

car.honk = function() {
    console.log("Beep beep!")
}

car.honk()

// 6. Itera las propiedades del objeto

for (let key in car) {
    console.log(`${key}: ${car[key]}`)
}

// 7. Crea un objeto anidado

let person = {
    name: "Alice",
    age: 30,
    address: {
        street: "123 Main St",
        city: "Wonderland",
        zip: "12345"
    }
}

// 8. Accede y muestra el valor de las propiedades anidadas

console.log(person.address.street)
console.log(person.address.city)
console.log(person.address.zip)

// 9. Comprueba si los dos objetos creados son iguales

console.log(car === person) // false

// 10. Comprueba si dos propiedades diferentes son iguales

console.log(person.name === person.address.street) // false