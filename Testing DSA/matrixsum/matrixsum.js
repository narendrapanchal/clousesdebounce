 function add(matrix){
    
        matrix=matrix.trim().split("\n");
        for(let i=0;i<matrix.length;i++){
            matrix[i]=matrix[i].trim().split(" ").map(Number);
        }
        let sum=0;          
        for(let i=0;i<matrix.length;i++){
            for(let j=0;j<matrix[i].length;j++){
                sum+=matrix[i][j];
                
                
            }
        }
        
        return sum;
     
}
module.exports ={add};