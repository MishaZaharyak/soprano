$(document).ready(function() {

  var sliderOptions = {
    autoplay:false,
    arrows: true,
    autoplaySpeed:3000,
    speed:800,
    slidesToShow:1,
    slidesToScroll:1,
    pauseOnHover:false,
    dots: false,
    infinite: true,
    cssEase: 'linear',
  }

  var sliderBig = $('.slider.big');

  if(sliderBig.length) {
    $(sliderBig).slick(Object.assign(sliderOptions, {
      prevArrow: $('.slick-new-prev.big'),
      nextArrow: $('.slick-new-next.big'),
      responsive:[
        {breakpoint:681,settings:{
          arrows: false
        }}
      ],
    }));
  }
 
  var sliderSmall = $('.slider.small-s')

  if (sliderSmall.length) {
    $(sliderSmall).slick(Object.assign(sliderOptions,
      {
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
      }));
  }
 
  var reviewSlider = $(".reviews .slider")

  if (reviewSlider.length) {
    $(reviewSlider).slick(Object.assign(sliderOptions,
      {
        fade: true,
        prevArrow: $('.reviews .slick-new-prev'),
        nextArrow: $('.reviews .slick-new-next'),
        responsive:[
          {breakpoint:681,settings:{
            arrows: false,
            fade: false
          }}
        ],
      }))
  }

  var doctorsSlider = $('.doctors-slider');

  if (doctorsSlider.length) {
    $(doctorsSlider).on('init', function(e, slick) {
      showSlideInfo(slick);
    })

    $(doctorsSlider).slick(Object.assign(sliderOptions,
      {
        slidesToShow:5,
        slidesToScroll:1,
        infinite: false,
        dots: false,
        prevArrow: $(doctorsSlider).parent().find('.slick-new-prev.small'),
        nextArrow: $(doctorsSlider).parent().find('.slick-new-next.small'),
        responsive:[
          {
            breakpoint:1261,
            settings: {
              slidesToShow:4
            }
          },
          {
            breakpoint:1051,
            settings: {
              slidesToShow:3
            }
          },
          {
            breakpoint:851,
            settings: {
              slidesToShow:3,
              arrows: false
            }
          },
          {
            breakpoint:701,
            settings: {
              slidesToShow:2,
              arrows: false
            }
          },
          {
            breakpoint:501,
            settings: {
              slidesToShow:1,
              arrows: false
            }
          }
        ],
      }))
  }

  var experienceSlider = $('.experience-slider');

  if (experienceSlider.length) {
    $(experienceSlider).each(function() {
      $(this).slick(Object.assign(sliderOptions,
        {
          slidesToShow:4,
          slidesToScroll:1,
          infinite: false,
          dots: false,
          adaptiveHeight: true,
          prevArrow: $(this).parent().find('.slick-new-prev.small'),
          nextArrow: $(this).parent().find('.slick-new-next.small'),
          responsive:[
            {
              breakpoint:1301,
              settings: {
                slidesToShow:3
              }
            },
            {
              breakpoint:992,
              settings: {
                slidesToShow:4
              }
            },
            {
              breakpoint:801,
              settings: {
                slidesToShow:3
              }
            },
            {
              breakpoint:769,
              settings: {
                slidesToShow:3,
                arrows: false,
              }
            },
            {
              breakpoint:501,
              settings: {
                slidesToShow:2,
                arrows: false,
              }
            }
          ],
        }))
    })
  }
})

function showSlideInfo(slick) {
  var slides = slick.$slider.find('.slide');
  var images = slides.find('img');

  var prev = slick.$prevArrow;
  var next = slick.$nextArrow;

  slides.eq(0).addClass('show');

  // buttons
  if (prev || next) {
    prev.on('click', function(e) {
      e.preventDefault();
      var oldSlide = slides.filter('.show').eq(0);

      if (slides.index(oldSlide) === 0) {
        return
  
      } else {
        oldSlide.removeClass('show');
  
        if (!oldSlide.hasClass('show')) {
          oldSlide.closest('.slick-slide').prev().find('.slide').addClass('show')
        }
      }
    });
  
    next.on('click', function(e) {
      e.preventDefault();
      var oldSlide = slides.filter('.show').eq(0);
  
      if (slides.index(oldSlide) === slides.length - 1) {
        return
  
      } else {
        oldSlide.removeClass('show');
  
        if (!oldSlide.hasClass('show')) {
          oldSlide.closest('.slick-slide').next().find('.slide').addClass('show')
        }
      }
  
    });
  }

  // on image click/touche
  Array.from(images).forEach(function(el) {
    ['click', 'touchstart'].forEach(function(clickEvent) {
      el.addEventListener(clickEvent, function(event) {
        event.preventDefault();
        let oldSlide = slides.filter('.show').eq(0);

        oldSlide.removeClass('show')

        if (!oldSlide.hasClass('show')) {
          oldSlide = $(el).closest('.slide').addClass('show')
        }
      })
    })
  })
}

var closeWindow;

// open modal window and close it if autoclose set to true
function openModalWindow(selector, autoclose=false) {
  var modalWindow = document.querySelector(selector);

  if (autoclose) clearInterval(closeWindow);

  modalWindow.classList.add('open');

  setTimeout(function() {

    if (modalWindow.classList.contains('open')) {
      modalWindow.classList.add('open-active');
    }
  }, 100)

  if (autoclose) {
    closeWindow = setInterval(function() {
      closeModalWindow(modalWindow)
    }, 4000)
  }
}

// close modal window 
function closeModalWindow(selector) {
  var modal = document.querySelector(selector);
  modal.classList.remove('open-active');

  setTimeout(function() {

    if (!modal.classList.contains('open-active')) {
      modal.classList.remove('open');
    }
  }, 500)
}

function fixedMenu() {
  var windowScroll = window.scrollY;
  var menu = document.querySelector('.topMenu');
  var openButton = menu.querySelector('.navbar-toggler');
  var topOfMenu = menu.offsetTop;
  var windowWidth = window.innerWidth; 

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
    var menu = $(this).closest('.topMenu').get(0);
    var hasClass = $(menu).hasClass('fixedNav');
    var windowScroll = window.scrollY;
    var topOfMenu = menu.offsetTop;

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
  $('.navigation a').each(function(i, el) {
    $(el).parent().removeClass('active')
  })
})

// active language
$(document).on('click', '.languages a', function(e) {
  $('.languages a').each(function(i, el) {
    $(el).parent().removeClass('active')
  })
  $(e.target).parent().addClass('active')
})
// active link
$(document).on('click', '.navigation a', function(e) {
  $('.navigation a').each(function(i, el) {
    $(el).parent().removeClass('active')
  })
  $(e.target).parent().addClass('active')
});

// pagination active page
$(document).on('click', '.pagination a:not(.nav-arrow)', function(e) {
  $('.pagination a').each(function(i, el) {
    $(el).parent().removeClass('active')
  })
  $(e.target).parent().addClass('active')
});

// useful page tiles
var tiles = $('.tiles');

if (tiles.length) {
  $(tiles).gridalicious({
    gutter: 1,
    width: 330,
    selector: '.item',
    animate: true,
  });
}
