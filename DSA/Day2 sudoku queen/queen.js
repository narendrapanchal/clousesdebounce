function runProgram(input) {
  // Write code here;
output(+input);

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
function output(n){
  let board=new Array(n).fill(0).map(()=>new Array(n).fill(0));
  let p=0;
  quene(board,0);
  console.log(p);

function quene(arr,row){
  if(row==n){
    p++;
    return;
  }
  for(let i=0;i<n;i++){
    let check=conflict(row,i,arr);
    if(check){
      arr[row][i]=1;
      quene(arr,row+1);
      arr[row][i]=0;
    }
  }
 }
}
function conflict(row,col,arr){
  for(let i=row-1;i>=0;i--){
    if(arr[i][col]==1){
      return false;
    }
  }
  let i=row-1;
  let j=col-1;
  while(j>=0&&i>=0){
    if(arr[i][j]==1)
    return false;
    j--;
    i--;
  }
    i=row-1;
    j=col+1;
  while(j<arr.length&&i>=0){
    if(arr[i][j]==1)
    return false;
    j++;
    i--;
  }
  return true;
}