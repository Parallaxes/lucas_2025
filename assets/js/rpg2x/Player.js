// Player.js
import GameEnv from './GameEnv.js';
import Railgun from './Railgun.js';  // Import the Railgun class

const SCALE_FACTOR = 20;
const STEP_FACTOR = 100;

class Player {
    constructor(sprite = null) {
        this.scale = { width: GameEnv.innerWidth, height: GameEnv.innerHeight };

        if (sprite) {
            this.sprite = new Image();
            this.sprite.src = sprite.src;
        } else {
            this.sprite = null;
        }

        this.size = GameEnv.innerHeight / SCALE_FACTOR;
        this.position = { x: 0, y: GameEnv.innerHeight - this.size };
        this.velocity = { x: 0, y: 0 };

        this.angle = 0;
        this.bindEventListeners();
        this.resize();

        this.railgun = new Railgun(this); // Use the imported Railgun
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
        GameEnv.ctx.save();
        GameEnv.ctx.translate(this.position.x + this.width / 2, this.position.y + this.height / 2);

        if (this.velocity.x || this.velocity.y) {
            this.angle = Math.atan2(this.velocity.y, this.velocity.x);
        }

        GameEnv.ctx.rotate(this.angle + Math.PI / 2);
        GameEnv.ctx.drawImage(
            this.sprite,
            -this.width / 2, -this.height / 2,
            this.width, this.height
        );

        GameEnv.ctx.restore();

        this.railgun.draw(); // Draw the railgun bullets
    }

    update() {
        this.draw();

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

        const dx = mouseX - (this.position.x + this.width / 2);
        const dy = mouseY - (this.position.y + this.height / 2);

        this.angle = Math.atan2(dy, dx);

        const lerpFactor = 0.1;
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

    handleKeyUp({ keyCode }) {}
}

export default Player;

// :3