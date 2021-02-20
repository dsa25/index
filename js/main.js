
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
  if($('body').width() >= 1200){
    $('body').removeClass('bg_pos');
  }
});

$('body').on('click', '.btn_details .item', function() {
	$('.details_hero').slideDown('slow');
  if($('body').width() >= 1200){
    $('body').addClass('bg_pos');
  }
});

$('body').on('click', '.btn_scrollTop', function() {
  $('html, body').animate({scrollTop:0}, '500');
});

$('body').on('click', '.menu a, .foot__menu a, a.menu_move__item', function() {
  var id = $(this).attr('href');
  var top = $(id).position().top;
  if($(this).hasClass('menu_move__item')){
    $('.menu_move a.btn_close').click();
    // $('html, body').animate({scrollTop: top}, '500');
    setTimeout(()=>{$('html, body').animate({scrollTop: top}, '500');}, 500);
    
  }else{
    $('html, body').animate({scrollTop: top}, '500');
  }
});

$('body').on('click', '.my_accordion__item:not(.active) .my_accordion__btn', function() {
	$('.my_accordion__item').removeClass('active').find('.my_accordion__info').slideUp('slow');
	$(this).closest('.my_accordion__item').addClass('active').find('.my_accordion__info').slideDown('slow');
});


$('body').on('click', '.video_show_btn', function() {
  var code = $(this).attr('data-code');
  $('#video .wr_video').html('<iframe src="https://www.youtube.com/embed/' + code + '?autoplay=true&fs=1&rel=0&modestbranding="1" frameborder="0" allowfullscreen></iframe>');
  modalMsg('#video');
});

$('body').on('click', '.form_video .close', function() {
  $('#video .wr_video').empty('');
});



function modalMsg(id){
	var modal = $(id);
	modal.modal('show');
}

var arrowSvg = '<svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.939341 10.9393C0.353554 11.5251 0.353554 12.4749 0.939341 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.939341 10.9393ZM26 10.5L2 10.5V13.5L26 13.5V10.5Z" fill="url(#paint0_linear)"/><defs><linearGradient id="paint0_linear" x1="0.199999" y1="12" x2="26" y2="12" gradientUnits="userSpaceOnUse"><stop stop-color="#00C6FB"/><stop offset="1" stop-color="#005BEA"/></linearGradient></defs></svg>';
var carousel_Settings = {
      nav: true,
      navText: [arrowSvg, arrowSvg],
      items: 4,
      loop: true,
      margin:0,
      autoWidth:false,
      responsive:{
        0:{
          autoWidth:false,
          margin:0,
          items: 1,
        },
        768:{
          autoWidth:true,
          margin:10,
          items: 2,
        },

      }

  };

var owl = $('.first_carousel');
var first_carouselHtml = owl.html();
function initializeOwl(start = false){
  if($(document).width() <= 767 && owl.attr('data-device') == 'd') {

    owl.trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
    owl.find('.owl-stage-outer').children().unwrap();

    $('.first_carousel > .item').each(function() {
      if($(this).hasClass('item_wrap')){
        $(this).after($(this).html());
        $(this).remove();
      }
    });

    owl.addClass('owl-carousel');
    owl.owlCarousel( carousel_Settings );
    owl.attr('data-device', 'm');

  } else if($(document).width() >= 768 && owl.attr('data-device') == 'm'){

    owl.trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
    owl.find('.owl-stage-outer').children().unwrap();

    owl.html(first_carouselHtml);
    owl.addClass('owl-carousel');
    owl.owlCarousel( carousel_Settings );
    owl.attr('data-device', 'd');

  }
  if(start){
    $('.first_carousel').owlCarousel(carousel_Settings);
  }
}


var id;
$(window).resize( function() {
  clearTimeout(id);
  id = setTimeout(()=>{initializeOwl(false)}, 500);
});


function triggerMessageField(message) {
  $('#form_msg .form-notification').html('<div class="alert alert-danger"></div>');
  $('.alert-danger').append(message);
}

$('body').on('click', '#success_close', function(event)
{
  $('#form_msg .form_msg__succes').slideUp('fast');
  $('#form_msg .form_msg__item').slideDown('fast');
  $('#form_msg .form-notification').empty();
});

$('body').on('click', '#send_btn', function(event)
{
  event.preventDefault();
  var user_name = $('#user_name').val();
  var field_number = $('#field_number').val();

  $.ajax({
    url: '/send_rc.php',
    data : ({
      'rcname': user_name,
      'rcphone': field_number
    }),
    type: 'post',
    success: function(res) {
      var res = JSON.parse(res);
      if(res.status == 1){
        $('#form_msg .form_msg__item').slideUp('fast');
        $('#form_msg .form_msg__succes').slideDown('fast');
        document.querySelector("#user_name").value = "";
        document.querySelector("#field_number").value = "";
        $('#form_msg .form-notification').empty();
      }else{
        triggerMessageField(res.data);
      }

    }
  });


});



$(document).ready(function(){

  $(window).scroll(function(){
    if ($(this).scrollTop() > 200) {
      $(".btn_scrollTop").addClass("active");
    } else {
      $(".btn_scrollTop").removeClass("active");
    };
  });

  initializeOwl(true);

  $('.reviews_carousel').owlCarousel({
      nav: true,
      navText: [arrowSvg, arrowSvg],
      margin: 15,
      onInitialized: counter, 
      onTranslated: counter,
      responsive:{
        0:{
          margin: 15,
          items: 1.4,
          center: false,
          loop: true,
        },
        767:{
          loop: false,
          items: 2
        },
        991:{
          margin: 40,
          items: 4,
          center: true,
        },
      }

  }).append('<div class="counter_carousel">1/'+$('.reviews_carousel .owl-stage').children().length+'</div>');

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
    navText: [arrowSvg, arrowSvg],
    autoWidth:false,
    margin: 0,
    items: 1,
    onInitialized: counter, 
    onTranslated: counter,
    responsive:{
      767:{
        items: 3,
        autoWidth:true,
        margin: 20,
      },

    }
  }).append('<div class="counter_carousel">1/'+$('.prize_carousel .owl-stage').children().length+'</div>');

  $("body").on("focusin", function(){

     $(".fancybox_msg").fancybox({
      arrows: false,
     }); 


  }); 


});

function counter(event) {
  var element   = event.target;         // DOM element, in this example .owl-carousel
  var items     = event.item.count;     // Number of items
  var item      = event.page.index + 1;     // Position of the current item
  $(element).closest('.owl-carousel').find('.counter_carousel').html(item + '/' + items);
}