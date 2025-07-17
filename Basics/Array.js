const Marvel_heros=["Thor","Ironman","Spiderman"]
const dc=["flash","superman","batman"]

// Marvel_heros.push(dc)
// console.log(Marvel_heros)
// console.log(Marvel_heros[3][0])  
// push() operation is no need to make an new array and it make an new element to all exixting array 
// output is 
//[ 'Thor', 'Ironman', 'Spiderman', [ 'flash', 'superman', 'batman' ] ]



// Marvel_heros.concat(dc)  - if you do this you not get an merge array it need an new array to store the merge array its output is 
//[ 'Thor', 'Ironman', 'Spiderman' ]
//const all_heros=Marvel_heros.concat(dc)
//It return an  merge two array 
//Output Is:-
//[ 'Thor', 'Ironman', 'Spiderman', 'flash', 'superman', 'batman' ]
//const all_heros=[...Marvel_heros,...dc]  (Spread Operator)
//Using this type you can add two to three Array without any getting problem 

// const another_Array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const real_another_Array=another_Array.flat(Infinity)
// console.log(real_another_Array);
//Output is :
//[
//   1, 2, 3, 4, 5,
//   6, 7, 6, 7, 4,
//   5
// ]

// console.log(Array.isArray("Hitesh"))
// It checks the given parameter is array or not if array -> true not then False 
// False 
//true

// console.log(Array.from("Hitesh"))
//It convert the given parameter into the Array 0
// output : [ 'H', 'i', 't', 'e', 's', 'h' ]
 //console.log(Array.from({name:"hitesh"}))// Interesting
//  let score1=100;
//  let score2=200;
//  let score3=300;
//  console.log(Array.of(score1,score2,score3))
// the array.of ()method return an parameter array by conwerting it 
