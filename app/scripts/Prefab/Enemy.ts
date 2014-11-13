module Velcrelephant.Prefab
{
  export class Enemy extends Phaser.Sprite
  {
    constructor(game: Phaser.Game, x: number, y: number)
    {
      super(game, x, y, 'enemy', 0);

      game.add.existing(this);
      this.anchor.setTo(.5, 1);
      this.animations.add('walk', [0,1], 10, true);
    }

    update()
    {
      this.animations.play('walk');
      this.body.velocity.x = this.body.velocity.x || -50;
      if (this.body.blocked.left || this.body.touching.left)
      {
        this.body.x += 1; // don't trigger this again
        this.body.velocity.x = 50;
        this.scale.x = -1;
      }
      else if (this.body.blocked.right || this.body.touching.right)
      {
        this.body.x -= 1;  // don't trigger this again
        this.body.velocity.x = -50;
        this.scale.x = 1;
      }
    }
  }
}
