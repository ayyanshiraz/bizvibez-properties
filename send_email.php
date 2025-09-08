<?php
// Use the PHPMailer library for reliable email sending
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// The path should be public_html/PHPMailer/src/...
require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

// IMPORTANT: Replace 'https://www.yourdomain.com' with your actual website URL
header("Access-Control-Allow-Origin: https://www.yourdomain.com"); 
header("Access-Control-Allow-Headers: Content-Type");

$response = ['status' => 'error', 'message' => 'An error occurred.'];

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Sanitize user inputs using modern standards
    $name = htmlspecialchars(trim($_POST['name']));
    $email = filter_var(trim($_POST['email']), FILTER_VALIDATE_EMAIL);
    $message = htmlspecialchars(trim($_POST['message']));
    $attachment = isset($_FILES['attachment']) ? $_FILES['attachment'] : null;

    if ($email) {
        $mail = new PHPMailer(true);
        try {
            // --- Your GoDaddy Email Server Settings ---
            $mail->isSMTP();
            $mail->Host       = 'smtpout.secureserver.net'; // GoDaddy Outgoing Server
            $mail->SMTPAuth   = true;
            $mail->Username   = 'info@bizvibezproperties.com'; // Your full email address
            $mail->Password   = 'Bizvibez@2025';    // Use your new, changed password
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
            $mail->Port       = 465; // SSL Port

            // --- Email Recipients ---
            $mail->setFrom('info@bizvibezproperties.com', 'BizVibez Contact Form');
            $mail->addAddress('ayyanshiraz@gmail.com');      // Where you will RECEIVE the mail

            // --- Attachments ---
            if ($attachment && $attachment['error'] == UPLOAD_ERR_OK) {
                $mail->addAttachment($attachment['tmp_name'], $attachment['name']);
            }

            // --- Email Content ---
            $mail->isHTML(true);
            $mail->Subject = "New message from: $name";
            $mail->Body    = "<b>Name:</b> $name<br><b>Email:</b> $email<br><br><b>Message:</b><br>" . nl2br($message);

            $mail->send();
            $response = ['status' => 'success', 'message' => 'Message sent successfully!'];
        } catch (Exception $e) {
            $response['message'] = "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
        }
    } else {
        $response['message'] = 'Invalid email address provided.';
    }
}

// Return the response as JSON
header('Content-Type: application/json');
echo json_encode($response);
?>