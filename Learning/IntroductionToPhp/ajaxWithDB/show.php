<!DOCTYPE HTML>
<html>
<head></head>
<body>
<script src="fnctn.js"></script>
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
     <th>ID</th>
     <th>name</th>
     <th>email</th>
     <th>mobile</th>
     <th>gender</th>
     <th>country</th>
     <th>state</th>
     <th>feedback</th>
     <th>interest</th>
     <th>delete</th>
     <th>update</th>
   </tr>
 </thead>
 <tbody>
   <?php
   $sql = "SELECT * FROM subscriptiondata";
   $result = mysqli_query($conn, $sql);
   if (mysqli_num_rows($result) > 0) {
    // output data of each row
    while($row = mysqli_fetch_assoc($result)) {
        echo "<tr>
        <td>{$row['ID']}</td>
         <td>{$row['name']}</td>
         <td>{$row['email']}</td>
         <td>{$row['phone']}</td>
         <td>{$row['gender']}</td>
         <td>{$row['country']}</td>
         <td>{$row['state']}</td>
         <td>{$row['feedback']}</td>
         <td>{$row['interest']}</td>
         <td><button type='button' id='delete' onclick='loadXML(this,{$row['ID']})'>DELETE</td>
         <td><button type='button' id='update' onclick='loadXML(this,{$row['ID']})'>UPDATE</td>
         </tr>";
       }
    }
else {
    echo "no records found";
}
     
   ?>
 </tbody>
</table>
<?php
  }
?>
</body>
</html>