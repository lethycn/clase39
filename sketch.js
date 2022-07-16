var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount;
var car1,car2;
var pista;
var carro1,carro2;
var gameState,cars=[];
var allPlayers;
function preload() {
  backgroundImage = loadImage("./assets/background.png");
  car1 = loadImage("car1.png");
  car2 = loadImage("car2.png");
  pista = loadImage("pista.jpg");

}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

}

function draw() {
  background(backgroundImage);
  if(playerCount==2){
game.update(1);

  }
  if (gameState==1){
game.play();

  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
