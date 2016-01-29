console.log("its");
$(function() {


    //$( ".draw-piece" ).draggable();
    $('#pieceOne').droppable({
        tolerance: 'fit'
    });

    $('#pieceOneCopy').draggable();


    $('#pieceOneCopy').droppable({
        greedy: true,
        tolerance: 'touch',
        drop: function(event,ui){
            ui.draggable.draggable('option','revert',true);
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


