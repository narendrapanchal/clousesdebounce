function runProgram(input) {
    // Write code here
   input=input.trim().split("\n");
   let [n,k]=input[0].trim().split(" ").map(Number);
   let arr=input[1].trim().split(" ").map(Number);
   output(n,k,arr);
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
    function output(n,k,arr){
        let total=0;
        find(0,0);
        function find(sum,index){
          if(sum==k)
          total++;
            if(index==n)
            return;
            if(sum>k)
            return;
            for(let i=index;i<n;i++){
                find(sum+arr[i],i+1);
            }
        }
        console.log(total);
    }