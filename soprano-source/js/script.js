$(document).ready(() => {
  const sliderBig = $('.slider.big');

  if(sliderBig.length) {
    $(sliderBig).slick({
      autoplay:false,
      arrows: true,
      autoplaySpeed:3000, //  Slide Delay
      speed:800, // Transition Speed
      slidesToShow:1, // Number Of Carousel
      slidesToScroll:1, // Slide To Move
      pauseOnHover:false,
      respondTo: 'slider',
      dots: false,
      infinite: true,
      cssEase: 'linear',
      // appendArrows: $('.slide .text'),
      prevArrow: $('.slick-new-prev.big'),
      nextArrow: $('.slick-new-next.big'),
      responsive:[
        {breakpoint:681,settings:{
          arrows: false
        }}
      ],
    });
  }
 
  const sliderSmall = $('.slider.small')

  if (sliderSmall.length) {
    $(sliderSmall).slick({
      autoplay:false,
      fade: true,
      arrows: true,
      autoplaySpeed:3000, //  Slide Delay
      speed:800, // Transition Speed
      slidesToShow:1, // Number Of Carousel
      pauseOnHover:false,
      respondTo: 'slider',
      dots: false,
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
      autoplay:false,
      fade: true,
      arrows: true,
      autoplaySpeed:3000, //  Slide Delay
      speed:800, // Transition Speed
      slidesToShow:1, // Number Of Carousel
      pauseOnHover:false,
      respondTo: 'slider',
      dots: false,
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
  const menu = document.querySelector('.topMenu')
  const topOfMenu = menu.offsetTop;
  // const menuHeight = menu.offsetHeight;

  if (windowScroll > topOfMenu) {
      // document.body.style.paddingTop = menuHeight + 'px';
      menu.classList.add('fixedNav');

  } else {
      // document.body.style.paddingTop = 0;
      menu.classList.remove('fixedNav');
  }
}

// fixed menu 
$(window).scroll(function() {
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
