'use strict';

var cfg = require('../../config');

window.addEventListener('load', function () {
  var game = new Phaser.Game(cfg.width, cfg.height, Phaser.AUTO);

  game.state.add('boot', require('./states/boot'));
  game.state.add('preloader', require('./states/preloader'));
  game.state.add('play', require('./states/play'));
  game.state.start('boot');
});
