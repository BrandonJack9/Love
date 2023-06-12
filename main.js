const config = {
    type: Phaser.AUTO,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    pixelArt: true,
    physics: {
        default: 'arcade',
    },
    scene: [GameMenu, town]
};
const game = new Phaser.Game(config);