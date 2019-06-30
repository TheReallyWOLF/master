$(function() {
	$("div").slice(0, 4).show();
	$("#loadMore").on('click', function(e) {
		e.preventDefault();
		$("div:hidden").slice(0, 4).slideDown();
	});

	$("#hide").on('click', function(e) {
		e.preventDefault();
		$("div:visible").slice(0, 4).slideUp();
	});

});