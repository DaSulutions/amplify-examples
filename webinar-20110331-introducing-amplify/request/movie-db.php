<?php

$movies = array(
	array(
		"title" => "Toy Story 3",
		"description" => "Some toys tell a story (for the third time)."
	),
	array(
		"title" => "King's Speech",
		"description" => "A king talks about something nobody cares about."
	),
	array(
		"title" => "Dark Knight",
		"description" => "An evil knight plays games in the dark."
	),
	array(
		"title" => "Blind Side",
		"description" => "A man implants a video camera in the back of his head."
	),
	array(
		"title" => "Avatar",
		"description" => "The true story of how people choose their online avatars."
	),
	array(
		"title" => "Tangled",
		"description" => "Step-by-step instructions for tying knots."
	),
	array(
		"title" => "Secretariat",
		"description" => "A secretary learns to type faster."
	),
	array(
		"title" => "How to Train Your Dragon",
		"description" => "Documentary on training dragons to create the perfect s'mores."
	),
	array(
		"title" => "Cranes Are Flying",
		"description" => "An introduction to origami."
	),
	array(
		"title" => "Star Trek",
		"description" => "A study of the sky."
	)
);

function movieFilter( $movie ) {
	return stripos( $movie[ "title" ], $_REQUEST[ "title" ] ) !== false;
}

echo json_encode( array_filter( $movies, "movieFilter" ) );
