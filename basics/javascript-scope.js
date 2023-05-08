// scope

// function scope

// Priyanka Chopra   she is an Indian actress, but she works in Hollywood also, so she is a global star
// Nick jones     he is husband of Priyanka

// Alia Bhatt   she is also an India actress, but she is not a global star or you can say that she is a local star

let name = 'Priyanka' // name variable is defined inside global scope 
// name variable is like Priyanka

console.log(name); // global scope

function India(x,y){
    // z is a local variable
    console.log(name);    // local scope
    let Alia = x + y;   // the scope of this z variable is this function is only
    return Alia;
}

console.log(India(9,3));

// console.log(Alia); // trying to get the value of z outside the function

// block scope --> if-else, for loop, while scope

{
    var actress = 'Kareena' // block scope and this variable is local variable
    // console.log(actress)
}

console.log(actress);

// let, const ,var

// block scope doesn't work on var variables