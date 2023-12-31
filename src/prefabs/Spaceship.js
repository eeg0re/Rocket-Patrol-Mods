// Spaceship prefab
class Spaceship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue){
        super(scene, x, y, texture, frame);
        scene.add.existing(this);               // add to our existing scene
        this.points = pointValue;
        this.moveSpeed = game.settings.spaceshipSpeed;
    }

    update(){
        // move spaceship left
        this.x -= this.moveSpeed;
        // wrap around left edge to right edge
        if(this.x <= 0 - this.width){
            this.reset();
        }
    }

    // reset the rocket's position
    reset(){
        this.x = game.config.width;
    }
}