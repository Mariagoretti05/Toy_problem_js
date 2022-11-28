const prompt =require("prompt-sync")();
function grade(){
    //prompt user to input marks
    let marks=prompt("Enter marks:");
    //pass the input to a variable

    if(marks!==null){

        //when marks is greater than 79 grade is A

        if (marks> 79) {
            console.log("Grade: A");
          }

        //when marks is greater than 59 and less than or equal to 79 grade is B
          else if (marks >= 60) {
            console.log("Grade: B");
          }

        //when marks is greater than 49 and less than or equal to 59 grade is C
          else if (marks >= 49) {
            console.log("Grade: C");
          }

        //when marks is greater than 39 and less than or equal to 49 grade is C
          else if (marks >= 40) {
            console.log("Grade: D");
          }

        //when marks is greater than 0 and less than or equal to 39 grade is E
          else if (marks < 40) {
            console.log("Grade: E");
          }
        }

}
grade();