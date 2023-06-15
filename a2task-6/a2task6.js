//queryselectorall//

var Items= document.querySelectorAll('.list-group-item');
Items[1].style.backgroundColor='green';  

var odd= document.querySelectorAll('li:nth-child(odd)');
for(var i=0;i< odd.length;i++){
    odd[i].style.backgroundColor="#f4f4f4";

}
