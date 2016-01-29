console.log("its");
$(function() {


     $('#pieceOneCopy').draggable();

    $('#pieceOne').droppable({
        drop: function(ev, ui) {
            var dropped = ui.draggable;
            var droppedOn = $(this);
            $(dropped).detach().css({top: 0,left: 0}).appendTo(droppedOn);

        }
    });

     $('#pieceTwoCopy').draggable();

    $('#pieceTwo').droppable({
        drop: function(ev, ui) {
            var dropped = ui.draggable;
            var droppedOn = $(this);
            $(dropped).detach().css({top: 0,left: 0}).appendTo(droppedOn);
        }
    });
     $('#pieceThreeCopy').draggable();

    $('#pieceThree').droppable({
        drop: function(ev, ui) {
            var dropped = ui.draggable;
            var droppedOn = $(this);
            $(dropped).detach().css({top: 0,left: 0}).appendTo(droppedOn);
        }
    });
     $('#pieceFourCopy').draggable();

    $('#pieceFour').droppable({
        drop: function(ev, ui) {
            var dropped = ui.draggable;
            var droppedOn = $(this);
            $(dropped).detach().css({top: 0,left: 0}).appendTo(droppedOn);
        }
    });

     $('#pieceFiveCopy').draggable();

    $('#pieceFive').droppable({
        drop: function(ev, ui) {
            var dropped = ui.draggable;
            var droppedOn = $(this);
            $(dropped).detach().css({top: 0,left: 0}).appendTo(droppedOn);
        }
    });
     $('#pieceSixCopy').draggable();

    $('#pieceSix').droppable({
        drop: function(ev, ui) {
            var dropped = ui.draggable;
            var droppedOn = $(this);
            $(dropped).detach().css({top: 0,left: 0}).appendTo(droppedOn);
        }
    });
     $('#pieceSevenCopy').draggable();

    $('#pieceSeven').droppable({
        drop: function(ev, ui) {
            var dropped = ui.draggable;
            var droppedOn = $(this);
            $(dropped).detach().css({top: 0,left: 0}).appendTo(droppedOn);
        }
    });
     $('#pieceEightCopy').draggable();

    $('#pieceEight').droppable({
        drop: function(ev, ui) {
            var dropped = ui.draggable;
            var droppedOn = $(this);
            $(dropped).detach().css({top: 0,left: 0}).appendTo(droppedOn);
        }
    });
     $('#pieceNineCopy').draggable();

    $('#pieceNine').droppable({
        drop: function(ev, ui) {
            var dropped = ui.draggable;
            var droppedOn = $(this);
            $(dropped).detach().css({top: 0,left: 0}).appendTo(droppedOn);
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


