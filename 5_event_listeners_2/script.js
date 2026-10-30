//DOM Manipulation


//Event Listener Example

const revealBtn = document.querySelector('.visible');

const hiddenContent = document.querySelector('.hidden-content');


function revealContent(){
    if(hiddenContent.classList.contains('visible')){
        hiddenContent.classList.remove('visible');
    }else{
        hiddenContent.classList.add('visible');
    }
}
revealBtn.addEventListener('click', revealContent);
