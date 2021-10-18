function runProgram(input) {
    // Write code here

    input=input.trim().split("\n");
    var testCases=+input[0];
    var line=2;
    for(var i=0;i<testCases;i++){
        var arr=input[line++].trim().split(" ").map(Number);
        console.log(fin(arr,0));
        line++;
    }
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
  function fin(arr,n){
      if(n==arr.length-2){
          return Math.abs(arr[n]-arr[n+1]);
      }
      var temp=Math.abs(arr[n]-arr[n+1]);
      return temp+fin(arr,n+1);
  }