class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload(){
        // loading bar code provided by Prof. Nathan Altice
        // code from Asset Bonanza repo on Github
        // set up loading bar
        // see: https://rexrainbow.github.io/phaser3-rex-notes/docs/site/loader/
        let loading = this.add.graphics();
        // see: https://photonstorm.github.io/phaser3-docs/Phaser.Loader.Events.html
        this.load.on('progress', (value)=> {
            loading.clear();                            // reset fill/line style
            loading.fillStyle(0xFACADE, 1);             // (color, alpha)
            loading.fillRect(20, 300, 600*value, 15);  // (x, y, width, height)
        });
        this.load.on('complete', ()=> {
            loading.destroy();
        });


        // load audio
        this.load.audio('sfx_select', './assets/blip_select12.wav');
        this.load.audio('sfx_explosion', './assets/explosion38.wav');
        this.load.audio('sfx_rocket', './assets/rocket_shot.wav');

        // looping background music is from Fesliyan Studios, https://www.fesliyanstudios.com/royalty-free-music/downloads-c/8-bit-music/6
        this.load.audio('sfx_music', './assets/1min-2021-08-16_-_8_Bit_Adventure_-_www.FesliyanStudios.com.mp3'); 
        this.load.image('menu', './assets/title_screen.png');
    }
    
    create() {
        this.menuScreen = this.add.tileSprite(0, 0, 640, 480, 'menu').setOrigin(0, 0);
        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

        // initialize music
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
                // gameTimer: 500, // for testing
                timeAdd: 5000
            }
            this.sound.play('sfx_select');
            this.scene.start('playScene');
        }
    }
}