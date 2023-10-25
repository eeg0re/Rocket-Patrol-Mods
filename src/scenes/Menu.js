class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload(){
        // load audio
        this.load.audio('sfx_select', './assets/blip_select12.wav');
        this.load.audio('sfx_explosion', './assets/explosion38.wav');
        this.load.audio('sfx_rocket', './assets/rocket_shot.wav');

        // looping background music is from Fesliyan Studios, https://www.fesliyanstudios.com/royalty-free-music/downloads-c/8-bit-music/6
        this.load.audio('sfx_music', './assets/1min-2021-08-16_-_8_Bit_Adventure_-_www.FesliyanStudios.com.mp3'); 
        this.load.image('menu', './assets/title_screen.png');
    }
    
    create() {
        /*
        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        
        // show menu text
        this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, 'ROCKET PATROL', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2, 'Use <--> arrows to move & (F) to fire', menuConfig).setOrigin(0.5);
        menuConfig.backgroundColor = '#00FF00';
        menuConfig.color = '#000';
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, 'Press <- for Novice or -> for Expert', menuConfig).setOrigin(0.5);
        */

        this.menuScreen = this.add.tileSprite(0, 0, 640, 480, 'menu').setOrigin(0, 0);
        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

        // initialize music
        let songIsPlaying = false;
        let gameSong = this.sound.add('sfx_music');
        gameSong.loop = true;
        
        if(songIsPlaying == false){
            songIsPlaying = true;
            gameSong.play();
        }
    }

    update(){
        if(Phaser.Input.Keyboard.JustDown(keyLEFT)){
            // easy mode
            game.settings = {
                spaceshipSpeed: 3,
                gameTimer: 60000,
                timeAdd: 10000
            }
            this.sound.play('sfx_select');
            this.scene.start('playScene');
        }

        if(Phaser.Input.Keyboard.JustDown(keyRIGHT)){
            // hard mode
            game.settings = {
                spaceshipSpeed: 4,
                gameTimer: 45000,
                timeAdd: 500
            }
            this.sound.play('sfx_select');
            this.scene.start('playScene');
        }
    }
}