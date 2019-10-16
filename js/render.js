  // Set variables
  var i = 0;
  var output = "";

  // Do the 'while' loop
  while (i < 5) {
    i ++;
    if  (i === 3) { 
      continue; 
      }
      
    output += i + "<br>";
    
  }

  // Output results to the above HTML element
  document.getElementById("msg").innerHTML = output;
