function runProgram(input) {
  // Write code here
 input=input.trim().split("\n");
 let line=1;
 let test=+input[0];
 for(let i=0;i<test;i++){
  let value=[];
  let weight=[];
     let [cap,n]=input[line++].trim().split(" ").map(Number);
     for(let j=0;j<n;j++){
         let temp=input[line++].trim().split(" ").map(Number);
         weight.push(temp[0]);
         value.push(temp[1]);
     }
     output(cap,n,value,weight);
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
function output(cap,n,vals,wts){
    let dp=[];
    for(let i=0;i<=n;i++){
      let arr=[];
      for(let j=0;j<=cap;j++){
        arr.push(0);
      }
      dp.push(arr);

    }   
    for(let i=1;i<dp.length;i++){

      for(let j=1;j<dp[0].length;j++){
        if(j>=wts[i-1]){
          let rcap=j-wts[i-1];
          if((dp[i-1][rcap] +vals[i-1]) >dp[i-1][j]){
            dp[i][j]=dp[i-1][rcap]+vals[i-1];
          }else{
            dp[i][j]=dp[i-1][j];
          }
        }else{
          dp[i][j]=dp[i-1][j];

        }
      }

    }
    console.log(dp);
    
}