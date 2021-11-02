function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
   input=input[1].trim().split(" ").map(Number);
   let arr=input;
   mergersort(input,0,arr.length-1);
   console.log(arr.join(" "));
   function mergersort(arr,left,right){
       if(left<right){
           let mid=Math.floor((left+right)/2);
           mergersort(arr,left,mid);
           mergersort(arr,mid+1,right);
           merge(left,mid,right);
       }
       else return;
   }
      function merge(left,mid,right){
       let templeft=[];
       let tempright=[];
       for(let i=left;i<=mid;i++){
           templeft.push(arr[i]);
       
       }
       for(let i=mid+1;i<=right;i++){
        tempright.push(arr[i]);
        
    }

        let thirdarr=[];
        let i=0;
        let j=0;
        while((i+j)<(tempright.length+ templeft.length)){
            if(i==templeft.length){
                thirdarr.push(tempright[j]);
                j++;
            }else
            if(j==tempright.length){
                thirdarr.push(templeft[i]);
                i++;
            }else{
              if(tempright[j]>=templeft[i]){
                thirdarr.push(templeft[i]);
                i++;
            }
           else {
                thirdarr.push(tempright[j]);
                j++;
            }

            }
            
             
        }
        let tempindex=0
        for(let i=left;i<=right;i++){
            arr[i]=thirdarr[tempindex];
            tempindex++;
        }
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