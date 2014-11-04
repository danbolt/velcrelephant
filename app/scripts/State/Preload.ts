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
      this.load.image('player', 'assets/images/test-sheet.png');
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
