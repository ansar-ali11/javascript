// for in loop : this loop will iterate over the object values
/*let colors = {
    first : 'green',
    second :'blue',
    third : 'red'
}
for(var color in colors)
{
    console.log(colors[color])
}*/
let person ={
    name :'Ansar',
    pin : 544,
    branch:'cse'
}

for(var frnd in person)
{
    console.log(frnd +'-' +person[frnd])
}


//array

var arr=['Hello','Good','Morning']

for(var a in arr)
{
    console.log(a+'-'+arr[a])
}