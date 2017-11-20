/**
    Created by hold3n on 20/02/14.
    
    Piccolo script che analizza un file txt e conta ed elenca tutte le parole utilizzate nel testo.
    Lo script sfrutta node.js per essere eseguito da riga di comando.
    Utilizza il modulo specifico file sistem di node che consente di accedere al file system.

    *-------------------------------------------------------------------------------------
    
    INPUT: file di testo txt
    OUTPUT: elenco quantificato di parole in ordine alfabetico o di quantità

    
    USAGE:
    elenco alfabetico:      node wordcounter.js nomefile.txt
                            node wordcounter.js nomefile.txt alpha

    elenco per quantità:    node wordcounter.js nomefile.txt count

    *-------------------------------------------------------------------------------------


    PROBLEMI CONOSCIUTI: l'ordine per quantità non è preciso, perché il sistema effettua un 
    ordinamento alfabetico sulla stringa "numero". Va corretto.

    Copyright (C) 2014  Daniele Iori aka _hold3n

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
    
 */


// Make sure we got a filename on the command line.
if (process.argv.length < 3) {
    console.log('Usage: node ' + "textcounter.js" + ' FILENAME ' +  'ORDERING[alpha|count|..]');
    process.exit(1);
}


//debug
//process.argv[2] = "divina.txt";
//process.argv[3] = "count";


var start = new Date().getTime();


var fs = require("fs") ;            // oggetto file system
var filename = process.argv[2];     // passo il file come argomento
var ordered_text = [];              // array ordinato

var offset = 2;                     // lunghezza minima delle parole da prendere in considerazione


// Pulizia della stringa di partenza
// Estendo l'oggetto generale
String.prototype.cleaningText = function(){
    cleanedText = this;

    cleanedText = cleanedText.replace(/,/gi, " ");
    cleanedText = cleanedText.replace(/\./gi, " ");
    cleanedText = cleanedText.replace(/\:/gi, " ");
    cleanedText = cleanedText.replace(/\;/gi, " ");
    cleanedText = cleanedText.replace(/\-/gi, " ");
    cleanedText = cleanedText.replace(/\'/gi, " ");
    cleanedText = cleanedText.replace(/\‘/gi, " ");
    cleanedText = cleanedText.replace(/\’/gi, " ");
    cleanedText = cleanedText.replace(/\”/gi, " ");
    cleanedText = cleanedText.replace(/\“/gi, " ");
    cleanedText = cleanedText.replace(/\"/gi, " ");
    cleanedText = cleanedText.replace(/\(/gi, " ");
    cleanedText = cleanedText.replace(/\)/gi, " ");
    cleanedText = cleanedText.replace(/\?/gi, " ");
    cleanedText = cleanedText.replace(/\!/gi, " ");
    cleanedText = cleanedText.replace(/\n/gi, " ");
    cleanedText = cleanedText.replace(/\r/gi, " ");
    return cleanedText;
};




var stampa = function(alpha, count){
    //console.log("Original text: " + array.length + " words");
    console.log("Ordered text: " + alpha.length + " words");
    console.log("------------------------------------------------------");
    console.log(" ");

    if(process.argv[3] == "alpha"){
        for(i in alpha){
            console.log(alpha[i]);
        }
    } else if(process.argv[3] == "count"){
        for(i in count){
            console.log(count[i]);
        }
    } else {
        for(i in alpha){
            console.log(alpha[i]);
        }
    }

    console.log(" ");
    console.log("------------------------------------------------------");
};





// MAIN-------------------------------------------
fs.readFile(filename, function(err, data) {
    if(err) throw err;

    console.log("Working...");
    data = data.toString().cleaningText().toLowerCase();      // trasformo in stringa e pulisco il testo
    var array = data.split(" ");                              // trasformo la stringa in un array di parole

    array_count = array.length;
    process.stdout.write("Processing: " + array_count + " words\r");

    array.sort();                               // ordino l'array alfabeticamente


    for(i in array) {
        if(!(i%10)){
            process.stdout.write("Filtering: " + (array_count-i) + " words\r");
        }
        array[i] = array[i].trim();             // elimino dall'array gli spazi vuoti
        if(array[i].length > offset){           // elimino le parole sotto un certo offset
            ordered_text.push(array[i]);
        }
    }

    ordered_text.sort();




    {
        var ordered_alpha = [];
        var ordered_count = [];
        var i=0;
        var count = 1;


        while(i < ordered_text.length){
            process.stdout.write("cropping: " + ordered_text.length + " words\r");
            if(ordered_text[i] == ordered_text[i+1]){
                ordered_text.splice(i+1, 1);
                count++;
            } else {
                //console.log(i + " - " + ordered_text[i] + " " + count + " " + ordered_text.length);
                ordered_alpha[i] = count + " \t|- " + ordered_text[i];
                ordered_count[i] = count + " \t|- " + ordered_text[i];
                i++;
                count = 1;
            }

        }
    }
    ordered_count.sort().reverse();

    stampa(ordered_alpha, ordered_count);
    var end = new Date().getTime();
    console.log("Processed in " + (end-start) + " milliseconds");
    console.log("wordcounter.js  Copyright (C) 2014 _hold3n <http://ibridodesign.com>");

});
