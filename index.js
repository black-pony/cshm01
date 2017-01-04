document.addEventListener('DOMContentLoaded',function(){
  var a = document.querySelector('#a');
  var b = document.querySelector('#b');
  var operator = document.querySelector('#operator');
  var result = document.querySelector('#result');
  operator.addEventListener('click',function(){
    result.value = parseFloat(a.value) + parseFloat(b.value);
  },false);
},false);
