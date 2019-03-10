$(document).ready(() => {

  const sliderOptions = {
    autoplay:false,
    arrows: true,
    autoplaySpeed:3000, //  Slide Delay
    speed:800, // Transition Speed
    slidesToShow:1, // Number Of Carousel
    slidesToScroll:1, // Slide To Move
    pauseOnHover:false,
    dots: false,
    infinite: true,
    cssEase: 'linear',
  }

  const sliderBig = $('.slider.big');

  if(sliderBig.length) {
    $(sliderBig).slick({
      ...sliderOptions,
      prevArrow: $('.slick-new-prev.big'),
      nextArrow: $('.slick-new-next.big'),
      responsive:[
        {breakpoint:681,settings:{
          arrows: false
        }}
      ],
    });
  }
 
  const sliderSmall = $('.slider.small-s')

  if (sliderSmall.length) {
    $(sliderSmall).slick({
      ...sliderOptions,
      fade: true,
      prevArrow: $('.slick-new-prev.small'),
      nextArrow: $('.slick-new-next.small'),
      responsive:[
        {breakpoint:992,settings:{
          centerMode: true,
          centerPadding: '80px',
        }},
        {breakpoint:681,settings:{
          arrows: false,
          fade: false
        }}
      ],
    });
  }
 
  const reviewSlider = $(".reviews .slider")

  if (reviewSlider.length) {
    $(reviewSlider).slick({
      ...sliderOptions,
      fade: true,
      prevArrow: $('.reviews .slick-new-prev'),
      nextArrow: $('.reviews .slick-new-next'),
      responsive:[
        {breakpoint:681,settings:{
          arrows: false,
          fade: false
        }}
      ],
    })
  }
})

var closeWindow;

// open thank you window and close it after 4 second
function openThankYouWindow() {
  const thankYouWindow = document.querySelector('.thank-you');

  clearInterval(closeWindow);

  thankYouWindow.classList.add('open');

  setTimeout(function() {

    if (thankYouWindow.classList.contains('open')) {
      thankYouWindow.classList.add('open-active');
    }
  }, 100)

  closeWindow = setInterval(function() {
    thankYouWindow.classList.remove('open-active');

    setTimeout(function() {

      if (!thankYouWindow.classList.contains('open-active')) {
        thankYouWindow.classList.remove('open');
      }
    }, 500)

  }, 4000)
}

// smooth scroll
// $(document).on("click","a[target=_self]", function(event) {
//     const target = $(this.getAttribute('href'));
//     if (target.length) {
//         event.preventDefault();
//         $('html, body').stop().animate({scrollTop: target.offset().top}, 2000);
//     }
// });

function fixedMenu() {
  const windowScroll = window.scrollY;
  const menu = document.querySelector('.topMenu');
  const openButton = menu.querySelector('.navbar-toggler');
  const topOfMenu = menu.offsetTop;
  const windowWidth = window.innerWidth; 

  if (windowScroll > topOfMenu) {
      menu.classList.add('fixedNav');
      
  } else {

    if (windowWidth < 992) {

      if (!openButton.classList.contains('open')) {
        menu.classList.remove('fixedNav');

      } else {
        menu.classList.add('fixedNav');
      }

    } else {
      menu.classList.remove('fixedNav');
    }
  }
}

// fixed menu 
$(window).scroll(function() {
  fixedMenu();
}).resize(function() {
  fixedMenu();
})

$(document).ready(function() {
  //fixed menu
  fixedMenu();
  // menu button animation
	$('#nav-icon3').on('click', function(e){
    e.preventDefault();
    const menu = $(this).closest('.topMenu').get(0);
    const hasClass = $(menu).hasClass('fixedNav');
    const windowScroll = window.scrollY;
    const topOfMenu = menu.offsetTop;

    if (windowScroll <= topOfMenu && !hasClass) {
      menu.classList.add('fixedNav');
    } else if (windowScroll <= topOfMenu && hasClass) {
      menu.classList.remove('fixedNav');
    }

    $(this).toggleClass('open');
  });
});

// reset active link when click on brande
$('.navbar-brand').on('click', function(e) {
  e.preventDefault();
  $('.navigation a').each((i, el) => $(el).parent().removeClass('active'))
})

// active language
$(document).on('click', '.languages a', e => {
  e.preventDefault();
  $('.languages a').each((i, el) => $(el).parent().removeClass('active'))
  $(e.target).parent().addClass('active')
})
// active link
$(document).on('click', '.navigation a', e => {
  e.preventDefault();
  $('.navigation a').each((i, el) => $(el).parent().removeClass('active'))
  $(e.target).parent().addClass('active')
})
