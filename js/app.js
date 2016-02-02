console.log("its");
$(function() {
//global vairables
  var audio = new Audio ('sounds/buttonsound.mp3');
  var audioTwo = new Audio ('sounds/magic.wav');
  var audioThree = new Audio ('sounds/return.mp3');
  var $countdown;
  var winner = [];
  var countUp;
  var levelOne = '.easy-level';  
  var levelTwo = '.hard-level';
  //one load
  $(".welcome-page").show();
  $(".easy-level").hide();
  $(".hard-level").hide();
  $(".interlude").hide();
  $(".playerTwo").hide();
  $(".winnerOne").hide();
  $(".winnerTwo").hide();
  $(".draw").hide();

  //when you click easy

  $( "#easy" ).click(function() {
    $(".welcome-page").hide(); 
    $(".interlude").show().fadeOut(3000);
    $(".easy-level").delay(4000).fadeIn();  
    playGame(levelOne, $('#screenTwo'));
  });


  //when you press hard

  $( "#hard" ).click(function() {
   $(".welcome-page").hide(); 
   $(".interlude").show().fadeOut(3000);
   $(".hard-level").delay(4000).fadeIn();
   playGame(levelTwo, $('#screenThree'));
  });

  //when click end
  //game function
  function playGame(level, $countdown) {
    //set timer
    var count = -4;
    countUp = setInterval(function(){
      count += 1
      var padOne = pad(count);
      $countdown.text(padOne);
    },1000);

    //make pieces draggable
    $('.draw-piece').draggable();
    $('.puzzle-piece').droppable({
      drop: function(ev, ui) {
        var dropped = ui.draggable;
        var droppedOn = $(this);
        //snap into place
        $(dropped).detach().css({top: 0,left: 0}).appendTo(droppedOn);
        //if dropped on disable draggable
        if (!!$(dropped).attr('id').match($(droppedOn).attr('id'))) {
          $(dropped).draggable({
            disabled: true
          });
          audio.play();
        }
        checkForWin(level, countUp, count, $countdown); 
      }

    });

  }




//time count set
  function pad(count) { return (count<10) ? ("0" + count.toString()) : (count.toString()); } 
//how game is played after first winner
  function checkForWin(level, countUp, count, $countdown) {
    var $arr = $(level + " .draw-piece");
    var howMany = $('.ui-draggable-disabled').length;
    if (howMany === $arr.length){
      audioTwo.play();
      console.log("game over. well done");
      clearTimeout(countUp);
      winner.push(count);
      console.log(winner);
      if (winner.length === 1) {
          $(level).hide();
          $(".playerTwo").show().fadeOut(3000);
          $(level).delay(4000).fadeIn(); 
          resetBoard(level)
          playGame(level, $countdown);
      }
      else if (winner.length === 2) {
          var min = Math.min.apply(Math, winner);
          if (winner[0] === min) {
            $(level).hide();
            $(".winnerOne").show().fadeOut(5000);
            pageReset(level)
            $(".welcome-page").delay(5000).fadeIn(); 
            
          }
          else if (winner[1] === min) {
            $(level).hide();
            $(".winnerTwo").show().fadeOut(5000);
            pageReset(level);
            $(".welcome-page").delay(5000).fadeIn(); 
            
          }
          else {
            $(level).hide();
            $(".draw").show().fadeOut(5000);
            pageReset(level);
            $(".welcome-page").delay(5000).fadeIn(); 
          }
        }
      }
    }
  //revert peices back to normal place and shuffle
    function resetBoard(level) {
      $pieces = $(level + " li.draw-piece");

      $pieces.appendTo($(level + " .puzzle-draw"));
      $pieces.randomize();

      $('.draw-piece').draggable({
        disabled: false
      });
      audioThree.play();
    }

//shuffle li elements
    $.fn.randomize = function(selector){
        (selector ? this.find(selector) : this).parent().each(function(){
          console.log($(this));
            $(this).children(selector).sort(function(){
                return Math.random() - 0.5;
            }).detach().appendTo(this);
        });

        return this;
    };

  function pageReset(level) {

    $pieces.appendTo($(level + " .puzzle-draw"));
    $pieces.randomize();

    $('.draw-piece').draggable({
      disabled: false
    });

    winner = [];

  }






  

});



 
    