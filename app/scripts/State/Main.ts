/// <reference path="../Prefab/Player.ts" />
/// <reference path="../Prefab/Enemy.ts" />

module Velcrelephant.State
{
  export class Main extends Phaser.State
  {
    player;
    enemies;
    ground;

    private map;
    private backgroundLayer;
    private foregroundLayer;
    private barriers;

    create()
    {
      this.game.physics.startSystem(Phaser.Physics.P2JS);

      this.stage.backgroundColor = 0xf5f1de;
      this.game.physics.p2.gravity.y = 1000;

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
      this.game.physics.p2.enable(this.player, false, true);

      this.map.setCollisionByExclusion([], true, this.foregroundLayer);
      this.map.setCollisionByExclusion([], true, this.barriers);

      // This is optimized to turn adjacent tiles into bigger compound shapes. Keep note!
      this.game.physics.p2.convertTilemap(this.map, 'foreground', true, true);

      this.enemies = this.game.add.group();
      var enemyCoords = [[400,96], [550,0], [550,350], [700,350]];
      for (var i = 0; i < enemyCoords.length; i++)
      {
        var enemy = new Prefab.Enemy(this.game, enemyCoords[i][0], enemyCoords[i][1]);
        this.enemies.add(enemy);
        this.game.physics.p2.enable(enemy, false, true);
      }

      this.game.camera.follow(this.player);


    }

    update()
    {
      /*
      this.game.physics.arcade.collide(this.player, this.foregroundLayer);
      this.game.physics.arcade.collide(this.enemies, this.foregroundLayer);
      this.game.physics.arcade.collide(this.enemies, this.barriers);
      this.game.physics.arcade.overlap(this.player, this.enemies, this.stick, this.test, this);
      this.game.physics.arcade.overlap(this.player, this.enemies, this.bonk);
      */

      this.game.debug.spriteInfo(this.player, 10, 10);
    }

    bonk(player, enemy)
    {
      if (player.body.overlapY > 0 && player.body.overlapY == enemy.body.overlapY && player.body.touching.down)
      {
        enemy.destroy(); // only kill from overhead
        player.body.velocity.y = -600;
      }/*
      else if (player.body.overlapX > 0 && player.body.overlapX == enemy.body.overlapX)
      {
        this.game.debug.spriteInfo(enemy, 32, 100);
        this.stuckObjects.add(enemy);
      }*/
    }
    stick(player, enemy)
    {
      this.game.debug.spriteInfo(enemy, 32, 100);
      enemy.body.velocity.x = player.body.velocity.x;
      enemy.body.velocity.y = player.body.velocity.y;
    }
    test(player, enemy)
    {
      player.position.x + player.width <= enemy.position.x ||
      player.position.y + player.height <= enemy.position.y ||
      player.position.x >= enemy.position.x + enemy.width ||
      player.position.y >= enemy.position.y + enemy.height;
    }
  }
}
