'use strict';

var Preloader = module.exports = function () {
  Phaser.State.call(this);
};
Preloader.prototype = Object.create(Phaser.State.prototype);
Preloader.prototype.constructor = Preloader;

Preloader.prototype.preload = function () {
  //
};

Preloader.prototype.create = function () {
  this.game.state.start('menu');
};
