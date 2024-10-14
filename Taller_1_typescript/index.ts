// Punto 2.1: Declarar e inicializar variables
let estaLogueado: boolean = true;
let tieneCuentaPremium: boolean = false;

let edad: number = 25;
let puntaje: number = 85.7;

let varibale1: any = "Hello";
let variable2: any = 100;

let nombre: string = "Paula";
let apellido: string = "Pérez";

// Punto 2.2: Crear una plantilla de string
const mensajeBienvenida: string = `Bienvenida ${nombre} ${apellido} a nuestro sitio web, gracias por registrarte.`;
console.log(mensajeBienvenida);

// Punto 3.1: Declarar arrays de números y strings
let numbersArray: number[] = [10, 20, 30, 40, 50];
let stringsArray: string[] = ["uno", "dos", "tres", "cuatro", "cinco"];

// Imprimir cada elemento de los arrays
numbersArray.forEach((num) => console.log(num));
stringsArray.forEach((str) => console.log(str));

// Punto 4.1: Declarar objetos con los días de la semana
let diasSemana: { [key: string]: string } = {
    1: "Lunes",
    2: "Martes",
    3: "Miércoles",
    4: "Jueves",
    5: "Viernes",
    6: "Sábado",
    7: "Domingo"
};

// Punto 4.2: Declarar objeto con números del 0 al 9
let numerosObjetos: { [key: string]: number } = {
    cero: 0,
    uno: 1,
    dos: 2,
    tres: 3,
    cuatro: 4,
    cinco: 5,
    seis: 6,
    siete: 7,
    ocho: 8,
    nueve: 9
};

// Recorrer e imprimir cada valor de los objetos
for (let key in diasSemana) {
    console.log(`${key}: ${diasSemana[key]}`);
}

for (let key in numerosObjetos) {
    console.log(`${key}: ${numerosObjetos[key]}`);
}

