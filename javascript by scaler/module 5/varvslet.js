// var keyword is function scoped or global scoped
var a=21;
if(a===21)
    {
        var b=30;
        console.log(b);
    }
    console.log(b);

//let keyword is block scoped 
if(a===21)
    {
        let c=40;
        c=32
        console.log(c);
    }

   // console.log(c); we will get an error we can't console the let variable outside the block

//const keywod is blocked scope
// we can't redeclare the variable as well as we can't reassign the variable 
const d=100
console.log(d)