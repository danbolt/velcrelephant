/// <reference path="app/vendor/phaser-official/build/phaser.d.ts"/>

/// <reference path='State/Boot.ts'/>
/// <reference path='State/Preload.ts'/>
/// <reference path='State/Menu.ts'/>
/// <reference path='State/Main.ts'/>

module Velcrelephant
{
  export class Game extends Phaser.Game
  {
    constructor()
    {
      super(640, 480, Phaser.AUTO, 'game-div', null, false, false, Phaser.Physics.ARCADE);

      this.state.add('boot', State.Boot);
      this.state.add('preload', State.Preload);
      this.state.add('menu', State.Menu);
      this.state.add('main', State.Main);

      this.state.start('boot');
    }
  }
}

window.onload = () =>
{
  var game = new Velcrelephant.Game();
  game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
  game.scale.pageAlignHorizontally = true;
  game.scale.pageAlignVertically = true;
}
