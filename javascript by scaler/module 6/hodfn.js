//

let arr=[1,2,3,4,5]

let sqarr=[]

for(let i=0;i<arr.length;i++)
{
    sqarr.push(arr[i]*arr[i]);
}

console.log(sqarr);

//By using map 
// map will always return you with a new array
const a = [1,2,3,4,5]

const sqa=a.map(function(n){
    return n*n;
})

console.log(sqa);

//forEach : it returns the values not in a array

const sqa1=a.forEach(n=>{
     console.log(n*n);//we need to console it otherwise we will won't get the values
})

console.log(sqa1)