var messages = ["Happy birthday Blerinda",
    "Have a lovely day Eri",
    "Wish you the best, Jolie"];
 
var i = messages.length;
var s = Math.floor(Math.random() * i);
 
document.getElementById("msg")
    .innerHTML = '" ' + messages[s] + ' "';

    
