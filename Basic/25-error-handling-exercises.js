/*
Clase 41 - Ejercicios: Manejo de errores
Vídeo: https://youtu.be/1glVfFxj8a4?t=20392
*/

// 1. Captura una excepción utilizando try-catch

try {
    let myObject
    console.log(myObject.email)
} catch (error) {
    console.log("Se ha producido un error:", error.message)
}

// 2. Captura una excepción utilizando try-catch y finally

try {
    let myObject
    console.log(myObject.email)
} catch (error) {
    console.log("Se ha producido un error:", error.message)
} finally {
    console.log("Este código se ejecuta siempre")
}   

// 3. Lanza una excepción genérica

function divIntegers(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new TypeError("Esta operación sólo divide números")
    }
    return a / b
}

try {
    console.log(divIntegers(10, 2))
    // console.log(divIntegers(10, "2"))
} catch (error) {
    console.log("Se ha producido un error:", error.message)
}

// 4. Crea una excepción personalizada

class MyError extends Error {
    constructor(message, a, b) {
        super(message)
        this.a = a
        this.b = b
        this.name = "CustomError"
    }

    printError() {
        console.log(`${this.a} / ${this.b}`)
    }
}

// 5. Lanza una excepción personalizada

function divIntegers2(a, b) {
    if (b === 0) {
        throw new MyError("No se puede dividir entre cero", a, b)
    }
    return a / b
}

try {
    console.log(divIntegers2(10, 0))
} catch (error) {
    console.log("Se ha producido un error personalizado:", error.message)
    error.printError()
}

// 6. Lanza varias excepciones según una lógica definida

function divIntegers3(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new TypeError("Esta operación sólo divide números")
    }
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        throw new Error("Esta operación sólo divide números enteros")
    }
    if (b === 0) {
        throw new MyError("No se puede dividir entre cero", a, b)
    }
    return a / b
}

// 7. Captura varias excepciones en un mismo try-catch

try {
    // console.log(divIntegers3(10, 2))
    // console.log(divIntegers3(10, 0))
    // console.log(divIntegers3(10, "2"))
    console.log(divIntegers3(10.5, 2))
} catch (error) {
    if (error instanceof TypeError) {
        console.log("Se ha producido un error de tipo:", error.message)
    } else if (error instanceof MyError) {
        console.log("Se ha producido un error personalizado:", error.message)
        error.printError()
    } else if (error instanceof Error) {
        console.log("Se ha producido un error:", error.message)
    }
}

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores

let values = ["10", "40.8", "a", "60", "b"]

for (let value of values) {
    try {
        let number = parseFloat(value)
        if (isNaN(number)) {
            throw new Error(`El valor "${value}" no es un número válido`)
        }
        console.log(`El valor "${value}" se ha transformado a ${number}`)
    } catch (error) {
        console.log("Se ha producido un error:", error.message)
    }
}

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada

function checkProperty(obj, prop) {
    if (!obj.hasOwnProperty(prop)) {
        throw new MyError(`El objeto no tiene la propiedad "${prop}"`, obj, prop)
    }
    return true
}

let myObj = { name: "Rigo", age: 32 }

try {
    console.log(checkProperty(myObj, "name"))
    console.log(checkProperty(myObj, "email"))
} catch (error) {
    console.log("Se ha producido un error personalizado:", error.message)
    console.log("Objeto:", error.a)
    console.log("Propiedad:", error.b)
}   

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10

function unreliableFunction() {
    if (Math.random() < 0.7) {
        throw new Error("Error aleatorio")
    }
    return "Éxito"
}

function retryFunction(fn, maxRetries) {
    let attempts = 0
    while (attempts < maxRetries) {
        try {
            return fn()
        } catch (error) {
            attempts++
            console.log(`Intento ${attempts} fallido: ${error.message}`)
        }
    }
    throw new Error(`La función ha fallado después de ${maxRetries} intentos`)
}

try {
    let result = retryFunction(unreliableFunction, 10)
    console.log(result)
} catch (error) {
    console.log("Se ha producido un error:", error.message)
}