class Player {
  constructor() {
    this.name=null;
    this.index=null;
    this.positionx=0;
    this.positiony=0;
    this.rank = 0;
    this.score =0 ;

  }
  addPlayer(){
    var playerIndex= "players/player"+this.index;
    if (this.index== 1 ){
        this.positionx = width/2-100;

    }else {
      this.positionx = width/2+100;
    }
    database.ref(playerIndex).set({
     name:this.name,
     positionx:this.positionx,
     positiony:this.positiony,
     rank:this.rank,
     score:this.score
     
    })
  }
  getDistance() {
     var playerDistanceRef = database.ref("players/player" + this.index);
      playerDistanceRef.on("value", data => { var data = data.val();
         this.positionx = data.positionx;
          this.positiony = data.positiony; }); 
        }

  getCount(){
    var playerref= database.ref("playerCount");
    playerref.on("value",data =>{
      playerCount = data.val();
    })
  }
  updateCount(count){
database.ref("/").update({
  playerCount:count

})

  }
  update() {
     var playerIndex = "players/player" + this.index; 
     database.ref(playerIndex).update({
        positionx: this.positionx,
       positiony: this.positiony, 
       rank: this.rank, 
       score: this.score });
     }

  static getPlayer(){
    var playerInfo= database.ref("players");
    playerInfo.on("value",data =>{
      allPlayers = data.val();
    })
  }
}
