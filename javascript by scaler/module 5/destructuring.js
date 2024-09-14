//destructuring :  it is a js expression syntax that makes possible to unpack values from arryas , properties from objects , into distinct variables
let arr =['Hi', 'I', 'am' , 'Ansar']

let [a,b,c,d]=arr

console.log(a)
//console.log(e) we will get an error not defined

//destructuring objects

let person ={
    name : 'Ansar',
    age :21,
    gender : 'Male',
    address :{
        city : 'kakinada'
    }
}

let {name : n , age ,gender,address:{city}} = person // we can give alternate names for the keys by using (:)
console.log(n)// in this way we desturture the objects
console.log(age)
console.log(gender)
console.log(city)
