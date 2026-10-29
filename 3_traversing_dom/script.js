//DOM Manipulation

//Traverse the DOM

//Parent Node Traversal

let ul = document.querySelector("ul");
// console.log(ul);
// console.log(ul.parentNode); //this will give the parent node of ul which is the div with class container
// console.log(ul.parentNode.parentNode); //this will give the parent node of div with class container which is body

// console.log(ul.parentElement); //this will give the parent element of ul which is the div with class container

// console.log(ul.parentElement.parentElement); //this will give the parent element of div with class container which is body

const html = document.documentElement; //this will give the html element
// console.log(html);
// console.log(html.parentNode); //this will give the parent node of html which is document

// console.log(html.parentElement); //this will give the parent element of html which is null because html is the root element of the document

//Child Node Traversal

console.log(ul.childNodes); //gives the child nodes of ul which includes text nodes and element nodes

console.log(ul.firstChild); //gives the first child node of ul which is a text node

// ul.firstChild.style.backgroundColor = 'gray'; //this will give an error because firstChild is a text node and text nodes do not have style property 

ul.childNodes[1].style.backgroundColor = 'darkgreen'; //this will work because childNodes[1] is the first li element which is an element node and element nodes have style property

console.log(ul.lastChild); //gives the last child node of ul which is a text node

console.log(ul.children); //gives the child elements of ul which are li elements
console.log(ul.firstElementChild); //gives the first child element of ul which is the first li element
console.log(ul.lastElementChild); //gives the last child element of ul which is the last li element

// ul.children.lastChild.style.backgroundColor = 'purple';

ul.children[ul.children.length - 1].style.backgroundColor = 'purple'; //this will work because ul.children is an HTMLCollection and we can access the last element by using the length property

//Sibling Node Traversal

console.log(ul.previousSibling); //gives the previous sibling node of ul which is a text node
console.log(ul.nextSibling); //gives the next sibling node of ul which is a text node

/* 
to identify why are are getting text nodes as siblings we can use the following code to see that before the ul and after the ul there are text nodes which are created by the browser to format the html code
 */

const div = document.querySelector('div');
console.log(div.childNodes);

const li = document.querySelector('.list-items');
console.log(li);
console.log(li.previousSibling); //gives the previous sibling node of li which is a text node
console.log(li.nextSibling); //gives the next sibling node of li which is a text node
const p = document.querySelector('p');
p.classList.add('paragraph');

console.log(ul.previousElementSibling); //gives the previous sibling element of ul which is the h1 element
console.log(ul.nextElementSibling); //gives the next sibling element of ul which is null because there is no next sibling element of ul