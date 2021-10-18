function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    var testCases=+input[0];
    var line=2;
    for(var i=0;i<testCases;i++){
        var arr=input[line].trim().split(" ").map(Number);
        line+=2;
        var count=0;
        console.log(find(arr,0));
        function find(str,p){
            if(str[p]==null){
                return ;
            }else 
            count +=str[p];
            find(str,p+1);
            return count;
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