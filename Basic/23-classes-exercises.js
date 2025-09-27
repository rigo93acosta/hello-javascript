/*
Clase 39 - Ejercicios: Clases
Vídeo: https://youtu.be/1glVfFxj8a4?t=18630
*/

// 1. Crea una clase que reciba dos propiedades

class Student {

    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

// 2. Añade un método a la clase que utilice las propiedades

class Teacher {

    constructor(name, age) {
        this.name = name
        this.age = age
    }

    introduce() {
        console.log(`Hola, soy el profesor ${this.name} y tengo ${this.age} años.`)
    }
}

// 3. Muestra los valores de las propiedades e invoca a la función

let student1 = new Student("Ana", 20)
let student2 = new Student("Luis", 22)

console.log(student1.name)
console.log(student2.age)

let teacher1 = new Teacher("Carlos", 45)
teacher1.introduce()

// 4. Añade un método estático a la primera clase

class Student1 {

    constructor(name, age) {
        this.name = name
        this.age = age
    }

    static info() {
        console.log("Los estudiantes son el futuro.")
    }
}

// 5. Haz uso del método estático

Student1.info()

// 6. Crea una clase que haga uso de herencia

class GradStudent extends Student {

    constructor(name, age, degree) {
        super(name, age)
        this.degree = degree
    }

    study() {
        console.log(`${this.name} está estudiando ${this.degree}.`)
    }
}

// 7. Crea una clase que haga uso de getters y setters

class Course {

    #title
    #year

    constructor(title, year) {
        this.#title = title
        this.#year = year
    }

    set title(title) {
        this.#title = title
    }

    get title() {
        return this.#title
    }

    set year(year) {
        this.#year = year
    }

    get year() {
        return this.#year
    }

}

// 8. Modifica la clase con getters y setters para que use propiedades privadas

// Ya está hecho en el ejercicio anterior

// 9. Utiliza los get y set y muestra sus valores

let course1 = new Course("Matemáticas", 2023)
console.log(course1.title)
console.log(course1.year)

// 10. Sobrescribe un método de una clase que utilice herencia 

class Basic{

    constructor(){
        this.type = "Basic"
    }

    info(){
        console.log(`Tipo de curso: ${this.type}`)
    }
}

class Advanced extends Basic{
    
    constructor(){
        super()
        this.type = "Advanced"
    }   

    info(){
        console.log(`Tipo de curso: ${this.type} (sobrescrito)`)
    }
}

let courseBasic = new Basic()
courseBasic.info()

let courseAdvanced = new Advanced()
courseAdvanced.info()