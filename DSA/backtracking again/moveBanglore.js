function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let min=99999999;
    let max=0;
    let [k,n]=input[0].trim().split(" ").map(Number);
    let arr=input[1].trim().split(" ").map(Number);
    output(0,0);
    
    function output(sum,num){
        if(sum==k){
            if(num>max)
            max=num;
            if(min>num)
            min=num;
            return;
        }
        if(sum>k)
        return ;
        for(let i=0;i<n;i++){
            output(sum+arr[i],num+1);
        }
    }
    if(max!=0)
    console.log(min,max);
    else
    console.log(-1);
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
  