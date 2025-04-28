// Q5. Classify age group (Child, Teen, Adult, Senior)
function ageGroup(age) {
  if (age >= 0 && age <= 12) {
    return 'Child';
  } else if (age >= 13 && age <= 19) {
    return 'Teenager';
  } else if (age >= 20 && age <= 35) {
    return 'Young Adult';
  } else if (age >= 36 && age <= 59) {
    return 'Adult';
  } else {
    return 'Senior';
  }
}

let result = ageGroup(35);
console.log(result);
