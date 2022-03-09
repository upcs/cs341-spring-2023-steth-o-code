<?php

$servername = "localhost";
$username = "physicz9_up_admin";
$password = "^x9)eQ8XGSJ{[1";
$database = "physicz9_up_dev";

echo "Working in dbconnect.php...\n";

// create connection
$connection = mysqli_connect('localhost', $username, $password, $database);

// Check connection
if (!$connection) {
    die("Connection failed: " . mysqli_connect_error());
} else {
    echo "Connected successfully";
}

?>