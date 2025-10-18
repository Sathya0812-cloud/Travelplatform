<?php
// Enable error reporting for debugging
ini_set('display_errors', 1);
error_reporting(E_ALL);

// Database credentials
$db_server = "localhost";
$db_user = "root";
$db_password = "";
$db_name = "projectsathya";

// Establish a database connection
$conn = new mysqli($db_server, $db_user, $db_password, $db_name);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Process form submission
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Sanitize user input
    $user_id = mysqli_real_escape_string($conn, $_POST["user_id"]);
    $room_name = mysqli_real_escape_string($conn, $_POST["room_name"]);
    $booking_date = mysqli_real_escape_string($conn, $_POST["booking_date"]);
    $persons = mysqli_real_escape_string($conn, $_POST["persons"]);

    // SQL query to insert booking details
    $query = "INSERT INTO roombookings (user_id, room_name, booking_date, persons) VALUES ('$user_id', '$room_name', '$booking_date', '$persons')";

    // Execute the query
    if ($conn->query($query) === TRUE) {
        echo "<script>alert('Your booking has been submitted successfully.'); window.location.href = 'details.html';</script>";
    } else {
        echo "Error: " . $query . "<br>" . $conn->error;
    }
}

// Close the connection
$conn->close();
?>