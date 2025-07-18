const mysym=Symbol("key1")
const Jsuser={//Object Literal 
    name:"Anteshwar",
    "full name":"Anteshwar Laxman Waghmare ",
    [mysym]:"I am IronMan",
    rollno:78,
    emailid:"anteshwarwagh15@gmail.com",
    grade:"O",
    loggedIn:true,
    LastDay:["Monday","Tuesday","Wenesday"]
}
// console.log(Jsuser["emailid"])
//  console.log(Jsuser["full name"]);//Anteshwar Laxman Waghmare 
// console.log(Jsuser[mysym]);
// console.log(typeof Jsuser[mysym]);
// console.log(Jsuser["emailid"]);
// Jsuser.emailid="anteshwarwagh@microsoft.com";
//  console.log(Jsuser["emailid"]);
// Object.freeze(Jsuser)// lock the object 
// Jsuser.emailid="anteshwarwagh@chatgpt.com"; // not changed
//  console.log(Jsuser["emailid"]);
Jsuser.greeting= function()
{
    console.log("hi i am IronMan ");
}
Jsuser.greetingtwo= function()
{
    console.log(`hi i am IronMan ${this.name} is completed an Chai aur Code lectute so Many many Congratulation to them  with  grade ${this.grade}` );
}

console.log(Jsuser.greeting());
console.log(Jsuser.greetingtwo());
