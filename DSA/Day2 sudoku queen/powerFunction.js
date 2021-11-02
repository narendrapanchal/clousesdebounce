/*
Detailed Explanation:
Consider a function power(a, b).For even cases, the recursion is clear that is return power(a x a, b / 2).

But what for odd cases?

We can do a slight change like return power(a x a, b / 2) x a, to achieve the results.

The base case is when b becomes zero during recursion and that would be returning 1.

This method helps us to achieve logarithmic time complexity.

Time Complexity:
O(log(b)).

Space Complexity:
No extra space required for processing, therefore O(1).

Alternate Solutions:
A linear time complexity solution recursive exists where we the recursion function will be -

power(a, b) = a x power(a, b-1) and the base case remains the same.
 **/

function runProgram(input) {
    // Write code here
    input=input.trim().split(" ").map(Number);
    console.log(output(input[0],input[1],1))

  }
  if (process.env.USER === "Narendra") {
    runProgram(``);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0) ;
    });
  }
    function  output(a,b,s){
      if(b<=0){
          return s;
      }
      s*=a;
      return output(a,b-1,s);
  }