$(function() {
	var $tasksList = $('#tasksList');
	var $taskInput = $('#taskInput');
	var $notification = $('#notification');

// появление Task list is empty если блок пуст
	var displayNotification = function () {
		if (!$tasksList.children().length) {
			$notification.fadeIn(300);
		}else{
			$notification.css('display', 'none')
		}
	}

	$("#taskAdd").on('click', function() {
		if (!$taskInput.val()) {return false;}

		$tasksList.append('<li>' 
						+ $taskInput.val()
						+ "<button class='delete'>&#10006</button></li>");

		$taskInput.val("");

		displayNotification();

		$(".delete").on("click", function() {
			var $parent = $(this).parent();

			$parent.css('animation', "fadeOut .3s linear");


			setTimeout(function() {
				$parent.remove();
				displayNotification();
			}, 300);
		});
	});
});