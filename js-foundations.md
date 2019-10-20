# ASSESSMENT 2: FOUNDATIONS OF JAVASCRIPT
## Interview Practice Questions

### Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.

Consider the function:

var text = 'outside'
function logIt(){
  console.log(text)
  var text = 'inside'
}
logIt()


1a. Look at this Javascript function and try to predict what the console show.
The console won't show anything.


1b. Test the function. Explain why the function returned what it did.

  Your answer:  To show what the function shows, it needs to be logged outside the function. It also needs a placeholder in the parenthesis for the function and the console.log, then logIt(variable).

  Researched answer:  The logging does not need to happen outside the function. Just the placeholders need to be put in place.


2. What is JSON?

  Your answer:  JSON is a style of writing JavaScript using objects and classes.

  Researched answer:  JSON is the use of name/value pairs in JavaScript. It is syntactically identical to objects in JavaScript, therefore JavaScript is able to identify JSON.


3. What does CRUD stand for?

  Your answer:  CRUD has to do with specific features related to HTTP.

  Researched answer:  Create, Read, Update, Delete. It is the four basic functions of persistent storage. They are basic actions websites should be able to do.



4. What does are the 5 HTTP verbs?

  Your answer:  Don't remember off the top of my head, but they are similar to CRUD.

  Researched answer:  Get, Post, Put, Patch, Delete. They comprise a major portion of our uniform interface.


5. What is a higher-order function?

  Your answer:  Higher-order functions are functions which can contain another function within it, such as for loops. For example, map alone will in a way combine a for loop with a push.

  Researched answer:  Higher-order functions are functions which can take functions as arguments, or return functions as a result.


6. STRETCH: What is a closure, what is it good for and how do you recognize one?

  Your answer:  Not familiar with this term.

  Researched answer:  In JavaScript, closures are used to narrow the scope of an object using curly brackets. This allows access to things within the scope if you are in the scope, but doesn't allow access from outside the scope. More broadly, it acts like a level of security in your program.


7. STRETCH: What is an API?

  Your answer:  Don't remember.

  Researched answer:  Applications Program Interface. A way computers talk to one another. It is the process of getting data from a website and returned in JSON. All it does is generate info for the user.


### Additional Feedback Questions.

1. Do you have a suggestion for a Check In question?
What is the funniest mean thing you've ever done to someone?


2. What was your favorite topic this week?
My favorite topic was just learning how to use React in general and getting more familiar with it.


3. What was your "A-ha!" moment this week?
Return ends a for loops. Forgot that concept and was stuck. Won't forget it again.