function runProgram(input) {
    // Write code here
   input=input.trim().split("\n");
   let test=+input[0];

   
       let arr=input[1].trim().split(" ").map(Number); 
          var ans=-1;
       output(0,test-1);

      function output(left,right){
        let mid=Math.floor((right+left)/2);
        if(left<right){
        if(arr[left]>=arr[right]){
            if(arr[mid]>arr[right]){
                ans=arr[right];
                output(mid+1,right);
            }else{
                ans=arr[mid];
                output(left,mid);
            }
        }
        else{
            ans=arr[left];
        } 
      }
     }

  console.log(ans);
   
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
 