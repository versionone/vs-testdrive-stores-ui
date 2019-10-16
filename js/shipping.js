document.addEventListener("DOMContentLoaded", function(event) {

  // Put the button into a variable
  var e = document.getElementById("myForm");
  
  // Wait for user to click the button
  e.addEventListener( "change", function() {
  
    // Put the selected value into a variable
    var myColor = this.color.value;
    
    // The "Switch" statement.
    switch ( myColor ) {
    
    case "Blue":
      alert("Just like the sky!");
      break;

    case "Red":
      alert("Quite daring!");
      break;

    case "Green":
      alert("Like... grass?");
      break;
      
    }
  }, false);
});
