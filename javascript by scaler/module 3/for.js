//for loops are used for iterative tasks  based upon the given condition
//printing the squares of each element in an array using for loop
var a=[2,3,4,5,6,7,8]
let res =[];
for(var i=0;i<=6;i++)
{
    res[i]=a[i]*a[i]
}
console.log(res)

//printing even numbers of 100
let b=100;

for(var i=1 ;i<=100;i++)
{
    if(i%2==0)
    {
        console.log(i)
    }
}