var num1 = 0;
var num2 = 0;
var ans = 0;

function show(input) {

    var rowcount = document.getElementById("mytable").rows.length;
    if (rowcount == 3) {
        for (i = 1; i <= 3; i++) {
            document.getElementById("mytable").deleteRow(0);
        }
    }
    for (i = 1; i <= 3; i++) {
        var Table = document.getElementById("mytable");
        var row = Table.insertRow(0);

        for (j = 0; j <= 7; j++) {

            if ((i == 2 && j >= 4) || (i == 1)) {

                num1 = Math.floor((Math.random() * 900) + 100);
                num2 = n = Math.floor((Math.random() * 900) + 100);
            } else {
                num1 = Math.floor((Math.random() * 90) + 10);
                num2 = Math.floor((Math.random() * 90) + 10);
            }
            if (input.id == "sub") {
                if (num1 < num2) {
                    var temp = num1;
                    num1 = num2;
                    num2 = temp;
                }
                ans = (num1 - num2);
                var sign = "-";
            } else {
                ans = (num1 + num2);
                var sign = "+";
            }
            var cell = row.insertCell(j);

            cell.innerHTML = "&nbsp&nbsp" + num1 + "<br />" + sign + num2 + "<br />" + "<input type='text' name='text' id='text' onkeypress='return isNumber(event)'  onkeyup='validate(" + ans + ",this)' >";
            ind++;

        }
    }
}

function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode == 8)
        evt.preventDefault();
    if (charCode >= 48 && charCode <= 57) {
        return true;
    }
    return false;
}

function validate(ansr, element) {

    element.selectionStart = 0;
    element.selectionEnd = 0;
    if (ansr == element.value)
        element.style.backgroundColor = "green";
    else

        element.style.backgroundColor = "red";

}