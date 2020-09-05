// En JavaScript existen 3 fromas de crear variables

//var nombreCliente= 'Axel';//camelcase esto sirve por si el hay mas de 2 palabras en la variable


//LET 
// let nombre;
// nombre='Manuel'; 

// Const siempre debe de asignarle valor a la variable ni tampoco reescribir
// const cliente='Juan';

// console.log=(cliente);

//Concatenar dentro de un mensaje
// var nombre = prompt('Cual es tu nombre?'),
//     apellido = prompt ('cual es tu apellido?');
//     document.getElementById('mensaje').innerHTML=`Bienvenido ${nombre} ${apellido}`;

// //Unir dos variables
// let banda = 'Mago de OZ',
//     cancion = 'Molinos de viento';
// let nombre;
// nombre= banda +': ' + cancion;
// //Legnth nos dice cuantas letras tiene
// // console.log(banda.length);

// //Concat es para concatenar a una variable
// // nombre= nombre.concat(" ", "Y es genial");

// //Mayusculas
// // nombre=nombre.toUpperCase();
// console.log(nombre);

// NUMEROS Operaciones normales
// const numero1 = 30,
//       numero2 = '20',
//       numero3 = 20.20,
//       numero4 = 35,
//       numero5 = -4;

// let resultado;
//     resultado = numero1 + numero3;

// // Clases MATH Redondear
// resultado= Math.round(4.5);

// //Redondear hacia abajo
// resultado = Math.floor(4.9);

// //Redondear hacia arriba
// resultado = Math.ceil (4.1);
// console.log(resultado);

// Convertir a string a numero
// let numero = '20',
//     numero1 = 20;
// let resultado =  (Number(numero) + numero1) ;
// console.log(resultado);

// funcion declaration
// function saludar(nombre, trabajo){
//     console.log ('Hola ' + nombre + ' Tu trabajo es: ' + trabajo);
// }

// saludar('Axel', 'Gerente');

// // Funcion expression
// const suma = function (a, b){
//     console.log (a + b);
// }

// Metodos
// const musica ={
//     reproducir: function (cancion){
//         console.log ('Reproduciendo la cancion: ' +cancion);
//     }
// }
// musica.reproducir('Chambea')

// Retornar valores con funcion expression
// let viajando = function (destino){
//     return 'Viajando a la ciudad de: ' + destino;
// }
// let viaje;
// viaje = viajando('Tegucigalpa');
// console.log(viaje);

// arrow function
// let viajando = destino => 'Viajando a la ciudad de: ' + destino;
// let viaje;
// viaje = viajando ('Comayagua');
// console.log(viaje);

// Object literal
// const persona = {
//     nombre: 'Axel',
//     edad: 80,
//     anioNac: function(){
//         return new Date().getFullYear() - this.edad;
//     }
// };
// console.log(persona.anioNac())

// Object constructor
// function Tarea (nombre, urgencia){
//     this.nombre = nombre;
//     this.urgencia = urgencia;
// }

// // Crear nuevas tareas
// const tarea1 = new Tarea('Aprender JS', 'Urgente');

// console.log(tarea1);

// Clases
// class Tarea {
//     constructor(nombre, urgencia){
//         this.nombre = nombre;
//         this.urgencia = urgencia;
//     }
// }
// const tarea1 = new Tarea('Aprender JS', 'Urgente');
// const tarea2 = new Tarea('Correr', 'Urgente');
// const tarea3 = new Tarea('Bajar', 'medio');
// const tarea4 = new Tarea('Subir', '0');
// console.log(tarea1);
// console.log(tarea2);
// console.log(tarea3);
// console.log(tarea4);

// IF
// let puntaje = 1000;
// let totalcarrito = 1200;
// let tarjeta = false;

// if (puntaje === 1000){
//     console.log('El puntaje es de ' + puntaje);
// } else{
//     console.log('El puntaje no es igual a 1000');
// }
// Operador OR ||
// if (puntaje > totalcarrito || tarjeta){
//     console.log('Fondos suficientes');
// } else{
//     console.log('Fondos insuficientes');
// }

// Operador &&
// let hora = 14;
// if (hora>0 && hora <=12){
// console.log('Buenos Dias');
// } else if(hora>12 && hora <= 18){
//     console.log('Buenas Tardes');
// }else if(hora>18 && hora <=24){
//     console.log('Buenas Noches');
// }else{
//     console.log('Hora no disponible');
// }

// Switch
// const metodoPago = 'Tarjeta';

// switch (metodoPago){
//     case 'efectivo':
//         console.log('Usted pago en efectivo');
//         break;
//         console.log('Usted pago en tarjeta');
//         break;
//     case 'cheque':
//         console.log('Usted pago en cheque');
//         break;
//     default:
//         console.log('Metodo de pago invalido')            
// }

// For loop
const carrito = ['Producto1', 'producto2', 'producto3'];
console.log(carrito.length)
for (let i = 0; i < carrito.length; i++) {
    console.log(` En el carrito hay: ${carrito[i]} `);
}
// While loop 
let i = 0;
while (i<carrito.length) {
    console.log(carrito[i]);
    i++;
}