/// <reference path="../Prefab/Player.ts" />
/// <reference path="../Prefab/Enemy.ts" />

module Velcrelephant.State
{
  export class Main extends Phaser.State
  {
    player;
    enemy;
    ground;

    private map;
    private backgroundLayer;
    private foregroundLayer;
    private barriers;

    create()
    {
      this.stage.backgroundColor = 0xf5f1de;
      this.game.physics.arcade.gravity.y = 1000;

      this.map = this.game.add.tilemap('polkadots');

      this.map.addTilesetImage('polkaDotSheet', 'polkadots-sheet');

      this.backgroundLayer = this.map.createLayer('background');
      this.foregroundLayer = this.map.createLayer('foreground');
      this.barriers = this.map.createLayer('barriers');

      this.backgroundLayer.resizeWorld();
      this.foregroundLayer.resizeWorld();
      this.barriers.resizeWorld();

      this.barriers.visible = false;

      this.player = new Prefab.Player(this.game, 85, 0);
      this.game.physics.arcade.enableBody(this.player);

      this.map.setCollisionByExclusion([], true, this.foregroundLayer);
      this.map.setCollisionByExclusion([], true, this.barriers);

      this.enemy = new Prefab.Enemy(this.game, 550, 0);
      this.game.physics.arcade.enableBody(this.enemy);

      this.game.camera.follow(this.player);
    }

    update()
    {
      this.game.physics.arcade.collide(this.player, this.foregroundLayer);
      this.game.physics.arcade.collide(this.enemy, this.foregroundLayer);
      this.game.physics.arcade.collide(this.enemy, this.barriers);
      this.game.physics.arcade.collide(this.player, this.enemy, this.bonk);
    }

    bonk (player, enemy)
    {
      if (player.body.overlapY > 0 && enemy.body.overlapY > 0 && player.body.touching.down)
        enemy.destroy(); // only kill from overhead
    }
  }
}
