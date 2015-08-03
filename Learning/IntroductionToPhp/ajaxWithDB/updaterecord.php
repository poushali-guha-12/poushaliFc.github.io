<!DOCTYPE HTML>
<html></html>
<body>
<form name="subscribe" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" method="GET" >
                <table>
                        <tr>
                            <td>Name:
                                <input type="text" id="name" name="name">
                            </td>
                            <td>Country:
                                <select id="cntry" onchange="showState(this.value)" name="country">
                                    <option value="" placeholder="select country">select country</option>
                                    <option value="india">India</option>
                                    <option value="usa">USA</option>
                                </select>
                                </td>
                            <td>State:
                                <select id="state" disabled name="st">
                                    <option value="" placeholder="state">state</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Email:
                                <input type="text" name="email" id="email">
                            </td>
                            <td>feedback:
                                <input type="text" name="fd" id="fd">
                            </td>
                            <td>Contact:
                                <input type="text" name="phn" id="phn" maxlength="10" onkeypress="return isNumber(event)">
                            </td>
                        </tr>
                        <tr>
                            <td>sex:
                                <input type="radio" value="male" name="sex" id="male">male
                                <input type="radio" value="female" name="sex" id="female">female
                            </td>
                        </tr>
                        <tr>
                            <td>Interested in:
                                <input type="checkbox" name="hobby[]" value="football" id="football">football
                                <input type="checkbox" name="hobby[]" value="movie" id="movie" >movie</td>
                                <td>
                                <input type="checkbox" name="hobby[]" value="reading" id="read">reading
                            </td>
                        </tr>

                       
                    </table>
                    <button type="button" onclick ="loadXML(this)" id="edit">SUBMIT
                    <!-- <button type="reset" value="Reset">RESET</button> -->
                </form>



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
	$sql = "SELECT * FROM subscriptiondata where ID=$id";
   $result = mysqli_query($conn, $sql);
   if (mysqli_num_rows($result) > 0) {

   	// $name={$row['name']};
   	// $email={$row['email']};
   	// $phn={$row['phone']};
   	// $sex={$row['gender']};
   	// $sex={$row['country']};

