let scores = [43,56,67,87,67,45,34]

function getAverage(scores){
    //need to pass in a parameter for it to be analyzed
    //the parameter will be the scores array
   
   
    let sum = 0;//declare and initalize the sum variable outside of the loop so a new instance of the variable is not created for each iteration of the loop
    
    for(const score of scores){
        
        sum+=score;
    }
    
    return sum/scores.length;//return the calculated average

    
}//end getAverage

//print the result the result of the function
console.log(getAverage(scores));
    //print by calling the function
        //function ()
    //then add parameter
        //function(parameter)
    
