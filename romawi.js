function romawi(n) {
    let sisa = n
    let romawiA = [];
    while (n > 0) {
        if (sisa >= 1000) {
            sisa -= 1000;
            romawiA.push("M");
            ;
        }
        else if (sisa >= 900) {
            sisa -= 900;
            romawiA.push("CM");
        }
        else if (sisa >= 500) {
            romawiA.push("D");
            sisa -= 500;
        }
        else if (sisa >= 400) {
            romawiA.push("CD");
            sisa -= 400;
        }
        else if (sisa >= 100) {
            romawiA.push("C");
            sisa -= 100;
        }
        else if (sisa >= 90) {
            romawiA.push("XC");
            sisa -= 90;
        }
        else if (sisa >= 50) {
            sisa -= 50;
            romawiA.push("L");
        }
        else if (sisa >= 40) {
            sisa -= 40;
            romawiA.push("XL");
        }
        else if (sisa >= 10) {
            sisa -= 10;
            romawiA.push("X");
        }
        else if (sisa >= 9) {
            sisa -= 9;
            romawiA.push("IX");
        } 
        else if (sisa >= 5) {
            sisa -= 5;
            romawiA.push("V");
        } 
            else if (sisa >= 4) {
            sisa -= 4;
            romawiA.push("IV");
        } 
        else if (sisa >= 1) {
            sisa -= 1;
            romawiA.push("I");
        }
        else {
            console.log(romawiA);
        }
    } 
}
console.log(romawi(39));
console.log(romawi(399));
console.log(romawi(3999));