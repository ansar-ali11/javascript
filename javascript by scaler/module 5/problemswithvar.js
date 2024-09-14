//frist issue with var keyword
var a=10;
var a=21; //redeclaration of variable a 
console.log(a)

//2nd issue with var keyword
if(a===21)
{
    var b=30;
    console.log(b);
}
console.log(b);/* here is the another security conflict that a variable scope of this var is function scoped
which is declared inside a loop can't be accessed outside it will create a conflict*/

//3rd issue function scoped
function test()
{
    var c=100;
    console.log(c)
}

test()

//console.log(c)  we will get an error as not defined because var is function scoped we can't use the variable whih is declared inside the function 