// Igor Bessa
// TITLE TBD 
// ___ hours
// Mod List: 2 Power Ups (5pts), Time increasing with kills (5pts), Kill streak counter (3pts), Time remaining display (3pts), 
// Looping background music (1pt), New scrolling background (1pt)
// 

let config = {
    type: Phaser.AUTO, 
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
}
let game = new Phaser.Game(config);

// reserve keyboard vars
let keyF, keyR, keyLEFT, keyRIGHT;

// global streak variable
let streak = 0;
let songIsPlaying = false;

//set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;