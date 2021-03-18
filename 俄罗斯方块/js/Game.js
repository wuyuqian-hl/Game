(function(){
  window.Game = function(){
    this.row = 20;
    this.col = 12;
    this.init();
    this.block = new Block();
    this.nextColor = new Block();
    this.map = new Map(this);
    this.start();
    this.bindEvent();
    this.sorce = 0;
    this.sudu =30;
  };
  Game.prototype.init = function(){
    var $table = $("<table></table>");
    $table.addClass("tab1")
    for(var i = 0 ; i < this.row ; i ++){
      var $tr = $("<tr></tr>")
      for(var j = 0 ; j < this.col ; j ++){
        var $td = $("<td></td>")
        $td.appendTo($tr)
      }
      $tr.appendTo($table)
    }
    var $table2 = $("<table></table>");
    $table2.addClass("tab2")
    for(var i = 0 ; i < 4 ; i ++){
      var $tr2 = $("<tr></tr>")
      for(var j = 0 ; j < 4 ; j ++){
        var $td2 = $("<td></td>")
        $td2.appendTo($tr2)
      }
      $tr2.appendTo($table2)
    }
    $table2.appendTo("body")
    $table.appendTo("body")
  };
  Game.prototype.setColor = function(row,col,num){
    $(".tab1").find("tr").eq(row).children("td").eq(col).addClass("c" + num)
  };
  Game.prototype.setNextColor = function(row,col,num){
    for(var i = 0 ; i <4; i ++){
      for(var j = 0 ; j < 4 ; j ++){
        if(this.nextColor.code[i][j] != 0){
          $(".tab2").find("tr").eq(i).children("td").eq(j).addClass("c" + this.nextColor.code[i][j])
        }
      }
    }
  };
  Game.prototype.clear = function(){
    for(var i = 0 ; i < this.row; i ++){
      for( var j = 0 ; j < this.col ; j++){
        $("tr").eq(i).children("td").eq(j).removeClass()
      }
    }
    for(var i = 0 ; i < 4; i ++){
      for( var j = 0 ; j < 4 ; j++){
        $(".tab2").find("tr").eq(i).children("td").eq(j).removeClass()
      }
    }
  }
  Game.prototype.bindEvent = function(){
    var  slef = this;
    $(document).keydown(function(event){
      if(event.keyCode == 37){
        slef.block.checkLeft()
      }else if(event.keyCode == 39){
        slef.block.checkRight()
      }else if(event.keyCode == 32){
        slef.block.checkend()
      }else if(event.keyCode == 38){
        slef.block.checkForm()
      }
    })
  }
  Game.prototype.start = function(){
    var slef = this;
    slef.f =0;
    this.timer = setInterval(function(){
      game.f++;
      document.getElementById("hao").innerHTML = "帧编号：" + game.f;
      slef.clear();
      slef.block.render();
      slef.setNextColor();
      slef.map.render(slef);
      game.f % game.sudu == 0 &&slef.block.testDom();
    },20)
  }
})()