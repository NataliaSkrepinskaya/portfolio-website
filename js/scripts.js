console.log("He said: \"Yes!\", that's for sure")
console.log("Hello guys! I would like say you that")
var foo = {baz1: "Frontend Development", baz2: "UI Design", goo: "important"}, baz3 ="UX Design";
console.log("%s has %d %s aspects. I describe it as %s, %s and %s.", "Web design ", 3, foo.goo, baz3, foo.baz2, foo.baz1);


$("input[type=email]").on("blur", function () {  //validation correct email//
  let email = $(this).val();

  if (email.length > 0
  && (email.match(/.+?\@.+/g) || []).length !== 1) {
    console.log("invalid");
    alert("Your email is incorrect!");
    $(".group-email").addClass("is_red")
  } else {
    console.log("valid");
    $(".group-email").addClass("is_green")
  }
});
