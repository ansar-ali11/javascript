// arrow function : it is similar to function expression but in this we don't mention the function we use => sign to represent the function

let t1= ()=>{
    console.log('hello')
}
//if you have a single statement then you can write the function in this way
let t2= a => console.log(a+2)

let t3 = (a,b)=>{
    console.log(a+b)
}

t1()
t2(4)
t3(2 ,3)