<?php

$email = $_POST['email'];
$subject = $_POST['name'];
$content = $_POST['content'];

// use wordwrap() if lines are longer than 70 characters
$msg = wordwrap($content,70);

// send email
mail($email,$subject,$msg);
?>
