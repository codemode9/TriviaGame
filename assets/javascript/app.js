var timeoutID = window.setTimeout(fun, [50000]);

var n = 50;
setTimeout(countDown,50000);

function timedText() {
    var q = document.getElementById("txt");
    for (t=50; t<=50; t--) {
    setTimeout(function(){ q.value=t + " seconds" }, t * 1000);
    console.log(timedText());
}};

function countDown(){
   n--;
   if(n > 0){
      setTimeout(countDown,1000);
   }
   $( ".timerino" ).append(n);};

function fun()
  {         
var amountYep = 0;          
for(var i = 1; i <= 10; i++) {
  var radios = document.getElementsByName("quest"+i);
  for(var x = 0; x < radios.length; x++) {
    var radio = radios[x];
    if(radio.value == "yep" && radio.checked) {
      amountYep++;
    }
  }
 }                   
    alert("Correct Responses: " + amountYep);

  };