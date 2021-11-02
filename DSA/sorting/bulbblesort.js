function runProgram(input) {
    // Write code here
   input=input.trim().split("\n");
   let arr=input[1].trim().split(" ").map(Number);
   output(+input[0],arr);
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
      bubble(arr,0,n-1);
      function bubble(arr,left,right){
          if(left<right){
              let check=false;
              for(let i=0;i<right;i++){
                  if(arr[i]>arr[i+1]){
                     arr= swap(arr,i,i+1);
                      check=true;
                  }
              }
              if(check==false)
              return;
              bubble(arr,0,right-1);
          }
      }
      function swap(arr,left,right){
          let temp=arr[left];
          arr[left]=arr[right];
          arr[right]=temp;
         return arr;
        }

        console.log(arr.join(" "));
  
    }