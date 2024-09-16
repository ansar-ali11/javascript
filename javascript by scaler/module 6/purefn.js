//Pure function : a function is said to be pure when there is no external factor involves and 
// whenever we give the input it gives the ame output

function addPure(a,b){
    return a+b;
}

console.log(addPure(2,3));

//impure function example

let a=2;

function addImpure(x){
    console.log(a+x);
    a++;
}

addImpure(4)
addImpure(4)