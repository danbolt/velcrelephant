module Velcrelephant.State
{
  export class Preload extends Phaser.State
  {
    private preloadBar: Phaser.Sprite;

    preload()
    {
      this.preloadBar = this.add.sprite(0, 148, 'preload-bar');
      this.load.setPreloadSprite(this.preloadBar);

      this.load.image('tos', 'assets/images/tos.jpg');
      this.load.spritesheet('player', 'assets/images/elephant.png', 170, 145, 2);
      this.load.image('ground', 'assets/images/wood.png');

      // Load remaining assets here
    }

    create()
    {
      this.game.state.start('menu');
    }
  }
}
