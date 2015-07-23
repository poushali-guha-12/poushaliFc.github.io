function calculate() {
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