function submitForm() {
    var firstname = document.getElementById("firstName").value;
    var lastname = document.getElementById("lastName").value;
    var address = document.getElementById("address").value;
    var pincode = document.getElementById("pincode").value;
    var gender = document.getElementById("gender").value;
    var state = document.getElementById('state').value;
    var country = document.getElementById('country').value;

  var food = [];
  var checkboxes = document.getElementsByName('food');
  for(var i=0; i< checkboxes.length; i++){
    if(checkboxes[i].checked){
        food.push(checkboxes[i].value);
  } 
}
  
  var table = document.getElementById('dataTable');
  var row = table.insertRow(table.rows.length);
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

  document.getElementById("myForm").reset();
}
