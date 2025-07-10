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
