function runProgram(input) {
    // Write code here
   input=input.trim().split("\n");
   let line=0;
   let test=+input[line++];
   for(let i=0;i<test;i++){
   let [m,n]=input[line++].trim().split(" ").map(Number);
   let arr=input[line++].trim().split(" ").map(Number);
   arr.sort((a,b)=>{
       return a-b;
   });
   let arrn=input[line++].trim().split(" ").map(Number);
   output(arr,arrn,m,n);
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

function output(arrm,arrn,m,n){
    arrm.sort((a,b)=>{
        return a-b;
    })
    arrn.sort((a,b)=>{
        return a-b;
    })
    m=arrm.length;
    n=arrn.length;
  if(m>n){
      console.log("NO");
  }
  else{
      let count2=0;
      for (let i = 0; i < m; i++) {
         if(arrm[i]>arrn[i])
         count2++;
      }
      if(count2==m)
      console.log("YES");
      else
      console.log("NO");
  }
}


