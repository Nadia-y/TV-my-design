<?php

$recepient = "nadia-2501@yandex.ru";
$sitename = "TV";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
// $text = trim($_POST["text"]);
$message = "Имя: $name \nТелефон: $phone \nТекст: $text";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

if(!$mail->send()) {
    echo 'Error';
} else {
    header('location: thank-you.html');
}