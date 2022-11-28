var bg,spaceShip_1_img,spaceShip_2_img
var canvas
var fuelImage, powerCoinImage, lifeImage;
var obstacle1Image, obstacle2Image;
var database, gameState;
var form, player, playerCount;
var allPlayers, Spaceship1, Spaceship2, fuels, powerCoins, obstacles;
var Spaceships = [];
var blastImage;
function preload(){
bg=loadImage("bg.png");
spaceShip_1_img=loadImage("Ss1.png");
spaceShip_2_img=loadImage("Ss2.png");
fuelImage = loadImage("fuel.png");
powerCoinImage = loadImage("goldCoin.png");
obstacle1Image = loadImage("obstacle1.png");
obstacle2Image = loadImage("./assets/obstacle2.png");
lifeImage = loadImage("life.png");
blastImage=loadImage("blast.png")
}
function setup(){
    canvas = createCanvas(windowWidth, windowHeight);
    database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}
function draw(){
    background(bg);
    if (playerCount === 2) {
        game.update(1);
      }
    
      if (gameState === 1) {
        game.play();
      }
    
      if (gameState === 2) {
        game.showLeaderboard();
        game.end();
      }
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }