$(document).ready(onReady);

// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;
let myAP = 100;
let fungusHP = 100;

function onReady() {
    console.log('Ready to Fight!')
    
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
     //each of these button adds an attack
     $('attack-btn').on('click', arcaneSceptre);


     function setInterval(() => {
        
     }, interval);(){
        $('attack')
     }
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}
