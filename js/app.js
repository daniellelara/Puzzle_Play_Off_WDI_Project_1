console.log("its");
$(function() {

  

  var $countdown = $('#screenTwo');
  var count = 0
  var winner = [];
  var countUp = setInterval(function(){
      count += 1
      var padOne = pad(count);
      $countdown.text(padOne);
      

  },1000);

  $("#pieceOneCopy").data("left", $("#pieceOneCopy").position().left).data("top", $("#pieceOneCopy").position().top);
    
    playGame();

    if (winner.length === 1){
        playGame();

    }

  

  
  
  

  
  function playGame() {
    $('.draw-piece').draggable();
    $('.puzzle-piece').droppable({
        drop: function(ev, ui) {
            var dropped = ui.draggable;
            var droppedOn = $(this);
            $(dropped).detach().css({top: 0,left: 0}).appendTo(droppedOn);
            console.log($(dropped).attr('id').match($(droppedOn).attr('id')));
            if (!!$(dropped).attr('id').match($(droppedOn).attr('id'))){
                $(dropped).draggable({
                  disabled: true
                });
            }
           console.log(count);
           checkForWin(countUp, count); 
        } 

    });

  }


function pad(count) {     
  return (count<10) ? ("0" + count.toString()) : (count.toString());   
} 

function checkForWin() {
  
  var howMany = $('.ui-draggable-disabled').length;
  if (howMany === 9){
    console.log("game over. well done");
    clearTimeout(countUp);
    winner.push(count);
    console.log(winner);
    if (winner.length === 1) {
    alert("it is players two turn")
    
          resetBoard();
          playGame();
        
        console.log("hi");
    }
    else if (winner.length === 2) {
      alert("game over");
     var min = Math.min.apply(Math, winner);
      if (winner[0] === min) {
        console.log("player one won");
      }
      else if (winner[1] === min) {
        console.log("player two won");
      }
      else {
        console.log("it is a draw");
      }

    }
  }

}

function resetBoard() {
      $(".draw-piece").animate({
          "left": $("#pieceOneCopy").data("left"),
          "top": $("#pieceOneCopy").data("top")
      });

      
      $(".draw-piece").draggable({
                        disabled: false
                      });
                    
      count = 0;
      countUp = setInterval(function(){
      count += 1
      var padOne = pad(count);
      $countdown.text(padOne);
      

  },1000);
 

}


//function nextPlayer {
  //reset board 
  //reset timer
//}







  

});


