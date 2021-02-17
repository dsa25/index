
$('body').on('click', 'a.burger_menu', function() {
  $('body').addClass('modal-open');
	$('.menu_move').addClass('active');
});

$('body').on('click', '.menu_move a.btn_close', function() {
	$('.menu_move').removeClass('active');
  $('body').removeClass('modal-open');
});



$('body').on('click', '.details_hero .btn_close', function() {
	$('.details_hero').slideUp('slow');
});

$('body').on('click', '.btn_details .item', function() {
	$('.details_hero').slideDown('slow');
});

$('body').on('click', '.btn_scrollTop', function() {
  $('html, body').animate({scrollTop:0}, '500');
});

$('body').on('click', '.menu a, .foot__menu a', function() {
  var id = $(this).attr('href');
  var top = $(id).position().top;
  $('html, body').animate({scrollTop: top}, '500');
});


function modalMsg(){
	var modal = $('#form_msg');
	modal.modal('show');
}



$('body').on('click', '.my_accordion__item:not(.active) .my_accordion__btn', function() {
	$('.my_accordion__item').removeClass('active').find('.my_accordion__info').slideUp('slow');
	$(this).closest('.my_accordion__item').addClass('active').find('.my_accordion__info').slideDown('slow');
});

if($('body').width() <= 540){
  $('.first_carousel .item').each(function() {
    if($(this).hasClass('item_wrap')){
      $(this).after($(this).html());
      $(this).remove();
    }
  });
}

$(document).ready(function(){

  $(window).scroll(function(){
    if ($(this).scrollTop() > 200) {
      $(".btn_scrollTop").addClass("active");
    } else {
      $(".btn_scrollTop").removeClass("active");
    };
  });

  $('.first_carousel').owlCarousel({
      nav: true,
      navText:
        ['<svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.939341 10.9393C0.353554 11.5251 0.353554 12.4749 0.939341 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.939341 10.9393ZM26 10.5L2 10.5V13.5L26 13.5V10.5Z" fill="url(#paint0_linear)"/><defs><linearGradient id="paint0_linear" x1="0.199999" y1="12" x2="26" y2="12" gradientUnits="userSpaceOnUse"><stop stop-color="#00C6FB"/><stop offset="1" stop-color="#005BEA"/></linearGradient></defs></svg>',
         '<svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.939341 10.9393C0.353554 11.5251 0.353554 12.4749 0.939341 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.939341 10.9393ZM26 10.5L2 10.5V13.5L26 13.5V10.5Z" fill="url(#paint0_linear)"/><defs><linearGradient id="paint0_linear" x1="0.199999" y1="12" x2="26" y2="12" gradientUnits="userSpaceOnUse"><stop stop-color="#00C6FB"/><stop offset="1" stop-color="#005BEA"/></linearGradient></defs></svg>'],
      items: 4,
      loop: true,
      margin:10,
      autoWidth:false,
      responsive:{
      	0:{
          autoWidth:false,
      		autoHeight:true,
      		margin:10,
      		items: 1,
      	},
        768:{
          autoWidth:true,
          autoHeight:false,
          margin:10,
          items: 2,
        },

      }


  });

  $('.reviews_carousel').owlCarousel({
      nav: true,
      navText:
        ['<svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.939341 10.9393C0.353554 11.5251 0.353554 12.4749 0.939341 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.939341 10.9393ZM26 10.5L2 10.5V13.5L26 13.5V10.5Z" fill="url(#paint0_linear)"/><defs><linearGradient id="paint0_linear" x1="0.199999" y1="12" x2="26" y2="12" gradientUnits="userSpaceOnUse"><stop stop-color="#00C6FB"/><stop offset="1" stop-color="#005BEA"/></linearGradient></defs></svg>',
         '<svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.939341 10.9393C0.353554 11.5251 0.353554 12.4749 0.939341 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.939341 10.9393ZM26 10.5L2 10.5V13.5L26 13.5V10.5Z" fill="url(#paint0_linear)"/><defs><linearGradient id="paint0_linear" x1="0.199999" y1="12" x2="26" y2="12" gradientUnits="userSpaceOnUse"><stop stop-color="#00C6FB"/><stop offset="1" stop-color="#005BEA"/></linearGradient></defs></svg>'],
      margin: 15,
      responsive:{
        0:{
          margin: 15,
          items: 1.5,
          center: false,
          loop: true,
        },
        767:{
          loop: false,
          items: 3
        },
        991:{
          margin: 40,
          items: 4,
          center: true,
        },
      }
      // merge:true,
      // mergeFit:true,

  });

  $('.cinema__review').owlCarousel({
    autoHeight:true,
    margin: 10,
    responsive:{
      0:{
        margin: 10,
        items: 1,
        loop: true,
      },
      580:{
        items: 2
      },
      991:{
        margin: 20,
        items: 3
      },
      1345:{
        margin: 30,
        items: 4
      },
    }
  });

  $('.prize_carousel').owlCarousel({
    nav: true,
    navText:
      ['<svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.939341 10.9393C0.353554 11.5251 0.353554 12.4749 0.939341 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.939341 10.9393ZM26 10.5L2 10.5V13.5L26 13.5V10.5Z" fill="url(#paint0_linear)"/><defs><linearGradient id="paint0_linear" x1="0.199999" y1="12" x2="26" y2="12" gradientUnits="userSpaceOnUse"><stop stop-color="#00C6FB"/><stop offset="1" stop-color="#005BEA"/></linearGradient></defs></svg>',
       '<svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.939341 10.9393C0.353554 11.5251 0.353554 12.4749 0.939341 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.939341 10.9393ZM26 10.5L2 10.5V13.5L26 13.5V10.5Z" fill="url(#paint0_linear)"/><defs><linearGradient id="paint0_linear" x1="0.199999" y1="12" x2="26" y2="12" gradientUnits="userSpaceOnUse"><stop stop-color="#00C6FB"/><stop offset="1" stop-color="#005BEA"/></linearGradient></defs></svg>'],
    autoWidth:false,
    margin: 10,
    responsive:{
      0:{
        margin: 10,
        items: 1,
        loop: true,
      },
      580:{
        items: 2,
        margin: 15,
      },
      767:{
        items: 3,
        center: true,
        autoWidth:true,
        margin: 20,

      },

    }
  });

});