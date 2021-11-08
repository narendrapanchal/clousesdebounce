function tax(income,saving){
    let totaltax=0;
    if(income>1000000){
        totaltax=Math.ceil(3*income/10);
        totaltax+=Math.ceil(saving/10);
    }else if(income>=500000){
        totaltax=Math.ceil(income/10);
        totaltax+=Math.ceil(3*saving/10);
    }else if(income>250000){
        totaltax=Math.ceil(income/20);
        totaltax+=Math.ceil(saving/2);
    }
    return totaltax;
}
module.exports ={tax};