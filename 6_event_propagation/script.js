//DOM Manipulation

//Event Propagation 
// the mechanism that defines how an event (like a click, hover, or keypress) travels through the Document Object Model (DOM) tree to reach its target and how it bubbles back up.

/* 
3 phases
Event Capturing Phase: The event starts from the window and travels down to the target element. This is the capturing phase, where the event is captured by each ancestor element before reaching the target.

Event Target Phase: The event reaches the target element, which is the element that was actually interacted with (e.g., clicked).

Event Bubbling Phase: After the event reaches the target, it bubbles back up through the DOM tree, allowing ancestor elements to handle the event as well.
 */

window.addEventListener("click", function(){
    console.log('Window');
}, true);

document.addEventListener("click", function() {
    console.log('Document');
}, true);

/* document.querySelector(".div2").addEventListener("click", function(){
    console.log('Div 2');
}, true); */

/* document.querySelector(".div2").addEventListener("click", function(e){
    e.stopPropagation(); //stops the event from propagating to the parent elements
    console.log('Div 2');
}, true); */

document.querySelector(".div2").addEventListener("click", function(e){
    e.stopPropagation(); //stops the event from propagating to the parent elements
    console.log('Div 2');
}, {once: true}); //the event will be triggered only once and then removed from the event listener list

document.querySelector(".div1").addEventListener("click", function () {
    console.log('Div 1');
}, true);
/* 
document.querySelector("button").addEventListener("click", function(e) {
    console.log(e); //contains all the information about the event that occurred
}, true);
 */

/* 
document.querySelector("button").addEventListener("click", function(e) {
    console.log(e.target); //shows the element that was clicked
}, true);
 */

//this is the second phase
document.querySelector("button").addEventListener("click", function(e) {
    console.log(e.target.innerText="clicked"); //changes the text of the btn
}, true);

/* when the true parameter is changed to true, the event will be captured in the bubbling phase instead of the capturing phase.
 */

/* if we were to replace the default behavior of the button click event, we can use the preventDefault() method. This method prevents the default action associated with the event from occurring. For example, if we have a form submission button, we can prevent the form from being submitted when the button is clicked. instead of using a button we will use an anchor tag to demonstrate the preventDefault() method.
 */
/* document.querySelector("a").addEventListener("click", function(e) {
    e.preventDefault(); //prevents the default action of the anchor tag (navigating to a new page)
    console.log('Anchor tag clicked');
}, true);
 */