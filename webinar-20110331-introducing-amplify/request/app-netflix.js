amplify.request.define( "movies", "ajax", {
	url: "http://odata.netflix.com/Catalog/Titles" +
		"?$filter=Name eq '{title}'&$format=json",
	dataType: "jsonp",
	jsonp: "$callback",
	decoder: function( data, status, xhr, success, error ) {
		success( $.map( data.d.results, function( movie ) {
			return {
				title: movie.Name,
				description: movie.ShortSynopsis
			};
		} ) );
	}
});
