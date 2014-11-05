/// <reference path="../Prefab/Player.ts" />

module Velcrelephant.State
{
  export class Main extends Phaser.State
  {
    player;
    ground;

    private map;
    private backgroundLayer;
    private foregroundLayer;

    create()
    {
      this.stage.backgroundColor = 0xf5f1de;
      this.game.physics.arcade.gravity.y = 2500;

      this.map = this.game.add.tilemap('polkadots');

      this.map.addTilesetImage('polkaDotSheet', 'polkadots-sheet');

      this.backgroundLayer = this.map.createLayer('background');
      this.foregroundLayer = this.map.createLayer('foreground');

      this.backgroundLayer.resizeWorld();
      this.foregroundLayer.resizeWorld();

      this.player = new Prefab.Player(this.game, 85, 0);
      this.game.physics.arcade.enableBody(this.player);

      this.map.setCollisionByExclusion([], true, this.foregroundLayer);
    }

    update()
    {
      this.game.physics.arcade.collide(this.player, this.ground);

      this.game.physics.arcade.collide(this.player, this.foregroundLayer);
    }
  }
}
