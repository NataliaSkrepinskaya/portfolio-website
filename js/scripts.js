console.log("He said: \"Yes!\", that's for sure")
console.log("Hello guys! I would like say you that")
var foo = {baz1: "Frontend Development", baz2: "UI Design", goo: "important"}, baz3 ="UX Design";
console.log("%s has %d %s aspects. I describe it as %s, %s and %s.", "Web design ", 3, foo.goo, baz3, foo.baz2, foo.baz1);


$("input[type=email]").on("blur", function () {  //validation correct email//
  let email = $(this).val();
  let name = $(this).val();

  if (email.length > 0
  && (email.match(/.+?\@.+/g) || []).length !== 1) {
    console.log("invalid");
    window.alert("Your email is incorrect!"); //if the email is uncorrect adding message//
    $(".group-email").addClass("is_red") //if the email is uncorrect adding the red bottom-border//
  } else {
    console.log("valid");
    $(".group-email").removeClass("is_red").addClass("is_green") //if the email is correct adding the green bottom-border//
  }

  if (name.lenght > 0) {
    console.log ("valid")
  } else {
    $(".group-name").addClass("is_green")
  }

});
