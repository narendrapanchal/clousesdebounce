function runProgram(input) {
    // Write code here
   input=input.trim().split("\n");
   let [n,k]=input[0].trim().split(" ").map(Number);
   let arr=input[1].trim().split(" ").map(Number);
   arr.sort((a,b)=>{
       return a-b;
   });

  console.log(iterativeBinarySearch(arr,0,n-1,k));

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
  function iterativeBinarySearch(array, low, high, element){

    while (low <= high){
       let  middle = Math.floor((low+high)/2)

        if (array[middle] == element)
            return 1
        if (array[middle] < element)
            low = middle + 1
        else
            high = middle - 1
    }

    return -1
}