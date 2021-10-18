function runProgram(input) {
    // Write code here
   input=input.trim().split(" ");
   var [n,k]=input;
   n=n.toString();
   var temp=0;
      for(var i=0;i<n.length;i++){
       temp+=(Number(n[i]));
      }
     temp= temp*k;
     

    temp=temp.toString();
   console.log(superDigit(temp));

   function superDigit(arr){
       arr=arr.split("").map(Number)
       var sum=0;
       for(var i=0;i<arr.length;i++){
           sum+=+(arr[i]);
       }
       if(sum<10)
       return sum;
       var putnum=""+sum;
       return superDigit(putnum);
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