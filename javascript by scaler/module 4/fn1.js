//function : A function is used to perform set of statements to perform a specific task

function fact(n){
    let res=1;
    for(var i=1;i<=n;i++)
    {
        res=res*i;
    }
    console.log(res)
}

fact(5)