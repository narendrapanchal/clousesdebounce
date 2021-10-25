function runProgram(input) {
    // Write code here;
    input=input.trim().split("\n");
    let rr=input[1].trim().split(" ").map(Number);
    let sum=+input[2];
    output(rr,+input[0],-1,"",sum);
    var check=false;
function output(arr,n,index,ans,sum){
    if(index==n){
        return;
    }
    if(sum<ans){
        return;
    }
    if(ans==sum){
        check=true;
        return;
    }
    for(var i=index+1;i<n;i++){
        let temp=ans+arr[i];
        console.log(temp);
        output(arr,n,i,temp,sum);
        
     }
    }
    if(check)
    console.log("yes")
    else console.log("no")

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