const icon = document.querySelectorAll(".question__card-icon");
const answer = document.querySelectorAll(".question__answer");
const carsItem = document.querySelectorAll(".cars__item");
const tabsContentItem = document.querySelectorAll(".tabsContentItem");
const navBurger = document.querySelector(".nav__burger");
const navList = document.querySelector(".nav__list")
const navListHelper = document.querySelector(".nav__list-helper")
const navItem = document.querySelectorAll(".nav__item")


navBurger.addEventListener("click", function () {
    navList.classList.toggle("active")
    navBurger.classList.toggle("active")
})

navListHelper.addEventListener("click", function (){
    navList.classList.remove("active")
    navBurger.classList.remove("active")
})

for (let i = 0; i < navItem.length; i++) {
    navItem[i].addEventListener("click", function () {
        navList.classList.remove("active")
        navBurger.classList.remove("active")
    })
}

for (let i = 0; i < icon.length; i++) {
    icon[i].addEventListener("click", function () {
        answer[i].classList.toggle("active")
        if (icon[i].textContent == '+') {
            icon[i].textContent = '-'
        }else {
            icon[i].textContent = '+'
        }
    })
}

for (let i = 0; i < carsItem.length; i++) {
    carsItem[i].addEventListener("click", function () {
        for (let k = 0; k < carsItem.length; k++) {
            carsItem[k].classList.remove("active")
            tabsContentItem[k].classList.remove("active")
        }
        carsItem[i].classList.add("active")
        tabsContentItem[i].classList.add("active")
    })
}
