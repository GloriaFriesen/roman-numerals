var output = ""

var i = 1;
var v = 5;
var x = 10;
var l = 50;
var c = 100;
var d = 500;
var m = 1000

var romanNumeral = function(userInput) {
  if (userInput === 1) {
    output = one;
    counsole.log(output);
    return output;
  }
};

$(document).ready(function() {
  $("form#romanNumerals").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("input#userInput").val());
    var result = romanNumeral(userInput);
  });
});
