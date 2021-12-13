function runProgram(input) {
    // Write code here
    input=input.trim();
    let arr=[];
    arr.push(1);
    let count=1;
    for(let i=input.length-2;i>=0;i++){
        if((+input[i])/2==0){
            arr.push(count+1);
            count++;
        }else
        arr.push(count);
    }
    console.log(arr.join(" ").reverse());
   
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