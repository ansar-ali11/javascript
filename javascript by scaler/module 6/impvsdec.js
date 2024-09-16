// we will be given a number we need to check even or not
//This is the way of writing the imperative code
let isEven;
let n=10;
    let sq = n*n;
    if(sq%2==0)
    {
        isEven=true;
    }
    else
    {
        isEven=false;
    }
console.log(isEven);

//This is the way of writing declarative code

let checksq = (x) => (x*x %2 === 0 ? true : false)

console.log(checksq(3));