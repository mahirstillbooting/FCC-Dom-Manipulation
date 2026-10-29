//DOM Manipulation

const links = document.querySelectorAll('a');
for(i=0; i<links.length;i++){
    links[i].classList.add("button");
} 

const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.style.marginTop="3rem";
});

const cardHeadings = document.querySelectorAll('h3');
cardHeadings.forEach(heading =>{
    heading.style.fontSize='3rem';
})
//Event Listeners

// Element.addEventListener("click", function());

const buttonTwo = document.querySelector('.btn-2');

function alertBtn () {
    alert('This alert is provided by JS');
}

buttonTwo.addEventListener("click",alertBtn);

//Mouseover

const cardThree = document.querySelector('.card-3');

function changeBgColor(){
    cardThree.style.backgroundColor="darkkhaki";
}

document.querySelector('.btn-3').addEventListener("mouseover", changeBgColor);