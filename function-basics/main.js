//////////Rewrite the function using ? or ||:

//The following function returns true if the parameter age is greater than 18.
//Otherwise it asks for a confirmation and returns its result.


/*function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}*/
//Rewrite it, to perform the same, but without if, in a single line.

//////////////Make two variants of checkAge:

//2. Using a question mark operator ?
function checkAge(age){
    alert(age > 18) ? true : confirm('Did parents allow you?');
}
checkAge(17);

//2. Using OR ||
function checkAge(age){
    alert(age > 18 ) || confirm('Did parents allow you?');
}
checkAge();

////////// Write a function min(a,b) which returns the least of two numbers a and b.

/*For instance:

min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1*/

function min(a,b){
    console.log(a < b ? a : b);
}

///////////Function pow(x,n): 
//Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.

//pow(3, 2) = 3 * 3 = 9
//pow(3, 3) = 3 * 3 * 3 = 27
//pow(1, 100) = 1 * 1 * ...* 1 = 1


function pow(x,n){
    console.log(x**n);
}
pow(3,2);

