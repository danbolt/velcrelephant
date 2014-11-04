/// <reference path="../Prefab/Player.ts" />

module Velcrelephant.State
{
  export class Main extends Phaser.State
  {
    private map;
    private backgroundLayer;
    private foregroundLayer;

    create()
    {
      this.stage.backgroundColor = 0x000000;

      this.map = this.game.add.tilemap('polkadots');

      this.map.addTilesetImage('polkaDotSheet', 'polkadots-sheet');

      this.backgroundLayer = this.map.createLayer('background');
      this.foregroundLayer = this.map.createLayer('foreground');

      this.backgroundLayer.resizeWorld();
      this.foregroundLayer.resizeWorld();

      var player = new Prefab.Player(this.game, 10, 10);
      this.game.physics.enable(player, Phaser.Physics.ARCADE);
    }
  }
}
