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