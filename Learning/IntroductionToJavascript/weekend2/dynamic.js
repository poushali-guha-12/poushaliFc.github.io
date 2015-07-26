(function container() {
    (function createRadio() {
        var radioVal = ["rdo1", "rdo2", "rdo3"];
        var lbl = ["Basic Calculator ", " Date/Time Calculator ", " EMI Calculator"];
        for (i = 0; i < radioVal.length; i++) {
            var input = document.createElement('input');
            input.type = "radio";
            input.name = "cal";
            input.id = radioVal[i];
            input.addEventListener("click", createUI);
            document.body.appendChild(input);
            var tnode = document.createTextNode(lbl[i]);
            document.body.appendChild(tnode);
        }
    })();

    function createUI() {
        if (document.getElementById("table")) {

            document.body.removeChild(table);
        }
        if (document.getElementById("buton")) {

            document.body.removeChild(buton);
        }
        if (document.getElementById("shw")) {
            document.body.removeChild(shw);
        }

        if (document.getElementById("rdo1").checked) {
            var cellContent = [
                [".", "0", "=", "/"],
                ["1", "2", "3", "*"],
                ["4", "5", "6", "-"],
                ["7", "8", "9", "+"],
                ["CL", "AC", "RM", "%"],
                ["MC", "M+", "M-", "MR"]
            ];
            

            var show = document.createElement('TABLE');
            show.border = "5";
            show.id = "shw";

            document.body.appendChild(show);
            var txt = document.createElement('input');
            txt.type = "text";
            txt.id = "view";
            show.appendChild(txt);
            document.getElementById("view").style.width="117px";

           
        } else {
            if (document.getElementById("rdo3").checked) {
                var cellContent = [
                    ["Loan Amount", "ln"],
                    ["Time(in months)", "tm"],
                    ["Rate of Interest", "ri"],
                    ["EMI", "em"]
                ];
            } else if (document.getElementById("rdo2").checked) {
                var cellContent = [
                    [
                        ["dd", 1, 31],
                        ["mm", 1, 12],
                        ["yyyy", 1900, 2100]
                    ],
                    [
                        ["hh", 0, 23],
                        ["mm", 0, 59],
                        ["ss", 0, 59]
                    ]
                ];
                var cellId = [
                    [
                        ["day1", "mon1", "yr1"],
                        ["day2", "mon2", "yr2"]
                    ],
                    [
                        ["hr1", "min1", "sec1"],
                        ["hr2", "min2", "sec2"]
                    ]
                ];
                var func = [calculatedate, calculatetime]; //, interval];
            }
        }

        var Table = document.createElement('TABLE');
        Table.id = "table";
        document.body.appendChild(Table);
        var tableBody = document.createElement('TBODY');
        Table.appendChild(tableBody);
        var rowLength = cellContent.length;
        var clmLength = cellContent[0].length;
        console.log(rowLength + " " + clmLength);
        for (i = 0; i < rowLength; i++) {
            var tr = document.createElement('TR');
            tableBody.appendChild(tr);

            for (j = 0; j < clmLength; j++) {
                var td = document.createElement('TD');
                if (document.getElementById("rdo3").checked) {
                    if (j == 0) {
                        td.textContent = cellContent[i][0];
                    } else {

                        var textBox = document.createElement('input');
                        textBox.type = "text";
                        textBox.id = cellContent[i][1];
                        console.log(textBox.id);
                        td.appendChild(textBox);
                    }
                } else {
                    if (document.getElementById("rdo1").checked) {

                        Table.border = "5";
            Table.cellpadding = "20";
            Table.cellspacing = "20";
                      td.textContent = cellContent[i][j];
                         td.addEventListener("click", function() {
                             calculate(this.textContent);
                       //  td.addEventListener=("click",this.calculate);
                        });

                    } else if (document.getElementById("rdo2").checked) {
                        if (j == 2) {
                            var btn = document.createElement('input');
                            btn.type = "button";
                            btn.value = "calculate";
                            btn.addEventListener("click", func[i]);
                            td.appendChild(btn);

                        } else {
                            for (k = 0; k <= 2; k++) {
                                var input = document.createElement('input');
                                input.type = "number";
                                input.placeholder = cellContent[i][k][0];
                                input.min = cellContent[i][k][1];
                                input.max = cellContent[i][k][2];
                                input.id = cellId[i][j][k];
                                console.log(input.id);
                                td.appendChild(input);
                            }
                        }

                    }
                }
                tr.appendChild(td);
            }
        }
        if (document.getElementById("rdo3").checked) {
            var btn = document.createElement('input');
            btn.type = "button";
            btn.value = "Calculate";
            btn.id = "buton";
            btn.addEventListener("click", calculateEMI);
            document.body.appendChild(btn);
        }


    }



    function calculateEMI() {
        var count = 0;
        if (document.getElementById("ln").value != " ")
            count++;
        if (document.getElementById("tm").value != " ")
            count++;
        if (document.getElementById("ri").value == " ")
            alert("you have to input rate of interest");
        if (document.getElementById("em").value != " ")
            count++;
        if (count < 2)

            alert("you have to put atleast any three data including rate of interest");
        else {

            if (document.getElementById("ln").value == "") {
                var roi = parseFloat(document.getElementById("ri").value);
                var time = parseFloat(document.getElementById("tm").value);
                var emi = parseFloat(document.getElementById("em").value);
                roi /= 1200;
                var temp = Math.pow((1 + roi), time);
                var loan = Math.round((emi * (temp - 1)) / (roi * temp));
                document.getElementById("ln").value = loan;

            } else if (document.getElementById("em").value == "") {
                var roi = parseFloat(document.getElementById("ri").value);
                var time = parseFloat(document.getElementById("tm").value);
                var loan = parseFloat(document.getElementById("ln").value);
                roi /= 1200;
                var temp = Math.pow((1 + roi), time);
                var emi = Math.round((loan * roi * temp) / (temp - 1));
                document.getElementById("em").value = emi;
            } else if (document.getElementById("tm").value == "") {
                var roi = parseFloat(document.getElementById("ri").value);
                var loan = parseFloat(document.getElementById("ln").value);
                var emi = parseFloat(document.getElementById("em").value);
                roi /= 1200;
                var temp1 = Math.log(emi / (emi - (loan * roi)));
                var temp2 = Math.log(1 + roi);
                time = Math.round(temp1 / temp2);
                document.getElementById("tm").value = time;

            }
        }
    }

    

function calculate(element) 
{

    console.log(element);
    //console.log(document.getElementById("view").value);
    var mem = 0;
var preNum = " ";
var sucNum = " ";
var result = " ";
var curNum = " ";
var op = " ";
var point=" ";
    var content = element;
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

}

    function calculatetime() {
        var s1 = (document.getElementById("sec1").value);
        var m1 = (document.getElementById("min1").value);
        var h1 = (document.getElementById("hr1").value);
        var s2 = (document.getElementById("sec2").value);
        var m2 = (document.getElementById("min2").value);
        var h2 = (document.getElementById("hr2").value);
        var h, m, s;

        if (s2 < s1) {
            s = (s2 + 60) - s1;
            m2 = m2 - 1;

        } else {
            s = s2 - s1;
        }
        if (m2 < m1) {
            m = (m2 + 60) - m1;
            h2 = h2 - 1;

        } else {
            m = m2 - m1;
        }
        if (h2 < h1) {
            h = (h2 - h1) + 24;
        } else
            h = h2 - h1;

        var tnode = document.createTextNode(h + " hours " + m + " minutes " + s + " seconds");
        document.body.appendChild(tnode);


    }

    function calculatedate() {
        var d1 = (document.getElementById("day1").value);
        var m1 = (document.getElementById("mon1").value);
        var y1 = (document.getElementById("yr1").value);
        var d2 = (document.getElementById("day2").value);
        var m2 = (document.getElementById("mon2").value);
        var y2 = (document.getElementById("yr2").value);
        var d, m, y;
        if (y2 < y1) {
            temp = d1;
            d1 = d2;
            d2 = temp;
            temp = m1;
            m1 = m2;
            m2 = temp;
            temp = y1;
            y1 = y2;
            y2 = temp;
        }

        if (d2 < d1) {
            d = (d2 + 30) - d1;
            m2 = m2 - 1;
        } else {
            d = d2 - d1;
        }
        if (m2 < m1) {
            m = (m2 + 12) - m1;
            y2 = y2 - 1;
        } else {
            m = m2 - m1;
        }
        y = y2 - y1;

        var tnode = document.createTextNode(y + " years " + m + " months " + d + " days");
        document.body.appendChild(tnode);



    }

    // function createElement(type,parent,att{min,max,att,id,elm,name})
    // {
    // 	var elment=document.createElement(elm);
    // 	element.type=type;
    // 	element.min=min;
    // 	element.max=max;
    // 	element.id=id;
    // 	parent.appendChild(element);
    // }


})();