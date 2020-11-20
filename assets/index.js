import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';
import AutoPause from './plugins/AutoPause.js';

const video = document.querySelector('video');
const playButton = document.getElementById('play');
const muteButton = document.getElementById('mute');

// player es una instancia de la clase MediaPlayer
// por medio de destructuracion de objetos el atributo element recibira como valor video
const player = new MediaPlayer({ 
    element: video, 
    plugins: [ new AutoPlay(), new AutoPause()],


});

// cuando el boton es presionado se ejecuta la siguiente arrow function
// playButton.onclick = () => video.paused ? player.play() : player.pause;
playButton.onclick = () => player.playAndPause();
muteButton.onclick = () => player.muteAndUnmute();
