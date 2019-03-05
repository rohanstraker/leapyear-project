//=========Biz Logic=========//
// var year = 2004;
var leapYear = function(year) {
    if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  } else if  {

  } else {
    return false;
  }
};

//=========UI Logic=========//
$(document).ready(function() {
  $( "#leap-year" ).submit(function( event ) {

alert(leapYear(year));
  $("#result").text(leapYear(year));
  event.preventDefault();
  });

});
