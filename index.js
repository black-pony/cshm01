document.addEventListener('DOMContentLoaded',function(){
  //获取三个标题按钮
  var aTitleList = document.querySelectorAll('.tab .menu input[type="button"]');
  //获取三个内容元素
  var aContentList = document.querySelectorAll('.tab .content .item');
  // console.log(aTitleList,aContentList);
  for(var i=0;i<aTitleList.length;i++){
    aTitleList[i].index = i;
    aTitleList[i].addEventListener('click',function(){
      //排他
      for(var j=0;j<aContentList.length;j++){
        aContentList[j].className = 'item';
      }
      aContentList[this.index].className = 'item show';
    },false);
  }
  var a = document.querySelector('#a');
  var b = document.querySelector('#b');
  var operator = document.querySelector('#operator');
  var result = document.querySelector('#result');
  operator.addEventListener('click',function(){
    result.value = parseFloat(a.value) + parseFloat(b.value);
  },false);
},false);
