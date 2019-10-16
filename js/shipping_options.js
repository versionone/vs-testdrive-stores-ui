  // Returns a random integer between min (included) and max (included)
  function getRandomIntIncludeMax(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  document.getElementById("msg").innerHTML = getRandomIntIncludeMax(1, 100);
