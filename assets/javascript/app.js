var timeoutID = window.setTimeout(fun, [10000]);

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

  }

  function clearFun() {
    var ele = document.querySelectorAll("[name='quest1'], [name='quest2'], [name='quest3'], [name='quest4'], [name='quest5'], [name='quest6'], [name='quest7'], [name='quest8'], [name='quest9'], [name='quest10']");
    for(var i=0;i<ele.length;i++)
       ele[i].checked = false;  };

