<!DOCTYPE HTML>
<html>
<head></head>
<body>
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
else{?>
	<table border="1">
 <thead>
   <tr>
     <th>name</th>
     <th>email</th>
     <th>mobile</th>
     <th>gender</th>
     <th>country</th>
     <th>state</th>
     <th>feedback</th>
     <th>delete</th>
     <th>update</th>
   </tr>
 </thead>
 <tbody>
   <?php
   $sql = "SELECT * FROM subscription";
   $result = mysqli_query($conn, $sql);
   if (mysqli_num_rows($result) > 0) {
    // output data of each row
    while($row = mysqli_fetch_assoc($result)) {
        echo "<tr>
         <td>{$row['name']}</td>
         <td>{$row['email']}</td>
         <td>{$row['mobile']}</td>
         <td>{$row['gender']}</td>
         <td>{$row['country']}</td>
         <td>{$row['state']}</td>
         <td>{$row['feedback']}</td>
         <td><a href='deleterecord.php?email={$row['email']}'>delete</a></td>
         <td><a href='updaterecord.php?email={$row['email']}'>update</a></td>
         </tr>";
       }
    }
else {
    echo "no records";
}
     
   ?>
 </tbody>
</table>
<?php
  }
?>
</body>
</html>