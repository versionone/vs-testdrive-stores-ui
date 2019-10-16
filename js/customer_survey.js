// Wait for DOM to load
document.addEventListener("DOMContentLoaded", function(event) {

  // Put the button into a variable
  var e = document.getElementById("myForm");
  
  // Wait for user to click the button
  e.addEventListener( "change", function() {
  
    // Do the conditional statement
    var msg = (this.color.value == "Blue") ? "Just like the sky!" : "Didn't select blue huh?";
    
    // Output the result
    document.getElementById("msg").innerHTML = msg;
  
  }, false);
});
