var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });

// check

const checkbox = document.querySelectorAll(".checkbox");
const checkbox2 = document.querySelector(".checkbox2")
const morePrice = document.querySelector(".more__price");
const moreInfoPrice = document.querySelectorAll(".more__info-price")
const sit = document.querySelector(".sit");
const animals = document.querySelector(".animals");
const drive = document.querySelector(".drive");
const returned = document.querySelector(".return")

let CommonPrice = Number(morePrice.innerHTML)

checkbox2.addEventListener("click", function () {
    checkbox2.classList.toggle("active")
})

for (let i = 0; i < checkbox.length; i++) {
    checkbox[i].addEventListener("click", function () {
        checkbox[i].classList.toggle("active")
        // returned.classList.toggle("active")
        console.log(i);
        if (checkbox[0].classList == 'checkbox active') {
            sit.classList.toggle('active')
        }else {
            sit.classList.remove("active")
        }

        if (checkbox[1].classList == 'checkbox active') {
            animals.classList.add("active")
        }else {
            animals.classList.remove("active")
        }
        
        if (checkbox[2].classList == 'checkbox active') {
            drive.classList.add("active")
        }else {
            drive.classList.remove("active")
        }

        if (checkbox[i].classList == 'checkbox active') {
            let price = Number(moreInfoPrice[i].getAttribute("data-src"))
            // console.log(moreInfoPrice[i].getAttribute("data-src"));
            CommonPrice = CommonPrice + price
            // console.log(a);
            morePrice.innerHTML = CommonPrice
        }else {
            let price = Number(moreInfoPrice[i].getAttribute("data-src"))
            CommonPrice = CommonPrice - price
            morePrice.innerHTML = CommonPrice
        }
    })
}

// check

// date

const headerInfoInput = document.querySelector(".header__info-input");
const headerInfoInput2 = document.querySelector(".header__info-input2")
const headerInfoDataSelect = document.querySelector(".header__info-date-select");
const select2 = document.querySelector(".select2");
const select3 = document.querySelector(".select3");
const select4 = document.querySelector(".select4");
const headerInfoSelect = document.querySelector(".header__info-select");
const headerInfoSelectAirport = document.querySelector(".header__info-selectAirport")
const headerSelectValue3 = document.querySelector(".header__info-selectValue3");
const headerSelectValue4 = document.querySelector(".header__info-selectValue4");
const headerSelectValue5 = document.querySelector(".header__info-selectValue5");
const headerSelectValue6 = document.querySelector(".header__info-selectValue6");

// дата получения
var getcar = ''
headerInfoInput.addEventListener("change", function () {
    // console.log(headerInfoInput.value);
    getcar = headerInfoInput.value
})
// дата получения

// дата возврата
var comeback = ''
headerInfoInput2.addEventListener("change", function () {
    // console.log(headerInfoInput2.value);
    comeback = headerInfoInput2.value
})
// дата возврата

// время получение
var time = ''
headerInfoDataSelect.addEventListener("change", function () {
    // console.log(headerInfoDataSelect.value);
    time = headerInfoDataSelect.value
})
 
// время получение

// минута получение
var minute = '00'
select2.addEventListener("change", function () {
     minute = select2.value
    // console.log(select2.value);
})
// минута получение

// время 
var backtime = '' 
select3.addEventListener("change", function () {
    // console.log(select3.value);
    backtime = select3.value
})
// время 

// минута 
var backminute = '00'
select4.addEventListener("change", function () {
    // console.log(select4.value);
    backminute = select4.value
})
// минута 

let getPlace = 'Аэрапорт'
headerInfoSelect.addEventListener("change", function () {
    getPlace = headerInfoSelect.value
})
// console.log(getPlace);

let getPlaceAdress = ''
headerInfoSelectAirport.addEventListener("change", function () {
    // console.log(headerInfoSelectAirport.value);
    getPlaceAdress = headerInfoSelectAirport.value
})

headerSelectValue3.addEventListener("change", function () {
    // console.log(headerSelectValue3.value);
    getPlaceAdress = headerSelectValue3.value
})

headerSelectValue4.addEventListener("change", function () {
    // console.log(headerSelectValue4.value);
    getPlaceAdress = headerSelectValue4.value
})

