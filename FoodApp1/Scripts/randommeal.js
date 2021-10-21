async function randomMeal(url){
     let res=await fetch(url);
     let data=await res.json();
     return data;
}
function append(data,container){
     let strArea=document.createElement("h3");
     let strCategory=document.createElement("h2");
     let strMeal=document.createElement("h1");
     let strInstructions=document.createElement("p");
     let strMealThumb=document.createElement("img");
     strInstructions.textContent=data.strInstructions;
     strCategory.textContent=data.strCategory;
     strArea.textContent=data.strArea;
     strMealThumb.src=data.strMealThumb;
     strMeal.textContent=data.strMeal;
     container.append(strMeal,strArea,strMealThumb,strCategory,strInstructions);

}
export {randomMeal,append};