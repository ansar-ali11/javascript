// callback function : A function within a another function passed as a argument

function fn(firstName , cb){
    console.log(firstName);
    cb('Ali')
}

function ln(LastName){
    console.log(LastName);
}

fn('Ansar',ln)
