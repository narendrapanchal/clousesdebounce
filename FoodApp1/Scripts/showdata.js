async function getdata(url){
    let res=await fetch(url);
    res=await res.json();
    return res.meals;
}
function append(data,items){
    items.innerHTML=null;
    data.forEach(({strMeal,strMealThumb}) => {
        let div=document.createElement("div");
        let img=document.createElement("img");
        let name=document.createElement("h4");
        name.textContent=strMeal;
        img.src=strMealThumb;
        div.append(img,name);
        items.append(div);
    })
}

export  {getdata,append};