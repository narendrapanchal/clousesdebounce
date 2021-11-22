function runProgram(input) {
    // Write code here
   input=input.trim().split("\n");
   let [n,k]=input[0].trim().split(" ").map(Number);
   let arr=input[1].trim().split(" ").map(Number);
   arr.sort((a,b)=>{
       return a-b;
   });
      
find(arr,0,n-1,k) 
   function find(arr,l,r,k){
    if(l>r)
    {
        console.log(-1);
        return;
    }
    let middle=Math.floor((l+r)/2);
    if(arr[middle]==k)
    {
        console.log(1);
        return;

    }
      
     else if(arr[middle]>k){
        r=middle-1;
        find(arr,l,r,k);
       } else {
         l=middle+1;
         find(arr,l,r,k);
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
