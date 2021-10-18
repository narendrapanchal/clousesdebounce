let container=document.getElementById("container");
   function showData(){

        let keyWord=document.getElementById("keyWord").value;
        fetch(`http://newsapi.org/v2/everything?q=${keyWord}&sortBy=popularity&apiKey=4d5f15c9aea74c63aa7af0d544d80054`)
        .then(res=>{
            return res.json();
        })
        .then(res=>{
            console.log(res.articles);
            appendData(res.articles);
        })
        .catch(e=>{
            console.log(e);
        })
    }
    function appendData(data){
        data.forEach(element => {
            
        });
    }
    
function appendData(data){
   container.innerHTML=null;
   data.forEach(element => {
       console.log(element);
       let divImage=document.createElement("div");
       let divHeadings=document.createElement("div");
       let image=document.createElement("img");
       let headings=document.createElement("h3");
       let author=document.createElement("h4");
       let publishedAt=document.createElement("h5");
       author.textContent=element.author;
       publishedAt.textContent=element.publishedAt;
       headings.textContent=element.title;
       image.src=element.urlToImage;
       divHeadings.append(headings,author,publishedAt);
       divImage.append(image,divHeadings);
       divImage.onclick= function(event){
           createlocalData(element);
       }
       container.append(divImage);

   });
}
function createlocalData(element){
    if(localStorage.getItem("localnews")==null){
        localStorage.setItem("localnews",JSON.stringify(element));
    }else{
        localStorage.setItem("localnews",JSON.stringify(element));
    }
    window.open("news.html");
}