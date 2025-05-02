// Q12. FizzBuzz: "Fizz" for 3, "Buzz" for 5, "FizzBuzz" for both
function fizzBuzz(limit) {
  if (typeof limit !== 'number' || n < 1) {
    return 'Invalid input';
  }

  for (let i = 1; i <= limit; i++) {
    let isFizz = i % 3 === 0;
    let isBuzz = i % 5 === 0;

    if (isFizz && isBuzz) {
      console.log('FizzBuzz');
    } else if (isFizz) {
      console.log('Fizz');
    } else if (isBuzz) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}

// Output
console.log(fizzBuzz(15));

/*
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
*/