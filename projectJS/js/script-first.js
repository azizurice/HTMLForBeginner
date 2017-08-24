
// Change the content of the paragraph based on user input

var para = document.querySelector('p');
    para.addEventListener('click', updateName);


// Function: update the existing paragraph with the new name
function updateName() {
  var name = prompt('Enter a new name');
   para.textContent = 'Player 1: ' + name;

 }


 // /*
 //   1. Get references to all the buttons on the page and sort them in an array.
 //   2. Loop through all the buttons and add a click event listener to each one.
 //
 //   When any button is pressed, the createParagraph() function will be run.
 // */
 //
 // var buttons = document.querySelectorAll('button');
 //
 // for (var i = 0; i < buttons.length ; i++) {
 //   buttons[i].addEventListener('click', createParagraph);
 // }


// Create a new paragraph and add it to the html page each time user click on the button
var button =document.querySelector('button');
button.addEventListener('click',createParagraph);



 // Function: creates a new paragraph and append it to the bottom of the HTML body.

 function createParagraph() {
   var para = document.createElement('p');
   para.textContent = 'You clicked the button!';
   document.body.appendChild(para);
 }
