$(document).ready(function() {
	$.get('https://swapi-api.alx-tools.com/api/films/?format=json', function(data) {
		var movies = data.results;
		var movielist = $('#list_movies');
		$.each(movies, function(i, movie) {
			movieList.append($('<li>').text(movie.title));
		});
	});
});

