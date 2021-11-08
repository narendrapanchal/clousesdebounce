function validation(input){
    let caps="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let small="abcdefghijklmnopqrstuvwxyz";
    let special=`!@#$%^&*(),.<>/';:"][{}\|?`;
    let number="1234567890";
    let obj={};
    let objcaps={};
    for(let i=0;i<caps.length;i++){
        objcaps[caps[i]]=1;
    }
    let objsmall={};
    for(let i=0;i<caps.length;i++){
        objsmall[small[i]]=1;
    }
    let objspecial={};
    for(let i=0;i<special.length;i++){
        objspecial[special[i]]=1;
    }
    let objnumber={};
    for(let i=0;i<number.length;i++){
        objnumber[number[i]]=1;
    }
    if(input.length<6){
        return "Length is too short";
    }
    let check=false;
    let error="";
    for(let i=0;i<input.length;i++){
        if(objcaps[input[i]]==1){
            check=true;
            break;
        }
    }
    if(check ==false){
        error="No capital later"
    }
    check=false;
    for(let i=0;i<input.length;i++){
        if(objsmall[input[i]]==1){
            check=true;
            break;
        }
    }
    if(check==false){
        if(error.length)
        error+=" No small later"
        else
        error="No small later"
    }

    check=false;
    for(let i=0;i<input.length;i++){
        if(objspecial[input[i]]==1){
            check=true;
            break;
        }
    }
    if(check == false){
        if(error.length)
        error+=" No special later"
        else
        error="No special later"
    }

    check=false;
    for(let i=0;i<input.length;i++){
        if(objnumber[input[i]]==1){
            check=true;
            break;
        }
    }
    if(check ==false){
        if(error.length)
        error+=" No number"
        else
        error="No number"
    }
    if(error.length)
    return error;
    return "Valid Password";

}
module.exports={validation};