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



$(document).ready(function(){ //smooth scolling//
	$("nav").on("click","a", function (event) {
		event.preventDefault(); //deleted standart clicking
		var id  = $(this).attr('href'), //get the identificator from href
			top = $(id).offset().top; //calculating the height of the section

		$('body,html').animate({scrollTop: top}, 3000); //animated scrolling  to top duiring 3000 мс
	});
});
