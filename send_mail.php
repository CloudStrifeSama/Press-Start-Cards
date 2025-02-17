<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $company = htmlspecialchars($_POST['company']);
    $email = htmlspecialchars($_POST['email']);
    $topic = htmlspecialchars($_POST['topic']);
    $message = htmlspecialchars($_POST['message']);

    $to = 'guillaume.girard.1985@gmail.com';
    $subject = 'Contact Form: ' . $topic;
    $body = "Name: $name\nCompany: $company\nEmail: $email\nMessage:\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        http_response_code(200);
        echo 'Message sent successfully!';
    } else {
        http_response_code(500);
        echo 'Error sending message.';
    }
} else {
    http_response_code(403);
    echo 'Forbidden';
}
?>