headerSelectValue5.addEventListener("change", function () {
    // console.log(headerSelectValue5.value);
    getPlaceAdress = headerSelectValue5.value
})

headerSelectValue6.addEventListener("change", function () {
    // console.log(headerSelectValue6.value);
    getPlaceAdress = headerSelectValue6.value
})


headerInfoSelect.addEventListener("change", function () {
    if (this.value == "Аэрапорт") {
        headerInfoSelectAirport.classList.toggle("active")
        headerSelectValue3.classList.remove("active")
        headerSelectValue4.classList.remove("active")
        headerSelectValue5.classList.remove("active")
        headerSelectValue6.classList.remove("active")
    }else if (this.value == "Ж/Д Вокзал") {
        headerSelectValue3.classList.toggle("active")
        headerInfoSelectAirport.classList.remove("active")
        headerSelectValue4.classList.remove("active")
        headerSelectValue5.classList.remove("active")
        headerSelectValue6.classList.remove("active")
    }else if (this.value == "Авто Вокзал") {
        headerSelectValue4.classList.add("active")
        headerSelectValue3.classList.remove("active")
        headerInfoSelectAirport.classList.remove("active")
        headerSelectValue5.classList.remove("active")
        headerSelectValue6.classList.remove("active")
    }else if (this.value == "Пункт проката") {
        headerSelectValue5.classList.add("active")
        headerInfoSelectAirport.classList.remove("active")
        headerSelectValue3.classList.remove("active")
        headerSelectValue4.classList.remove("active")
        headerSelectValue6.classList.remove("active")
    }else if (this.value == "Станция метро") {
        headerSelectValue6.classList.add("active")
        headerInfoSelectAirport.classList.remove("active")
        headerSelectValue3.classList.remove("active")
        headerSelectValue4.classList.remove("active")
        headerSelectValue5.classList.remove("active")
    }
})

  // Открыть модальное окно
// document.getElementById("open-modal-btn").addEventListener("click", function() {
//     document.getElementById("my-modal").classList.add("open")
// })

const headerLink = document.querySelector(".header__info-link")

headerLink.addEventListener("click", function () {
    document.getElementById("my-modal").classList.add("open")
})

// Закрыть модальное окно
document.getElementById("close-my-modal-btn").addEventListener("click", function() {
    document.getElementById("my-modal").classList.remove("open")
})

// Закрыть модальное окно при нажатии на Esc
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("my-modal").classList.remove("open")
    }
});

// Закрыть модальное окно при клике вне его
document.querySelector("#my-modal .modal__box").addEventListener('click', event => {
    event._isClickWithInModal = true;
});
document.getElementById("my-modal").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});

function sendMail(){
        if (document.querySelector("#name").value !== '' && document.querySelector("#message").value !=='') {     
        (function(){
            emailjs.init("gaVbQy_bCrOGZXTtf")   
        })();

        if (sit.classList == 'more__info sit active') {
            var childrenSitting = "Да"
        }else {
            childrenSitting = "Нет"
        }

        if (animals.classList == 'more__info animals active') {
            var animal = "Да"
        }else {
            animal = "Нет"
        }

        if (drive.classList == 'more__info drive active') {
            var driven = "Да"
        }else {
            driven = "Нет"
        }

        if (checkbox2.classList == "checkbox2 active") {
            var returned = "Да"
        } else {
            returned = "Нет"
        }

        var params = {
            senderName: document.querySelector("#name").value,
            name: document.querySelector("#name").value + ", Дата и время получение машины: " + getcar + ' ' + time + ':' + minute + ', Дата и время возврата: ' + comeback + ' ' + backtime + ' : ' + backminute + ', Возврат авто в другом месте: ' + returned, 
            message: document.querySelector("#message").value + ', Нужен ли кресла: ' + childrenSitting + ', Нужен ли гамак для животных: ' + animal + ', Нужен ли Доп.водитель: ' + driven + ', Место получение авто: ' + getPlace + ' ' + getPlaceAdress
        };


        var serviceID = "service_1xyqmdu";
        var templateID = "template_tgol57n";
    
        emailjs.send(serviceID, templateID, params)
        .then( res => {
            alert("Доставлено, скоро с вами свяжутся")
            document.querySelector("#name").value = ''
            document.querySelector("#message").value = ''
            document.querySelector("#date").value = ''
        })
        .catch();
    }
}
