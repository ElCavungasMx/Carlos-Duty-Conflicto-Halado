var gamestate = 0; //FALTA EL 0
var database;
var playercount;

var heroe1,heroe2;
var villano;
var rayosGroup;
var rayos;
function preload (){ 
    heroe1v = loadImage("Verde.png");
    heroe2v = loadImage("Rojo.png");
    villanov = loadImage("Villano.png");
    rayosv = loadImage("Rayo.png");
    fondo1 = loadImage("Fondo de batalla.jpg");
   
}
function setup() { 
    createCanvas(1200, displayHeight-50);
    database = firebase.database();

    heroe1 = createSprite(200,200);
    heroe2 = createSprite(200,250);
    villano = createSprite(200,300);
    rayos = createSprite(200,350);
    rayosGroup = new Group();
}

function draw() {
    background(fondo1);

    drawSprites();
}