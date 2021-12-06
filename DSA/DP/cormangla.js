function runProgram(input) {
  // Write code here
  input=input.trim().split("\n");
  let n=+input[0];
 let arr=input[1].trim().split(" ").map(Number);
  output(n,arr);
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
   let dp=[];
   for(let i=0;i<n;i++){
     dp.push(null);
   }
   dp.push(0);
   for(let i=n-1;i>=0;i--){
     if(arr[i]>0){
       let min =Math.min();
     for(let j=1;j<=arr[i] && i+j<dp.length;j++){
     if(dp[i+j]!=null){
       if(min>dp[i+j])
       min=dp[i+j];
     }
     }
     if(min!=Math.min()){
       dp[i]=min+1;
     }
    }
   }
   console.log(dp[0]);

}