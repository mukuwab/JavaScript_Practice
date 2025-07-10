function getAverage(scores) {
  let sum = 0;

  for (const score of scores) {
    sum += score;
  }

  return sum / scores.length;

}

function getGrade(score) {
 let grade;
 if(score == 100){
   grade = "A++"
 }

 else if (score<=100 && score>=90){
        grade = "A"
      }
      else if (score<=89 && score >=80){
          grade = "B"
      }
     else if (score<=79 && score >=70){
          grade = "C"
      }
      else if (score<=69 && score >=60){
          grade = "D"
      }
      else{
        grade ="F"
      }
        
    return grade;

}
console.log(getGrade(96));
console.log(getGrade(82));
console.log(getGrade(56));

function getAverage(scores) {
  let sum = 0;

  for (const score of scores) {
    sum += score;
  }

  return sum / scores.length;
}

function getGrade(score) {
  if (score === 100) {
    return "A++";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

function hasPassingGrade(score) {
  let passing;
  if(score>=60){
     passing = true;
  }
  else {
    passing =false;
  }
  return passing;
}


console.log(hasPassingGrade(100));
console.log(hasPassingGrade(53));
console.log(hasPassingGrade(87));
