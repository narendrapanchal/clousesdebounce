function runProgram(input) {
    // Write code here
   input=input.trim().split("\n");
   let [n,k]=input[0].trim().split(" ").map(Number);
   let arr=input[1].trim().split(" ").map(Number);
  //upper bound
  let index;
  find(arr,0,n-1,k) 
   function find(arr,l,r,k){
    let middle=Math.floor((l+r)/2);
    if(l>r)
    {
        return;
    }
  
    if(arr[middle]==k)
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
     let first=index;

     //lower bound
    let count=0;
 fin(arr,0,n-1);
 function fin(arr,l,r){
  if(l>r)
  {
      return;
  }
  let middle=l+Math.floor((r-l)/2);
  if(arr[middle]==k)
  {
      index=middle;

  }
    
  if(arr[middle]>=k){
      r=middle-1;
      fin(arr,l,r);
     } else {
       l=middle+1;
       fin(arr,l,r);
     }
  }


console.log(first-index);

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
