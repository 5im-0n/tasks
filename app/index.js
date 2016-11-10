(function($) {
	//events
	$(document).on('submit', '#add-task-form', function(ev) {
		ev.preventDefault();

		$('#task-list').append('views/task-item.ejs', {title: $('#task').val()});
	});

	$(document).on('click', '.remove-task', function(ev) {
		var task = $(ev.currentTarget).parent();
		task.remove();
	});


	//initial page setup
	$('.container').html('views/tasks.ejs', {});
})(jQuery)