console.log("its");
$(function() {

   var $countdown = $('#screenTwo');
  var count = 0
  var countUp = setInterval(function(){
      count += 1
      var padOne = pad(count);
      $countdown.text(padOne);
      

  },1000);

  playGame();
  
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


function pad(count) {     return (count<10) ? ("0" + count.toString()) : (count.toString());   } 

function checkForWin() {
  var winner = [];
  var howMany = $('.ui-draggable-disabled').length;
  if (howMany === 9){
    console.log("game over. well done");
    clearTimeout(countUp);
    winner.push(count);
    console.log(winner);
    alert("it is players two turn")
  }

}


//function nextPlayer {
  //reset board 
  //reset timer
//}







  

});


