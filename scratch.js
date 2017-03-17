//indexes:     0,1,2,3,4
var myArray = [1,2,3,4,5];
for(var i = 0; i < myArray.length; i++ ) {
	//console.log(i);
	console.log( myArray[i++] );	
}


var x
console.log("value of x is: " + x );
for(x = 4; x >= 0; x-- ){
	console.log(myArray[x]);
}


var arr = ['hey', 'ho', 'hi', 'boo', 'bae'];
for(var j = 0; j < 5 ; j += 2 ){
	console.log(arr[j]);
} 


//function definition
function addNumbers(numbers) {
  //numbers is an array of integers.
  //add all of the integers and return the value
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    //sum = numbers[i] + sum;
    sum += numbers[i];
  }
  return sum;
}

//function invocation
console.log(addNumbers( [5,10,15,20] ));


function isPrime(num) {
  //return true if num is prime.
  //otherwise return false
  //hint: a prime number is only evenly divisible by itself and 1
  //hint2: you can solve this using a for loop
  //note: 0 and 1 are NOT considered prime numbers
  if (num === 0 || num === 1 ){
  	return false;
  }
  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
    console.log("finished evaluating the if conditional");
  }
 return true;
}


console.log(isPrime(7));  
console.log(isPrime(15));
console.log(isPrime(20));
console.log(isPrime(0));
console.log(isPrime(1));



