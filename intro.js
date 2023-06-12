

class town extends Phaser.Scene
{
    constructor ()
    {
        super('town');
    }

    preload ()
    {
        this.load.path = './assets/';
        this.load.image('playerright', 'playerright.png');
        this.load.image('ship', 'assets/sprites/fmship.png');
    }

    create ()
    {
        this.cameras.main.setBounds(0, 0, 1024, 2048);

        this.add.image(0, 0, 'map').setOrigin(0).setScrollFactor(1);

        this.cursors = this.input.keyboard.createCursorKeys();

        this.player = this.physics.add.image(400, 300, 'playerright').setCollideWorldBounds(true);

        this.cameras.main.startFollow(this.player, true);
        // this.cameras.main.startFollow(this.ship, true, 0.09, 0.09);

        this.cameras.main.setZoom(3);
    }

    update ()
    {
        this.player.setVelocity(0);

        if (this.cursors.left.isDown)
        {
            this.player.setAngle(-90).setVelocityX(-200);
        }
        else if (this.cursors.right.isDown)
        {
            this.player.setAngle(90).setVelocityX(200);
        }

        if (this.cursors.up.isDown)
        {
            this.player.setAngle(0).setVelocityY(-200);
        }
        else if (this.cursors.down.isDown)
        {
            this.player.setAngle(-180).setVelocityY(200);
        }
    }
}