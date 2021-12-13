function runProgram(input) {
    // Write code here
   
    input=input.trim().split("\n");
    let line=0;
    let test=+input[line++];
    for(let i=0;i<test;i++){
        let matrix=[];
        let [h,w]=input[line++].trim().split(" ").map(Number);
        for(let j=0;j<h;j++){
            let arr=input[line++].trim().split(" ").map(Number);
            matrix.push(arr);
        }
        output(h,w,matrix);
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
function output(h,w,matrix){
    for(let i=h-1;i>=0;i--){
        for(let j=0;j<w;j++){
            let max=Math.max();
            for(let k=j-1;k<=j+1;k++){
                if(k>=0 && k<w){
                    if(matrix[i][k]>max){
                        max=matrix[i][k];
                    }
                }
            }
            matrix[i-1][j]+=max;
        }
    }
  let find=Math.max();
    for(let i=0;i<w;i++){
        if(matrix[0][i]>find)
        find=matrix[0][i];
    }
    console.log(find);
}