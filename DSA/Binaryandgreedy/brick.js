function runProgram(input) {
    // Write code here
   let line=1;
   input=input.trim().split("\n");
   let test=+input[0];
   for(let i=0;i<test;i++){
       let n=+input[line++];
       let x=+input[line++];
       let y=+input[line++];
       let arr=[];
       for(let j=0;j<n;j++){
           arr.push(input[line++].trim().split(" ").map(Number));
       }
       output(n,x,y,arr);
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
  function output(n,x,y,arr){
      let sum=0;
      let arr1=[];
      let arr2=[];
      for(let i=0;i<n;i++){
        arr1.push(arr[i][0]);
        arr2.push(arr[i][1]);        
      }


      for(let i=0;i<n;i++){
          if(arr1[i]>arr2[i]){
              let temp=arr1[i]-arr2[i];
              sum+=(temp*y);
          }else{
            let temp=arr2[i]-arr1[i];
            sum+=temp*x;
          }
        }
          console.log(sum);
  }

  /*
  * for(int i = 0;i<n;i++) {
                if(A[i]>B[i]) {
                    minimizeSum += (A[i]-B[i])*Y;
                } 
                else {
                    minimizeSum += (B[i]-A[i])*X;
                }
         }



3 1
1 2
1 2

1 1 3
1 2 2
         */