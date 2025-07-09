let scores = [73,96,67,87,67,85,74,95,100,25,56,78]

function getAverage(scores){
    //need to pass in a parameter for it to be analyzed
    //the parameter will be the scores array
   
   
    let sum = 0;//declare and initalize the sum variable outside of the loop so a new instance of the variable is not created for each iteration of the loop
    
    for(const score of scores){
        //for..of
            //for...of is a special loop in JavaScript for going through each item in something iterable — like an array or a string.
            //ex: for (const item of array) {}
            //For each element inside scores, take its value and temporarily call it score in this loop
                //The first loop: score is 43...The second loop: score is 56...The third loop: score is 67
            // Why const? : The name score cannot be reassigned inside one iteration. But each iteration, the loop gives you a new score with the next value in the array.
            
        sum+=score;
    }
    
    return sum/scores.length;//return the calculated average

    
}//end getAverage

//print the result the result of the function
console.log("The average score amoung the score array is: "+getAverage(scores));
    //print by calling the function
        //function ()
    //then add parameter
        //function(parameter)
        
        
        //assign the getAverage(score) to a variable so it is easier to manipulate
        const average = getAverage(scores);
        console.log(average);
    
    //Now create a function to output a letter grade based on the score
        //conditional statements (if, else if, and else).
        //comparison operators (>, <, >=, <=, ===).
        //logical AND operator (&&).
function getGrade(average){
    
    let grade;
        
      if(average<=100 && average>=90){
          grade = "A"
      }
      else if (average<=89 && average >=80){
          grade = "B"
      }
     else if (average<=79 && average >=70){
          grade = "C"
      }
      else if (average<=69 && average >=60){
          grade = "D"
      }
      else{
        grade ="F"
      }
        
    return grade;
}

console.log(getGrade(average));
