function runProgram(input) {
  // Write code here
 input=input.trim().split("\n");
 let [n,k]=input[0].trim().split(" ").map(Number);
 let arr=input[1].trim().split(" ").map(Number);

    let index;
find(arr,0,n-1,k) 
 function find(arr,l,r,k){
  let middle=Math.floor((l+r)/2);
  if(l>r)
  {
      return;
  }

  if(arr[middle]>k)
  {
      index=middle;

  }
    
 if(arr[middle]>k){
      r=middle-1;
      find(arr,l,r,k);
     } else {
       l=middle+1;
       find(arr,l,r,k);
     }
  }



console.log(index);
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