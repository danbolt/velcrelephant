/// <reference path="../Prefab/Player.ts" />

module Velcrelephant.State
{
  export class Main extends Phaser.State
  {
    create()
    {
      this.stage.backgroundColor = 0x000000;

      var player1 = new Prefab.Player(this.game, 10, 10);
      this.game.physics.enable(player1, Phaser.Physics.ARCADE);
    }
  }
}
