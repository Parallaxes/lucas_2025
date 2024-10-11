import GameEnv from './GameEnv'; // Ensure GameEnv is imported

// Define SCALE_FACTOR or import it if defined elsewhere

class Enemy {
    constructor(x, y) {
        // Check if GameEnv properties are available
        if (!GameEnv.innerWidth || !GameEnv.innerHeight) {
            console.error("GameEnv dimensions are not defined");
            return;
        }

        this.position = { x: x, y: y };
        this.scale = { width: GameEnv.innerWidth, height: GameEnv.innerHeight };
        this.size = this.scale.height / SCALE_FACTOR;
        this.speed = 2; // Adjust speed as needed
        this.angle = 0; // Initialize angle for rotation
    }

    resize() {
        // Check if GameEnv properties are available before resizing
        if (!GameEnv.innerWidth || !GameEnv.innerHeight) {
            console.error("GameEnv dimensions are not defined");
            return;
        }

        const newScale = { width: GameEnv.innerWidth, height: GameEnv.innerHeight };
        this.position.x = (this.position.x / this.scale.width) * newScale.width;
        this.position.y = (this.position.y / this.scale.height) * newScale.height;

        this.scale = newScale;
        this.size = this.scale.height / SCALE_FACTOR;
    }

    update(player) {
        // Calculate direction towards the player
        const dx = player.x - this.position.x;
        const dy = player.y - this.position.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Normalize direction and move towards the player
        if (distance > 0) {
            this.position.x += (dx / distance) * this.speed;
            this.position.y += (dy / distance) * this.speed;
        }

        // Determine angle based on direction
        if (dx || dy) {
            this.angle = Math.atan2(dy, dx); // Calculate the angle
        }
    }
}

export default Enemy;

// :3