<?php
$db_server = "localhost";
$db_user = "root";
$db_password = "";
$db_name = "projectsathya";

try {
    // Establish database connection
    $conn = new mysqli($db_server, $db_user, $db_password, $db_name);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    if ($_SERVER["REQUEST_METHOD"] === "POST") {
        // Retrieve and sanitize form data
        $id = mysqli_real_escape_string($conn, $_POST["id"]);
        $username = mysqli_real_escape_string($conn, $_POST["username"]);
        $email = mysqli_real_escape_string($conn, $_POST["email"]);
        $password = mysqli_real_escape_string($conn, $_POST["password"]); // Store as plain text
        $phone = mysqli_real_escape_string($conn, $_POST["phoneno"]);

        // Prepare and execute query
        $stmt = $conn->prepare("INSERT INTO signup (id, username, email, password, phoneno) VALUES (?, ?, ?, ?, ?)");
        $stmt->bind_param("sssss", $id, $username, $email, $password, $phone);

        if ($stmt->execute()) {
            header("Location: disable.html");
            exit();
        } else {
            echo "<script>alert('Error signing up. Try again later.'); window.location.href='signup.html';</script>";
        }

        $stmt->close();
    }
} catch (Exception $e) {
    echo "<script>alert('An error occurred. Try again later.'); window.location.href='signup.html';</script>";
}

$conn->close();
?>
