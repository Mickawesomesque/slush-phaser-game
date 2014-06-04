'use strict';

var Boot = module.exports = function () { };

Boot.prototype.create = function () {
  if (this.game.device.desktop) {
    this.game.scale.setAlignHorizontally = true;
  }

  this.game.state.start('preloader');
};
