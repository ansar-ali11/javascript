//Object : An object is a collection of key value pairs and each each key value is seprated by commas(,)
var person = {
    firstName:'Mohammad',
    LastName:'Ansar',
    age:21,
    ownscar:false
}
console.log(person)
//dot  notation
console.log(person.age)
//bracket notation
console.log(person['firstName'])
//nested object : object inside an object the outer object is assigned with equal(=) sign inside objects assigned with colon(:)
var Robo = {
    Name : 'chitti',
    chip :'green',
    Robo2 : {
        chip:'red',
        dople : ['r1','r2','r3'],
         features : {
            speed : 'one therahz',
            memory : 'gita bytes'
        }
    }
}
console.log(Robo.Robo2.dople[2])//r3
console.log(Robo.Robo2.features.memory)

//we can also add delete the properties of the objects by notations