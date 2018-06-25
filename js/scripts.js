//  Validation correct email //
function validateEmail (email) {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email)
}
function validate () {
  var email = $('#email').val()

  if (validateEmail(email)) {
    console.log('valid')
    //  if the email is correct adding the green bottom-border //
    $('.group-email').removeClass('is_red').addClass('is_green')
  } else {
    console.log('invalid')
    //  if the email is uncorrect adding message  //
    window.alert('Your email is incorrect!')
    // if the email is uncorrect adding the red bottom-border  //
    $('.group-email').addClass('is_red')
  }
  return false
}
//  clicking on button "submit"  //
$('#validate').bind('click', validate)

//  Snooth scrolling  //
// Select all links with hashes //
$('a[href*="#"]')
  // Remove links that don't actually link to anything //
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function (event) {
    // On-page links //
    if (
      location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') &&
      location.hostname === this.hostname
    ) {
      // Figure out element to scroll to //
      var target = $(this.hash)
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']')
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen //
        event.preventDefault()
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function () {
          // Callback after animation //
          // Must change focus!
          var $target = $(target)
          $target.focus()
          if ($target.is(':focus')) { // Checking if the target was focused //
            return false
          } else {
            // Adding tabindex for elements not focusable //
            $target.attr('tabindex', '-1')
            // Set focus again //
            $target.focus()
          }
        })
      }
    }
  })
