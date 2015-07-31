<html>
<head>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>

<body>
   
    <script src="fnctn.js"></script>
    <div class="default">
        <div class="news" onclick="tab1()" id="t1">Subscribe</div>
        <div class="sub" onclick="tab2()" id="t2">News</div>
        <div class="container">
            <div class="left" id="lft">
                <h3>Welcome</h3>
                <p id="pid1">Simple and effective Angularjs binding for FusionCharts javascript Charting Libary.Simple and effective Angularjs binding for FusionCharts javascript Charting Libary.</p>
                <p id="pid2">Angularjs binding for FusionCharts javascript Charting Library</p>
                <div class="button" id="btn"><font color="white" align "centre">Learn More</font></div>
            </div>
            <div class="right" id="rght">
                <h3>Latest News</h3>
                <img src="image.jpg">
            </div>
            <div class="merge" id="frm">
                <form name="subscribe" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" method="GET" >
                <table>
                        <tr>
                            <td>Name:
                                <input type="text" id="name" name="name">
                            </td>
                            <td>Country:
                                <select id="cntry" onchange="showState(this.value)" name="country">
                                    <option value="" placeholder="select country">select country</option>
                                    <option value="india">India</option>
                                    <option value="usa">USA</option>
                                </select>
                                </td>
                            <td>State:
                                <select id="state" disabled name="st">
                                    <option value="" placeholder="state">state</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Email:
                                <input type="text" name="email" id="email">
                            </td>
                            <td>feedback:
                                <input type="text" name="fd" id="fd">
                            </td>
                            <td>Contact:
                                <input type="text" name="phn" id="phn" maxlength="10" onkeypress="return isNumber(event)">
                            </td>
                        </tr>
                        <tr>
                            <td>sex:
                                <input type="radio" value="male" name="sex" id="male">male
                                <input type="radio" value="female" name="sex" id="female">female
                            </td>
                        </tr>
                        <tr>
                            <td>Interested in:
                                <input type="checkbox" name="hobby[]" value="football" id="football">football
                                <input type="checkbox" name="hobby[]" value="movie" id="movie" >movie</td>
                                <td>
                                <input type="checkbox" name="hobby[]" value="reading" id="read">reading
                            </td>
                        </tr>

                       
                    </table>
                    <button type="button" onclick ="loadXML()">SUBMIT
                    <!-- <button type="reset" value="Reset">RESET</button> -->
                </form>
            </div>
          
        </div>
</body>

</html>
