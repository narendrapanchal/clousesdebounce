function runProgram(input) {
    // Write code here
   input=input.trim().split("\n");
   let n=+input[0];
   let arr=input[1].trim().split(" ").map(Number);
   output(n,arr);
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
  function output(n,arr){
     arr=bubble(0,n,arr); 
     console.log(arr.join(" ")); 
  }
  function bubble(left,right,arr){
    if(right==0)
     return arr;
     let check=true;
    for(let i=0;i<right;i++){
      if(arr[i]>arr[i+1]){
       arr=swap(i,i+1,arr)
       check=false;
      }
    }
    if(check)
    return arr;
    
    return bubble(left,right-1,arr);
  }
  function swap(i,j,arr){
    let temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
    return arr;
    }