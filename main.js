
$(document).on('ready', function() {

	$('.container').on('click', function () {
		var mapMarker = $('<div class=map-marker><img src="map-pin.png" /></div>');

	$('.container').append(mapMarker);

	$(mapMarker).css({
		'top' : event.pageY,
		'left' : event.pageX 
	});
	$(mapMarker).on('click', function(event) {
		$(this).remove();
		event.stopPropagation();
	});
});
});