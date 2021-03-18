function Snake(){
  this.body = [
    //蛇的长度
    {"row":3 ,"col": 5},
    {"row":3 ,"col": 4},
    {"row":3 ,"col": 3},
    {"row":3 ,"col": 2},
  ];
  //初始化蛇的默认运动往右
  this.direction = "R";
  //即将改变的方向，防止方向出现原地调头的情况
  this.wellDirection = "R";
}
//更新运动状态
Snake.prototype.update = function(){
  //当前的direction接收一下wellDirection
  this.direction = this.wellDirection;
  switch(this.direction){
    //在头部增加一个
    case "R" :
      this.body.unshift({"row":this.body[0].row,"col":this.body[0].col + 1})
      break
    case "T" :
      this.body.unshift({"row":this.body[0].row - 1,"col":this.body[0].col})
      break
    case "L" :
      this.body.unshift({"row":this.body[0].row,"col":this.body[0].col - 1})
      break
    case "B" :
      this.body.unshift({"row":this.body[0].row + 1,"col":this.body[0].col})
      break
  }
  //判断蛇的死亡,超过四周
  if(this.body[0].col > game.col - 1 || this.body[0].row > game.row - 1 ||this.body[0].col < 0 ||this.body[0].row < 0){
    this.body.shift()
    clearInterval(game.timer)
    alert("游戏结束，您当前的分数是"+game.sorce)
  }
  //判断蛇的死亡自己撞到自己死亡
  for(var j = 1; j < this.body.length ; j++){
    if(this.body[0].col == this.body[j].col && this.body[0].row == this.body[j].row){
      this.body.shift()
      clearInterval(game.timer)
      alert("游戏结束，您当前的分数是"+game.sorce)
    }
  }
  //在尾部删除一个
  if(this.body[0].row == game.food.row && this.body[0].col == game.food.col){
    game.food = new Food(game)
    //让帧编号归0
    game.f = 0;
    game.sorce ++;
  }else{
    this.body.pop()
  }
}
//蛇的方向改变，为了防止渲染之前的调头行为
Snake.prototype.changeDirection = function(d){
  this.wellDirection = d;
}
Snake.prototype.render = function(){
  //蛇的头部的颜色
  game.setColor(this.body[0].row,this.body[0].col,"pink")
  for(var k = 1;k<this.body.length;k++){
    //蛇的身体的颜色
    game.setColor(this.body[k].row,this.body[k].col,"skyblue")
  }
}