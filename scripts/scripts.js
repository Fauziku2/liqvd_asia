
(function ($) {
  'use strict' // Start of use strict

  // jQuery for page scrolling feature - requires jQuery Easing plugin
  $('a.page-scroll').bind('click', function (event) {
    var $anchor = $(this)
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top)
    }, 1250, 'easeInOutExpo')
    event.preventDefault()
  })

  var scroll_pos = 0
  $(document).scroll(function () {
    scroll_pos = $(this).scrollTop()
    if (scroll_pos > 680 && scroll_pos <= 1200) {
      $('nav a').css('color', 'black')
      $('.navbar-logo').attr('src', './image/navbar-section2-logo.png')
      $('.navbar-logo').fadeIn(1000)
      $('nav a').fadeIn(1000)
      $('.navbar-btn').fadeIn(1000)
      // $('.navbar-logo').hide()
    // } else if (scroll_pos > 300) {
    //   $('.navbar-logo').attr('src', '../image/navbar-section2-logo.png')
    //   $('.navbar-logo').show()
    } else if (scroll_pos < 680 ){
      $('nav a').css('color', 'white')
      $('.navbar-logo').attr('src', './image/navbar-logo.png')
      $('.navbar-logo').fadeIn(1000)
      $('nav a').fadeIn(1000)
      $('.navbar-btn').fadeIn(1000)
    } else if (scroll_pos > 1200) {
      $('.navbar-logo').fadeOut()
      $('nav a').fadeOut()
      $('.navbar-btn').fadeOut()
    }
  })

  $('#signUpForm').css('display', 'none')

  $('#signUpButton').click(function () {
    $(this).css('background-color', '#10CA7E').css('color', '#222222')
    $('#signInButton').css('background-color', '#696969').css('color', '#222222').css('border-color', '#696969')

    $('#signInForm').css('display', 'none')
    // $('#signUpForm').show('fast')
    $('#signUpForm').fadeIn(1000)
  })

  $('#signInButton').click(function () {
    $(this).css('background-color', '#10CA7E').css('color', '#222222')
    $('#signUpButton').css('background-color', '#696969').css('color', '#222222').css('border-color', '#696969')
    // $('.login-btn').css('margin-bottom', '100px')

    $('#signInForm').fadeIn(1000)
    $('#signUpForm').css('display', 'none')
  })

  // Highlight the top nav as scrolling occurs
  // $('body').scrollspy({
  //     target: '.navbar-fixed-top',
  //     offset: 51
  // })
  // Closes the Responsive Menu on Menu Item Click
  // $('.navbar-collapse ul li a').click(function () {
  //         $('.navbar-toggle:visible').click()
  // })
  // Offset for Main Navigation
  // $('#mainNav').affix({
  //     offset: {
  //         top: 100
  //     }
  // })

})(jQuery)// End of use strict
