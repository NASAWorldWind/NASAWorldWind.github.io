<?php

$to = "endiairizarry@gmail.com";

$user_email = $_POST['email'];
$subject = $_POST['name'];
$content = $_POST['content'];

// use wordwrap() if lines are longer than 70 characters
$msg = wordwrap($content,70);

$headers .= "Reply-To: $user_email \r\n";

// send email
mail($to,$subject,$msg,$headers);
?>