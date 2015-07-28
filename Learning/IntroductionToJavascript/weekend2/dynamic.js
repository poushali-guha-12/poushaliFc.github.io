(function container() {
    var mem = 0;
    var secNum = "",
        firNum = "",
        op = "";
    var val = [];
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
            document.getElementById("view").style.width = "117px";


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
                    // [
                    // ["dt","hr","m1"],
                    // ["tb2","int1","int2"]
                    // ]
                ];
                // var intCellVal = [
                //     ["hh", 0, 23],
                //     ["mm", 0, 59],
                //     ["days"],
                //     ["h0urs", 0, 23]
                // ];
                var intCellId = ["hr", "m1", "int1", "int2"];
                var func = [calculatedate, calculatetime, interval];
            }
        }

        var Table = document.createElement('TABLE');
        Table.id = "table";
        document.body.appendChild(Table);
        var tableBody = document.createElement('TBODY');
        Table.appendChild(tableBody);
        var rowLength = cellContent.length;
        var clmLength = cellContent[0].length;
       if (document.getElementById("rdo2").checked) 
       		rowLength=rowLength+1;
       	console.log(rowLength);
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
                        // console.log(textBox.id);
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


                        });

                    } else if (document.getElementById("rdo2").checked) {
                    	if(i==2){
                    		if(j==0){
                    			var dat=document.createElement('input');
                    			dat.type="date";
                    			dat.id="dt";
                    			td.appendChild(dat);
                    			
                    			var hh=document.createElement("input");
                    			hh.type="number";
                    			hh.placeholder="hh";
                    			hh.id="hr";
                    			hh.min=0;
                    			hh.max=23;
                    			td.appendChild(hh);

                    			var mm=document.createElement("input");
                    			mm.type="number";
                    			mm.placeholder="mm";
                    			mm.id="m1";
                    			mm.min=0;
                    			mm.max=59;
                    			td.appendChild(mm);



                    		}

                    		if(j==1){
                    			var tnode = document.createTextNode("Input Interval");
            					td.appendChild(tnode);
            					
                    			var days=document.createElement("input");
                    			days.type="text";
                    			days.placeholder="days";
                    			days.id="int1";
                    			td.appendChild(days);

                    			var hour=document.createElement("input");
                    			hour.type="number";
                    			hour.placeholder="hh";
                    			hour.id="int2";
                    			hour.min=0;
                    			hour.max=23;
                    			td.appendChild(hour);

                    		}
                    	}

                        if (j == 2) {
                            var btn = document.createElement('input');
                            btn.type = "button";
                            btn.value = "calculate";
                            btn.addEventListener("click", func[i]);
                            td.appendChild(btn);

                        } else if(i!=2){
                            for (k = 0; k <3; k++) {
                                var input = document.createElement('input');
                                input.type = "number";
                                input.placeholder = cellContent[i][k][0];
                                input.min = cellContent[i][k][1];
                                input.max = cellContent[i][k][2];
                                input.id = cellId[i][j][k];
                                //console.log(input.id);
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




    function calculate(element) {

        var content = element;
        if (isdigit(content)) {
            document.getElementById("view").value += content;
            var l = val.length;
            if (l == 0)
                val.push(content);
            else {
                if (!isop(val[l - 1]))
                    val[l - 1] += content;
                else
                    val.push(content);
            }
        }
        if (isop(content)) {
            document.getElementById("view").value += content;

            val.push(content);
        }
        if (content == "=") {
            i = 0;


            while (i < val.length) {
                var token = val[i];
                if (isop(token)) {
                    if (ishigh(token)) {
                        var ans = count(val[i - 1], token, val[i + 1]);
                        val[i - 1] = ans;
                        val.splice(i, 2);
                        i = i - 1;
                    }


                }


                i++;

            }
            document.getElementById("view").value = val[0];
        }
        if (content == "CL") {
            var l = val.length;
            val.pop();
            document.getElementById("view").value = val;
        }
        if (content == "AC") {
            val = [];
            document.getElementById("view").value = "";

        }

        function isdigit(digit) {
            for (i = 0; i <= 9; i++) {
                if (digit == i)
                    return true;
            }
        }

        function ishigh(token) {
            var pre = [
                ["+", 2],
                ["-", 1],
                ["*", 3],
                ["/", 4],
                ["RM", 0]
            ];
            for (j = 0; j < val.length; j++) {
                if (isop(val[j])) {
                    for (k = 0; k <= 4; k++) {
                        if (pre[k][0] == token)
                            var tokenPre = pre[k][1];
                        if (pre[k][0] == val[j])
                            temp = pre[k][1];
                        if (tokenPre > temp) {
                            max = tokenPre;
                        } else
                            max = temp;
                    }
                }
            }
            if (max == tokenPre)
                return true;

        }

        function count(num1, oprtr, num2) {
            switch (oprtr) {
                case "+":
                    return (parseFloat(num1) + parseFloat(num2));
                    break;
                case "-":
                    return (parseFloat(num1) - parseFloat(num2));
                    break;
                case "*":
                    return (parseFloat(num1) * parseFloat(num2));
                    break;
                case "/":
                    return (parseFloat(num1) / parseFloat(num2));
                    break;
                case "RM":
                    return (parseFloat(num1) % parseFloat(num2));
                    break;

            }
        }

        function isop(op) {
            if (op == "+" || op == "-" || op == "*" || op == "/" || op == "RM")
                return true;
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
    //  var elment=document.createElement(elm);
    //  element.type=type;
    //  element.min=min;
    //  element.max=max;
    //  element.id=id;
    //  parent.appendChild(element);
    // }


})();

function interval() {

    var tm = parseInt(document.getElementById("int2").value);
    var curTm = document.getElementById("hr").value;
    var intrvl = tm + curTm;
    if (intrvl > 24) {
        var days = Math.floor(intrvl / 24);
        var hrs = intrvl % 24;
    }
    var min = document.getElementById("m1").value;
    days += parseInt(document.getElementById("int1").value);
    document.getElementById("dt").stepUp(days);
    var tnode = document.createTextNode("The date will be " + document.getElementById("dt").value + " and time will be " + hrs + " hours " + min + " minutes ");
        document.body.appendChild(tnode);
    //document.getElementById("diff3").innerHTML = "The will be " + document.getElementById("dt").value + " and time will be " + hrs + " hours " + min + " minutes "



}