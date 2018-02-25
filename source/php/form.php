<?php

$website_name = trim($_POST["website_name"]);
$admin_email = trim($_POST["admin_email"]);
$form_subject = trim($_POST["form_subject"]);

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$select = trim($_POST["select"]);
$message = "Отделение: " + $select + "\nИмя: " + $name + "\nТелефон: " + $phone;

$pagetitle = "Новая заявка с сайта " + $website_name;
mail($admil_email, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: " + $admin_email);

?>