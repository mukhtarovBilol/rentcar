const option = document.querySelectorAll(".option");
const headerSelect = document.querySelector(".header__info-select");
const headerSelectAirport = document.querySelector(".header__info-selectAirport");
const headerSelectValue3 = document.querySelector(".header__info-selectValue3");
const headerSelectValue4 = document.querySelector(".header__info-selectValue4");
const headerSelectValue5 = document.querySelector(".header__info-selectValue5");
const headerSelectValue6 = document.querySelector(".header__info-selectValue6");
const icon = document.querySelectorAll(".question__card-icon");
const answer = document.querySelectorAll(".question__answer");

headerSelect.addEventListener("change", function () {
    if (this.value == "value2") {
        headerSelectAirport.classList.toggle("active")
        headerSelectValue3.classList.remove("active")
        headerSelectValue4.classList.remove("active")
        headerSelectValue5.classList.remove("active")
        headerSelectValue6.classList.remove("active")
    }else if (this.value == "value3") {
        headerSelectValue3.classList.toggle("active")
        headerSelectAirport.classList.remove("active")
        headerSelectValue4.classList.remove("active")
        headerSelectValue5.classList.remove("active")
        headerSelectValue6.classList.remove("active")
    }else if (this.value == "value4") {
        headerSelectValue4.classList.add("active")
        headerSelectValue3.classList.remove("active")
        headerSelectAirport.classList.remove("active")
        headerSelectValue5.classList.remove("active")
        headerSelectValue6.classList.remove("active")
    }else if (this.value == "value5") {
        headerSelectValue5.classList.add("active")
        headerSelectAirport.classList.remove("active")
        headerSelectValue3.classList.remove("active")
        headerSelectValue4.classList.remove("active")
        headerSelectValue6.classList.remove("active")
    }else if (this.value == "value6") {
        headerSelectValue6.classList.add("active")
        headerSelectAirport.classList.remove("active")
        headerSelectValue3.classList.remove("active")
        headerSelectValue4.classList.remove("active")
        headerSelectValue5.classList.remove("active")
    }
})

let date = new Date()
let year = date.getFullYear();
let month = date.getMonth() + 1;
let todayDay = String(date.getDay()).padStart(2, '0');
let datePattern = todayDay + '.' + month + '.' + year
const headerInput = document.querySelector(".header__info-input").value = datePattern
const headerInput2 = document.querySelector(".header__info-input2")


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


// var params = {
//     name: document.querySelector("#name").value,
//     message: document.querySelector("#message").value,
//     date: document.querySelector("#date").value
// };

// function sendMail(){
//         if (document.querySelector(".header__info-name").value !== '' && document.querySelector(".header__info-number").value !=='') {     
//         (function(){
//             emailjs.init("gaVbQy_bCrOGZXTtf")   
//         })();

//         var serviceID = "service_1xyqmdu";
//         var templateID = "template_tgol57n";
    
//         emailjs.send(serviceID, templateID, params)
//         .then( res => {
//             alert("Доставлено, скоро с вами свяжутся")
//             // document.querySelector("#name").value = ''
//             // document.querySelector("#message").value = ''
//             // document
//         })
//         .catch();
//     }
// }