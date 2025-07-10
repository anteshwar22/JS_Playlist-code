// ***** Primitive DataTypes *****
const score=100
const scorevalue=100.33
const isloggedIn=false
const outsideTemp=null
let Username;
console.table([score,scorevalue,isloggedIn,outsideTemp,Username]);
console.log(Username);
const bigNumber=1n;
console.log(typeof bigNumber);
const id=Symbol('123')
const anotherid=Symbol('123')
console.log(id==anotherid);
//********* Non Primitive DataTypes*******
//Array,Object,Function
const heros=["shaktiman","Nagraj","Ironman","Capton America"];
let myobj={
    name:"Anteshwar",
    age:20,
    Dob:27-07-2006
};
const myFunction=function(){
    console.log("Hello World My Dear Majnu")
}
console.log(typeof outsideTemp);
console.log( typeof myFunction)