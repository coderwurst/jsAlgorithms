/** Understanding the Problem **/

// Write a function which takes 2 numbers and returns their sum

// 1. Can I restate the problem in my own words?
    // implement addition

// 2. What are the inputs that go into the problem?
    // floats, integers, strings? Empty?

// 3. What are the outputs that go into the problem?
    // floats, integers, strings

// 4. Can the output be determined from the inputs? Do I have enough info to save the problem?
    // error handling, what happens if input is null

// 5. How should I label the important pieces of data that are part of the problem?
    // num1, num2 , sum



/** Exploring Examples **/
// Write a function which takes in a string and returns counts of each character in the string

// 1. Simple inputs
charCount("aaaa");                          // { 4 }

// 2. more complicated inputs
charCount("some string with some chars")    // { 26 } do we need to count spaces?
charCount("Hi hi hello")                    // h counted 3 times, i counted 2 times, or each 1 time

// 3. empty inputs
charCount("")                               // should return an error, or primpt to enter data?

// 4. invalid inputs
charCount(123)                              // should return an error, type checking?


