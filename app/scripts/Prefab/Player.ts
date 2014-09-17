module Velcrelephant.Prefab
{
  export class Player extends Phaser.Sprite
  {
    constructor(game: Phaser.Game, x: number, y: number)
    {
      super(game, x, y, 'player', 0);

      //loadTexture('sheet-princeProtect', 0, false);

      game.add.existing(this);
    }

    update()
    {
      // Update prefab here
    }
  }
}
