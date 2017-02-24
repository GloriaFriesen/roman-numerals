var output = []

var romanValueOnes = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]
var romanValueTens = ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"]
var romanValueHundreds = ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"]
var romanValueThousands = ["M", "MM", "MMM"]

// var arabicValueOnes = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// var arabicValueTens = [10, 20, 30, 40, 50, 60, 70, 80, 90]
// var arabicValueHundreds = [100, 200, 300, 400, 500, 600, 700, 800, 900]
// var arabicValueThousands = [1000, 2000, 3000]


var romanNumeral = function(userInput) {
var digitCount = userInput.toString().length;
var firstDigit = userInput.toString().slice(0, 1);
var secondDigit = userInput.toString().slice(1, 2);
var thirdDigit = userInput.toString().slice(2, 3);
var fourthDigit = userInput.toString().slice(3, 4);

var indexFirstDigit = firstDigit - 1
var indexSecondDigit = secondDigit - 1
var indexThirdDigit = thirdDigit - 1
var indexFourthDigit = fourthDigit -1

  if (digitCount === 1) {
      output = romanValueOnes[userInput -1];
  } else if (digitCount === 2) {
    if (userInput === 10) {
      var romanFirstDigit = romanValueTens[indexFirstDigit]
      output = romanFirstDigit
    } else {
      var romanFirstDigit = romanValueTens[indexFirstDigit]
      var romanSecondDigit = romanValueOnes[indexSecondDigit]
      output = romanFirstDigit + romanSecondDigit;
    }
  } else if (digitCount === 3) {
    if (userInput === 100) {
      output = romanValueHundreds[indexFirstDigit]
    } else if (secondDigit === "0"){
      output = romanValueHundreds[indexFirstDigit] + romanValueOnes[indexThirdDigit]
    } else if (thirdDigit === "0") {
      output = romanValueHundreds[indexFirstDigit] + romanValueOnes[indexSecondDigit]
    } else {
      output = romanValueHundreds[indexFirstDigit] + romanValueTens[indexSecondDigit] + romanValueOnes[indexThirdDigit]
    }

  // 1000 works, 1110 works, 1111 works. Does not work for 1010, 1001, 1100 (multiple 0's)
    
  // } else if (digitCount === 4) {
  //   if (userInput === 1000) {
  //     output = romanValueThousands[indexFirstDigit]
  //   } else if (secondDigit === "0"){
  //     output = romanValueThousands[indexFirstDigit] + romanValueTens[indexThirdDigit] + romanValueOnes[indexFourthDigit]
  //   } else if ((thirdDigit === "0") && (fourthDigit !== "0")){
  //     output = romanValueThousands[indexFirstDigit] + romanValueHundreds[indexSecondDigit] +  romanValueOnes[indexFourthDigit]
  //   } else if (fourthDigit === "0") {
  //       output = romanValueThousands[indexFirstDigit] + romanValueHundreds[indexSecondDigit] +  romanValueTens[indexThirdDigit]
  //   } else {
  //     output = romanValueThousands[indexFirstDigit] + romanValueHundreds[indexSecondDigit] + romanValueTens[indexThirdDigit] + romanValueOnes[indexFourthDigit]
  //   }
  }
  console.log(output);
};

$(document).ready(function() {
  $("form#romanNumerals").submit(function(event) {
    var userInput = parseInt($("input#userInput").val());
    var result = romanNumeral(userInput);
    event.preventDefault();
  });

});
