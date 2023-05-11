var messages = ["Happy 🎂 Blerinda",
    "Sorry this is coming late. I hope you had a lovely day Eri 🌹",

    "Wish you the best of everything, My Jolie"];

var i = messages.length;
var s = Math.floor(Math.random() * i);
 
document.getElementById("msg")
    .innerHTML = '" ' + messages[s] + ' "';

    
