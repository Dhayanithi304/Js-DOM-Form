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
  var state = document.getElementById("state").value;
  var country = document.getElementById("country").value;

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
    var table = document.getElementById("dataTable");
    var row = table.insertRow(table.rows.length);
  
    row.insertCell(0).innerHTML = firstname;
    row.insertCell(1).innerHTML = lastname;
    row.insertCell(2).innerHTML = address;
    row.insertCell(3).innerHTML = pincode;
    row.insertCell(4).innerHTML = gender;
    row.insertCell(5).innerHTML = food.join(", ");
    row.insertCell(6).innerHTML = state;
    row.insertCell(7).innerHTML = country;

    document.getElementById("myForm").reset();
  } else{
    
  document.getElementById("span1").innerText = firstname
  ? ""
  : "Enter your Details";
document.getElementById("span2").innerText = lastname
  ? ""
  : "Enter your Details";
document.getElementById("span3").innerText = address
  ? ""
  : "Enter your Details";
document.getElementById("span4").innerText = pincode
  ? ""
  : "Enter your Details";
document.getElementById("span5").innerText = gender
  ? "none"
  : "Enter your Details";
foodCount
  ? foodCount < 2
  : (document.getElementById("small").style.color = "red");
document.getElementById("small").style.fontSize = "14px";
document.getElementById("span6").innerText = state
  ? ""
  : "Enter your Details";
document.getElementById("span7").innerText = country
  ? ""
  : "Enter your Details";
  }
}

window.addEventListener('scroll', function() {
  // Calculate the distance from the top of the document to the bottom of the last section
  var tablediv = document.getElementById('tableDiv');
  var tablesection = tablediv.offsetTop + tablediv.offsetHeight;

  // Check if the user has scrolled to the last section
  if (window.scrollY + window.innerHeight >= tablesection) {
    tablediv.classList.add('scrolled');
  } else {
    tablediv.classList.remove('scrolled');
  }
});
