var messages = ["Happy 🎂 Joy",
    "I love you and I hope you have a lovely day🌹",

    "Wish you the best of everything, My Dear Moonsilver"];

var i = messages.length;
var s = Math.floor(Math.random() * i);
 
document.getElementById("msg")
    .innerHTML = '" ' + messages[s] + ' "';

    
