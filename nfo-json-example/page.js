(function() {
String.prototype.endsWith = function(suffix) {
    return this.indexOf(suffix, this.length - suffix.length) !== -1;
};

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

var allMovies;
var movies = $('ul.movies');

var search = $('input[name=search]');
search.keyup(function() {
	if (search.val().length > 0) {
		$(document).data('displayed', allMovies.filter(function(m) {
			return new RegExp(".*" + search.val() + ".*", 'i').test(m.title);
		}));
	} else {
		$(document).data('displayed', allMovies);
	}

	render();
});

$('select[name=sort]').change(function() {
	var sortBy = $(this).val();
	var desc = sortBy.endsWith('-');
	if (desc) {
		sortBy = sortBy.substring(0, sortBy.length - 1);
	}
	$(document).data('ascending', !desc);

	switch(sortBy) {					
		case 'release':
			$(document).data('sort', compare(function(o) {
				return o.year;
			}));
			break;
		case 'added':
			$(document).data('sort', compare(function(o) {
				return new Date(o.updated);
			}));
			break;
		case 'imdb':
			$(document).data('sort', compare(function(o) {
				return isNaN(o.rating) ? 0 : o.rating;
			}));
			break;
		case 'meta':
			$(document).data('sort', compare(function(o) {
				return isNaN(o.metascore) ? 0 : o.metascore;
			}));
			break;		
		case 'tomato':
			$(document).data('sort', compare(function(o) {
				return isNaN(o.tomatoMeter) ? 0 : o.tomatoMeter;
			}));
			break;				
		default:
			$(document).data('sort', title);
	}

	render();
});

var compare = function(fx) {
	return function(a, b) {
		var retVal = 0;
		if (fx(a) < fx(b)) {
			retVal = -1;
		} else if (fx(a) > fx(b)) {
			retVal = 1;
		} else {
			retVal = title(a, b);
		}

		return $(document).data('ascending') ? retVal :  retVal * -1;
	};
};

var removeArticle = function(str) {
	return str.replace(/(?:an|a|the) /i, '');
};

var title = compare(function(o) {
	return removeArticle(o.title.toString());
});

var render = function() {
	var arr = $(document).data('displayed');
	arr.sort($(document).data('sort'));

	movies.fadeOut('fast', function() {
		movies.empty();
		$('#num').html(arr.length);
		$(arr).each(function() {
			var m = this;
			var thumb = this.thumb;
			if (this.localThumb) {
				thumb = 'posters/' + this.localThumb;
			}

			movies.append($('<li>').append($('<img>').addClass('poster').attr('src', thumb).attr('data-location', this.location).data('movie', this).bind('error', function() {
				$(this).attr('src', 'http://placehold.it/200x300/001F3F/2ECC40&text=' + m.title);
			})));
		});


		$(window).scrollTop();
		movies.fadeIn('fast');
	});
};

var overlayTemplate = $('#movie-overlay').html();
$('#movie-overlay').remove();
var activeOverlay;

$('ul.movies').on('mouseenter click', 'li img.poster', function() {
	if (activeOverlay) {
		activeOverlay.fadeOut('fast');
	}
	
	var $this = $(this);
	var movie = $this.data('movie');

	if (movie) {
		var overlay = $this.siblings('.image-overlay');

		if (!overlay.length) {
			if (!movie.genres) {
				movie.genres = "";
				$(movie.genre.toLowerCase().split(',')).each(function(i) {
					if (i > 0) {
						movie.genres += ', ';
					}
					movie.genres += this.capitalize().replace(/_/, '-');
				});
			}

			var str = overlayTemplate;
	        for (attr in movie) {
	            str = str.replace(new RegExp("{{" + attr + "}}", 'g'), movie[attr]);
	        }
	        str = str.replace(/{{.+}}/g, '');

			var overlay = $('<div>').addClass('image-overlay').css({
				height: $this.height(),
				width: $this.width(),
				background: 'rgba(0, 0, 0, 0.8)',
				color: 'white',
				position: 'absolute',
			}).hide().append($('<div>').css({
				padding: '0.5em 1em'
			}).html(str));

			$this.parent().append(overlay);
		}

		overlay.css({
			top: $this.position().top,
			left: $this.position().left
		});
		activeOverlay = overlay;
		overlay.fadeIn('fast');
	}
});

$('ul.movies').on('mouseleave', '.image-overlay', function() {
	$(this).fadeOut('fast');
});

$(window).on('resize', function() {
	$('.image-overlay').remove();
});

$('document').on('submit', 'form', function() {
	return false;
});

$.getJSON('movies.json', function(d) {
	allMovies = d;
	$(document).data({
		displayed: d,
		sort: title,
		ascending: true
	});

	render();
});

})();