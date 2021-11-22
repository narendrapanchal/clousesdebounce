function runProgram(input) {
  // Write code here
 input=input.trim().split("\n");
 let [n,k]=input[0].trim().split(" ").map(Number);
 let arr=input[1].trim().split(" ").map(Number);

    let index;
    let count=0;
find(arr,0,n-1);
 function find(arr,l,r){
  if(l>r)
  {
      return;
  }
  let middle=l+Math.floor((r-l)/2);
  if(arr[middle]==k)
  {
      index=middle;
      count=1;

  }
    
  if(arr[middle]>=k){
      r=middle-1;
      find(arr,l,r);
     } else {
       l=middle+1;
       find(arr,l,r);
     }
  }

if(count){
let left=index;
console.log(left);
}else console.log(-1);

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