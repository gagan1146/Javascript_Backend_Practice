// Its just to know more about objects in JS
let obj1={
    "1":"Hello World",
    "2":"How are you"
}
let obj2={
    "3":"Hello World",
    "4":"How are you"
}
const obj3 = {obj1,obj2};
console.log("-----------------------------------------------------------------")
console.log(obj3);
console.log("-----------------------------------------------------------------")
obj1["1"]="Hii";     // This line will not create error because we change only the another object value as this takes the reference of another 2 arrays nor copies it's values in it...
// obj3={obj2,obj1};    This line will create an error because obj3 is of const type
console.log(obj3);
console.log("-----------------------------------------------------------------")


// -----------------------------------------------------------------

const a = {
    1:"Hii"
}
const b = {
    1:"Hello"
}

const c = Object.assign(a,b); // If there are multiple values in a that are also in b then the object that at last will overwrite the earlier value
console.log(c);
console.log("-----------------------------------------------------------------")
const d = {...a,...b}; // This is also same as Object.assign as it is by using spread operator
console.log(d);
console.log("-----------------------------------------------------------------")
