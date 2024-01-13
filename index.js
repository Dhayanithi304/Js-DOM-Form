function submitForm() {
  var firstname = document.getElementById("firstName").value;
  var lastname = document.getElementById("lastName").value;
  var address = document.getElementById("address").value;
  var pincode = document.getElementById("pincode").value;
  var gender = document.getElementById("gender").value;

  var food = [];
  var foodCount = 0;

  if (document.getElementById("food1").checked == true) {
    food.push(document.getElementById("food1").value);
    foodCount++;
  }
  if (document.getElementById("food2").checked == true) {
    food.push(document.getElementById("food2").value);
    foodCount++;
  }
  if (document.getElementById("food3").checked == true) {
    food.push(document.getElementById("food3").value);
    foodCount++;
  }
  if (document.getElementById("food4").checked == true) {
    food.push(document.getElementById("food4").value);
    foodCount++;
  }
  if (document.getElementById("food5").checked == true) {
    food.push(document.getElementById("food5").value);
    foodCount++;
  }

  var state = document.getElementById("state").value;
  var country = document.getElementById("country").value;

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
  }else if(firstname == "" &&
    lastname =="" &&
    address=="" &&
    pincode=="" &&
    gender=="none" &&
    foodCount < 2 &&
    state=="" &&
    country==""){
      document.getElementById("span1").innerText = "Please enter your details ";
      window.scrollTo(0, 0);
      document.getElementById("span2").innerText = "Please enter your details ";
      document.getElementById("span3").innerText = "Please enter your details ";
      document.getElementById("span4").innerText = "Please enter your details ";
      document.getElementById("span5").innerText = "Please enter your details ";
      document.getElementById("span6").innerText = "Please enter your details ";
      document.getElementById("span7").innerText = "Please enter your details ";
  } else
     var myForm = document.getElememtById('myForm').value;
     for(let i=0;i<myForm.length;i++){
  switch (firstname,lastname,address,pincode,gender,foodCount,state,country){
    case firstname == "";
      document.getElementById("span1").innerText = "Please enter your details ";
      window.scrollTo(0, 0);
      break;
    case lastname == "";
      document.getElementById("span2").innerText = "Please enter your details ";
      window.scrollTo(0, 20);
      break;
    case address=="";
      document.getElementById("span3").innerText = "Please enter your details ";
      break;
    case pincode=="";
      document.getElementById("span4").innerText = "Please enter your details ";
      break;
    case gender =="";
      document.getElementById("span5").innerText = "Please enter your details ";
      break;
    case foodCount < 2;
      document.getElementById("small").style.color = "red";
      document.getElementById("small").style.fontSize = "14px";
      window.scrollTo(0, 330);
      break;
    case state =="";
      document.getElementById("span6").innerText = "Please enter your details ";
      break;
    case country =="";
      document.getElementById("span7").innerText = "Please enter your details ";
      break;
    case firstname == "" && lastname =="" && address=="" && pincode=="" && gender=="none" && foodCount < 2 && state=="" && country==""
      document.getElementById("span1").innerText = "Please enter your details ";
      window.scrollTo(0, 0);
      document.getElementById("span2").innerText = "Please enter your details ";
      document.getElementById("span3").innerText = "Please enter your details ";
      document.getElementById("span4").innerText = "Please enter your details ";
      document.getElementById("span5").innerText = "Please enter your details ";
      document.getElementById("span6").innerText = "Please enter your details ";
      document.getElementById("span7").innerText = "Please enter your details ";
      document.getElementById("small").style.color = "red";
      document.getElementById("small").style.fontSize = "14px";
      window.scrollTo(0, 330);
    break;
  }
 }

  document.getElementById("myForm").reset();
}
