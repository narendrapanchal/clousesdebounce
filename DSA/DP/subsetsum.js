function runProgram(input) {
    // Write code here
   input= input.trim().split("\n");
   let line=0;
   let test=+input[line++];
   let arr=input[line++].trim().split(" ").map(Number);
   let arr2=input[line++].trim().split(" ").map(Number)
   output(test,arr,arr2);
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
  function output(n,arr,k){
    let sum=0;
    arr.sort((a,b)=>{
      return a-b;
    })
    k.sort((a,b)=>{
      return a-b;
    })
    for(let i=0;i<n;i++){
      let temp=Math.abs(arr[i]-k[i]);
      if(temp>sum){
        sum=temp;
      
      }
    }
      
    console.log(sum);
  }