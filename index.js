(function($) {
	$(document).on('submit', '#add-task-form', function(ev) {
		ev.preventDefault();
		var newTask = '<li class="list-group-item">' + $('#task').val() + '</li>';
		$('#task-list').append(newTask);
	});
})(jQuery)