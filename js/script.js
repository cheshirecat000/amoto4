$(function () {
	$('.order-call').click(function () {
		$('#popup-container').css('display', 'flex');
	});

	$('#popup-container').click(function (e) {
		if(this === e.target) {
			$('#popup-container').css('display', 'none');
		}
	})
});