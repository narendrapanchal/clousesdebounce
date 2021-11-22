function runProgram(input) {
    // Write code here
   input=input.trim().split("\n");
   let [test,k]=input[0].trim().split(" ").map(Number)

   
       let arr=input[1].trim().split(" ").map(Number); 
          var ans=-1;
       output(0,test-1);

      function output(left,right){
        let mid=Math.floor((right+left)/2);
        if(left<right){
        if(arr[left]>=arr[right]){
            if(arr[mid]>arr[right]){
                ans=right;
                output(mid+1,right);
            }else{
                ans=mid;
                output(left,mid);
            }
        }
        else{
            ans=left;
        } 
      }
     }
     let out=-1;
     let left=ans;
     let right=test-1;
     findright(left,right);
     function findright(l,r){
      let mid=Math.floor((r+l)/2);
      if(arr[mid]==k){
        out=mid;
        return ;
      }
      if(l<r){
        if(arr[mid]>k){
            findright(l,mid-1);
        }else{
            findright(mid+1,r);
        }
      }
     
     }
      right=ans;
      left=0;
     findleft(left,right);
     function findleft(l,r){
      let mid=Math.floor((r+l)/2);
      if(arr[mid]==k){
        out=mid;
        return ;
      }
      if(l<r){
        if(arr[mid]>k){
            findleft(l,mid-1);
        }else{
            findleft(mid+1,r);
        }
      }
     
     }
     console.l(mid);

   
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
 