


$(document).ready(function() {
  $("#romanNumerals").submit(function() {
    event.preventDefault();
    var userInput = parseInt($("input#userInput").val());
    console.log(userInput);
  });
});
