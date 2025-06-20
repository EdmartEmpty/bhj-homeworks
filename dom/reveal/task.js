let revalColl = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {


    revalColl.forEach((e) => {

        e.getBoundingClientRect().top < window.innerHeight && e.getBoundingClientRect().bottom > 0 ? e.classList.add("reveal_active") : e.classList.remove("reveal_active");

    });

})