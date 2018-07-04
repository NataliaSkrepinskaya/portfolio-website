

<?php

if(isset($_POST['submit'])){
    $to = "mail@skrepinskaya.com"; // email address
    $from = $_POST['email']; // this is the sender's email address
    $first_name = $_POST['first_name'];
    $subject = "form of sending messages from my website";
    $subject2 = "Copy of my form submission";
    $message = $first_name . " sender of message:" . "\n\n" . $_POST['message'];
    $message2 = "Here is a copy of my message " . $first_name . "\n\n" . $_POST['message'];

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;

    mail($to,$subject,$message,$headers);
   // mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender - Отключено!
    echo "The message had been send " . $first_name . ", we will contact with you.";
	echo "<br /><br /><a href='https://skrepinskaya.com'>come back to the website.</a>";

}

?>
<!--link to the home page-->
<script language="JavaScript" type="text/javascript">
function changeurl(){eval(self.location="https://skrepinskaya.com/index.php");}
window.setTimeout("changeurl();",3000);
</script>
