import Phaser from "phaser";

class GameScene extends Phaser.Scene { //extens = from ... (for using in our project)
  constructor() {
    super({
      key: "GameScene", //identify something/naming
    }); //from Phasor.Game constructor

    this.bg;
    this.player;
    this.logs;
  }

  preload() { //load something in here for later use
    this.load.image(
      "dark-bg",
      "./assets/image/game-scene/background/background-dark.png"
    ); //crtl+d for selecting every same text/char for editing
    this.load.spritesheet(
      "goose",
      "./assets/image/game-scene/spritesheets/goose.png",
      {
        frameWidth: 252,
        frameHeight: 250,
      }
    );

    this.load.image('logs', './assets/image/game-scene/components/logs.png');
  }

  create() { //assign/create method
    //this.add.image(0, 0, 'dark-bg').setOrigin(0, 0);

    this.bg = this.add.tileSprite(0, 0, 1280, 720, "dark-bg").setOrigin(0, 0);
    this.player = this.physics.add.sprite(700, 350, 'goose');

    this.anims.create({
        key : 'walk',
        frames : this.anims.generateFrameNumbers('goose', {
            start : 0,
            end : 6
        }),
        frameRate : 10,
        repeat : -1 //unlimited
    })

    this.groupObject = this.physics.add.staticGroup();
    this.groupObject.create(0, 0, 'logs').setOrigin(0, 0);
    this.groupObject.create(200, 500, 'logs').setOrigin(0, 0);
    this.groupObject.create(500, 500, 'logs').setOrigin(0, 0);
  }

  update() { //run method/check
    this.bg.tilePositionX += 1;
    this.player.anims.play('walk', true);
  }
}

export default GameScene;
