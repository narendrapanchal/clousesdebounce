function runProgram(input) {
    // Write code here
   input=input.trim().split("\n");
   let arr=input[1].trim().split(" ").map(Number);
   output(arr,arr.length);
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
  function output(arr,n){
      quickSort(arr,0,n-1);
      function quickSort(arr,low,high){
          if(low<high){
              let pi=partition(arr,low,high);
              quickSort(arr,low,pi-1);
              quickSort(arr,pi+1,high);
          }
      }
      function partition(arr,low,high){
          let pivot=arr[high];
          let i=low;
          for(let j=low;j<high;j++){
              if(arr[j]<pivot){
                  swap(arr,i,j);
                  i++;
              }
          }
          swap(arr,i,high);
          return i;
      }
       function swap(arr,i,j){
           let temp = arr[i];
           arr[i] = arr[j];
           arr[j] = temp;
       }
       console.log(arr.join(" "));
  }