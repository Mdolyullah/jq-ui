  // jq
  $(document).ready(function(){
	// draggable

	$( "#draggable" ).draggable();

	// autocomplete
	var data = [
		"HTML", 
		"CSS",
		"JS"
	];

	$( "#input" ).autocomplete({
      source: data
    });

    // resizable
    $( "#resizable" ).resizable();

    // droppable
    $( "#draggable1" ).draggable();
    $( "#droppable" ).droppable({
      drop: function( event, ui ) {
     $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
          .html( "Dropped!" );
      }
    });

    // Menu
    $( function() {
    $( "#menu" ).menu();
  } );

    // toltip
    $( function() {
    $( document ).tooltip();
  } );

    // datepicker
    $( function() {
    $( "#datepicker" ).datepicker();
    } );

    // add class
    $( function() {
    $( "#button" ).on( "click", function() {
      $( "#effect" ).addClass( "newClass", 1000, callback );
    });
 
    function callback() {
      setTimeout(function() {
        $( "#effect" ).removeClass( "newClass" );
      }, 1500 );
    }
  } );


})
