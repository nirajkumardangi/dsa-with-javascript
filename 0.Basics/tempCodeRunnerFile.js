function checkGrade(totalPercentage) {
  switch (true) {
    case totalPercentage > 90:
      console.log('Grade A');
      break;
    case totalPercentage > 80:
      console.log('Grade B');
      break;
    case totalPercentage > 70:
      console.log('Grade C');
      break;
    default:
      console.log('Fail');
  }
}

checkGrade(81);