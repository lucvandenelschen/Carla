<?php

/* if (isset($_POST['submit'])) { */
	$name = $_POST['name'];
	$visitor_email = $_POST['email'];
	$message = $POST['message'];
/*}*/	
	/*$email_from = 'lucvandenelschen@gmail.com'; */
	$email_subject = "New Form Submission";
	$email_body = "User Name: $name.\n".
					"User Email:$visitor_email.\n".
					"User Message: $message.\n";
	$to = "lucvandenelschen@gmail.com"
	/*gmail werkt niet */
	/*$headers = "From: $email_from \r\n"; */
	$headers = "From: ".$visitor_email;
/*	$headers .= "Reply-To: $visitor_email \r\n" */
/* ipv $email_body */
/*	$txt = "You have received an e-mail from ".$name.".\n\n".$message*/
	/*Verplicht: to, subject, message*/
	mail($to,$email_subject,$email_body,$headers);
	header("Location: index.html");
	header("Location: index.php?mailsend");
?>