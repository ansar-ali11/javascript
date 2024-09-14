//Hoisting : it is phenomenon or a concept in js which allows you to call the functions before and after the declaration

console.log(a)// we get undefined as output because the variable a is declared after the console so the variable a is intialized as undefined in the memory
sum(2,3)

var a= 10;// if we don't declare this a then we will get an error

function sum(a,b){
    console.log(1+5);
}



// let us try with function expression 
//if we call the function expression before the declaration we will get error because in this situation in the  memory execution a variable get the output as undefined but in this case we get an error we cannot call a undefined function expression
//add(2,3)

var add = function(a,b){
    console.log(a+b)
}
add(2,3)  //we will get the output as 5