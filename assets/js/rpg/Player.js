import GameEnv from './GameEnv.js';

class Railgun {
    constructor(player) {
        this.player = player;
        this.bullets = [];
    }

    shoot() {
        const bullet = {
            x: this.player.position.x + this.player.width / 2,
            y: this.player.position.y + this.player.height / 2,
            velocity: {
                x: Math.cos(this.player.angle) * 10,
                y: Math.sin(this.player.angle) * 10
            }
        };
        this.bullets.push(bullet);
    }

    update() {
        this.bullets.forEach((bullet, index) => {
            bullet.x += bullet.velocity.x;
            bullet.y += bullet.velocity.y;

            // Remove bullets that are out of bounds
            if (
                bullet.x < 0 || bullet.x > GameEnv.innerWidth ||
                bullet.y < 0 || bullet.y > GameEnv.innerHeight
            ) {
                this.bullets.splice(index, 1);
            }
        });
    }

    draw() {
        this.bullets.forEach(bullet => {
            GameEnv.ctx.beginPath();
            GameEnv.ctx.arc(bullet.x, bullet.y, 5, 0, Math.PI * 2);
            GameEnv.ctx.fillStyle = 'yellow';
            GameEnv.ctx.fill();
            GameEnv.ctx.closePath();
        });
    }
}

const SCALE_FACTOR = 25; // 1/nth of the height of the canvas
const STEP_FACTOR = 100; // 1/nth, or N steps up and across the canvas
// Removed unused ANIMATION_RATE constant

class Player {
    constructor(sprite = null) {
        this.scale = { width: GameEnv.innerWidth, height: GameEnv.innerHeight };

        if (sprite) {
            this.sprite = new Image();
            this.sprite.src = sprite.src; // Load the singular sprite
        } else {
            // Default to red square
            this.sprite = null;
        }

        this.size = GameEnv.innerHeight / SCALE_FACTOR;
        this.position = { x: 0, y: GameEnv.innerHeight - this.size };
        this.velocity = { x: 0, y: 0 };

        this.angle = 0; // Initialize angle for rotation
        this.bindEventListeners();
        this.resize();

        this.railgun = new Railgun(this); // Initialize the railgun
    }

    resize() {
        const newScale = { width: GameEnv.innerWidth, height: GameEnv.innerHeight };
        this.position.x = (this.position.x / this.scale.width) * newScale.width;
        this.position.y = (this.position.y / this.scale.height) * newScale.height;

        this.scale = newScale;
        this.size = this.scale.height / SCALE_FACTOR;
        this.xVelocity = this.scale.width / STEP_FACTOR;
        this.yVelocity = this.scale.height / STEP_FACTOR;

        this.width = this.size;
        this.height = this.size;
    }

    draw() {
        GameEnv.ctx.save(); // Save the current context
        GameEnv.ctx.translate(this.position.x + this.width / 2, this.position.y + this.height / 2); // Move to the player center

        // Determine angle based on velocity
        if (this.velocity.x || this.velocity.y) {
            this.angle = Math.atan2(this.velocity.y, this.velocity.x); // Calculate the angle
        }

        GameEnv.ctx.rotate(this.angle + Math.PI / 2); // Rotate the canvas and adjust for correct orientation
        GameEnv.ctx.drawImage(
            this.sprite,
            -this.width / 2, -this.height / 2, // Center the sprite
            this.width, this.height // Destination width and height
        );

        GameEnv.ctx.restore(); // Restore the context

        this.railgun.draw(); // Draw the railgun bullets
    }

    update() {
        this.draw();
    
        // Ensure the player stays within the canvas boundaries
        if (this.position.y + this.height > GameEnv.innerHeight) {
            this.position.y = GameEnv.innerHeight - this.height;
        }
        if (this.position.y < 0) {
            this.position.y = 0;
        }
        if (this.position.x + this.width > GameEnv.innerWidth) {
            this.position.x = GameEnv.innerWidth - this.width;
        }
        if (this.position.x < 0) {
            this.position.x = 0;
        }
    
        this.railgun.update(); // Update the railgun bullets
    }
    

    bindEventListeners() {
        addEventListener('mousemove', this.handleMouseMove.bind(this));
        addEventListener('keydown', this.handleKeyDown.bind(this));
        addEventListener('keyup', this.handleKeyUp.bind(this));
    }

    handleMouseMove(event) {
        const rect = GameEnv.canvas.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;
    
        // Calculate the direction vector from player to mouse
        const dx = mouseX - (this.position.x + this.width / 2);
        const dy = mouseY - (this.position.y + this.height / 2);
    
        // Update the angle based on mouse position
        this.angle = Math.atan2(dy, dx); // Calculate the angle towards the mouse
    
        // Use linear interpolation to move the spaceship towards the mouse smoothly
        const lerpFactor = 0.1; // Adjust this value to control the "trail" effect
        this.position.x += dx * lerpFactor;
        this.position.y += dy * lerpFactor;
    }
    
    
    
    

    handleKeyDown({ keyCode }) {
        switch (keyCode) {
            case 32: // 'Space' key
                this.railgun.shoot();
                break;
        }
    }

    handleKeyUp({ keyCode }) {
        // No need to handle key up events for movement anymore
    }
}

export default Player;
