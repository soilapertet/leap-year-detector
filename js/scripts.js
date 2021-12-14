function leapYear() {
  var year = document.getElementById("leapYear").value;
  if (year = " ") {
    alert("Year not entered!")
  }
  else if(year % 4 !== 0) {
    document.getElementById("output").innerHTML = (""+year+" is NOT a leap year.");
  }
  else if (year % 100 === 0 && year % 400 === 0) {
    document.getElementById("output").innerHTML = (""+year+" is a leap year!");
  }
  else if (year % 100 === 0) {
    document.getElementById("output").innerHTML = (""+year+" is NOT a leap year.");
  }
  else if (year % 4 === 0) {
    document.getElementById("output").innerHTML = (""+year+" is a leap year!"); 
  }
  else {
    return false;
  }
}