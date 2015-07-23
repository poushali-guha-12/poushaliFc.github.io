function calculatetime()
{
	var s1=parseInt(document.getElementById("sec1").value);
	var m1=parseInt(document.getElementById("min1").value);
	var h1=parseInt(document.getElementById("hour1").value);
	var s2=parseInt(document.getElementById("sec2").value);
	var m2=parseInt(document.getElementById("min2").value);
	var h2=parseInt(document.getElementById("hour2").value);
	var h,m,s;

	if(s2<s1){
		s=(s2+60)-s1;
		m2=m2-1;
 
	}
	else{
		s=s2-s1;
	}
	if(m2<m1){
		m=(m2+60)-m1;
		h2=h2-1;
 
	}
	else{
		m=m2-m1;
	}
	if(h2<h1)
	{
		h=(h2-h1)+24;
	}
	else
		h=h2-h1;
	
	document.getElementById("diff1").innerHTML=h + " hours " + m +" minutes " + s +" seconds";

		
}

function calculatedate()
{
	var d1=parseInt(document.getElementById("day1").value);
	var m1=parseInt(document.getElementById("mon1").value);
	var y1=parseInt(document.getElementById("yr1").value);
	var d2=parseInt(document.getElementById("day2").value);
	var m2=parseInt(document.getElementById("mon2").value);
	var y2=parseInt(document.getElementById("yr2").value);
	var d,m,y;
	if(y2<y1){
		temp=d1;
		d1=d2;
		d2=temp;
		temp=m1;
		m1=m2;
		m2=temp;
		temp=y1;
		y1=y2;
		y2=temp;
	}

	if(d2<d1){
		d=(d2+30)-d1;
		m2=m2-1;
	}
	else{
		d=d2-d1;
	}
	if(m2<m1){
		m=(m2+12)-m1;
		y2=y2-1;
	}
	else{
		m=m2-m1;
	}
	y=y2-y1;
	document.getElementById("diff2").innerHTML=y + " years " + m +" months " + d +" days";

}

function interval()
{
	
	var tm=parseInt(document.getElementById("int2").value);
	var curTm=parseInt(document.getElementById("hr").value);
	var intrvl=tm+curTm;
	if(intrvl>24)
	{
		var days=Math.floor(intrvl/24);
		var hrs=intrvl%24;
	}
	days+=parseInt(document.getElementById("int1").value);
	document.getElementById("dt").stepUp(days);
		


}