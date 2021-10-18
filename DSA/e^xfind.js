function runProgram(input) {
    // Write code here
    input=input.trim().split(" ").map(Number);
    var [tempx,tempn]=input;
    var sum=0;
        var temp=find(tempx,tempn);
        function find(x,n){
            if(n==0){
                sum+=1;
                return;
            }else{
              sum+=(x**n)/(fact(n))
            }
            return find(x,n-1);
    }
function fact(n){
    if(n==1){
        return 1;
    }
    return n*fact(n-1);
}
sum=sum.toString();
var check=false;
var countafter=0;
var output="";
let lastcheck=false;
for(var i=0;i<sum.length;i++){
    if(check){
        countafter++;
    }
    if(countafter==5){
       if((+sum[i]>=5)){
           lastcheck=true;
       }
        break;
    }
    if(sum[i]==".")
    {
        check=true;
    }
    output+=sum[i];   
}
if(check==false){
    output+=".0000";
}else{
    for(i=countafter;i<5;i++){
        output+="0";
    }
}

if(lastcheck==true)
{output=+output;
    output+=0.0001;
    console.log(output);
}
else
console.log(output);
  
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