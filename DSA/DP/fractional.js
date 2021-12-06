function runProgram(input) {
    // Write code here
   input=input.trim().split("\n");
   let line=1;
   let test=+input[0];
   for(let i=0;i<test;i++){
       let arr=[];
       let [s,n]=input[line++].trim().split(" ").map(Number);
       for(let j=0;j<n;j++){
           let temp=input[line++].trim().split(" ").map(Number);
           arr.push(temp);
       }
       output(s,n,arr);
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
  function output(s,n,arr){
      let sum=0;
      find([],0);
      function find(array,len){
          let tempsum=0;
          let highsum=0;
          console.log(array.join(" "));
          for(let i=0;i<array.length;i++){
           for(let j=0;j<2;j++){
               if(j==0)
               tempsum+=array[i][j];
               else
               highsum+=array[i][j];
           }
        }
        console.log(tempsum,highsum)
          if(tempsum<=s){
              if(highsum>sum){
                sum=highsum;
              }
              
          }
          for(let i=len;i<n;i++){
              array.push(arr[i]);
              find(array,i+1);
              array.pop();
          }
      }
      console.log(sum);
  }