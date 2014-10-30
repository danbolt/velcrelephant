module Velcrelephant.State
{
  export class Menu extends Phaser.State
  {
    background: Phaser.Sprite;
    title;

    create()
    {
      this.stage.backgroundColor = 0x000000;
      this.title = this.add.text(320, 240, 'Velcrelephant',
        { font: '64pt Futura', fill: 'white', stroke: 'black', strokeThickness: 5});
      this.title.anchor.set(0.5);
      this.input.onDown.addOnce(() =>
      {
        this.game.state.start('main');
      });
    }
  }
}
