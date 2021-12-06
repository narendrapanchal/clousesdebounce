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
    let out=[];
    for(let i=0;i<n;i++){
        out.push(1);
    }
    for(let i=0;i<n;i++){

      for(let j=0;j<i;j++){
          if(arr[i]>arr[j]){
              if(out[i]<=out[j])
              out[i]++;;
          }
      }
    }
    let high=1;
    for(let i=1;i<n;i++){
        if(high<out[i])
        high=out[i];
    }
    console.log(high);
}