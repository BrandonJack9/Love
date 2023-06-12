class GameMenu extends Phaser.Scene {
    constructor() {
        super('GameMenu');
    }

    title1;
    thea;
    phil;
    
    preload(){
        this.load.path = './assets/';
        this.load.image('background', 'background.png');
        this.load.image('love','title.png');
        this.load.image('thea0', './thea_images/thea_smile.png');
        this.load.image('thea1', './thea_images/thea_happy.png');
        this.load.image('thea2', './thea_images/thea_flustered.png');
        this.load.image('phil0', 'philosopher0.png');
        this.load.image('phil1', 'philosopher1.png');
        this.load.image('teddy0', './teddy_blink/teddy_blink1.png');
        this.load.image('teddy1', './teddy_blink/teddy_blink2.png');    }
    create(){

        

        this.add.text(600, 900, 'click anywhere to begin', {fontFamily:'Georgia, serif', fontSize: 36,});
        this.physics.add.image(400, 300, 'background');
            
        this.title1 = this.physics.add.image(300, 180, 'love').setScale(.8);
        
        this.titlemoving = this.tweens.add({
            targets: this.title1.body.velocity,
            props: {
                
                y: { from: 50, to: -50, duration: 2000 }
            },
            ease: 'Sine.easeInOut',
            yoyo: true,
            repeat: -1
        });

        //thea animations
        
        this.anims.create({
            key: 'theaswitch', 
            frames: [
                    { key: 'thea0' },
                    { key: 'thea1' },
                    { key: 'thea2', duration: 50 },
            ],
            //delay: 150,
            frameRate: 1,
            repeat: -1
        });

       
        this.add.sprite(150, 450, 'thea0').setScale(.3)
        .play('theaswitch');

        //philosopher animations
        
        this.anims.create({
            key: 'philswitch', 
            frames: [
                    { key: 'phil0' },
                    { key: 'phil1' },
                   
            ],
            //delay: 150,
            frameRate: 1,
            repeat: -1
        });

        
        
        this.add.sprite(400, 450, 'phil0').setScale(.5)
        .play('philswitch');

        //teddy animations

        this.anims.create({
            key: 'teddyswitch', 
            frames: [
                    { key: 'teddy0' , duration: 2000},
                    { key: 'teddy1' , duration: 2},
                   
            ],
            //delay: 150,
            frameRate: 1,
            repeat: -1
        });

        
        
        this.add.sprite(650, 450, 'teddy0').setScale(.3)
        .play('teddyswitch');
        
       
       
        /*this.tweens.addCounter({
            targets: this.title1.body.velocity(),
            from: 0,
            to: 1,
            duration: 3000,
            yoyo: true,
            onUpdate: (tween) => {

                const v = tween.getValue();
                const c = 255 * v;

                text.setFontSize(20 + v * 64);
                text.setColor(`rgb(${c}, ${c}, ${c})`);
            }
        });*/
        
        

        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('town'));
        });

        
        
    }

}