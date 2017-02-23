var output = ""
var one = "I"
var five = "V"
var ten = "X"
var fifty = "L"
var oneHundred = "C"
var fiveHundred = "D"
var oneThousand = "M"

var romanNumeral = function(userInput) {
  if (userInput === 1) {
    return output(one);
    counsole.log(output);
  }

$(document).ready(function() {
  $("#romanNumerals").submit(function() {
    event.preventDefault();
    var userInput = parseInt($("input#userInput").val());
    var result = romanNumeral(userInput);
  });
});
