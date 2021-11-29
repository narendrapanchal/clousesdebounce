function runProgram(input) {
    // Write code here
    input= input.trim().split("\n");
    const length=+input[0];
    let arr=[];
    for(let i=1;i<=length;i++){
        arr.push(+input[i]);
    }
    let obj={};
    for(let i=0;i<length;i++){
        for(let j=0;j<length;j++){
            for(let k=0;k<length;k++){
                const abc=arr[i]*arr[j]+arr[k];
                if(obj[abc]==null){
                    obj[abc]=1;
                }else
                obj[abc]++;
            }
        }
    }
    let count=0;
    for(let i=0;i<length;i++){
        for(let j=0;j<length;j++){
            for(let k=0;k<length;k++){
                
                const abc=(arr[j]+arr[k])*arr[i];
                if(obj[abc]!=null){
                    if(arr[i]!=0)
                    count+=obj[abc];
                }
            }
        }
    }
    console.log(count);
   
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