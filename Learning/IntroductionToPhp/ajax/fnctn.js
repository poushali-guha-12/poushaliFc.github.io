function loadXML(){
	
	var sex="";
var name=document.getElementById("name").value;
var email=document.getElementById("email").value;
var phn=document.getElementById("phn").value;
var fd=document.getElementById("fd").value;
var country=document.getElementById("cntry").value;
var st=document.getElementById("state").value;
if(document.getElementById("male").checked)
	sex=document.getElementById("male").value;
if(document.getElementById("female").checked)
	sex=document.getElementById("female").value;

var hobby=[];
if(document.getElementById("football").checked)
	hobby.push(document.getElementById("football").value);
if(document.getElementById("movie").checked)
	hobby.push(document.getElementById("movie").value);
if(document.getElementById("read").checked)
	hobby.push(document.getElementById("read").value);


	
  if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  } else { // code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  var url='ajax.php?name='+name+'&email='+email+'&phn='+phn+'&fd='+fd+'&country='+country+'&st='+st+'&sex='+sex+'&hobby='+hobby;
  xmlhttp.open("GET",url,true);
  xmlhttp.send();
  xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState==4 && xmlhttp.status==200) {
      console.log(xmlhttp.responseText);
    }
  }
  // xmlhttp.open("GET","ajax.php",true);
  // xmlhttp.send();

  

}


function tab2(){
    document.getElementById("lft").style.display="block";
	document.getElementById("rght").style.display="block";
	document.getElementById("btn").style.display="block";
	document.getElementById("frm").style.visibility="hidden";
	document.getElementById("t2").style.color="#717171";
	document.getElementById("t1").style.color="gray";
	document.getElementById("t2").style.background="#E6E6FA";
	document.getElementById("t1").style.background="lightgray";

}



function tab1()
{
	document.getElementById("lft").style.display="none";
	document.getElementById("rght").style.display="none";
	document.getElementById("btn").style.display="none";
	document.getElementById("frm").style.visibility="visible";
	document.getElementById("t1").style.color="#717171";
	document.getElementById("t2").style.color="gray";
	document.getElementById("t1").style.background="#E6E6FA";
	document.getElementById("t2").style.background="#BDCDEE";
}
// function show()
// {
// 	var nm=document.getElementsByName("name").value;
// 	var ml=document.getElementsByName("email").value;
// 	var cnt=document.getElementsByName("country").value;
// 	var ad=document.getElementsByName("address").value;
// 	var sx=document.getElementsByName("sex").value;
// 	var intr=[];
// 	if(document.getElementById('i1').checked)
// 			intr.push(document.getElementById('i1').value);
// 	if(document.getElementById('i2').checked)
// 			intr.push(document.getElementById('i2').value);
// 	if(document.getElementById('i3').checked)
// 		intr.push(document.getElementById('i3').value);
// 	var object = {name:nm,mail:ml,country:cnt,address:ad,sex:sx,interest:intr};
//  console.log(JSON.stringify(object));

// }

function showState(val)
{
	
	var list = document.getElementById("state");
	while (list.hasChildNodes()) {   
    list.removeChild(list.firstChild);
}
	if(val=="india")
			var st=["select state","bihar","odisa","westbengal","delhi","maharastra","assam","tripura"];
	if(val=="usa")
			var st=["select state","Alabama","Alaska","Colorado","Hawaii","Florida"];
	document.getElementById("state").disabled=false;
	for(i=0;i<st.length;i++)
	{
		
		var s = document.getElementById("state");
   		var option = document.createElement('option');
		option.value = st[i];
		option.innerHTML=st[i];
		
		s.add(option);
	}
}
	

function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    
    if (charCode >= 48 && charCode <= 57) {
        return true;
    }
    return false;
}

// function clear()
// {
// 	document.getElementById("name").innerHTML = "";
// 	document.getElementById("fd").innerHTML = "";
// 	document.getElementById("mail").innerHTML = "";

// }
// function validate(){

//      var Number = document.getElementById("phn").value;
//      var IndNum = /^[0]?[789]\d{9}$/;

//      if(IndNum.test(Number)){
//         return;
//     }

//     else{
//         $('#errMessage').text('please enter valid mobile number');
//         document.getElementById("phn").focus();
//     }

// }