<?php

$name = $_POST['name'];
$email =$_POST['email'];
$message = $_POST['message'];
$subject = $_POST['subject'];
$to = "info@jdesai.co.in";

$subject=" $subject - Delight Technologies";
$body = "**    This Is An Automated Mail From The Contact Page  ** \n\n --------------- Details --------------- \n\n Name-         $name \n Email Id-   $email  \n Message - \n--------- \n $message  ";

mail($to,$subject,$body);

header("Location:http://www.jdesai.co.in/namrata");
?>