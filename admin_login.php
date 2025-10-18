<?php
session_start();
ini_set('display_errors', 1);
error_reporting(E_ALL);

$db_server = "localhost";
$db_user = "root";
$db_password = "";
$db_name = "projectsathya";

$conn = new mysqli($db_server, $db_user, $db_password, $db_name);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];

    // Change this to the actual admin credentials
    $admin_username = "admin";
    $admin_password = "admin123";

    if ($username === $admin_username && $password === $admin_password) {
        $_SESSION["admin_logged_in"] = true;
        header("Location: admin_dashboard.html");
        exit();
    } else {
        echo "<script>alert('Invalid Credentials!'); window.location.href='admin_login.html';</script>";
    }
}

$conn->close();
?>
