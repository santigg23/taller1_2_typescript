function miFuncion(numeroRequerido: number, booleanOpcional?: boolean, stringPorDefecto: string = "Hola"): void {
    console.log(`numeroRequerido: ${numeroRequerido}, booleanOpcional: ${booleanOpcional}, stringPorDefecto: ${stringPorDefecto}`);
}

// Llamado a la función
miFuncion(42, true);
miFuncion(99, false, "Adiós");


let funcionSuma: (num1: number, num2: number) => number = (num1, num2) => {
    return num1 + num2;
};

// Llamado a la función
console.log(funcionSuma(5, 3));

setTimeout(() => {
    console.log("HOLA ADSI");
}, 5000);

const saludar = () => console.log("Hola ADSI");

// Llamado a la función
saludar();

const funcionEdad = (edad: number): string => `Tu edad es ${edad}`;

// Llamado a la función
console.log(funcionEdad(25));

const multiplicar = (a: number, b: number): number => (a * b);

// Llamado a la función
console.log(multiplicar(6, 7));

const calcularModulo = (a: number, b: number): number => {
    let modulo = a % b;
    return modulo;
};

// Llamado a la función
console.log(calcularModulo(10, 3));

const persona = { nombre: "Juan", edad: 30, ciudad: "Bogotá" };
const { nombre, edad, ciudad } = persona;

console.log(nombre);  // Imprime "Juan"
console.log(edad);    // Imprime 30
console.log(ciudad);  // Imprime "Bogotá"

const numeros = [10, 20, 30, 40, 50];
const [primero, segundo, ...resto] = numeros;

console.log(primero); // Imprime 10
console.log(segundo); // Imprime 20
console.log(resto);   // Imprime [30, 40, 50]

const mostrarDatos = ({ nombre, edad }: { nombre: string, edad: number }) => {
    console.log(`Nombre: ${nombre}, Edad: ${edad}`);
};

mostrarDatos({ nombre: "María", edad: 28 });
