import MediaPlayer from './MediaPlayer.js';

const video = document.querySelector('video');
const button = document.querySelector('button');

// player es una instancia de la clase MediaPlayer
// por medio de destructuracion de objetos el atributo element recibira como valor video
const player = new MediaPlayer({ element: video });

// cuando el boton es presionado se ejecuta la siguiente arrow function
// button.onclick = () => video.paused ? player.play() : player.pause;
button.onclick = () => player.playAndPause();
