function sum(...arrayAngka) {
    return arrayAngka.reduce((total ,angka) => total + angka)
    }

    console.log(sum(1,2,7));
    console.log(sum(1,2,7,8,6))
    console.log(sum(1))