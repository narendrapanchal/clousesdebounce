function runProgram(input) {
    // Write code here

    input=+input;
    console.log(fact(input));
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
  function fact(n){
      if(n==0){
          return 1;
      }
    if(n<0){
        return 0;
    }
      return fact(n-1)+fact(n-2)+fact(n-3);
  }