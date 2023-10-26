// Igor Bessa
// Rocket Patrol: ReMix 
// ~10 hours
// Mod List: 
// Kill streak counter (3pts): used a global variable to keep track of the "kill streak", collision counts it up and missing resets it to 0 
// Time remaining display (3pts): used the Phaser timer event to display the time counting down  
// Looping background music (1pt): Royalty free background music plays on menu start
// New title Screen (3pts): Designed a new title screen using a pixel art editor, displays at the Menu scene
// Couldn't get power ups working in time :(
// Total points: 10
// Citations: 
// looping background music is from Fesliyan Studios, https://www.fesliyanstudios.com/royalty-free-music/downloads-c/8-bit-music/6

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