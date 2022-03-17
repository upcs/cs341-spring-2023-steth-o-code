<?php

$servername = "localhost";
$username = "physicz9_up_admin";
$password = "^x9)eQ8XGSJ{[1";
$database = "physicz9_up_dev";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
//echo "Connected successfully";

// create and get SQL query
$sql = "SELECT * FROM `_SXA_posts` WHERE `ID` = 588";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
    $str = $row["post_content_filtered"];
    echo preg_replace("/\[[^]]+\]/","",$str);
  }
} else {
  echo "0 results";
}

$conn->close();

?>