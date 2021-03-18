function Game(){
  this.row = 15;
  this.col = 15;
  this.sorce = 0;
  this.init();
  this.snake = new Snake();
  this.food = new Food(this);
  this.start();
  this.Event()
  // this.bindEvent();
}
Game.prototype.init = function(){
  //初始化表格  上树
  this.dom = document.createElement("table");
  var tr,td;
  for(var i = 0 ; i < this.row ; i ++){
    tr = document.createElement("tr")
    for(var b = 0 ; b < this.col ; b ++){
      td = document.createElement("td")
      tr.appendChild(td)
    }
    this.dom.appendChild(tr)
  }
  document.getElementById("game").appendChild(this.dom)
}
Game.prototype.setColor = function(row,col,color){
  //蛇的身体
  this.dom.getElementsByTagName("tr")[row].getElementsByTagName("td")[col].style.background=color;
}
Game.prototype.setHtml = function(row,col,html){
  this.dom.getElementsByTagName("tr")[row].getElementsByTagName("td")[col].innerHTML = html;
}
Game.prototype.clear = function(){
  for(var i = 0 ; i < this.row ; i ++){
    for(var j = 0 ; j < this.col ; j ++){
      //清除画布，将画布变为白色，从而产生让蛇动起来的效果
      this.dom.getElementsByTagName("tr")[i].getElementsByTagName("td")[j].style.background="white";
      this.dom.getElementsByTagName("tr")[i].getElementsByTagName("td")[j].innerHTML = "";
    } 
  }
}
//获取键盘的上下左右键
Game.prototype.Event = function(){
  var self = this;
  document.onclick = function(a,b,c,d){
   var a = document.getElementById("up");
   a.onclick = function(){
    if(self.snake.direction == "B") return;
     self.snake.changeDirection("T");    
   }
   var b = document.getElementById("bottom");
   b.onclick = function(){
    if(self.snake.direction == "T") return;
    self.snake.changeDirection("B");
   }
    var c = document.getElementById("left");
    c.onclick =function(){
      if(self.snake.direction == "R") return;
     self.snake.changeDirection("L");
    }
    var d = document.getElementById("right");
    d.onclick=function(){
      if(self.snake.direction == "L") return;
     self.snake.changeDirection("R");
    }
  }
}
// Game.prototype.bindEvent = function(){
//   var self = this;
//   document.onkeydown = function(event){
//     switch(event.keyCode){
//       case 37 :
//         //判断如果键盘为按右则return  不能按左键
//         if(self.snake.direction == "R") return;
//         self.snake.changeDirection("L");
//         break;
//       case 38 :
//         if(self.snake.direction == "B") return;
//         self.snake.changeDirection("T");
//         break;
//       case 39 :
//         if(self.snake.direction == "L") return;
//         self.snake.changeDirection("R");
//         break;
//       case 40 :
//         if(self.snake.direction == "T") return;
//         self.snake.changeDirection("B");
//         break;
//     }
//   }
// }
Game.prototype.start = function(){
  this.f = 0;
  // 调用  清除  更新  渲染
  this.timer = setInterval(function(){
    game.f ++;
    document.getElementById("hao").innerHTML ="帧编号：" +game.f;
    document.getElementById("sorce").innerHTML ="分数：" +game.sorce;
    game.clear()
    var dur = game.snake.body.length < 30 ? 30 - game.snake.body.length:1;
    game.f % dur == 0 && game.snake.update()
    game.food.render()
    game.snake.render()
  },20)
}