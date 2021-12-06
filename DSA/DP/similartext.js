function runProgram(input) {
    // Write code here
   input=input.trim().split("\n");
   output(input[0],input[1]);
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
  function output(s1,s2){
      let obj1={};
      let obj2={};
      find1("",0);
      function find1(str,n){
          obj1[str]=1;
          for(let i=n;i<s1.length;i++){
              str+=s1[i];
              find1(str,i+1);
          }
      }
       find2("",0);
       function find2(str,n){
           obj2[str]=1;
           for(let i=n;i<s1.length;i++){
               str+=s2[i];
               find2(str,i+1);
           }
       }
       let arr1=Object.keys(obj1);
       let arr2=Object.keys(obj2);
       let length=0;
       for(k in obj1){
           if(obj2[k]!=null){
               if(k.length>length){
                   length=k.length;
               }
           }
       }
       console.log(length,Object.keys(obj1).join(" "),Object.keys(obj2).join(" "));

  }