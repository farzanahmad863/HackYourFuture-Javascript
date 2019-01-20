console.log("Hello world!  English");
console.log("hej världen!  swedish");
console.log("I'm awesome");
let x;
console.log("value of my variable x will be: undefined");
console.log("The value of my variable x is: " +x);
x=10;
console.log("value of my variable x will be: 10");
console.log("The value of my variable x is: " +x);
let y="Hack your future";
console.log("value of my variable y will be: Hack your future");
console.log("The value of my variable y is: " +y);
y="Foo cafe";
console.log("value of my variable y will be: Foo cafe");
console.log("The value of my variable y is: " +y);
let z=7.25;
console.log("The value of my variable z is: " +z);
let a=Math.round(z);
console.log("The value of my variable a is: " +a);
let b= Math.max(z,a);
console.log("The value of my variable b is: " +b);
let fruits = [];
console.log("values in my array fruits will be:  ");
console.log("values in my array fruits are:"+fruits);
let myFavoritAnimals = ['lion','monkey','tiger'];
console.log("values in my array myFavoritAnimals will be: lion, monkey, tiger ");
console.log("values in my array myFavoritAnimals are:"+myFavoritAnimals);
myFavoritAnimals.push("baby pig");
console.log("values in my array myFavoritAnimals are:"+myFavoritAnimals);
let myString = "this is a test"
console.log("The value of my myString is: "+myString);
console.log("The value of my myString is: "+myString.length);
let j,k,l,m;
j= 10;
k= "";
l= [];
m= true;
console.log("The value of my variable j is: " +j);
console.log("The value of my variable k is: " + k);
console.log("The value of my variable l is: " + l);
console.log("The value of my variable m is: " + m);
console.log("The type of my variable j will be: " +j);
console.log("The type of my variable k will be: " + k);
console.log("The type of my variable l will be: " + l);
console.log("The type of my variable m will be: " + m);
console.log("The type of my variable j is: " +typeof(j));
console.log("The type of my variable k is: " +typeof(k));
console.log("The type of my variable l is: " +typeof(l));
console.log("The type of my variable m is: " +typeof(m));
if (typeof j == typeof k) {
    console.log('j and k are of the same type');
} else {
    console.log('j and k dont have the same type');
}
if (typeof j == typeof l) {
    console.log('j and l are of the same type');
} else {
    console.log('j and l dont have the same type');
}
if (typeof k == typeof m) {
    console.log('k and m are of the same type');
} else {
    console.log('k and m dont have the same type');
}
let p=7;
console.log("The value of my variable p is: " +p);
p=p%3;
console.log("p=p%3 gives remainder");
console.log("The value of my variable p is: "+p);
let person= ['farzan',25,'male'];
console.log("Array person has these elements :"+ person);
console.log("These are the data types of data stored in array person");
console.log(person[0]+" is a :"+typeof(person[0]));
console.log(person[1]+" is a :"+typeof(person[1]));
console.log(person[2]+" is a :"+typeof(person[2]));

let firstInfiniteFraction = 6/0;
let secondInfiniteFraction = 10/0;
let value = firstInfiniteFraction === secondInfiniteFraction;
console.log("first infinite fraction is :  6 \/ 0");
console.log("second infinite fraction is :  10 \/ 0");
if (value = true) {
    console.log("infinites can be compared.");} 
else {
    console.log("infinites can not be compared.");}