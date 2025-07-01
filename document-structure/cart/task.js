
if (localStorage.getItem("one")) {
    document.querySelector(".cart").outerHTML = localStorage.getItem("one");
}
let incermanColl = document.querySelectorAll(".product__quantity-control_inc");
let decrimentColl = document.querySelectorAll(".product__quantity-control_dec");
let products = document.querySelectorAll(".product");
let cart = document.querySelector(".cart__products");

document.querySelectorAll(".remove_cart").forEach((x) => {
    x.addEventListener("click", (event) => {
        if(event.target.classList.contains("remove_cart"))
{
        console.log(event.currentTarget.closest(".cart__product"));
        event.currentTarget.closest(".cart__product").remove();
        localStorage.setItem("one", document.querySelector(".cart").outerHTML);
}})

});





products.forEach((product) => product.addEventListener("click", (el) => {

    let cartValue = 0;
    let incerman = product.querySelector(".product__quantity-control_inc");
    let decriment = product.querySelector(".product__quantity-control_dec");
    let button = product.querySelector(".product__add");


    let value = product.querySelector(".product__quantity-value");


    if (el.target === incerman) {
        value.innerHTML++;
    }
    else if (el.target === decriment) {
        if (value.innerHTML > 0) {
            value.innerHTML--;
        }
    } else if (el.target === button) {

        let cartProducts = document.querySelectorAll(".cart__product");
        cartProducts.forEach((cart) => {

            if (cart.dataset.id === product.dataset.id) {
                cartValue = cart.querySelector(".cart__product-count").innerHTML;
                cart.remove();
            }
        })

        if (value.innerHTML >= 0) {
            let productIncart = document.createElement("div");
            let endValue = +cartValue + +value.innerHTML;
            cart.appendChild(productIncart);
            productIncart.outerHTML = `<div class="cart__product" data-id="${product.dataset.id}">
                <img class="cart__product-image" src="${product.querySelector("img").getAttribute("src")}">
                <div class="cart__product-count">${endValue}</div><div class ="remove_cart">Удалить</div>
            </div>`;
            value.innerHTML = 1;


            localStorage.setItem("one", document.querySelector(".cart").outerHTML);
        }


    }
   
    document.querySelectorAll(".remove_cart").forEach((x) => {
    x.addEventListener("click", (event) => {
        if(event.target.classList.contains("remove_cart"))
{
        console.log(event.currentTarget.closest(".cart__product"));
        event.currentTarget.closest(".cart__product").remove();
        localStorage.setItem("one", document.querySelector(".cart").outerHTML);
}})

});


}))

