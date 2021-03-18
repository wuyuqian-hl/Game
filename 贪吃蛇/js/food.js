function Food(gamSnake){
  var slef = this;
  //食物的位置
  do{
    this.row = parseInt(Math.random()*gamSnake.row);
    this.col = parseInt(Math.random()*gamSnake.col);
  }while((function(){
    for(var b= 0 ; b < gamSnake.snake.body.length ; b ++){
      if(gamSnake.snake.body[b].row == slef.row || gamSnake.snake.body[b].col == slef.col){
        return true
      }else{
        return false
      }
    }
  })())
}
Food.prototype.render = function(){
  game.setHtml(this.row,this.col,"❤")
}