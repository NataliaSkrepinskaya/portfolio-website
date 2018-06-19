console.log("He said: \"Yes!\", that's for sure")
console.log("Hello guys! I would like say you that")
var foo = {baz1: "Frontend Development", baz2: "UI Design", goo: "important"}, baz3 ="UX Design";
console.log("%s has %d %s aspects. I describe it as %s, %s and %s.", "Web design ", 3, foo.goo, baz3, foo.baz2, foo.baz1);


function validateEmail(email) {  //validation correct email//
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validate() {
  var email = $("#email").val();

  if (validateEmail(email)) {
    console.log("valid");
    $(".group-email").removeClass("is_red").addClass("is_green"); //if the email is correct adding the green bottom-border//
  } else {
    console.log("invalid");
    window.alert("Your email is incorrect!"); //if the email is uncorrect adding message//
    $(".group-email").addClass("is_red"); //if the email is uncorrect adding the red bottom-border//
  }
  return false;
}

$("#validate").bind("click", validate); //clicking on button "submit"//



// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
