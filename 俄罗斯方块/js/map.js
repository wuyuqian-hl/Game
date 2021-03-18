(function(){
  window.Map = function(){
    this.mapCode = [
      //地图的矩阵
      [0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,4,0,0,0,0,0],
      [0,0,0,0,0,5,1,0,0,0,0,0],
      [2,3,4,5,3,7,6,5,0,0,0,0],
      //最后一行是占位，为了不让浏览器报错
      [9,9,9,9,9,9,9,9,9,9,9,9]
    ]
  };
  Map.prototype.render = function(mapCame){
    for(var i = 0 ; i < mapCame.row ; i++){
      for(var j = 0 ; j < mapCame.col ; j ++){
        if(this.mapCode[i][j] != 0){
          game.setColor(i , j ,this.mapCode[i][j])
        }
      }
    }
  }
  Map.prototype.Remove = function(){
    for(var i = 0 ; i < 20 ; i++){
      if(this.mapCode[i].indexOf(0) == -1){
        this.mapCode.splice(i,1);
        this.mapCode.unshift([0,0,0,0,0,0,0,0,0,0,0,0])
        if(game.sudu <= 30 && game.sudu >= 20){
          game.sorce+=10;
        }else if(game.sudu < 20 && game.sudu >= 10){
          game.sorce +=20;
        }else{
          game.sorce += 30;
        }
        document.getElementById("sorce").innerHTML = "分数:" +game.sorce;
        if(game.sorce % 100 == 0){
          game.sudu -=5;
        }
      };
      
    }
  }
})()