(function( $, amplify ) {

$(function() {
	var list = $( "#todos" );

	$.each( amplify.store( "todos" ) || [], function( i, todo ) {
		$( "<li>", { text: todo, contentEditable: true } )
			.appendTo( list );
	});

	$( "<button>", {
		text: "Add Item",
		click: function() {
			$( "<li>", {
				text: "do something awesome",
				contentEditable: true
			}).appendTo( list );
		}
	})
	.insertAfter( list );

	var timer;
	list.keypress(function() {
		clearTimeout( timer );
		timer = setTimeout(function() {
			var items = list.children().map(function() {
				return $( this ).text();
			}).get();
			amplify.store( "todos", items );
		}, 300 );
	});
});

}( jQuery, amplify ) );
