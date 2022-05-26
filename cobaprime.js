function checkPrime (param1) {
    let adalahPrime = true;
    for (let i = 2; i < param1; i++) {
        if (param1 % i == 0) {
            adalahPrime = false
            break;
        } 
        
    } return adalahPrime
} 
console.log(checkPrime(15));