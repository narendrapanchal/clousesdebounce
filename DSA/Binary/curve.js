function runProgram(input) {
    // Write code here
   input=input.trim().split("\n");
   let test=+input[0];
   for(let i=0;i<test;i++){
       let [a,b,c,k]=input.trim().split(" ").map(Number);
      console.log(output(a,b,c,k,0));
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
  function output(a,b,c,k,n){
      let temp=a*(n*n)+b*n+c;
      if(temp>=k){
          return n;
      }
      return(a,b,c,k,n+1);
  }