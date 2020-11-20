// Esta funcion MediaPlayer funciona como una clase, pero es un prototype
function MediaPlayer(config) {
  // this.media tendra el elemento de video almacenado
  // .element es un atributo del objeto config
  this.media = config.element;
  this.plugins = config.plugins || [];
  this._initPlugins();
}



MediaPlayer.prototype._initPlugins = function _initPlugins() {
  const player = {
    play: () => this.play(),
    pause: () => this.pause(),
    playAndPause: () => this.playAndPause,
    media: this.media,
    set muted(value) {
      this.media.muted = value;
    } 
  }
  
  this.plugins.forEach((plugin) => {
    plugin.run(player);
  });



};
MediaPlayer.prototype.mute = function mute(value){
  this.media.muted = value;
};
MediaPlayer.prototype.play = function play(){
  this.media.play();
};
MediaPlayer.prototype.pause = function pause(){
  this.media.pause();
};

// // La clase MediaPlayer tiene un metodo llamado playAndPause

MediaPlayer.prototype.playAndPause = function playAndPause() {
  
  if (this.media.paused) {
    this.media.play();
  } else {
    this.media.pause();
  }
};
MediaPlayer.prototype.muteAndUnmute = function muteAndUnmute() {
  if (this.media.muted) {
    this.media.muted = false;
  } else {
    this.media.muted = true;
  }
};

export default MediaPlayer;
