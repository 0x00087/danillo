(function ($) {
  "use strict";
  // TOP Menu Sticky
  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll < 400) {
      $("#sticky-header").removeClass("sticky");
      $('#back-top').fadeIn(500);
    } else {
      $("#sticky-header").addClass("sticky");
      $('#back-top').fadeIn(500);
    }
  });
  
  
  $(document).ready(function(){
  
  // mobile_menu
  var menu = $('ul#navigation');
  if(menu.length){
    menu.slicknav({
      prependTo: ".mobile_menu",
      closedSymbol: '+',
      openedSymbol:'-'
    });
  };
  // blog-menu
    // $('ul#blog-menu').slicknav({
    //   prependTo: ".blog_menu"
    // });
  
  // review-active
 
  
  // about_active

  
 
  

  
    // filter items on button click
    $('.portfolio-menu').on('click', 'button', function () {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });
  
    //for menu active class
    $('.portfolio-menu button').on('click', function (event) {
      $(this).siblings('.active').removeClass('active');
      $(this).addClass('active');
      event.preventDefault();
    });
    

  

  


  
  

  
  

  
  if (document.getElementById('default-select')) {
    $('select').niceSelect();
  }
  
    //about-pro-active
  $('.details_active').owlCarousel({
    loop:true,
    margin:0,
  items:1,
  // autoplay:true,
  navText:['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>'],
  nav:true,
  dots:false,
  // autoplayHoverPause: true,
  // autoplaySpeed: 800,
    responsive:{
        0:{
            items:1,
            nav:false
  
        },
        767:{
            items:1,
            nav:false
        },
        992:{
            items:1,
            nav:false
        },
        1200:{
            items:1,
        }
    }
  });
  
  });
  
  
  
  //------- Mailchimp js --------//  
  function mailChimp() {
    $('#mc_embed_signup').find('form');
  }
  mailChimp();

          // Search Toggle
          $("#search_input_box").hide();
          $("#search").on("click", function () {
              $("#search_input_box").slideToggle();
              $("#search_input").focus();
          });
          $("#close_search").on("click", function () {
              $('#search_input_box').slideUp(500);
          });
          // Search Toggle
          $("#search_input_box").hide();
          $("#search_1").on("click", function () {
              $("#search_input_box").slideToggle();
              $("#search_input").focus();
          });
  
  })(jQuery);	