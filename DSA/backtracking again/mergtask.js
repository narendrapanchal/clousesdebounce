function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
   let arr1=input[1].trim().split(" ").map(Number);
   let arr2=input[2].trim().split(" ").map(Number);
   let left=0;
   let right=0;
   let out=[];
   while((left+right)<(arr1.length)*2){
       if(left==arr1.length){
           out.push(arr2[right]);
           right++;
       }
       else if(right==arr1.length){
           out.push(arr1[left]);
           left++;
       }
       else{
       if(arr1[left]>arr2[right]){
           out.push(arr2[right]);
           right++;
       }
       else{
           out.push(arr1[left]);
           left++;
       }
       }
   }
   console.log(out.join(" "));
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