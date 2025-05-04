// Q20. Time of day greeting based on hour (0–23)
function timeOfDayGreeting(hour) {
  let hr = Number(hour);

  if (hr < 0 || hr > 23) {
    return 'Invalid hour! Please provide a value between 0 and 23.';
  }

  if (hr >= 5 && hr < 12) {
    return 'Good morning!';
  } else if (hr >= 12 && hr < 17) {
    return 'Good afternoon!';
  } else if (hr >= 17 && hr <= 21) {
    return 'Good evening!';
  } else {
    return 'Good night';
  }
}

// OUTPUT::
console.log(timeOfDayGreeting(8)); // Good morning!
console.log(timeOfDayGreeting(14)); // Good afternoon!
console.log(timeOfDayGreeting(19)); // Good evening!
console.log(timeOfDayGreeting(22)); // Good night!
console.log(timeOfDayGreeting(3)); // Good night!
