function runProgram(input) {
    // Write code here
   input=input.trim().split("\n");
   let [n,k]=input[0].trim().split(" ").map(Number);
   let arr=input[1].trim().split(" ").map(Number);
   let obj={};
   for(let i=0;i<arr.length;i++){
       if(obj[arr[i]]==null){
           obj[arr[i]]=1;
       }
   }
   for(let i=2;i<input.length;i++){
       input[i]=+input[i];
    if(obj[input[i]]==null){
        console.log("NO");
    }else{
        console.log("YES")
    }
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