'use strict';

var Menu = module.exports = function () {
  Phaser.State.call(this);
};
Menu.prototype = Object.create(Phaser.State.prototype);
Menu.prototype.constructor = Menu;

Menu.prototype.preload = function () {
  //
};

Menu.prototype.create = function () {
  this.game.state.start('play');
};
