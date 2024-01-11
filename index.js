function submitForm() {
  var firstname = document.getElementById("firstName").value;
  var lastname = document.getElementById("lastName").value;
  var address = document.getElementById("address").value;
  var pincode = document.getElementById("pincode").value;
  var gender = document.getElementById("gender").value;
  var state = document.getElementById("state").value;
  var country = document.getElementById("country").value;

  var food = "";
  var foodCount = 0;

  if (document.getElementById("food1").checked == true) {
    food += document.getElementById("food1").value;
    foodCount++;
  }
  if (document.getElementById("food2").checked == true) {
    food += document.getElementById("food2").value;
    foodCount++;
  }
  if (document.getElementById("food3").checked == true) {
    food += document.getElementById("food3").value;
    foodCount++;
  }
  if (document.getElementById("food4").checked == true) {
    food += document.getElementById("food4").value;
    foodCount++;
  }
  if (document.getElementById("food5").checked == true) {
    food += document.getElementById("food5").value;
    foodCount++;
  }
  var table = document.getElementById("dataTable");
  var row = table.insertRow(table.rows.length);
  if (
    firstname &&
    lastname &&
    address &&
    pincode &&
    gender &&
    foodCount >= 2 &&
    state &&
    country
  ) {
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);

    cell1.innerHTML = firstname;
    cell2.innerHTML = lastname;
    cell3.innerHTML = address;
    cell4.innerHTML = pincode;
    cell5.innerHTML = gender;
    cell6.innerHTML = food.join(", ");
    cell7.innerHTML = state;
    cell8.innerHTML = country;
  }else if(foodCount < 2){
    document.getElementById("small").style.color = "red";
    document.getElementById("small").style.fontSize = "14px";
    return false
  }else{
    alert(" fill all the details"); return false;
  }

  document.getElementById("myForm").reset();
}
