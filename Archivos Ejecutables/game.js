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