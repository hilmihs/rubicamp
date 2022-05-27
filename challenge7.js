function weirdMultiply(sentence) {
    let keString = sentence.toString();
   
    let arraySen = keString.split("");
   //console.log(arraySen) 
   var z = 1
    for (let i = 0; i < arraySen.length; i++) {
        var x = parseInt(arraySen[i]);
        z *= x;
    } return z;
} 


console.log(weirdMultiply(39));
console.log(weirdMultiply(999));
console.log(weirdMultiply(9))
