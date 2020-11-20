function AutoPlay() {}

AutoPlay.prototype.run = function run(player) {
  player.muted = true;
  player.play();
};

export default AutoPlay;
