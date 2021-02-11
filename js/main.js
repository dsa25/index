
$('body').on('click', 'a.burger_menu', function() {
	$('.menu_move').addClass('active');
});

$('body').on('click', '.menu_move a.btn_close', function() {
	$('.menu_move').removeClass('active');
});



$('body').on('click', '.my_accordion__btn', function() {
	$('.my_accordion__item').removeClass('active');
	$(this).closest('.my_accordion__item').addClass('active');
});