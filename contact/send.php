<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';
require 'PHPMailer/src/Exception.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);

    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'mymayil@example.com';       
        $mail->Password = '................';           
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        $mail->setFrom('yourmail@example.com', 'Japanese Gallery Web'); 
        $mail->addReplyTo($email, $name);

        $mail->addAddress('yourmail@example.com'); 

        // Content
        $mail->isHTML(false);
        $mail->CharSet = 'UTF-8';
        $mail->Subject = 'New message from website Japanese Gallery';
        $mail->Body    = "Name: $name\nEmail: $email\nMessage:\n$message";

        $mail->send();
        echo "<script>window.location.href = 'success.php';</script>";
        exit();

    } catch (Exception $e) {
        echo "<script>window.location.href = 'error.php';</script>";
        exit();
    }
}
?>