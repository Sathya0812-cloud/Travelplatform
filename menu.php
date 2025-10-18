<?php
// Enable error reporting
ini_set('display_errors', 1);
error_reporting(E_ALL);

// Database connection
$conn = new mysqli("localhost", "root", "", "projectsathya");

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Display values to check if they are received
    echo "User ID: " . $_POST["user_id"] . "<br>";
    echo "Assistant Name: " . $_POST["assistant_name"] . "<br>";

    // If assistant_name is empty, stop execution
    if (empty($_POST["assistant_name"])) {
        die("Error: Assistant name is missing!");
    }

    // Sanitize input
    $user_id = mysqli_real_escape_string($conn, $_POST["user_id"]);
    $assistant_name = mysqli_real_escape_string($conn, $_POST["assistant_name"]);

    // Insert into database
    $query = "INSERT INTO assistant (user_id, assistant_name) VALUES ('$user_id', '$assistant_name')";
    if ($conn->query($query) === TRUE) {
        echo "<script>
                alert('Booking successful!');
                window.location.href = 'details.html';
              </script>";
    } else {
        echo "Error: " . $query . "<br>" . $conn->error;
    }
}

$conn->close();
?>
