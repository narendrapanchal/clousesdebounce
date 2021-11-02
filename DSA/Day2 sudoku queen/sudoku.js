function runProgram(input) {
  // Write code here
  input=input.trim().split("\n");
  for(let i=0;i<9;i++){
      input[i]=input[i].trim().split(" ").map(Number);
  }
output(input);

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

function output(matrix){

   let validcheck=false;
    solve(matrix,0,-1);
    function solve(arr2d,row,col){
      
      if(row>=8){
        if(col>=8){
          for(let i=0;i<9;i++){
            console.log(arr2d[i].join(" "));
        }
        validcheck=true;
          return ;
        }
     }

        if(col==8){
            row++;
            col=0;
        }else {
            col++;
        }
         
        if(arr2d[row][col]!=0){
            solve(arr2d,row,col);
        }else{
           
            for(let i=1;i<=9;i++){
              
                if(changebale(arr2d,row,col,i)){
                arr2d[row][col]=i;
                solve(arr2d,row,col);
                arr2d[row][col]=0;
        
          
            }
            }
            
 
        
      }
    }
  
  if(validcheck==false)
  console.log(-1);


}
function changebale(matrix,row,col,num){
    for(let i=0;i<9;i++){
        if(matrix[row][i]==num)
        return false;
    }
    for(let i=0;i<9;i++){
      if(matrix[i][col]==num)
      return false;
  }
  let temprow=Math.floor(row/3) *3;
  let tempcol=Math.floor(col/3) *3;
  for(let i=temprow;i<=temprow+2;i++){
      for(let j=tempcol;j<=tempcol+2;j++){
          if(matrix[i][j]==num)
          return false;
      }
  }
  return true;
}