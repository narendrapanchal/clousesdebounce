function runProgram(input) {
  // Write code here
 input=input.trim().split("\n");
 let n=+input[0];
 let arr=input[1].trim().split(" ").map(Number);
 arr=arr.sort((a,b)=>{
   return a-b;
 })
 let matrix=[];
 output("",0);
 function output(tempstr,num){
     matrix.push(tempstr);
     if(num==n)
     return ;
     for(let i=num;i<n;i++){
        let temp=tempstr+arr[i]+" ";
       output(temp,i+1);
     }
 }
 for( let i=0;i<matrix.length;i++){
    for(j=i+1;j<matrix.length;j++){
      if(matrix[i]==matrix[j]){
        matrix.splice(j,1);
        j--;
      }
    }
 }
 for(let i=0;i<matrix.length;i++){
   console.log(matrix[i]);
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
function swap(arr,i,j){
   let temp=arr[j];
   arr[j]=arr[i];
   arr[i]=temp;
   return arr;
}

 //  for(let i=0;i<matrix.length;i++){
//      matrix[i]=matrix[i].split(" ");
//  }
//  matrix=matrix.sort();
//  console.log(matrix[0].join(" "));
//  for(let i=1;i<matrix.length;i++){
//    let tempone=matrix[i-1].join(" ");
//    let temptwo=matrix[i].join(" ");
//    if(tempone!=temptwo)
//    console.log(matrix[i].join(" "));
//  }