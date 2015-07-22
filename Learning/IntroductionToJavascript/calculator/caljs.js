var mem = 0;
var preNum = " ";
var sucNum = " ";
var result = " ";
var curNum = " ";
var op = " ";
var point=" ";

function calculate(element) 
{

    var content = element.textContent;
    if (content == "CLS")
    {
        document.getElementById("view").value = " ";
	preNum=" ";
	op=" ";
        curNum=" ";
    }
    if (content == "CAN") {
        if(curNum!=" "){

		curNum = " ";
	
        document.getElementById("view").value = preNum + op;
    }
	else
	{
		if(op!=" ")
		{
			op=" ";
			document.getElementById("view").value = preNum;
		}
		else
		{
			if(preNum!=" ")
			{
				preNum=" ";
				document.getElementById("view").value =" ";
			}
		}
	}
}
    
    if(content==".")
    {
	if(point==" ")
        {
		if(op==" " && result==" ")
	    {
		preNum+=content;
		point=".";
	       document.getElementById("view").value += content;
	    }
		if(op==" " && result!=" ")
	    {
		preNum=content;
		point=".";
		document.getElementById("view").value=content;
		result=" ";
	    }
	    if(op!=" "	)
	   {
		curNum+=content;
		point=".";
		document.getElementById("view").value+=content;
           }
	}
    }
	    
		
    for (i = 0; i <= 9; i++) {
        if (i == content) {
            if(op==" " && result==" ")
	    {
		preNum+=content;
	       document.getElementById("view").value += content;
	    }
            if(op==" " && result!=" ")
	    {
		preNum=content;
		document.getElementById("view").value=content;
		result=" ";
	    }
	    if(op!=" "	)
	   {
		curNum+=content;
		document.getElementById("view").value+=content;
           }
            
        }

    }
    if (content == "+" || content == "-" || content == "*" || content == "/" || content == "mod") {
        if (op == " "){
            op = content;
		point=" ";}
        else {
            count(op);
            
            op = content;
            point=" ";
 	    result=" ";
        }
        document.getElementById("view").value += op;
    }
    if (content == "MC")
        mem = 0;
    if (content == "M+") {
        if (mem == 0)
            mem = curNum;
        else
            result = parseInt(mem) + parseInt(curNum);
    }
    if (content == "M-") {
        if (mem == 0)
            mem = curNum;
        else
            result = parseInt(mem) - parseInt(curNum);
    }
    if (content == "MR")
        document.getElementById("view").innerHTML = mem;

    if (content == "=") {
        count(op);
    point=" ";
    
    op = " ";
    

}
if (content == "PER") {
    if (curNum == " ")
{
        result = preNum / 100;
	document.getElementById("view").value = result;
}
    else {
        curNum = (curNum * preNum) / 100;
        count(op);
	op=" ";
}


        
    }
    
}
function count(oprtr) {
        switch (oprtr) {
            case "+":
                result= parseFloat(preNum) + parseFloat(curNum);
                break;
            case "-":
                result= parseFloat(preNum) - parseFloat(curNum);
                break;
            case "*":
                result= parseFloat(preNum) * parseFloat(curNum);
                break;
            case "/":
                result= Math.floor(parseFloat(preNum) / parseFloat(curNum));
                break;
            case "REM":
                result= parseFloat(preNum) % parseFloat(curNum);
                break;


        }
	preNum = result;
    curNum = " ";
    document.getElementById("view").value = result;

    }    