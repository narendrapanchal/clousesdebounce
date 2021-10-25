function runProgram(input) {
    // Write code here;
    input=input.trim().split("\n");
    let test= input=+input[0];
    let line=1;
    for(var i=0;i<test;i++){
        let n=+input[line++];
        output(n,"");
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
function output(n,ans){
    if(n==0){
        console.log(ans);
        return;
    }
     ans+=n%2;
     n=Math.floor(n/2);
     return output(n,ans);
}