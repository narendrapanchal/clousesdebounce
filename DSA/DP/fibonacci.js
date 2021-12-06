function runProgram(input) {
    // Write code here
   input=+input;
   let arr=[];
   arr.push(0);
   arr.push(1);
   for(let i=2;i<input;i++){
       arr.push(arr[i-1]+arr[i-2]);
   }
   console.log(arr[input-1]);
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