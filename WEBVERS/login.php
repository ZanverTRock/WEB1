<?php
header('Content-Type: application/json');

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "WEBVERS";

$login = $_POST['login'];
$password_US = $_POST['password'];

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM users WHERE login = '{$login}' AND password = '{$password_US}'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    echo json_encode(["status" => "success", "user" => ["user_id" => $row['user_id'], "name" => $row['name'], "login" => $row['login']]]);
} else {
    echo json_encode(["status" => "error", "message" => "Invalid login or password"]);
}

$conn->close();
?>