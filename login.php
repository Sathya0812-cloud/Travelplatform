<?php
// Database credentials
$db_server = "localhost";
$db_user = "root";
$db_password = "";
$db_name = "projectsathya";

// Establish a connection
$conn = new mysqli($db_server, $db_user, $db_password, $db_name);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Get user input and sanitize
    $id = mysqli_real_escape_string($conn, $_POST["id"]);
    $username = mysqli_real_escape_string($conn, $_POST["username"]);
    $password = mysqli_real_escape_string($conn, $_POST["password"]); 

    // Prepare statement
    $stmt = $conn->prepare("SELECT password FROM signup WHERE id = ? AND username = ?");
    $stmt->bind_param("ss", $id, $username);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows === 1) {
        // Fetch stored plain text password
        $stmt->bind_result($stored_password);
        $stmt->fetch();

        // Direct comparison (no hashing)
        if ($password === $stored_password) {
            echo "<script>alert('Login successful!'); window.location.href = 'details.html';</script>";
        } else {
            echo "<script>alert('Invalid ID, username, or password. Please try again.'); window.location.href = 'login.html';</script>";
        }
    } else {
        echo "<script>alert('Invalid ID, username, or password. Please try again.'); window.location.href = 'login.html';</script>";
    }

    $stmt->close();
}

$conn->close();
?>
