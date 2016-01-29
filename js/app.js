console.log("its");
$(function() {


     $('#pieceOneCopy').draggable();

    $('#pieceOne').droppable({
        drop: function(ev, ui) {
            var dropped = ui.draggable;
            var droppedOn = $(this);
            $(dropped).detach().css({top: 0,left: 0}).appendTo(droppedOn);
            $('#pieceOneCopy').draggable({
  disabled: true
});


        }
    });

     $('#pieceTwoCopy').draggable();

    $('#pieceTwo').droppable({
        drop: function(ev, ui) {
            var dropped = ui.draggable;
            var droppedOn = $(this);
            $(dropped).detach().css({top: 0,left: 0}).appendTo(droppedOn);
            $('#pieceTwoCopy').draggable({
              disabled: true
            });
        }
    });
     $('#pieceThreeCopy').draggable();

    $('#pieceThree').droppable({
        drop: function(ev, ui) {
            var dropped = ui.draggable;
            var droppedOn = $(this);
            $(dropped).detach().css({top: 0,left: 0}).appendTo(droppedOn);
            $('#pieceThreeCopy').draggable({
              disabled: true
            });
        }
    });
     $('#pieceFourCopy').draggable();

    $('#pieceFour').droppable({
        drop: function(ev, ui) {
            var dropped = ui.draggable;
            var droppedOn = $(this);
            $(dropped).detach().css({top: 0,left: 0}).appendTo(droppedOn);
            $('#pieceFourCopy').draggable({
              disabled: true
            });
        }
    });

     $('#pieceFiveCopy').draggable();

    $('#pieceFive').droppable({
        drop: function(ev, ui) {
            var dropped = ui.draggable;
            var droppedOn = $(this);
            $(dropped).detach().css({top: 0,left: 0}).appendTo(droppedOn);
            $('#pieceFiveCopy').draggable({
              disabled: true
            });
        }
    });
     $('#pieceSixCopy').draggable();

    $('#pieceSix').droppable({
        drop: function(ev, ui) {
            var dropped = ui.draggable;
            var droppedOn = $(this);
            $(dropped).detach().css({top: 0,left: 0}).appendTo(droppedOn);
            $('#pieceSixCopy').draggable({
              disabled: true
            });
        }
    });
     $('#pieceSevenCopy').draggable();

    $('#pieceSeven').droppable({
        drop: function(ev, ui) {
            var dropped = ui.draggable;
            var droppedOn = $(this);
            $(dropped).detach().css({top: 0,left: 0}).appendTo(droppedOn);
            $('#pieceSevenCopy').draggable({
              disabled: true
            });
        }
    });
     $('#pieceEightCopy').draggable();

    $('#pieceEight').droppable({
        drop: function(ev, ui) {
            var dropped = ui.draggable;
            var droppedOn = $(this);
            $(dropped).detach().css({top: 0,left: 0}).appendTo(droppedOn);
            $('#pieceEightCopy').draggable({
              disabled: true
            });
        }
    });
     $('#pieceNineCopy').draggable();

    $('#pieceNine').droppable({
        drop: function(ev, ui) {
            var dropped = ui.draggable;
            var droppedOn = $(this);
            $(dropped).detach().css({top: 0,left: 0}).appendTo(droppedOn);
            $('#pieceNineCopy').draggable({
              disabled: true
            });

        }
    });
      

  });




/*$( ".draw-piece" ).draggable();
    $( ".puzzle-piece" ).droppable({
      //tolerance: 'fit';
      /*drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" );
      }

    })






;*/


