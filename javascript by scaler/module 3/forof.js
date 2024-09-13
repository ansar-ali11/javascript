//for of loop : it will iterates over iteratable objects
let colors =['blue','red','green']

for(var color of colors)
{
    console.log(color)
}

//it will give only the key values 
//if we want to print indexes of those elements then we use a in built method called entries()

for (var [index,color] of colors.entries())
{
    console.log(index+'-'+color)
}

let s = 'scaler'

for(var i of s)
{
    console.log(i)
}