function fun()
  {         
var amountCorrect = 0;          
for(var i = 1; i <= 10; i++) {
  var radios = document.getElementsByName("quest"+i);
  for(var x = 0; x < radios.length; x++) {
    var radio = radios[x];
    if(radio.value == "correct" && radio.checked) {
      amountCorrect++;
    }
  }
 }                   
    alert("Correct Responses: " + amountCorrect);
  }