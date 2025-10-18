<?php
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

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $tool_name = mysqli_real_escape_string($conn, $_POST["tool_name"]);
    $price = mysqli_real_escape_string($conn, $_POST["price"]);
    $user_id = mysqli_real_escape_string($conn, $_POST["user_id"]);

    $query = "INSERT INTO tools (tool_name, price, user_id) VALUES ('$tool_name', '$price', '$user_id')";

    if ($conn->query($query) === TRUE) {
        echo "<script>alert('$tool_name has been booked successfully!'); window.location.href = 'details.html';</script>";
    } else {
        echo "Error: " . $query . "<br>" . $conn->error;
    }
}

$conn->close();
?>
