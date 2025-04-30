// Q7. Get number of days in a month (handle leap year)
function getDaysInMonth(month, year) {
  if (month < 1 || month > 12 || year < 1) {
    return 'Invalid month and years';
  }

  switch (month) {
    case 2: // February
      // check leap year
      if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return 29;
      } else {
        return 28;
      }

    case 3: // March
    case 5: // June
    case 9: // September
    case 11: // November
      return 30;

    default: // All the rest (Jan, Mar, May, Jul, Aug, Oct, Dec)
      return 31;
  }
}

console.log(getDaysInMonth(2, 2024)); // 29 (leap year)
console.log(getDaysInMonth(2, 2023)); // 28 (non-leap year)
console.log(getDaysInMonth(11, 2025)); // 30
