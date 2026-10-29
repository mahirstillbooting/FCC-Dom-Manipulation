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
