
var canvas, bgImg;
var gameState = 0;
var engine, world;
var bg, bgImg;
var score = 0;
var rock, rockImg, ship, shipImg,satelliteImg;

function preload() {
    bgImg = loadImage("images/bg.jpg");
 
    rockImg = loadImage("images/rock.png");
  
    shipImg = loadImage("images/ship.png");

    satelliteImg = loadImage("images/satellite.png");

    reImg = loadImage("images/over.png");
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);

    ship = createSprite(width/2,height-100);
    ship.addImage(shipImg);
    ship.scale = 0.5;

     
}

function draw() {
    background(bgImg);

    ship.x = mouseX;

    if(keyDown("space")){
        spawnSatellite();
    }

    

    spawnRocks()

    drawSprites()

}

function spawnRocks() {
    if (frameCount % 80 === 0) {
        rock = createSprite(random(100, width-100), 0, 100, 100);
        rock.velocityY = 6;
        rock.addImage(rockImg);
        rock.scale = 0.5
    }
}


function spawnSatellite() {
    //if (frameCount % 80 === 0) {
        satellite = createSprite(ship.x , ship.y-70 , 100, 100);
        satellite.velocityY = -7;
        satellite.addImage(satelliteImg);
        satellite.scale = 0.25
   // }
}