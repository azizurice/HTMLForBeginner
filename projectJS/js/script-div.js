// Create a new paragraph and add it to the html page each time user click on the button
var button =document.querySelector('button');
button.addEventListener('click',createParagraph);



 // Function: creates a new paragraph and append it to the bottom of the HTML body.

 function createParagraph() {
   var para = document.createElement('p');
   para.className = "click_item";
   para.textContent = 'You clicked the button!';

// Query the div element which has our required classes and select the one which is the fisrt item of the array
   var divTarget=document.getElementsByClassName("col-3 col-tablet-3 color-first")[0];

   // Query the container elements which have 'flex-container' class and select the one which is the fisrt element of the array
   var flexTarget = divTarget.getElementsByClassName("flex-container")[0];
   // add one child p into the queried html element. here an ul
   flexTarget.appendChild(para)
  }
