function stringManipulation(word) {
    let pattern = /\b[aiueo]/;
    let result = pattern.test(word);
    if (result) {
        console.log(word);
    } else { 
    let firstLetter = word.substring(0, 1);
    let deleteFirst = word.replace(/\b[^aiueo]/,"")
    let total = deleteFirst + firstLetter + "nyo";
    console.log(total);
    } 
}
stringManipulation('ayam'); //"ayam";
stringManipulation('bebek'); //"ebekbnyo"
stringManipulation('itik');
stringManipulation('gajah')