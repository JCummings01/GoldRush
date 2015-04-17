
$(document).on('ready', function() {

	$('.container').on('click', function () {
		var mapMarker = $('<div class=map-marker><img src="x-marker.png" /></div>');
		var mapInfo = $('<div class="info-popup"></div>');
		var mapForm = $('<form></form>');
		var mapDesc = $('<textarea class="edit-description"></textarea>');
		var descButton = $('<button class="description-button" type="submit">Save</button>');
		var savedDesc = $('<p class="saved-description"></p>');
		var confirmButton = $('<button class="confirm-button">Ok?</button>');

		mapForm.append(mapDesc).append(descButton);
		mapInfo.append(mapForm).append(savedDesc).append(confirmButton);
		$('.container').append(mapMarker);

		mapMarker.css({
			'top' : event.pageY,
			'left' : event.pageX 
		}).append(mapInfo);

		mapForm.on('submit', function (e) {
			var textValue = mapDesc.val();
			savedDesc.text(textValue);
			savedDesc.css('display', 'block');
			confirmButton.css('display', 'block');
			mapForm.css('display', 'none');
			e.stopPropagation();
			e.preventDefault();
		});

		confirmButton.on('click', function () {
			mapInfo.css('display', 'none');
		});

		mapForm.add(mapInfo).on('click', function(e){
			e.stopPropagation();
		});

		mapMarker.find('img').mouseover(function () {
			mapInfo.css('display', 'inline-block');
		});


		mapMarker.find('img').on('click', function(event) {
			mapMarker.remove();
			event.stopPropagation();
		});
	});
});