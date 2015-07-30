<!DOCTYPE HTML>
<html>
<head></head>
<body>

<form name="subscribe" action="edit.php" method="POST" >
                <table>
                        <tr>
                            <td>Name:
                                <input type="text" id="name" name="name" >
                            </td>
                            <td>Country:
                                <select id="cntry" onchange="showState(this.value)" name="country">
                                    <option value="select country">select country</option>
                                    <option value="india">India</option>
                                    <option value="usa" >USA</option>
                                </select>
                                </td>
                            <td>State:
                                <select id="state" disabled name="st">
                                    <option value="state">state</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Email:
                                <input type="text" name="email" >
                            </td>
                            <td>feedback:
                                <input type="text" name="fd" >
                            </td>
                            <td>Contact:
                                <input type="text" name="phn" maxlength="10" onkeypress="return isNumber(event)" >
                            </td>
                        </tr>
                        <tr>
                            <td>sex:
                                <input type="radio"  value="male" name="sex">male
                                <input type="radio"  value="female" name="sex" >female
                            </td>
                        </tr>
                        <tr>
                            <td>Interested in:
                                <input type="checkbox" name="hobby[]" value="foodbal" id="football">football
                                <input type="checkbox" name="hobby[]" value="movie" id="movie" >movie</td>
                                <td>
                                <input type="checkbox" name="hobby[]" value="reading" id="read">reading
                            </td>
                        </tr>

                       
                    </table>
                    <button type="submit" value="Submit" name="update">UPDATE</button>

                  </form>
                </body>
                

</html>