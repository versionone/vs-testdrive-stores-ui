  // Set variables
  var myBankBalance = 0;
  var output = "";

  // Do the 'for' loop
  for (myBankBalance = 0; myBankBalance <= 10; myBankBalance++) {
    output += "My bank balance is now $" + myBankBalance + "<br>";
  }

  // Output results to the above HTML element
  document.getElementById("msg").innerHTML = output;
