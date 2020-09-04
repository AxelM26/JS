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
const persona = {
    nombre: 'Axel'
};

// Object constructor
function Tarea (nombre, urgencia){
    this.nombre = nombre;
    this.urgencia = urgencia;
}

// Crear nuevas tareas
const tarea1 = new Tarea('Aprender JS', 'Urgente');

console.log(tarea1);