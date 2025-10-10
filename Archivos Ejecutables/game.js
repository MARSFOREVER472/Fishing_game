// --- INITIALIZE CANVAS AND CONTEXT ---

const canvas = document.getElementById('gameCanvas');
const context = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 600;

// --- GAME VARIABLES ---

let score = 0;
let gameFrame = 0;
const fishes = [];
const mouse = {

    x: canvas.width / 2,
    y: 0, 
    
    // START THE HOOK AT THE TOP.

    hooking: false // TRACKS IF THE MOUSE IS PRESSED...

};

// --- UPDATE SCORE DISPLAY ---

const scoreDisplay = document.getElementById('score');

// --- GAME OBJECT CLASSES ---

class Fish
{
    constructor()
    {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height * 0.7 + canvas.height * 0.2; // KEEP FISH IN THE WATER...
        this.radius = 20;
        this.speedX = Math.random() * 2 - 1 // -1 TO 1 
        this.speedY = Math.random() * 2 - 1 // -1 TO 1 
        this.color = `hsl(${Math.random() * 360}, 50%, 50%)`;
    }

    update()
    {
        this.x += this.speedX;
        this.y += this.speedY;

        // BOUNCE OFF CANVAS EDGES...
        
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < canvas.height * 0.2 || this.y > canvas.height) this.speedY *= -1;
    }

    draw()
    {
        context.fillStyle = this.color;
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fill();
    }
}

// --- EVENT LISTENERS ---

canvas.addEventListener('mousemove', function(e)
{
    mouse.x = e.clientX - canvas.getBoundingClientRect().left;
});

canvas.addEventListener('mousedown', function()
{
    mouse.hooking = true;
});

canvas.addEventListener('mouseup', function()
{
    mouse.hooking = false;
});
