// Traversing the dome
var itemList= document.querySelector('#items');
//parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor='#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

//parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor='#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

//Childnodes
console.log(itemList.childNodes);
console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor= 'yellow';

//firstchild
console.log(itemList.firstChild);
//firstchildelement
console.log(itemList.firstElementChild);

//lastchild
console.log(itemList.lastChild);
//lastchildelement
console.log(itemList.lastElementChild);

//nextsibling
console.log(itemList.nextSibling);
//nextelementsibling
console.log(itemList.nextElementSibling);
//previous sibling
console.log(itemList.previousSibling);
//previous sibling element
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color='green';


//Create element
//create a div
var newDiv = document.createElement('div');

//add class
newDiv.className='hello';

//add id
newDiv.id='hello1';

//set attr
newDiv.setAttribute('title', 'Hello Div');

//create a textnode
var ndtext= document.createTextNode('hello world');
//add text to div
newDiv.appendChild(ndtext);


var container=document.querySelector('header .container');
var h1= document.querySelector('header h1');
console.log(newDiv);
newDiv.style.fontSize='30px';
container.insertBefore(newDiv, h1);





