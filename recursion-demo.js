console.log('\x1Bc'); // clears the console each run


/* ******************* recursion ******************* */
console.log('--------- Recursion Demo Start ---------');

/*What is recursion? Recursion simply is a function that calls itself. It is used when you need to solve a problem
by dividing into smaller parts of itself. a Russian doll is the perfect example of recursion as you open up and reveal
smaller dolls until you reach the last smallest one.

Every recursive function has two parts,
the base case, the stopping condition.
.*/





// Base Case and Recursive Case
console.log('\n--------- Base Case and Recursive Case---------\n');



// 1. Writing a Function for Factorial Of a Number: first lets create our function 

/*
    function factorial(number){

    }
*/

// 1a. Create the Base Case (The Case that can be Resolved): 


/*
    if(number == 0){
        return 1;
    }
*/

// 1b. Create the Recursive Case (The Case that needs to call the function itself to resolve with a new argument)

// factorial example: 4! = 4*3*2*1
/* 
    number * factorial(number-1);
*/

// 1c. Recursive Function with Base Case and Recursive Case

// factoria is the product of an integer and all the numbers below it 

function factorial(number){

    // THE BASE CASE: Can be resolved so it
    if(number == 0){
        return 1;
    }

    // THE RECURSIVE CASE: Must call itself until it reaches the Base Case.
    return number * factorial(number - 1);

}

// Verify Your Function Works 
console.log(factorial(5));

// Direct vs Indirect Recursion
console.log('\n--------- Direct vs Indirect Recursion ---------\n');










// Solving for Even or Odd Number Using Direct Recursion

// Direction recursion is what we saw in that last example with a function calling on itself. 
// now lets use the exmaple of finding where or odd or even to go through this again
function evenOrOdd(number){

    //BASE CASE 1
    if(number == 0){
        return "Your Number is Even";
    }

    //BASE CASE 2
    if(number == 1){
        return "Your Number is Odd";
    }

    //RECURSIVE CASE
    return evenOrOdd(number - 2);
}

console.log(evenOrOdd(117));

//Indirect recursion
//Solving for Even or Odd using Indirect Recursion: 
function isEven(n){

    //Base Case
    if(n == 0){
      return true;
    }
  
    //Recursive Case
    return isOdd(n-1);
  }
  
  function isOdd(n){
    //Base Case
    if(n == 0){
      return false;
    }
    
    //Recursive Case
    return isEven(n-1);
  }

console.log(isOdd(18));













/*
In reddit, we often see things like
COMMENTS
---
This is awesome
  No it isn't
    You're wrong
      Whatever
      No she's not
  
  No, you are awesome :D
I know this guy!
  Me too!
I'm hungry
  Hi hungry, I'm dad!
    Terrible dad joke
    LMAO!
---
*/

const comments = [
  {
    text: `This is awesome`,
    children: [
      {
        text: `No it isn't`,
        children: [
          {
            text: `You're wrong`,
            children: [
              {
                text: `Whatever`,
                children: []
              },
              {
                text: `No she's not`,
                children: []
              }
            ]
          }
        ]
      },
      {
        text: `No, you are awesome :D`,
        children: []
      }
    ]
  },
  {
    text: 'I know this guy!',
    children: [
      {
        text: 'Me too!',
        children: []
      }
    ]
  },
  {
    text: `I'm hungry`,
    children: [
      {
        text: `Hi hungry, I'm dad!`,
        children: [
          {
            text: 'Terrible dad joke',
            children: []
          },
          {
            text: 'LMAO!',
            children: []
          }
        ]
      }
    ]
  }
]

/*
At each level of recursion, we are dealing with an array of comments.
We want to add the text to our current string with the correct level of indentation.
If there are no children, we want don't do anything else and move to the next comment.
If there are children, we add them too with the correct indentation before continuing.
*/

// a helper function to get the indentation: '  ' * n
function getIndent (n) {
  indent = ''
  for (let i = 0; i < n; i++) {
    indent += '  '
  }
  return indent
}

// the recursive fuction to display comments
function formatComments (comments, depth) {

  // start with an empty string
  response = ''

  // for each comment in the current array

  // for each is a method that iterates over array items. without mutating it. 

  comments.forEach((comment) => {

    // we add its text to the response
    response += getIndent(depth) + comment.text + '\n\n' 

    // if there are children, we add them too before continuing to the next comment
    if (comment.children.length) { 
      response += formatComments(comment.children, depth + 1)
    }

  })

  return response
}

console.log(`
COMMENTS
---
${formatComments(comments, 0).trim()}
---
`)

