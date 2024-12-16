//Importo le due funzioni:
const functNames = require("./names");
const functHobbies = require("./hobbies");


function peopleNameHobbies(){
   return {
      fullName: functNames('Mario', 'Rossi'),
      hobbies: functHobbies('calcio', 'basket', 'pallavolo')
   }
}

//X verificare se funziona:
//console.log(peopleNameHobbies())