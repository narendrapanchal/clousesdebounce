
function output(matrix){
  let validcheck=false;
  let outputsudoku=[];
   solve(matrix,0,-1);
   function changebale(sudokumatrix,sudokurow,sudokucol,givennum){
       for(let x=0;x<9;x++){
           if(sudokumatrix[sudokurow][x]==givennum)
           return false;
       }
       for(let x=0;x<9;x++){
         if(sudokumatrix[x][sudokucol]==givennum)
         return false;
     }
     let temprow=Math.floor(sudokurow/3) *3;
     let tempcol=Math.floor(sudokucol/3) *3;
     for(let x=temprow;x<=temprow+2;x++){
         for(let y=tempcol;y<=tempcol+2;y++){
             if(sudokumatrix[x][y]==givennum)
             return false;
         }
     }
     return true;
   }
   function solve(arr2d,row,col){
     
     if(row>=8){
       if(col>=8){
         for(let i=0;i<9;i++){
             let rowarr=[];
           for(let j=0;j<9;j++){
           let onenumber=arr2d[i][j];
           rowarr.push(onenumber);
           }
           outputsudoku.push(rowarr);
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
 
 if(validcheck===false)
  return -1;
 else{
     return outputsudoku;
 }


}



//  let input=`0 4 0 0 0 0 1 7 9
// 0 0 2 0 0 8 0 5 4
// 0 0 6 0 0 5 0 0 8
// 0 8 0 0 7 0 9 1 0
// 0 5 0 0 9 0 0 3 0
// 0 1 9 0 6 0 0 4 0
// 3 0 0 4 0 0 7 0 0
// 5 7 0 1 0 0 2 0 0
// 9 2 8 0 0 0 0 6 0`
//  input=input.split("\n");
//  for(let i=0;i<input.length;i++){
//      input[i]=input[i].split(" ").map(Number);
//  }
//  console.log(output(input));
 
 module.exports ={output};