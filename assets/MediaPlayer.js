// Esta funcion MediaPlayer funciona como una clase, pero es un prototype
function MediaPlayer(confing) {
  // this.media tendra el elemento de video almacenado
  // .element es un atributo del objeto config
  this.media = confing.element;
  //this.plugins = confing.plugins || [];
}

// // La clase MediaPlayer tiene un metodo llamado playAndPause

MediaPlayer.prototype.playAndPause = function playAndPause() {
  if (this.media.paused) {
    this.media.play();
  } else {
    this.media.pause();
  }
};

export default MediaPlayer;
