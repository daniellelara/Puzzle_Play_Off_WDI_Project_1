console.log("its");
$(function() {

  var audio = new Audio ('sounds/buttonsound.mp3');
  var audioTwo = new Audio ('sounds/magic.wav');
  var audioThree = new Audio ('sounds/return.mp3');
  var $countdown;
  var count = 0
  var winner = [];
  var countUp;
  var levelone = 9;
  var leveltwo = 16;
  
  $(".welcome-page").show();  $(".easy-level").hide(); $(".hard-level").hide();

  //when you press easy

    $( "#easy" ).click(function() {
      
      $(".easy-level").show();  $(".welcome-page").hide(); 
    

      $countdown = $('#screenTwo');
      countUp = setInterval(function(){
          count += 1
          var padOne = pad(count);
          $countdown.text(padOne);
      },1000);

      playGame(levelone);
      
    })

  //when you press hard

    $( "#hard" ).click(function() {
      $(".hard-level").show();  $(".welcome-page").hide(); 
    

      $countdown = $('#screenThree');
      countUp = setInterval(function(){
        count += 1;
        console.log(count);
        var padOne = pad(count);
        $countdown.text(padOne);
      },1000);

      playGame(leveltwo);
      
    })

  

 function playGame(level) {
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
           

        checkForWin(level, countUp, count); 
        } 

    });

  }





  function pad(count) { return (count<10) ? ("0" + count.toString()) : (count.toString()); } 

  function checkForWin(level) {
    
    var howMany = $('.ui-draggable-disabled').length;
    if (howMany === level){
      audioTwo.play();
      console.log("game over. well done");
      clearTimeout(countUp);
      winner.push(count);
      console.log(winner);
      if (winner.length === 1) {
          alert("it is players two turn")
          resetBoard()
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
    $pieces = $(".easy-level li.draw-piece" );


    $pieces.appendTo(".easy-level .puzzle-draw");
    $pieces.randomize();

    $('.draw-piece').draggable({
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
      console.log($(this));
        $(this).children(selector).sort(function(){
            return Math.random() - 0.5;
        }).detach().appendTo(this);
    });

    return this;
};






  

});



 
    