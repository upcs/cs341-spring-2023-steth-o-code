<?php
$servername = "localhost";
$db_username = "physicz9_up_admin";
$db_password = "^x9)eQ8XGSJ{[1";
$database = "physicz9_up_dev";

require('../wp-load.php');
require('../wp-includes/pluggable.php');

// Create connection
$conn = new mysqli($servername, $db_username, $db_password, $database);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

//create data parameters for SQL query
$user_login = $_REQUEST['username'];
$user_password = $_REQUEST['password'];

// create and get SQL query
$sql = "SELECT * FROM `_SXA_users` WHERE `user_login` LIKE 'up_admin'";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
    //echo "user id: " . $row["ID"]. " - Username: " . $row["user_login"]. " - Email: " . $row["user_email"]. " - Name: " . $row["display_name"] . "<br>";
    echo "Authenticated";
  }
} else {
  echo "Sorry. Invalid credentials.";
}

// close the connection
$conn->close();
?>