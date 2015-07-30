<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "poushali";

// Create connection
$conn = mysqli_connect($servername, $username, $password,$dbname);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
else{
	$mail=$_GET['email'];
	echo "Connected successfully";
	$sql = "DELETE FROM subscription WHERE email= '$mail'";

if (mysqli_query($conn, $sql)) {
    echo "Record deleted successfully";
} else {
    echo "Error deleting record: " . mysqli_error($conn);
}
}
mysqli_close($conn);
?>