'use strict';

// IMPORTANTE: las variables secretNumber, score y highscore se denominan 'variables de estado', ya que éstas variables son parte del 'estado de la aplicación', por eso SIEMPRE es bueno declarar variables que contengan los valores que sean relevantes de la aplicación para que siempre esten disponibles en nuestro código y no que dependan solo del DOM.


let secretNumber = Math.trunc(Math.random() * 20) + 1; // Número aleatorio entre 1 y 20.
let score = 20;
let highscore = 0;


document.querySelector('.check').addEventListener('click', function () {

   // Guardo el valor de entrada convertido a tipo de dato number. 
   const guess = Number(document.querySelector('.guess').value);

   // Cuando no se ingresa un valor de entrada.
   if (!guess) {
      document.querySelector('.message').textContent = '⛔ No Number!';

      // Cuando se adivina el número secreto. 
   } else if (guess === secretNumber) {
      if (score > highscore) {
         highscore = score;
         document.querySelector('.highscore').textContent = highscore;
      }

      document.querySelector('.message').textContent = '🎉 Correct Number!';
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.score').textContent = score;

      // Cuando el valor de entrada es mas alto que el número secreto.  
   } else if (guess > secretNumber) {
      if (score > 1) {
         score--;
         document.querySelector('.message').textContent = '📈 Too high!'; // Muy alto.
         document.querySelector('.score').textContent = score;
      } else {
         document.querySelector('.message').textContent = '💥 You lost the game!'
         document.querySelector('.score').textContent = 0;
      }

      // Cuando el valor de entrada es mas bajo que el número secreto.  
   } else if (guess < secretNumber) {
      if (score > 1) {
         score--;
         document.querySelector('.message').textContent = '📉 Too low!'; // Muy bajo.
         document.querySelector('.score').textContent = score;
      } else {
         document.querySelector('.message').textContent = '💥 You lost the game!'
         document.querySelector('.score').textContent = 0;
      }
   }
});


document.querySelector('.again').addEventListener('click', function () {
   secretNumber = Math.trunc(Math.random() * 20) + 1;
   score = 20;

   document.querySelector('.message').textContent = 'Start guessing...';
   document.querySelector('body').style.backgroundColor = '#222';
   document.querySelector('.number').style.width = '15rem';
   document.querySelector('.number').textContent = '?';
   document.querySelector('.guess').value = '';
   document.querySelector('.score').textContent = score;
});


/*

. RECOMENDACIÓN: Generalmente en una aplicación que tiene un valor de entrada (input), lo primero que debemos hacer es verificar si el usuario realmente ingresó algun valor y en caso de que no lo haya hecho debemos responder a eso de alguna manera, en este caso enviando un mensaje: '⛔ No Number!'.

OBS: Un valor de entrada vacio es un string vacio (''). En caso de convertirlo en tipo de dato number retorna un 0. Por lo tanto cualquiera de ambos valores dentro de una expresión lógica literal se evalúan como un falsy value.

*/