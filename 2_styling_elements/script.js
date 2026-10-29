//DOM MANIPULATION

// styling elements
const title = document.querySelector('#main-heading');

title.style.color = 'tomato'; //but this does inline styling, not recommended

// listItems = document.querySelectorAll('.list-items');
/*
listItems.style.color = 'blue'; //but this does inline styling, not recommended

listItems.style.fontSize = '1.5rem'; //but this wont work because querySelectorAll returns a node list, not a single element. You need to loop through the node list to apply styles to each item.

*/
// for (let i = 0; i < listItems.length; i++) {
//     listItems[i].style.color = 'blue';
//     listItems[i].style.fontSize = '1.5rem';
// }


//Creating elements
const ul = document.querySelector('ul');
const li = document.createElement('li');

//Adding elements
ul.append(li);

//Modifying the text

const firstListItem = document.querySelector('.list-items');
console.log(firstListItem.innerText);  //simply shows the text inside the elemnt
console.log(firstListItem.textContent); //shows same way in the html file
console.log(firstListItem.innerHTML); //shows the html inside the element, if there is any but this has security issues, so use textContent instead

li.innerText = 'Cycle 7'; //this adds the text to the newly created li element

// modifying the attributes          

li.setAttribute('id', 'main-heading'); //this adds the id to the newly created li element
// li.setAttribute('class', 'list-items'); //this adds the class to the newly created li element

li.classList.add('list-items'); //this adds the class to the newly created li element
//to remove the class
// li.classList.remove('list-items');

//to check whether an element has a class or not
let containsClass = li.classList.contains('list-items'); //this checks whether the newly created li element has the class or not
console.log(containsClass); //this shows whether the newly created li element has the class or not
li.style.color = 'Orange'; //this adds the style to the newly created li element

//remove attributes

li.removeAttribute('id'); //this removes the id from the newly created li element

//view the attribute

console.log(title.getAttribute('id')); //this shows the id of the newly created li element

// console.log(listItems);

// console.log(title); 

//remove the element
li.remove(); //this removes the newly created li element