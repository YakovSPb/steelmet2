$(function() {
  
$('.popup-sent').magnificPopup({
  closeMarkup: '<button title="Close (Esc)" type="button" class="mfp-close"><i class="fa fa-times"></i></button>',  
});

$('.popup-link').magnificPopup({
  type: 'image',
   closeMarkup: '<button title="Close (Esc)" type="button" class="mfp-close"><i class="fa fa-times"></i></button>',
   closeOnContentClick: 'true'
  // other options
});


$('#as-menu ul').hide();
$('#as-menu ul:eq(0)').show();

// $('#as-menu ol').hide();

// $('#as-menu li ul li a').click(function() {
//   $(this).next().show();
// });


$('#as-menu li a').click(function() {

  $('#as-menu li a').removeClass('active');
  $(this).toggleClass('active'); 
    var iselemnt = $(this).next();

    if((iselemnt.is('ul')) && (iselemnt.is(':visible'))) {
      return false;
    }

    if((iselemnt.is('ul')) && (!iselemnt.is(':visible'))) {
      $('#as-menu ul:visible').slideUp('normal');
      iselemnt.slideDown('normal');
      return false;
    }
  }
);


        var link = $('.gumburger');
        var close = $('.close-menu');
        var menu = $('.m-menu');
        link.on('click', function(event){
            event.preventDefault();
            menu.toggleClass('m-menu__active')
        });
        close.on('click', function(event){
            event.preventDefault();
            menu.toggleClass('m-menu__active')
        });
          


  //E-mail Ajax Send
  $("form").submit(function() { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize()
    }).done(function() {
      $('.success').addClass('active').css('display', 'flex').hide().fadeIn();
      setTimeout(function() {
       $('.success').removeClass('active').fadeOut();
        th.trigger("reset");
      }, 3000);
    });
    return false;
  });





  $('input, select').styler({
  	fileBrowse: 'Выбрать'
  });

  $('.jq-selectbox__select-text').css('width','160px');

	$(".prise-items .prise-item strong").equalHeights();

$('.prise-items').owlCarousel({
    loop: true,
    items: 4,
    smartSpeed: 700,
    itemClass: "slide-wrap",
    nav: true,
    navText: [''],
    dots: false,
    responsiveClass: true,
    margin: 25,
    responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3,
                margin: 0

            },
            1300: {
                items: 4
            }
        }
});

var owl = $('.prise-items');

  $(".next").click(function() {
    owl.trigger('next.owl.carousel');
  })
  $(".prev").click(function() {
    owl.trigger('prev.owl.carousel');
  })
});
