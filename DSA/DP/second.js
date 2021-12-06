function runProgram(input) {
  // Write code here
 input=input.trim().split("\n");
 let line=1;
 let test=+input[0];
 let n=+input[1];
 let arr=input[2].trim().split(" ").map(Number);
 let kgs=input[3].trim().split(" ").map(Number);
 output(test,n,arr,kgs);
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
function output(s,n,totalprice,kgs){
    let arr3=[];
    for(let i=0;i<n;i++){
       let temp=[];
       temp.push(kgs[i]);
       temp.push(totalprice[i]);
       arr3.push(temp);
     
    }
    // let temp=[];
    // for(let i=0;i<n;i++){
    //   temp.push(totalprice[i]/arr3[i]);
    // }
    arr3.sort((a,b)=>{
      return ((a[1]/a[0])-(b[1]/b[0]));
    })
    
    let sum=0;
    for(let i=0;i<n;i++){
        
      if(s-arr3[i][0]>=0){
        s-=arr3[i][0];
        sum+=arr3[i][1];
      }
      else{
        if(s!=0){
          sum+=s*(arr3[i][1]/arr3[i][0]);
        }
        break;
      }
    }
    
  console.log(arr3);
}