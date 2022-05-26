function deretKaskus(n){
    var deret = [];
    for (let i = 1; i <= n; i++) {
      deret.push(i * 3);
      for (let j = 1; j <= deret.length; j++) {
        if (deret[j] % 5 === 0 && deret[j] % 6 === 0) {
         deret[j] = "KASKUS"
       } else if (deret[j] % 6 === 0) {
         deret[j] = "KUS"
       } else if (deret[j] % 5 === 0 ) {
         deret[j] = "KAS"
       } 
    } console.log(deret)
    
   
  } 
}
  console.log(deretKaskus(10));
  
  
  