
//TODO
function counts(teamA, teamB) {
 let array = [];
 teamA = teamA.sort();
 teamB.forEach(e => {
   let menor = 0;
   let mayor = teamA.length - 1;
    while (menor <= mayor){
      let prom = (menor + mayor);
      if (teamA[prom] > e){
        mayor = prom - 1;
      }else{
        menor = prom + 1;
        array.push(menor)
      }
    }
 });
 return array;
}

(function main() {
  let teamA = [1, 2, 3, 4, 8];
  let teamB = [3, 1, 7, 8];
  let result = counts(teamA, teamB);
  console.log(result)
})()

