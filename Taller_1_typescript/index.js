// Punto 2.1: Declarar e inicializar variables
var estaLogueado = true;
var tieneCuentaPremium = false;
var edad = 25;
var puntaje = 85.7;
var varibale1 = "Hello";
var variable2 = 100;
var nombre = "Paula";
var apellido = "Pérez";
// Punto 2.2: Crear una plantilla de string
var mensajeBienvenida = "Bienvenida ".concat(nombre, " ").concat(apellido, " a nuestro sitio web, gracias por registrarte.");
console.log(mensajeBienvenida);
// Punto 3.1: Declarar arrays de números y strings
var numbersArray = [10, 20, 30, 40, 50];
var stringsArray = ["uno", "dos", "tres", "cuatro", "cinco"];
// Imprimir cada elemento de los arrays
numbersArray.forEach(function (num) { return console.log(num); });
stringsArray.forEach(function (str) { return console.log(str); });
// Punto 4.1: Declarar objetos con los días de la semana
var diasSemana = {
    1: "Lunes",
    2: "Martes",
    3: "Miércoles",
    4: "Jueves",
    5: "Viernes",
    6: "Sábado",
    7: "Domingo"
};
// Punto 4.2: Declarar objeto con números del 0 al 9
var numerosObjetos = {
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
for (var key in diasSemana) {
    console.log("".concat(key, ": ").concat(diasSemana[key]));
}
for (var key in numerosObjetos) {
    console.log("".concat(key, ": ").concat(numerosObjetos[key]));
}
