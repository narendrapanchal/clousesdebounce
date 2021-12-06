function runProgram(input) {
  // Write code here
  input=input.trim().split("\n");
  let n=+input[0];
  output(n);
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
function output(c){
  let arr=[];

  for(let i=0;i<c;i++){
      arr.push(-1);
  }

  let sum=0;
  let temp=find(c);
  console.log(sum);
  function find(n){
      if(n==1||n==0){
          sum++;
          return n;
      }
      if(n<0)
      return 0;
      if(arr[n]!=-1){
          sum+=arr[n];
          return arr[n];
      }else{
         let temp=find(n-1)+find(n-3)+find(n-4);
         arr[n]=temp;
      }
     
  }
 
  console.log(sum);


}