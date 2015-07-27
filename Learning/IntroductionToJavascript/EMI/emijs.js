function calculate() {
    var count = 0,roi,time,emi,loan,temp;
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

        if (document.getElementById("ln").value === "") {
            roi = parseFloat(document.getElementById("ri").value);
            time = parseFloat(document.getElementById("tm").value);
            emi = parseFloat(document.getElementById("em").value);
            roi /= 1200;
            temp = Math.pow((1 + roi), time);
            loan = Math.round((emi * (temp - 1)) / (roi * temp));
        document.getElementById("ln").value = loan;

    } else if (document.getElementById("em").value ==="") {
         roi = parseFloat(document.getElementById("ri").value);
      time = parseFloat(document.getElementById("tm").value);
         loan = parseFloat(document.getElementById("ln").value);
        roi /= 1200;
        temp = Math.pow((1 + roi), time);
         emi = Math.round((loan * roi * temp) / (temp - 1));
    document.getElementById("em").value = emi;
} else if (document.getElementById("tm").value === "") {
    roi = parseFloat(document.getElementById("ri").value);
    loan = parseFloat(document.getElementById("ln").value);
    emi = parseFloat(document.getElementById("em").value);
    roi /= 1200;
    var temp1 = Math.log(emi / (emi - (loan * roi)));
    var temp2 = Math.log(1 + roi);
    time = Math.round(temp1 / temp2);
    document.getElementById("tm").value = time;


}

}
}