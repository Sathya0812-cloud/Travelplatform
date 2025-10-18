<?php
session_start();
if (!isset($_SESSION["admin_logged_in"])) {
    header("Location: admin_login.html");
    exit();
}

$db_server = "localhost";
$db_user = "root";
$db_password = "";
$db_name = "projectsathya";

$conn = new mysqli($db_server, $db_user, $db_password, $db_name);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$type = $_GET["type"];
$query = "";

if ($type == "users") {
    $query = "SELECT id, username, email, password, phoneno FROM signup";
} elseif ($type == "travel") {
    $query = "SELECT  user_id, transport_type, travel_date, location FROM transport";
} elseif ($type == "rooms") {
    $query = "SELECT  user_id, room_name, booking_date, persons FROM roombookings";
} elseif ($type == "tools") {
    $query = "SELECT  user_id, tool_name, price FROM tools";
}

$result = $conn->query($query);
if ($result->num_rows > 0) {
    echo "<table><tr>";
    while ($field = $result->fetch_field()) {
        echo "<th>" . ucfirst($field->name) . "</th>";
    }
    echo "</tr>";

    while ($row = $result->fetch_assoc()) {
        echo "<tr>";
        foreach ($row as $value) {
            echo "<td>$value</td>";
        }
        echo "</tr>";
    }
    echo "</table>";
} else {
    echo "No records found.";
}

$conn->close();
?>
