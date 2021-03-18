(function(){
  window.Block = function(){
    var typeBlock = ["J",'L','T','I','O','S','Z'];
    this.typeAll = typeBlock[parseInt(Math.random()* typeBlock.length)]
    this.type = fangkuai[this.typeAll].length;
    this.all = parseInt(Math.random()*this.type);
    this.code = fangkuai[this.typeAll][this.all];
    this.row = 0 ;
    this.col = 4;
  }
  Block.prototype.render = function(){
    for(var i = 0 ; i <4; i ++){
      for(var j = 0 ; j < 4 ; j ++){
        if(this.code[i][j] != 0){
          game.setColor( i + this.row , j + this.col, this.code[i][j])
        }
      }
    }
  }
  Block.prototype.check = function(row,col){
    for(var i = 0 ; i < 4; i ++){
      for(var j = 0 ; j < 4 ; j ++){
        if(this.code[i][j] != 0 && game.map.mapCode[i + row][j + col] !== 0){
          return false
        }
      }
    }
    return true
  }
  Block.prototype.testDom =function(){
    if(this.check(this.row + 1 ,this.col)){
      this.row++;
    }else{
      game.block = game.nextColor;
      game.nextColor = new Block();
      this.guding();
      game.map.Remove();
      this.getover()
    }
  }
  Block.prototype.checkLeft = function(){
    if(this.check(this.row,this.col -1)){
      this.col -- ;
    }
  }
  Block.prototype.checkRight = function(){
    if(this.check(this.row,this.col + 1)){
      this.col ++ ;
    }
  }
  Block.prototype.checkend = function(){
    while(this.check(this.row +1,this.col)){
      this.row ++;
    }
  }
  Block.prototype.checkForm =function(){
    var oldall = this.all;
    this.all ++;
    if(this.all > this.type -1){
      this.all = 0;
    }
    this.code =fangkuai[this.typeAll][this.all];
    if(!this.check(this.row,this.col)){
      this.all =oldall;
      this.code =fangkuai[this.typeAll][this.all];
    }
  }
  Block.prototype.guding = function(){
    for(var i = 0 ; i <4; i ++){
      for(var j = 0 ; j < 4 ; j ++){
        if(this.code[i][j] != 0){
          game.map.mapCode[this.row +i][this.col +j] = this.code[i][j]
        }
      }
    }
  }
  Block.prototype.getover = function(){
    for(var i = 0 ; i < game.col ; i ++){
      if(game.map.mapCode[0][i] !=0){
        clearInterval(game.timer);
        alert("游戏结束，您当前的得分是：" + game.sorce)
      }
    }
  }
})()