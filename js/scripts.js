var output = []

var romanValue [
  ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"] // ONES
  ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"] //TENS
  ["C", "CC", "CCC", "CD" "D", "DC", "DCC", "DCCC", "CM"]//HUNDREDS
  ["M", "MM", "MMM"]//THOUSANDS
]

var romanNumeral = function(userInput) {
  if (userInput === 1) {
    output = "i";
    console.log(output);
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
