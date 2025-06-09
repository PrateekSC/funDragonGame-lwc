import { LightningElement } from 'lwc';
import jumpSound from '@salesforce/resourceUrl/jump_sound';
import hitSound from '@salesforce/resourceUrl/hit_sound';

export default class DragonGame extends LightningElement {
    dragon;
    fireball;
    jumpAudio;
    hitAudio;
    isJumping = false;

    connectedCallback() {
        document.addEventListener('keydown', this.handleKeyDown.bind(this));

        this.jumpAudio = new Audio(jumpSound);
        this.hitAudio = new Audio(hitSound);

        setTimeout(() => {
            this.dragon = this.template.querySelector('.dragon');
            this.fireball = this.template.querySelector('.fireball');
            this.startCollisionCheck();
        }, 100);
    }

    handleKeyDown(event) {
        if (event.code === 'Space' && !this.isJumping) {
            this.jump();
        }
    }

    jump() {
        this.isJumping = true;
        this.dragon.classList.add('jump');
        this.jumpAudio.play();

        setTimeout(() => {
            this.dragon.classList.remove('jump');
            this.isJumping = false;
        }, 500);
    }

    startCollisionCheck() {
        const checkInterval = setInterval(() => {
            const dragonRect = this.dragon.getBoundingClientRect();
            const fireballRect = this.fireball.getBoundingClientRect();

            const isCollision = (
                dragonRect.left < fireballRect.right &&
                dragonRect.right > fireballRect.left &&
                dragonRect.bottom > fireballRect.top
            );

            if (isCollision && !this.isJumping) {
                this.hitAudio.play();

                clearInterval(checkInterval);
                this.fireball.style.animation = 'none';

                setTimeout(() => {
                    alert('Game Over! Refreshing the game...');
                    location.reload(); 
                }, 100);
            }
        }, 50);
    }
}