function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
   let test=+input[0];
   let arr=input[1].trim().plit(" ").map(Number);
   output(test,arr);
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
  function output(test,arr){
      arr.sort((a,b)=>{
          return a-b;
      })
      let sum=0;
      for(let i=1;i<test;i++){
          sum+=(arr[i]*i);
      }
      console.log(sum);
  }