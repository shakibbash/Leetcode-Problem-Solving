// practice task-1
/***

Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/

// const Burger=450;
// if(Burger>500){
//     console.log("FREE COKE");

// }else{
//   console.log("coke:30tk")
// }


//practice task-2
/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/

// const weight=53;
// const height=5.5;
// const BMI=weight/(height)^2;

// if(BMI<18.5){
//     console.log("you are underweight");
    
// }
// else if(BMI >= 18.5 && BMI <=24.9){
//     console.log("you are normal");

// }
// else if(BMI >=25 && BMI <= 29.9){
//     console.log(" you are overweight");

// }else{
//     console.log("you are obese")
// }

// practice task-3
/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

// let score=80;
// if(score>=90 && score<=100){
//     console.log("GRADE A");
// }
// else if(score>=80 && score<=89){
//     console.log("GRADE B");
// }
// if(score>=70 && score<=79){
//     console.log("GRADE C");
// }
// if(score>=60 && score<=69){
//     console.log("GRADE D");
// }
// if(score>=0 && score<=59){
//     console.log("GRADE F");
// }
// practice task -4
/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/
// let score=80;
// let friend_score=45;
// if(score>=80){
   
//     if(friend_score>=80){
//         console.log("going for a lunch");
//     }
//     else if(friend_score>=60 &&  friend_score<80 ){
//         console.log("good luck next time");
//     }
//     else if(friend_score>=40  && friend_score<60 ){
//         console.log("message unseen");
//     }else {
//         console.log("blocked");
//     }

// }else{
//     console.log("go to home and sleep and act sad")
// }

// practice task-4
/***

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */

// const num1=8;
// const num2=6;
// if(num1>num2){
//     const result=2*num1;
//     console.log(result);

// }else{
//     const result=num1+num2;
//     console.log(result);
// }
//ternary operator:
// const num1 = 8;
// const num2 = 6;
// const result = (num1 > num2) ? (2 * num1) : (num1 + num2); 
// console.log(result);



// practice task-5
/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/
// const age = 60; // Change this value to test different cases
// const isStudent = false; // Set to true if the person is a student

// let fare;

// if (age < 10) {
//     fare = 0;
// } else if (isStudent) {
//     fare = 800 * 0.5; // 50% discount
// } else if (age >= 60) {
//     fare = 800 * 0.85; // 15% discount
// } else {
//     fare = 800; // Regular fare
// }

// console.log(`Ticket Fare: ${fare} Tk`);

