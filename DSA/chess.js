function runProgram(input) {
  // Write code here
  input=input.trim().split(" ").map(Number);
  var ro= +input[0];
  var co=+input[1];
  var   m=+input[2];
  var obj={};


   out(ro,co,m);

   function out(row,col,n){
    
  if(row<1||row>10||col<1||col>10){
    return;
  }
  let temp=""+row+" "+col;
  if(n==0){
    obj[temp]=1;
    return;
  }  
    
  let indexes=[
    [-2,1],
    [-2,-1],
    [2,-1],
    [2,1],
    [1,2],
    [1,-2],
    [-1,2],
    [-1,-2]
  ];
  for(var i=0;i<8;i++){
     out(row-indexes[i][0],col-indexes[i][1],n-1);
  }
  }
  console.log(Object.keys(obj).length);
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
