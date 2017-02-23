var output = []

var romanValue = [
  ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"], // ONES
  ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"], //TENS
  ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],//HUNDREDS
  ["M", "MM", "MMM"]//THOUSANDS
]

var arabicValue = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9], //ONES
  ["10", "20", "30", "40", "50", "60", "70", "80", "90"], //TENS
  ["100", "200", "300", "400", "500", "600", "700", "800", "900" ], //HUNDREDS
  ["1000", "2000", "3000"] //THOUSANDS
]

var temp = arabicValue[0];
var arabicIndexNumber = function index(number) {
  return number === temp;
}
temp.findIndex(index);

var romanNumeral = function(userInput) {
debugger;
  if (userInput <= 9) {
      var arabicIndex = arabicIndexNumber(userInput);
      output = romanValue[0][arabicIndex];
    alert(output);
    console.log(output);
  }
};

$(document).ready(function() {
  $("form#romanNumerals").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("input#userInput").val());
    var result = romanNumeral(userInput);
  });
});
