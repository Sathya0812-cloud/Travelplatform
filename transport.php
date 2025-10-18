<?php
$servername = "localhost"; // Change if needed
$username = "root"; // Change according to your database
$password = ""; // Change according to your database
$dbname = "projectsathya";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get POST data from the frontend
$user_id = $_POST['user_id'];
$transport_type = $_POST['transport_type'];
$travel_date = $_POST['travel_date'];
$location = $_POST['location'];
$children = $_POST['children'];
$adults = $_POST['adults'];
$transport_name = $_POST['transport_name'];

// Insert into database
$sql = "INSERT INTO transport (user_id, transport_type, travel_date, location, children, adults, transport_name) 
        VALUES ('$user_id', '$transport_type', '$travel_date', '$location', '$children', '$adults', '$transport_name')";

if ($conn->query($sql) === TRUE) {
    echo "Booking Success";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
