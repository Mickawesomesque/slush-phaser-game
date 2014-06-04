'use strict';

var Preloader = module.exports = function () { };

Preloader.prototype.preload = function () {
  //
};

Preloader.prototype.create = function () {
  this.game.state.start('play');
};
