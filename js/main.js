
$('body').on('click', 'a.burger_menu', function() {
	$('.menu_move').addClass('active');
});

$('body').on('click', '.menu_move a.btn_close', function() {
	$('.menu_move').removeClass('active');
});