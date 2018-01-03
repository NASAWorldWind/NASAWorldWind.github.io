<?php
$to = "endiairizarry@gmail.com";
$subject = $_POST["name"];
$msg = $_POST["message"];

mail($to,$subject,$msg);

echo "Your message has been sent!";
?>
