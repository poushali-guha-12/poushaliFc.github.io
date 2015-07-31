<?php

$nameErr=$emailErr=$fdErr=$phnErr=$sexErr=$countryErr=$stErr="";
 $name=$email=$fd=$phn=$sex=$country=$st="";
 $intr=[];

if ($_SERVER["REQUEST_METHOD"] == "GET") {
  $flag=1;


  if(empty($_GET["name"])){
    $nameErr="name is required";
  $flag=0;

  }
  else
    $name=$_GET["name"];

  if(empty($_GET["email"])){
    $emailErr="email is required";
    $flag=0;
  }
  else{
    $email=$_GET["email"];
    if (!filter_var($email, FILTER_VALIDATE_EMAIL) === true) 
      $emailErr="not a valid email address";
  }

  if(empty($_GET["fd"])){
    $fdErr="feedback is required";
    $flag=0;
  }
  else{
    $fd=$_GET["fd"];
    
  }

  if(empty($_GET["phn"])){
    $phnErr="phone is required";
    $flag=0;
  }
  else{
    $phn=$_GET["phn"];
    if(strlen($phn)<10)
      $phnErr="phone number must be of 10 digits.";
  }

  if(empty($_GET["sex"])){
    $sexErr="gender is required";
    $flag=0;
  }
  else
  $sex=$_GET["sex"];

   if(empty($_GET["hobby"])){
    $intrErr="gender is required";
    $flag=0;
   }
  else
    $intr=$_GET["hobby"];

  if(empty($_GET["country"])){
    $countryErr="country is required";
    $flag=0; 

  }
  else
    $country=$_GET["country"];
    
  if(empty($_GET["st"])){
    $stErr="state is required";
    $flag=0;
  }
  else
  $st=$_GET["st"];
var_dump($intr);
  
  if($flag==1)
  {

    $fp=fopen("newfile.csv","a");
    fputcsv($fp,explode(',',$name));
    fputcsv($fp,explode(',',$email));
    fputcsv($fp,explode(',',$fd));
    fputcsv($fp,explode(',',$phn));
    fputcsv($fp,explode(',',$sex));
   //  foreach($intr as $value){
   //    if($value){
   //      fputcsv($fp,explode(',',$value));
   //    }
        


   // }
    fputcsv($fp,explode(',',$intr));
      fputcsv($fp,explode(',',$country));
    fputcsv($fp,explode(',',$st));
  fclose($fp);
  echo "file write";
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