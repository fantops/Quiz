const readLineSync = require('readline-sync');

//Only Edit this section to add or remove Questions
function Questions(score){
  //Question No 1
  console.log(`Q1. Quick sort running time depends on the selection of\n  A. Size of Array\n  B. Pivot Element\n  C. Sequence of Elements\n  D. None of these`);
  console.log(`Answer:`);
  let answer = readLineSync.question();
  if(answer.toUpperCase()==='B'){
    console.log("Yaay!! You have done it Correct.")
    score++;
    console.log(`\nIf the pivot element is balanced, quick sort running time will be less.\n\nLet's Move to next Question.`)
    readLineSync.keyInPause('Press Any Key to continue');
  }
  else{
    console.log(`\nAhh! You have guessed it wrong. Correct Answer is B.\n\nExplanation:\nIf the pivot element is balanced, quick sort running time will be less.\n\nNo Worries try your best in next Question.`)
    readLineSync.keyInPause('Press Any Key to continue');
  }

  console.log(`**************************************************************************************************\n`);

  //Question No 2
  console.log(`Q2. Tower of hanoi is a classic example of\n  A. divide and conquer\n  B. recursive approach\n  C. B but not A\n  D. Both A & B`);
  console.log(`Answer:`);
  answer = readLineSync.question();
  if(answer.toUpperCase()==='D'){
    console.log("Yaay!! You have done it Correct.")
    score++;
    console.log(`\nThe recursive approach of tower of hanoi uses divide and conquer method.\n\nLet's Move to next Question.`)
    readLineSync.keyInPause('Press Any Key to continue');
  }
  else{
    console.log(`\nAhh! You have guessed it wrong. Correct Answer is D.\n\nExplanation:\nThe recursive approach of tower of hanoi uses divide and conquer method.\n\nNo Worries try your best in next Question.`)
    readLineSync.keyInPause('Press Any Key to continue');
  }

  console.log(`**************************************************************************************************\n`);

  //Question No 3
  console.log(`Q3. node.next -> node.next.next; will make\n  A. node.next inaccessible\n  B. node.next.next inaccessible\n  C. this node inaccessible\n  D. none of the above`);
  console.log(`Answer:`);
  answer = readLineSync.question();
  if(answer.toUpperCase()==='A'){
    console.log("Yaay!! You have done it Correct.")
    score++;
    console.log(`\nAfter applying node.next -> node.next.next; we will not have node.next stored anywhere if\nnot explicitly mentioned.\n\nLet's Move to next Question.`)
    readLineSync.keyInPause('Press Any Key to continue');
  }
  else{
    console.log(`\nAhh! You have guessed it wrong. Correct Answer is A.\n\nExplanation:\nAfter applying node.next -> node.next.next; we will not have node.next stored anywhere if\nnot explicitly mentioned.\n\nNo Worries try your best in next Question.`)
    readLineSync.keyInPause('Press Any Key to continue'); 
  }

   console.log(`**************************************************************************************************\n`);

  //Question No 4
  console.log(`Q4 Which of the following highly uses the concept of an array?\n  A. Binary Search tree\n  B. Caching\n  C. Spatial Locality\n  D. Scheduling`);
  console.log(`Answer:`);
  answer = readLineSync.question();
  if(answer.toUpperCase()==='C'){
    console.log("Yaay!! You have done it Correct.")
    score++;
    console.log(`\nHere, spatial locality means that the instruction accessed recently, then the nearby memory\nlocation would be accessed in the next iteration. As we know that in an array, all the elements\nare stored in a contiguous block of memory, so spatial locality is accessed quickly.\n\nLet's Move to next Question.`)
    readLineSync.keyInPause('Press Any Key to continue');
  }
  else{
    console.log(`\nAhh! You have guessed it wrong. Correct Answer is C.\n\nExplanation:\nHere, spatial locality means that the instruction accessed recently, then the nearby memory\nlocation would be accessed in the next iteration. As we know that in an array, all the elements\nare stored in a contiguous block of memory, so spatial locality is accessed quickly.\n\nNo Worries try your best in next Question.`)
    readLineSync.keyInPause('Press Any Key to continue'); 
  }

   console.log(`**************************************************************************************************\n`);

   //Question No 5
  console.log(`Q5 When the user tries to delete the element from the empty stack then the condition is\n   said to be a\n  A. Underflow\n  B. Garbage collection\n  C. Overflow\n  D. None`);
  console.log(`Answer:`);
  answer = readLineSync.question();
  if(answer.toUpperCase()==='A'){
    console.log("Yaay!! You have done it Correct.")
    score++;
    console.log(`\nUnderflow is a condition that occurs when user tries to implement the pop operation in the\nempty stack.\n\n`)
    readLineSync.keyInPause('Press Any Key to exit the Quiz.');
  }
  else{
    console.log(`\nAhh! You have guessed it wrong. Correct Answer is A.\n\nExplanation:\nUnderflow is a condition that occurs when user tries to implement the pop operation in the\nempty stack.\n\n`)
    readLineSync.keyInPause('\nPress Any Key to exit the Quiz.'); 
  }
  console.clear();
  return score;
}

//main QUiz Function
function quiz(){
  let score=0;
  console.log(`Finally you have decided to go ahead, Congrats !!\nIn the next Screen you will get the questions 1-by-1.\nFollow the rules stated to answer the questions.\n\n`);
  readLineSync.keyInPause('Press Any Key to continue');
  console.clear();
  score=Questions(score);
  return score;
  
}

//Calling point of the function
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

