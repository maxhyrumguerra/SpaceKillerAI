
class AIPlayer {
    constructor(x, y, role='crewmate') {
        this.x = x;
        this.y = y;
        this.speed = 1 + Math.random(); // variation
        this.role = role; // crewmate or impostor
        this.size = 30;
        this.target = { x: Math.random()*800, y: Math.random()*600 };
    }

    move() {
        let dx = this.target.x - this.x;
        let dy = this.target.y - this.y;
        let dist = Math.hypot(dx, dy);

        if (dist < 5) {
            this.target = { x: Math.random()*800, y: Math.random()*600 };
        } else {
            this.x += (dx/dist) * this.speed;
            this.y += (dy/dist) * this.speed;
        }
    }

    draw(ctx) {
        ctx.fillStyle = this.role === 'crewmate' ? 'green' : 'red';
        ctx.fillRect(this.x, this.y, this.size, this.size);
    }
}

// Create some AI
let aiPlayers = [];
for (let i = 0; i < 5; i++) {
    aiPlayers.push(new AIPlayer(Math.random()*800, Math.random()*600));
}
