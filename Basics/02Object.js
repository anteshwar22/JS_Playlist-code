//const tinderUser=new Object()//singleton
//console.log(tinderUser)  //nonSingleton Object 
const tinderUser={}
tinderUser.id="123abc"
tinderUser.name="sammy"
tinderUser.loggedin=true;

const regularUser=
{
    email:"same@gmail.com",
    fullname:{
                userfullname:
                {
                          firstname:"anteshwar",
                          lastname:"waghmare"
                    
                }
             }
}
//console.log(regularUser.fullname.userfullname.firstname);
const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj4={5:"e",6:"f"}
//const obj3=Object.assign({},obj1,obj2,obj4)//output { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }
//object.assign(target,source1,source2,...,sourceN)
const Spreadmethod={...obj1,...obj2,...obj4}
console.log(Spreadmethod);
//output is:-
//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

const users=[
    {
        id:1,
        email:"antu@gmail.com"
    },
     {
        id:1,
        email:"antu@gmail.com"
    },
     {
        id:1,
        email:"antu@gmail.com"
    }
] 
console.log(users[1].email)//antu@gmail.com
console.log(tinderUser);

console.log(Object.keys(tinderUser));
// it return value in array format 
console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('loggedin'));
