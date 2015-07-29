 <?php
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
		
	if(empty($_POST["st"])){
 		$stErr="state is required";
 		$flag=0;
 	}
 	else
	$st=$_POST["st"];

	
	if($flag==1)
 	{
		$fp=fopen("myvalue.csv","a");
		fputcsv($fp,explode(',',$name));
 		fputcsv($fp,explode(',',$email));
		fputcsv($fp,explode(','$fd));
		fputcsv($fp,explode(','$phn));
 		fputcsv($fp,explode(',',$sex));
	 	foreach($intr as $value){
			if($value){
 	 			fputcsv($fp,explode(',',$value));
	 		}

	 }
	    fputcsv($fp,explode(','$country));
 		fputcsv($fp,explode(',',$st));
	fclose($fp);
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


