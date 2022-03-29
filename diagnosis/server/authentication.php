<?php
$servername = "localhost";
$db_username = "physicz9_up_admin";
$db_password = "^x9)eQ8XGSJ{[1";
$database = "physicz9_up_dev";

require('../wp-load.php');
require_once (ABSPATH . 'wp-includes/class-phpass.php');

// Create connection
$conn = new mysqli($servername, $db_username, $db_password, $database);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$_POST = json_decode(array_keys($_POST)[0], true);

//create data parameters for SQL query
$user_login = $_POST['user'];
$user_password = $_POST['pass'];
$wp_hasher = new PasswordHash(8, true);

// create and get SQL query to check if username exists
$sql = "SELECT * FROM `_SXA_users` WHERE `user_login`= '{$user_login}'";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
  // check if password is valid
  while($row = result->fetch_assoc()){
    if($wp_hasher->CheckPassword($user_password, $row["user_pass"])){
      $name = $row['user_nicename'];
    	echo "Authenticated {$name}";
    }
    else {
    	echo "Sorry. Password is incorrect. Try again.";
    }
  }
} else {
  echo "Sorry. Username does not exist.";
}

// close the connection
$conn->close();
?>