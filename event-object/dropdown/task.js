let dropList = document.getElementsByClassName("dropdown__list");
let dropValue = document.getElementsByClassName("dropdown__value");
let dropItemColl = document.getElementsByClassName("dropdown__item");
let linkColl = document.getElementsByClassName("dropdown__link");
 



 for(let o = 0; o < dropValue.length; o++){
dropValue[o].addEventListener("click", () => {
    dropList[o].classList.toggle("dropdown__list_active");
});
};

[...dropItemColl].forEach((elem)=> elem.addEventListener("click",(e)=> {
   
    e.preventDefault();
    [...dropValue].forEach((el,index,arr)=> 
        {   
            console.log(arr);
            [...dropList].forEach((e) => e.classList.remove("dropdown__list_active"));
            
        });
    
}));


