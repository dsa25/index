
$('body').on('click', 'a.burger_menu', function() {
	$('.menu_move').addClass('active');
});

$('body').on('click', '.menu_move a.btn_close', function() {
	$('.menu_move').removeClass('active');
});



$('body').on('click', '.details_hero .btn_close', function() {
	$('.details_hero').slideUp('slow');
});

$('body').on('click', '.btn_details .item', function() {
	$('.details_hero').slideDown('slow');
});



$('body').on('click', '.my_accordion__item:not(.active) .my_accordion__btn', function() {
	$('.my_accordion__item').removeClass('active').find('.my_accordion__info').slideUp('slow');
	$(this).closest('.my_accordion__item').addClass('active').find('.my_accordion__info').slideDown('slow');
});