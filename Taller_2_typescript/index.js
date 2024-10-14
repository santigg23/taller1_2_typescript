function miFuncion(numeroRequerido, booleanOpcional, stringPorDefecto) {
    if (stringPorDefecto === void 0) { stringPorDefecto = "Hola"; }
    console.log("numeroRequerido: ".concat(numeroRequerido, ", booleanOpcional: ").concat(booleanOpcional, ", stringPorDefecto: ").concat(stringPorDefecto));
}
// Llamado a la función
miFuncion(42, true);
miFuncion(99, false, "Adiós");
var funcionSuma = function (num1, num2) {
    return num1 + num2;
};
// Llamado a la función
console.log(funcionSuma(5, 3));
setTimeout(function () {
    console.log("HOLA ADSI");
}, 5000);
var saludar = function () { return console.log("Hola ADSI"); };
// Llamado a la función
saludar();
var funcionEdad = function (edad) { return "Tu edad es ".concat(edad); };
// Llamado a la función
console.log(funcionEdad(25));
var multiplicar = function (a, b) { return (a * b); };
// Llamado a la función
console.log(multiplicar(6, 7));
var calcularModulo = function (a, b) {
    var modulo = a % b;
    return modulo;
};
// Llamado a la función
console.log(calcularModulo(10, 3));
var persona = { nombre: "Juan", edad: 30, ciudad: "Bogotá" };
var nombre = persona.nombre, edad = persona.edad, ciudad = persona.ciudad;
console.log(nombre); // Imprime "Juan"
console.log(edad); // Imprime 30
console.log(ciudad); // Imprime "Bogotá"
var numeros = [10, 20, 30, 40, 50];
var primero = numeros[0], segundo = numeros[1], resto = numeros.slice(2);
console.log(primero); // Imprime 10
console.log(segundo); // Imprime 20
console.log(resto); // Imprime [30, 40, 50]
var mostrarDatos = function (_a) {
    var nombre = _a.nombre, edad = _a.edad;
    console.log("Nombre: ".concat(nombre, ", Edad: ").concat(edad));
};
mostrarDatos({ nombre: "María", edad: 28 });
