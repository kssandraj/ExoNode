const personnel = require("./information");


let cowsay = require("cowsay");

console.log(cowsay.say({
    text: `Hello I'm ${personnel.name} from ${personnel.campus}`,
    e: "oO",
    T: "U "
}));
