//query selector//
var header = document.querySelector("#main-header");
header.style.borderBottom=" solid 4px #ccc";

var input= document.querySelector('input');
input.value="hello world";

var submit= document.querySelector('input[type="submit"]');
submit.value="send";

var seconditem= document.querySelector('.list-group-item:nth-child(2)');
seconditem.style.backgroundColor='green';

var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
  thirdItem.style.display = 'none';