class Game {
  constructor() {
    this.resetTitle = createElement("h2");
    this.resetButton = createButton("");
    this.boarTitle = createElement("h2");
    this.leader1 = createElement("h2");
    this.leader2 = createElement("h2");

  }
getState(){
  var gameref = database.ref("gamestate");
  gameref.on("value",function(data){
    gameState =data.val();
  })
  
}
update(state){
  database.ref("/").update({
    gameState:state
  
  })
}
  start() {
    player = new Player();
    playerCount = player.getCount();
    form = new Form();
    form.display();
    carro1 = createSprite(width/2-50,height-100);
    carro1.addImage(car1);
    carro1.scale= 0.07;
      carro2 = createSprite(width/2+100,height-100);
      carro2.addImage(car2);
      carro2.scale= 0.07;
   cars = [carro1,carro2];

  }
handleElements (){
  form.hide();
  form.titleImg.position(40,50);
  form.titleImg.class("gameTitleAfterEffect");
    this.resetTitle.html("reiniciando...");
    this.resetTitle.class("resetText");
    this.resetTitle.position(width/2+280,40);
      this.resetButton.class("resetButton");
      this.resetButton.position(width/2+230,100);
        this.boarTitle.html("puntuacion:");
        this.boarTitle.class("resetText");
        this.boarTitle.position(width/3-60,40);
          this.leader1.class("leaderText");
          this.leader1.position(width/3-50,80);
            this.leader2.class("leaderText");
            this.leader2.position(width/3-50,130);
}
play (){
  this.handleElements();
  Player.getPlayer();
  if (allPlayers!==undefined){
  image(pista,0,-height*5,width,height*6);
    this.showLeaderBoar();
    var index = 0; 
    for (var plr in allPlayers) {
        index = index + 1; 
         var x = allPlayers[plr].positionx;
          var y = height - allPlayers[plr].positiony; 
          cars[index - 1].position.x = x; 
          cars[index - 1].position.y = y; 
          if (index == player.index) { 
            stroke(10); fill("red");
             ellipse(x, y, 60, 60); 
              camera.position.y = cars[index - 1].position.y;
             }
            }
    this.handlePlayerControls();

drawSprites();

  }

}
showLeaderBoar(){
  var leader1,leader2;
  var players=Object.values(allPlayers);
  if (players [0].rank==0 && players[1].rank==0|| players[0].rank==1){
    leader1=players[0].rank+"&emsp;"+players[0].name+"&emsp;"+players[0].score+"&emsp;";
    leader2=players[1].rank+"&emsp;"+players[1].name+"&emsp;"+players[1].score+"&emsp;";
  }
if (players[1].rank==1){
  leader1=players[1].rank+"&emsp;"+players[1].name+"&emsp;"+players[1].score+"&emsp;";
  leader2=players[0].rank+"&emsp;"+players[0].name+"&emsp;"+players[0].score+"&emsp;";

}
this.leader1.html(leader1);
this.leader2.html(leader2);

}
handlePlayerControls() { 
  if (keyIsDown(UP_ARROW))
   { player.positiony += 10;
     player.update();
   } 
  } 
}
