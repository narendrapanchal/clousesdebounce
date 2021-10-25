function runProgram(input) {
  // Write code here;
  input=input.trim().split("\n");
  let test=+input[0];
  let line=2;
  for(let i=0;i<test;i++){
      var n=input[line++];
      line++;
     console.log(output(n,""));
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
function output(n,ans){
  let mid;
  if(n.length%2==0){
    mid=n.length/2-1;
  }else{
    mid=Math.floor(n.length/2);
  }
  
  let left="";
  let right="";
  for(var i=0;i<mid;i++){
    left+=n[i];
  }
  for(var i=mid+1;i<n.length;i++){
    right+=n[i];
  }
  if(n.length==0){
    return "";
  }
  return n[mid]+output(left,"")+output(right,"");
}