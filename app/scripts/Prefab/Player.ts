module Velcrelephant.Prefab
{
  export class Player extends Phaser.Sprite
  {
    constructor(game: Phaser.Game, x: number, y: number)
    {
      super(game, x, y, 'player', 0);

      this.crop(new Phaser.Rectangle(64, 0, 16, 16));

      game.add.existing(this);
    }

    update()
    {
      // keyboard logic
      {
        var keyboard:Phaser.Keyboard = this.game.input.keyboard;

        if (keyboard.isDown(Phaser.Keyboard.RIGHT))
        {
          this.body.velocity.x = 25;
        }
        else if (keyboard.isDown(Phaser.Keyboard.LEFT))
        {
          this.body.velocity.x = -25;
        }
        else
        {
          this.body.velocity.x = 0;
        }

        if (keyboard.isDown(Phaser.Keyboard.DOWN))
        {
          this.body.velocity.y = 25;
        }
        else if (keyboard.isDown(Phaser.Keyboard.UP))
        {
          this.body.velocity.y = -25;
        }
        else
        {
          this.body.velocity.y = 0;
        }
      }
    }
  }
}
