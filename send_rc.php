<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require '/PHPMailer/src/Exception.php';
require '/PHPMailer/src/PHPMailer.php';
require '/PHPMailer/src/SMTP.php';

$name = $_SERVER['HTTP_HOST'];

if ($_POST['rcname'] != '' AND $_POST['rcphone'] != '') {
		
		$subject = 'Форма "Обратный звонок"';
		$message = '
				<html>
					<head>
						<title>'.$subject.'</title>
					</head>
					<body>
						<h2>Имя:</h2>
						<p>'.$_POST['rcname'].'</p>
						<h2>Телефон:</h2>
						<p>'.$_POST['rcphone'].'</p>
					</body>
				</html>';

		$mail = new PHPMailer(true);

		try {
		    
		    //Server settings
		    $mail->SMTPDebug = SMTP::DEBUG_OFF; // Enable verbose debug output
		    $mail->isSMTP(); // Send using SMTP
		    //$mail->Host = $this->config->get('config_mail_smtp_host'); // Set the SMTP server
		    $mail->Host = '';
		    $mail->SMTPAuth = true; // Enable SMTP authentication
		    //$mail->Username = $this->config->get('config_mail_smtp_username'); // SMTP username
		    $mail->Username = ''; // SMTP username
		    //$mail->Password = html_entity_decode($this->config->get('config_mail_smtp_password'), ENT_QUOTES, 'UTF-8'); // SMTP password
		    $mail->Password = ''; // SMTP password
		    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
		    //$mail->Port = $this->config->get('config_mail_smtp_port'); // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above
		    $mail->Port = 465; // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

		    //Recipients
		    $mail->setFrom('');
		    $mail->addAddress(''); // Add a recipient
		    //$mail->addAddress('ellen@example.com'); // Name is optional
		    //$mail->addReplyTo('info@example.com', 'Information');
		    //$mail->addCC('cc@example.com');
		    //$mail->addBCC('bcc@example.com');

		    // Attachments
		    //$mail->addAttachment('/var/tmp/file.tar.gz'); // Add attachments
		    //$mail->addAttachment('/tmp/image.jpg', 'new.jpg'); // Optional name

		    // Content
		    $mail->isHTML(true); // Set email format to HTML
		    $mail->Subject = $subject;
		    $mail->Body = $message;
		    //$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';
		    $mail->CharSet = 'UTF-8';

		    $mail->send();
		    //echo 'Message has been sent';

		} catch (Exception $e) {

		    //print 'Message could not be sent. Mailer Error: {$mail->ErrorInfo}';

			print json_encode(array('status' => 0, 'message' => 'Что-то пошло не так!'));

		}

		print json_encode(array('status' => 1, 'message' => 'Мы вам обязательно перезвоним!'));

}
else {

	print json_encode(array('status' => 0, 'message' => 'Заполните все поля формы!'));

}

?>