function runProgram(input) {
    // Write code here
   input=input.trim().split("\n");
   let testCases=+input[0];
   let line=1;
   for(let i=0;i<testCases;i++){
       let n=+input[line++];
       let arr=input[line++].trim().split(" ").map(Number);
      arr=arr.sort((a,b)=>
      {
        return a-b;
      });
       output(n,arr);
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
  function output(n,arr){
      let check=false;
    find(0,0);
    function find(sum,num){
        if(sum==arr[n-1]){
            check=true;
            return;
        }
        if(check)
        return;
        for(let i=num;i<n-1;i++){
            find(sum+arr[i],i+1);
        }
    }
    if(check)
    console.log("Yes");
    else console.log("No");

  }