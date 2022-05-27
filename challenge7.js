function weirdMultiply(sentence) {
    let keString = sentence.toString();
    let arraySen = keString.split("");
   var z = 1
   var arr = []
    for (let i = 0; i < arraySen.length; i++) {
        var x = parseInt(arraySen[i]);
        z *= x;
       
    } arr.push[z]
    console.log[arr]
    
    if (z.toString().length > 1) {
        return weirdMultiply(z)
    } else if (z.toString().length === 1) {
    return z
    } 
    
} 


console.log(weirdMultiply(39))
console.log(weirdMultiply(999));
console.log(weirdMultiply(3))