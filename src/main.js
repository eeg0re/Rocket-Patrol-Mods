// Igor Bessa
// TITLE TBD 
// ___ hours
// Mod List: Power Ups (5pts), Kill streak counter (3pts), Time remaining display (3pts), Time increasing with kills (5pts),
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

//set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;