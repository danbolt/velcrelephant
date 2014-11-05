module Velcrelephant.State
{
  export class Preload extends Phaser.State
  {
    private preloadBar: Phaser.Sprite;

    preload()
    {
      this.preloadBar = this.add.sprite(0, 148, 'preload-bar');
      this.load.setPreloadSprite(this.preloadBar);

      this.load.spritesheet('player', 'assets/images/elephant.png', 171, 145, 2);
      this.load.image('enemy', 'assets/images/legenemy.png');
      this.load.image('ground', 'assets/images/wood.png');

      this.load.image('polkadots-sheet', 'assets/images/polkaDotSheet.png');

      this.load.tilemap('polkadots', 'assets/maps/someTileMapLevel.json', null, Phaser.Tilemap.TILED_JSON);

      // Load remaining assets here
    }

    create()
    {
      this.game.state.start('menu');
    }
  }
}
