/* function stringManipulation(sentence) {
    let pattern = /\b[aiueo]/g;
    let result = pattern.test(sentence);
    if (result) {
        console.log(sentence);
    } else { 
    let patternG = /\b[aiueo]/g
    let search = pattern.search(sentence);
    console.log(search)
    let firstLetter = sentence.substring(0, 1);
    let deleteFirst = sentence.replace(/\b[^aiueo]/,"")
    let total = deleteFirst + firstLetter + "nyo";
    console.log(total);
    } 
}
stringManipulation('ayam bakar'); //"ayam";

*/ 
function stringManipulation(sentence) {
    let arraySen = sentence.split(" ");
    let pattern = /\b[aiueo]/;
    let tangkep = "";
    
    for (let i = 0; i < arraySen.length; i++) {
        if (pattern.test(arraySen[i])) {
        tangkep += arraySen[i] + " ";
        } else {
        let firstLetter = arraySen[i].substring(0, 1);   
       let deleteFirst = arraySen[i].replace(/\b[^aiueo]/,"")
       let total = deleteFirst + firstLetter + "nyo";
       tangkep += total + " ";
        }
       
    }
 return tangkep
}

console.log(stringManipulation("ibu pergi ke pasar bersama aku")); //ibu ergipnyo eknyo asarpnyo ersamabnyo aku