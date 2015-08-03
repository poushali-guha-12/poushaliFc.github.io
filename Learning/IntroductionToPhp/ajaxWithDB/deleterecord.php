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
	$id=$_GET['ID'];
	echo "Connected successfully";
	$sql = "DELETE FROM subscriptiondata WHERE ID= $id";

if (mysqli_query($conn, $sql)) {
    //echo "Record deleted successfully";
    echo header("Location: show.php");
} else {
    echo "Error deleting record: " . mysqli_error($conn);
}

}
mysqli_close($conn);
?>