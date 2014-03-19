var pbtPhotos = (function() {

	var photos = [];
	var element = null;

	function getPhotos(elementId) {
		photos = element.find("li");
	}

	function hideEach() {
		$.each(photos, function( index, photo ) {
			$(photo).hide();
		});
	}

	function rotateEach() {
		$.each(photos, function( index, photo ) {
			$(photo).css('transform', 'rotate(' + rand(7) + 'deg)');
		});
	}

	function overlapEach() {
		$.each(photos, function( index, photo ) {
			$(photo).css('margin-left', rand(50, true) + 'px');
		});

		$.each(photos, function( index, photo ) {
			$(photo).css('margin-top', rand(20) + 'px');
		});
	}

	function fadePhoto(index) {
		var curIndex = index;
		if (photos[index]) {
			$(photos[index]).fadeIn("slow", function() {
				console.log('animation complete ' + index);
				fadePhoto(index+1);
			});
		}
	}

	function rand(minMax, negative) {
		var value = 0;

		value = Math.ceil(Math.random() * (minMax - (-minMax)) + (-minMax));

		return negative? '-' + value : value;
	}

	return {
		init: function(elementId) {
			element = $(elementId);
			getPhotos();
			hideEach();
			rotateEach();
			overlapEach();
			fadePhoto(0);
		}
	};

})();

$(document).ready(function() {
	pbtPhotos.init('#pbt-photos');
});