module Velcrelephant.Prefab
{
  export class Player extends Phaser.Sprite
  {
    constructor(game: Phaser.Game, x: number, y: number)
    {
      super(game, x, y, 'player', 0);

      game.add.existing(this);
    }

    update()
    {
      // keyboard logic
      {
        var keyboard:Phaser.Keyboard = this.game.input.keyboard;

        if (keyboard.isDown(Phaser.Keyboard.RIGHT))
        {
          this.x += 2;
        }
        else if (keyboard.isDown(Phaser.Keyboard.LEFT))
        {
          this.x -= 2;
        }

        if (keyboard.isDown(Phaser.Keyboard.DOWN))
        {
          this.y += 2;
        }
        else if (keyboard.isDown(Phaser.Keyboard.UP))
        {
          this.y -= 2;
        }
      }
    }
  }
}
