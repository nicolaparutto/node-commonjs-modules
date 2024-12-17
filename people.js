//Importo le due funzioni:
const functNames = require("./names");
const functHobbies = require("./hobbies");


function people(){
   return {
      fullName: functNames('Mario', 'Rossi'),
      hobbies: functHobbies('calcio', 'basket', 'pallavolo')
   }
}

//X verificare se funziona:
//console.log(people())

module.exports = people; 