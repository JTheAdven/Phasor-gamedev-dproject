import 'phaser';
import Phaser, { Game } from 'phaser';
import GameScene from './scenes/gameScene';

const config = {
    type : Phaser.AUTO,
    width : 1280,
    height : 720,
    parent : 'content',
    backgroundColor : '#000',
    physics : {
        default : 'arcade',
        arcade : {
            gravity : {y : 100},
            debug : false
        }
    },
    scene : [GameScene]
}
let game = new Phaser.Game(config);