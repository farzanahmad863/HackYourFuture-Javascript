//1. Strings!
//1.1 
let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);
//1.2 
console.log("The length of mystring is "+myString.length);
//1.3 
myString = myString.replace(/,/gi, ' ');
//1.4 
console.log(myString);
//2. Arrays!
//2.1
let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
favoriteAnimals.push("turtle");
//2.2
console.log(favoriteAnimals);
//2.3
favoriteAnimals.splice (1, 0, "meerkat");
console.log(favoriteAnimals);
//2.4
console.log('the new value of this array would be:["blowfish", "meerkat", "capricorn", "giraffe", "turtle"] ');
//2.5
console.log("the new value of this array is: " +favoriteAnimals);
//2.6
console.log('The array has a length of: '+favoriteAnimals.length);
//2.7
favoriteAnimals.splice(3,1);
//2.8
console.log("The new array looks like this now: "+favoriteAnimals);
//2.9
let meerkatIndex =favoriteAnimals.indexOf("meerkat");
favoriteAnimals.splice(favoriteAnimals.indexOf("meerkat"), 1);
console.log(favoriteAnimals);
//2.10
console.log("The item you are looking for was at index: "+meerkatIndex);
//More JavaScript 
//1.0
function sum(a,b,c){
    return a+b+c;
}
//2.0
function colorcar(color){
    return "a " + color + " car";
}
//3.0
let personObject={
"Name":"farzan",
"Sex":"male",
"Age":25
}
function personalDetail(person){
console.log(person);
}
personalDetail(personObject);
//4.0
function vehicleType (color,code){
if(code===1){
    console.log("A "+color+" car");
}
else if(code===2) {
    console.log("A "+color+" motorbike");
}
}
vehicleType("black",1);
//5.0
console.log(3===3 ?"yes":"no");
//6.0
function vehicle (color,code,age){
    if (age===0){
        if(code===1){
            console.log("A "+color+" new car");
        }
        else if(code===2) {
            console.log("A "+color+" new motorbike");
        }
        }
    else if(age>0){
        if(code===1){
            console.log("A "+color+" used car");
        }
        else if(code===2) {
            console.log("A "+color+" used motorbike");
        }
        }
    }
    vehicle("blue", 1, 5);
    //7.0
    let vehichlesArr=["motorbike", "caravan", "bike","car"];
    //8.0
    console.log(vehichlesArr[2]); 
    //9.0
    function vehicle(color, code, age) {
        let vehichlesArr=["motorbike", "caravan", "bike","car"];
        if (age === 0) {
            console.log("A "+ color+ " new "+ vehichlesArr[code-1]);
        }
        else {
            console.log("A "+ color+ " used "+ vehichlesArr[code-1]);
        }
    }
    vehicle("green", 3, 1);
    //10.0
        function adForGarage(vehichles){
        let JoesGarage = "Amazing Joe's Garage, we service ";
        for (let counter = 0; counter < vehichles.length; counter++) {
            if (counter === vehichles.length - 1) {
                JoesGarage +=" and "+ vehichles[counter]+"s.";
                console.log(JoesGarage);
                break;
            }
            JoesGarage += vehichles[counter] + "s, ";
        }
    }
adForGarage(vehichlesArr);

//11.0  
  
    vehichlesArr.push("truck");
    adForGarage(vehichlesArr);


//12.0
    let myObj={};
//13.0
    let teachers={
        "module3":"Stephen",
        "module2":"Albert",
        "module1":"Bara"

    }
//14.0
    let teachersSub={
        "javasript":"Stephen",
        "github":"Albert",
        "HTML & CSS":"Bara"

    }
//15.0
let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;
if(x===y)
{
    console.log("x===y is true");
} 
else 
{
    console.log("x===y is false");
} 
if(x==y)
{
    console.log("x==y is true");
} 
else
{
    console.log("x==y is false");
}
if(z==y)
{
    console.log("z==y is true");
}
else
{
    console.log("z==y is false");
}
if(z==x)
{
    console.log("z==x is true");
}
else
{
    console.log("z==x is false");
}
console.log(x.join('|'));
console.log(y.join('|'));

if (x.join('|') === y.join('|')) {
	console.log('The arrays are equal.');
} else {
	console.log('The arrays are NOT equal.');
}
//16.0
let o1 = { foo: "bar" };
let o2 = { foo: "bar" };
let o3 = o2;
o2["cafe"] = "value";
console.log(JSON.stringify(o2) === JSON.stringify(o3))
/*
The above line logs "true" because changes made to o2 trickles down to o3
 also, because o2 is assigned to o3.
 The order of o3 = o2 or o2 = o3 matters because everything on right is 
 being assigned to object on left and o2 = o3 can not be used for assignment.
 */
console.log(JSON.stringify(o2) === JSON.stringify(o1))
/*
The above line logs "false" means changing o2 trickles does not effect o3
because both objects are different and are not associated to each other
 */

//17.0
let bar = 42;
console.log(typeof typeof bar); 
/*the "typeof" checks the type of the variable, 
the type of variable "bar" is number so (typeof bar) returns a string
"number",so when typeof again checks the type, it returns "string"*/ 