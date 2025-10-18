<?php
// Enable error reporting for debugging
ini_set('display_errors', 1);
error_reporting(E_ALL);

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

// Check if form data is submitted
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Sanitize user input
    $id = mysqli_real_escape_string($conn, $_POST["id"]);
    $disability = mysqli_real_escape_string($conn, $_POST["disability"]);
    $location = mysqli_real_escape_string($conn, $_POST["location"]);

    // Insert the data into the 'disable' table
    $query = "INSERT INTO disable (id, disability, location) VALUES ('$id', '$disability', '$location')";

    if ($conn->query($query) === TRUE) {
        echo "<script>alert('Your information has been submitted successfully.'); window.location.href = 'details.html';</script>";
    } else {
        echo "Error: " . $query . "<br>" . $conn->error;
    }
}

// Close the connection
$conn->close();
?>
