console.log("its");
$(function() {

  var audio = new Audio ('sounds/buttonsound.mp3');
  var audioTwo = new Audio ('sounds/magic.wav');
  var audioThree = new Audio ('sounds/return.mp3');
  
  $(".welcome-page").show();  $(".easy-level").hide();

  $( "button" ).click(function() {
    $(".easy-level").show();  $(".welcome-page").hide();
  

  var $countdown = $('#screenTwo');
  var count = 0
  var winner = [];
  var countUp = setInterval(function(){
      count += 1
      var padOne = pad(count);
      $countdown.text(padOne);
      

  },1000);

  $(".draw-piece").data("left", $(".draw-piece").position().left).data("top", $(".draw-piece").position().top);
    
    playGame();
    
  })

  

 function playGame() {
    $('.draw-piece').draggable();
    $('.puzzle-piece').droppable({
        drop: function(ev, ui) {
            var dropped = ui.draggable;
            var droppedOn = $(this);
            $(dropped).detach().css({top: 0,left: 0}).appendTo(droppedOn);
            if (!!$(dropped).attr('id').match($(droppedOn).attr('id'))){
                $(dropped).draggable({
                  disabled: true
                });
                audio.play();
            }
           checkForWin(countUp, count); 
        } 

    });

  }


  function pad(count) { return (count<10) ? ("0" + count.toString()) : (count.toString()); } 

  function checkForWin() {
    
    var howMany = $('.ui-draggable-disabled').length;
    if (howMany === 9){
      audioTwo.play();
      console.log("game over. well done");
      clearTimeout(countUp);
      winner.push(count);
      console.log(winner);
      if (winner.length === 1) {
          alert("it is players two turn")
          resetBoard();
          playGame();
      }
      else if (winner.length === 2) {
          var min = Math.min.apply(Math, winner);
          if (winner[0] === min) {
            alert("game over player one won");
          }
          else if (winner[1] === min) {
            alert("game over player two won");
          }
          else {
            console.log("it is a draw");
          }

      }
    }

  }

function resetBoard() {
    var $pieces = $( "li.draw-piece" );
     
    $pieces.appendTo(".puzzle-draw");
    $pieces.randomize();
      
      // $(".draw-piece").animate({
      //     "left": $(".draw-piece").data("left"),
      //     "top": $(".draw-piece").data("top")

      // });

      $(".draw-piece").draggable({
        disabled: false
      });

      audioThree.play();
                       
      var count = 0;
      var countUp = setInterval(function(){
        count += 1
        var padOne = pad(count);
        $countdown.text(padOne);
      

      },1000);
    
 

}


$.fn.randomize = function(selector){
    (selector ? this.find(selector) : this).parent().each(function(){
        $(this).children(selector).sort(function(){
            return Math.random() - 0.5;
        }).detach().appendTo(this);
    });

    return this;
};
 

 






  

});



 
    