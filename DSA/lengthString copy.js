function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    var testCases=+input[0];
    var line=1;
    for(var i=0;i<testCases;i++){
        var num=+input[line++];
        if(find(1)){
          console.log("Yes");
        }else
        console.log("No");
        function find(curr){
            if(num==curr){
                return 1;
            }else if(num<curr){
              return 0;
            }
            return find(curr*10)||find(curr*20);
        }
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