(function( $, amplify ) {

$(function() {
	$( "form" ).submit(function( event ) {
		amplify.request( "movies", { title: $( "#title" ).val() }, function( movies ) {
			var html = "";
			$.each( movies, function( i, movie ) {
				html += "<h2>" + movie.title + "</h2>" +
					"<p>" + movie.description + "</p>";
			});
			$( "#movies" ).html( html );
		});
		event.preventDefault();
	});
});

}( jQuery, amplify ) );
