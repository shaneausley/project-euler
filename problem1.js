var multiple = [] //create empty array

//store multiple os 3 or 5 in arrary
for (i=1; i<1001; i++) {
  if ((i%3 === 0 ) | (i%5 == 0)) {
  multiple.push(i);
  };
}

//sum multiples
var sum = multiple.reduce(function(pv, cv) { return pv + cv; }, 0);

//print sum to console
console.log(sum)