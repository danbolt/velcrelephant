/// <reference path="../Prefab/Player.ts" />

module Velcrelephant.State
{
  export class Main extends Phaser.State
  {
    player;
    ground;
    create()
    {
      this.stage.backgroundColor = 0xf5f1de;
      this.game.physics.arcade.gravity.y = 1500;

      this.player = new Prefab.Player(this.game, 85, 430);
      this.game.physics.arcade.enableBody(this.player);

      this.ground = this.game.add.tileSprite(0, 430, 640, 50, 'ground');
      this.game.physics.arcade.enableBody(this.ground);
      this.ground.body.immovable = true;
      this.ground.body.allowGravity = false;
    }
    update()
    {
      this.game.physics.arcade.collide(this.player, this.ground);
    }
  }
}
