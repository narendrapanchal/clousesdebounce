function runProgram(input) {
    // Write code here;
    input=input.trim().split("\n");

    output(input[1],input[0],-1,"");

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
function output(str,n,index,ans){
    if(index==n){
        return;
    }
    if(ans!=""){
        console.log(ans);
    }
    for(var i=index+1;i<n;i++){
        let temp=ans+str[i];
        output(str,n,i,temp);
    }
}