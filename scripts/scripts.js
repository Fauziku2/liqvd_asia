
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
    if (scroll_pos > 680 && scroll_pos <= 1370) {
      $('nav a').css('color', 'black')
      $('.navbar-logo').attr('src', '../image/navbar-section2-logo.png')
      $('.navbar-logo').show()
      $('nav a').show()
      $('.navbar-btn').show()
      // $('.navbar-logo').hide()
    // } else if (scroll_pos > 300) {
    //   $('.navbar-logo').attr('src', '../image/navbar-section2-logo.png')
    //   $('.navbar-logo').show()
    } else if (scroll_pos < 680 ){
      $('nav a').css('color', 'white')
      $('.navbar-logo').attr('src', '../image/navbar-logo.png')
      $('.navbar-logo').show()
      $('nav a').show()
      $('.navbar-btn').show()
    } else if (scroll_pos > 1370) {
      $('.navbar-logo').hide()
      $('nav a').hide()
      $('.navbar-btn').hide()
    }
  })

  $('#signUpForm').css('display', 'none')

  $('#signUpButton').click(function () {
    $(this).css('background-color', '#10CA7E').css('color', '#222222')
    $('#signInButton').css('background-color', '#696969').css('color', '#222222').css('border-color', '#696969')

    $('#signInForm').css('display', 'none')
    $('#signUpForm').show('fast')
  })

  $('#signInButton').click(function () {
    $(this).css('background-color', '#10CA7E').css('color', '#222222')
    $('#signUpButton').css('background-color', '#696969').css('color', '#222222').css('border-color', '#696969')
    // $('.login-btn').css('margin-bottom', '100px')

    $('#signInForm').show('fast')
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
