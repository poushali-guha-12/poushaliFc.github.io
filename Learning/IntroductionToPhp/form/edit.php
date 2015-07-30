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
else
	echo "Connected successfully";
$nameErr=$emailErr=$fdErr=$phnErr=$sexErr=$countryErr=$stErr="";
 $name=$email=$fd=$phn=$sex=$country=$st="";
 $intr=[];



if ($_SERVER["REQUEST_METHOD"] == "POST") {
 	$flag=1;


	if(empty($_POST["name"])){
		$nameErr="name is required";
	$flag=0;

	}
	else
		$name=$_POST["name"];

 	if(empty($_POST["email"])){
 		$emailErr="email is required";
		$flag=0;
	}
 	else{
		$email=$_POST["email"];
		if (!filter_var($email, FILTER_VALIDATE_EMAIL) === true) 
			$emailErr="not a valid email address";
 	}

 	if(empty($_POST["fd"])){
 		$fdErr="feedback is required";
		$flag=0;
 	}
 	else{
		$fd=$_POST["fd"];
		
 	}

 	if(empty($_POST["phn"])){
		$phnErr="phone is required";
 		$flag=0;
	}
 	else{
		$phn=$_POST["phn"];
		if(strlen($phn)<10)
			$phnErr="phone number must be of 10 digits.";
 	}

	if(empty($_POST["sex"])){
 		$sexErr="gender is required";
 		$flag=0;
 	}
 	else
	$sex=$_POST["sex"];

 	 if(empty($_POST["hobby"])){
	 	$intrErr="gender is required";
 	 	$flag=0;
	 }
 	else
 		$intr=$_POST["hobby"];

 	if(empty($_POST["country"])){
		$countryErr="country is required";
 		$flag=0; 

	}
 	else
		$country=$_POST["country"];
		
	

	
	if($flag==1)
 	{
		

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = "UPDATE subscription SET name=$name, mobile=$mobile, gender=$sex, country=$country, feedback=$fd where email=$email";

if (mysqli_query($conn, $sql)) {
    echo "Record updated successfully";
} else {
    echo "Error updating record: " . mysqli_error($conn);
}


if (mysqli_query($conn, $sql)) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}
		
	 	foreach($intr as $value){
			if($value){
 	 		
 	 			$sql = "INSERT INTO hobby (email,hobby)
                VALUES ('$email','$value')";

if (mysqli_query($conn, $sql)) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}
	 		}
	 		mysqli_close($conn);

	 }
	    
		}
		else{
		if($nameErr)
			echo $nameErr;
		if($emailErr)
			echo $emailErr;
		if($phnErr)
			echo $phnErr;
		if($fdErr)
			echo $fdErr;
		if($sexErr)
			echo $sexErr;
		if($countryErr)
			echo $countryErr;
		if($stErr)
			echo $stErr;
		if(!$intr)
			echo "your interest is not given";

 	}
 	}
		?>


