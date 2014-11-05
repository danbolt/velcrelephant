module Velcrelephant.Prefab
{
  export class Player extends Phaser.Sprite
  {
    constructor(game: Phaser.Game, x: number, y: number)
    {
      super(game, x, y, 'player', 0);

      game.add.existing(this);
      this.anchor.setTo(.5, 1);
      this.animations.add('walk', [0,1], 10, true);

    }

    update()
    {
      // keyboard logic
      {
        var keyboard:Phaser.Keyboard = this.game.input.keyboard;

        if (keyboard.isDown(Phaser.Keyboard.RIGHT))
        {
          this.body.velocity.x = 100;
          this.animations.play('walk');
          this.scale.x = 1;
        }
        else if (keyboard.isDown(Phaser.Keyboard.LEFT))
        {
          this.body.velocity.x = -100;
          this.animations.play('walk');
          this.scale.x = -1;
        }
        else
        {
          this.body.velocity.x = 0;
          this.animations.frame = 0;
        }

        if (keyboard.isDown(Phaser.Keyboard.UP))
        {
          if (this.body.onFloor())
            this.body.velocity.y = -600;
        }
      }
    }
  }
}
