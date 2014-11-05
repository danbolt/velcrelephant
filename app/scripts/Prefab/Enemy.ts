module Velcrelephant.Prefab
{
  export class Enemy extends Phaser.Sprite
  {
    private direction: string;
    constructor(game: Phaser.Game, x: number, y: number)
    {
      super(game, x, y, 'enemy', 0);

      game.add.existing(this);
      this.direction = 'left';
      this.anchor.setTo(.5, 1);

      this.scale.x = 0.18713;
      this.scale.y = 0.18713;
      
      this.game.time.events.repeat(Phaser.Timer.SECOND * 5, 0, this.move, this);      
    }

    update()
    {
    }

    move()
    {
      if (this.direction == 'left')
      {
        this.body.velocity.x = -50;
        this.direction = 'right';
      }
      else
      {
        this.body.velocity.x = 50;
        this.direction = 'left';
      }
      this.game.time.events.repeat(Phaser.Timer.SECOND * 5, 0, this.move, this);
    }
  }
}
