'use strict';

// IMPORTANTE: las variables secretNumber, score y highscore se denominan 'variables de estado', ya que éstas variables son parte del 'estado de la aplicación', por eso SIEMPRE es bueno declarar variables que contengan los valores que sean relevantes de la aplicación para que siempre esten disponibles en nuestro código y no que dependan solo del DOM.

const displayMessage = message => document.querySelector('.message').textContent = message;
const displaySecretNumber = nro => document.querySelector('.number').textContent = nro;
const hideSecretNumber = () => document.querySelector('.number').textContent = '?';
const setScore = score => document.querySelector('.score').textContent = score;
const setHighscore = value => document.querySelector('.highscore').textContent = value;
const setInputValue = value => document.querySelector('.guess').value = value;
const getInputValue = () => document.querySelector('.guess').value;
const changeBoxWidth = value => document.querySelector('.number').style.width = value;
const changeBackgroundColor = color => document.querySelector('body').style.backgroundColor = color;

let secretNumber, score, highscore;

secretNumber = Math.trunc(Math.random() * 20) + 1; // Número aleatorio entre 1 y 20.
score = 20;
highscore = 0;

document.querySelector('.check').addEventListener('click', function () {

   const guess = Number(getInputValue());

   // Cuando no se ingresa un valor de entrada.
   if (!guess) {
      displayMessage('⛔ No Number!');

      // Cuando se adivina el número secreto. 
   } else if (guess === secretNumber) {
      if (score > highscore) {
         highscore = score;
         setHighscore(highscore);
      }

      displayMessage('🎉 Correct Number!');
      changeBackgroundColor('#60b347');
      changeBoxWidth('30rem');
      displaySecretNumber(secretNumber);
      setScore(score);

      // Cuando no se adivina el número secreto.  
   } else if (guess !== secretNumber) {
      if (score > 1) {
         score--;
         displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
         setScore(score);
      } else {
         displayMessage('💥 You lost the game!');
         setScore(0);
      }
   }
});

document.querySelector('.again').addEventListener('click', function () {
   secretNumber = Math.trunc(Math.random() * 20) + 1;
   score = 20;

   displayMessage('Start guessing...');
   changeBackgroundColor('#222');
   changeBoxWidth('15rem');
   hideSecretNumber();
   setInputValue('');
   setScore(score);
});


/*

. RECOMENDACIÓN: Generalmente en una aplicación que tiene un valor de entrada (input), lo primero que debemos hacer es verificar si el usuario realmente ingresó algun valor y en caso de que no lo haya hecho debemos responder a eso de alguna manera, en este caso enviando un mensaje: '⛔ No Number!'.

OBS: Un valor de entrada vacio es un string vacio (''). En caso de convertirlo en tipo de dato number retorna un 0. Por lo tanto cualquiera de ambos valores dentro de una expresión lógica literal se evalúan como un falsy value.

*/