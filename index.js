const readLineSync = require('readline-sync');

//Only Edit this section to add or remove Questions
const questions = [
  {
    question : 'Q1. Quick sort running time depends on the selection of',
    options : ['A. Size of Array', 'B. Pivot Element', 'C. Sequence of Elements', 'D. None of these'],
    correctAnswer : 'B'
  },
  {
    question : 'Q2. Tower of hanoi is a classic example of',
    options : ['A. divide and conquer', 'B. recursive approach', 'C. B but not A', 'D. Both A & B'],
    correctAnswer : 'D'
  },
  {
    question : 'Q3.  node.next -> node.next.next; will make',
    options : ['A. node.next inaccessible', 'B. node.next.next inaccessible', 'C. this node inaccessible', 'D. None of these'],
    correctAnswer : 'A'
  },
  {
    question : 'Q4 Which of the following highly uses the concept of an array?',
    options : ['A. Binary Search tree', 'B. Caching', 'C. Spatial Locality', 'D. Scheduling'],
    correctAnswer : 'C'
  },
   {
    question : 'Q5. When the user tries to delete the element from the empty stack then the condition is\n   said to be a',
    options : ['A. Underflow', 'B. Garbage collection', 'C. Overflow', 'D. None'],
    correctAnswer : 'A'
  }
]

function validate(ans){
  if(ans.toUpperCase()==='A' || ans.toUpperCase()==='B' || ans.toUpperCase()==='C' || ans.toUpperCase()==='D')
    return true;
  else
    return false;
}
//main QUiz Function
function quiz(){
  let totalScore=0;
  console.log(`Finally you have decided to go ahead, Congrats !!\nIn the next Screen you will get the questions 1-by-1.\nFollow the rules stated to answer the questions.\n\n`);
  readLineSync.keyInPause('Press Any Key to continue');
  console.clear();
  for(let i = 0; i < questions.length; i++) {
    console.log(`\n${questions[i].question}`);
    const ans = readLineSync.question(`${questions[i].options.join(`\n`)}\n\nEnter Your answer: `);
    if(validate(ans)) {
      if(ans.toUpperCase() === questions[i].correctAnswer) {
          console.log("Yaay!! You have done it Correct.");
          totalScore += 1;
      } else {
        console.log("\nYou have given a wrong Answer");
        console.log(`Correct answer is ${questions[i].correctAnswer}`);
      } 
    } else {
      console.log("Select valid option from next question.");
    }
    if(i===questions.length-1){
      readLineSync.keyInPause('Press Any Key to exit'); 
      console.clear();
    }
    else{
      readLineSync.keyInPause('Press Any Key to continue'); 
      console.log(`**************************************************************************************************`);
    }

  }
  return totalScore;
  
}

//starting point of program
const name = readLineSync.question('What is your name?\n');
console.clear();
console.log(`Hello ${name}`);
console.log('Welcome to DSA Quiz!');
console.log('***********************************************************');
console.log();
console.log('Below are the rules for the Quiz:');
console.log("  1. The quiz will contain 5 questions.\n  2. Each Question will carry 1 mark.\n  3. There will be no negative marking.\n  4. There will be 4 options for each question.\n  5. You have to select any one option.\n");
console.log('***********************************************************');
console.log();
console.log(`Select 'y' or 'Y' to continue or 'n' or 'N' to quit.`);
while(1){
  const answer = readLineSync.question();
  console.clear();
  if(answer.toUpperCase()==='Y'){
    const finalScore=quiz();
    console.log(`*********************************************************************`);
    console.log(`\t\t\tHello ${name}, Your final Score is: ${finalScore}.`);
    console.log(`*********************************************************************`);
    readLineSync.keyInPause('\nPress Any Key to Exit.'); 
    break;
  }
  else if(answer.toUpperCase()==='N'){
    console.log(`I See you are not willing to take it now. You can comeback anytime soon! Thankyou !!\nBye-Bye`);
    break;
  }
  else{
    console.log(`Ah!! You have made a wrong choice. Select 'y' or 'Y' to continue or 'n' or 'N' to quit.`);
    continue;
  }
}
console.clear();

