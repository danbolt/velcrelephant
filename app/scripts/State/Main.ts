/// <reference path="../Prefab/Player.ts" />

module Velcrelephant.State
{
  export class Main extends Phaser.State
  {
    create()
    {
      this.stage.backgroundColor = 0x000000;

      var player = new Prefab.Player(this.game, 85, 145);
      this.game.physics.enable(player, Phaser.Physics.ARCADE);
    }
  }
}
