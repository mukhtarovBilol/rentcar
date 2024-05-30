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
const checkbox = document.querySelector(".checkbox");
const checkbox2 = document.querySelector(".checkbox2")
const morePrice = document.querySelector(".more__price");
const moreInfoPrice = document.querySelector(".more__info-price")
const sit = document.querySelector(".sit");
const animals = document.querySelector(".animals");
const drive = document.querySelector(".drive");
const returned = document.querySelector(".return")
const button = document.querySelector(".button")
const headerSelectValue7 = document.querySelector(".header__info-selectValue7");
const headerSelectValue8 = document.querySelector(".header__info-selectValue8");
const getcars = document.querySelectorAll(".getcars");
const getcars2 = document.querySelectorAll(".getcars2");
const number1 = document.querySelector(".number1")
const number2 = document.querySelector(".number2")
const number3 = document.querySelector(".number3")
let CommonPrice = Number(morePrice?.innerHTML)
let allPrice = Number(morePrice?.innerHTML)
var s = 0 //это место получение офис и т.д(1)
var s2 = 0 // это место получение офис и т.д(2)
const headerInfoInput = document.querySelector(".header__info-input");
const headerInfoInput2 = document.querySelector(".header__info-input2")
const headerInfoDataSelect = document.querySelector(".header__info-date-select");
const select2 = document.querySelector(".select2");
const select3 = document.querySelector(".select3");
const select4 = document.querySelector(".select4");
const headerInfoSelect = document.querySelector(".header__info-selectValue9");

// count passanger
var countPassanger = '0'
headerInfoSelect?.addEventListener("input", function () {
    // console.log(headerInfoSelect.value);
    countPassanger = headerInfoSelect.value
})
// count passanger

// дата получения
var getcar = ""
headerInfoInput.addEventListener("change", function () {
    // console.log(headerInfoInput.value);
    getcar = headerInfoInput.value
})

// дата получения

// дата возврата
var comeback = '00'
headerInfoInput2.addEventListener("change", function () {
    // console.log(headerInfoInput2.value);
    comeback = headerInfoInput2.value
})

// дата возврата

// время получение
// var time = '00'
// headerInfoDataSelect.addEventListener("change", function () {
//     // console.log(headerInfoDataSelect.value);
//     time = headerInfoDataSelect.value
// })

// время получение

// минута получение
// var minute = '00'
// select2.addEventListener("change", function () {
//     minute = select2.value
//     // console.log(select2.value);
// })
// минута получение

// время 
// var backtime = ''
// select3.addEventListener("change", function () {
//     // console.log(select3.value);
//     backtime = select3.value
// })
// время 

// минута 
// var backminute = '00'
// select4.addEventListener("change", function () {
//     // console.log(select4.value);
//     backminute = select4.value
// })
// минута

// date

var startInputHours = 0
var endInputHours = 0

document.getElementById("start").addEventListener("change", function () {
    var startInput = document.getElementById("start").value.split(":")
    startInputHours = Number(startInput[0]) + 3
})

document.getElementById("end").addEventListener("change", function () {
    var endInput = document.getElementById("end").value.split(":")
    endInputHours = Number(endInput[0])
    calculate()
})

// Устанавливаем сегодняшнюю дату как минимальную для получения и возврата
var today = new Date().toISOString().split('T')[0];
document.getElementById("start_date").min = today;
document.getElementById("end_date").min = today;

function calculate() {
    var startDate = new Date(document.getElementById("start_date").value);
    var endDate = new Date(document.getElementById("end_date").value);

    // Количество дней аренды
    var differenceInTime = endDate.getTime() - startDate.getTime();
    var differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24)); // округляем вверх, чтобы учитывать день возврата
    
    if (startInputHours <= endInputHours) {
        differenceInDays++
       calculateRentalCost(differenceInDays)
    }else {
        calculateRentalCost(differenceInDays)
    } 
}

// При изменении даты получения автоматически обновляем минимальную дату возврата и активируем элемент выбора даты возврата
document.getElementById("start_date").addEventListener("change", function() {
    var startDate = new Date(document.getElementById("start_date").value);
    var nextDay = new Date(startDate);
    nextDay.setDate(startDate.getDate() + 2);
    var minReturnDate = nextDay.toISOString().split('T')[0];
    document.getElementById("end_date").min = minReturnDate;
    document.getElementById("end_date").disabled = false; // Активируем элемент выбора даты возврата
});

// При изменении даты возврата автоматически пересчитываем стоимость аренды
document.getElementById("end_date").addEventListener("change", function () {
    document.getElementById("end").disabled = false; // Активируем элемент выбора времени возврата
});

var prices = 0;
var innerNumber1 = Number(number1?.innerHTML) 
var innerNumber2 = Number(number2?.innerHTML) 
var innerNumber3 = Number(number3?.innerHTML)

function calculateRentalCost(days) {
    if (days >= 2 && days <= 7) {
        // console.log(days);
        prices = innerNumber1 * days
        CommonPrice += s
        CommonPrice += s2
        if (morePrice) {
            morePrice.innerHTML = CommonPrice += prices;
        }
        CommonPrice -= s
        CommonPrice -= s2
        CommonPrice -= prices
    } else if (days >= 8 && days <= 20) {
        // console.log(days);
        CommonPrice += s2
        CommonPrice += s
        prices = innerNumber2 * days
        if (morePrice) {
            morePrice.innerHTML = CommonPrice += prices;
        }
        CommonPrice -= s2
        CommonPrice -= s
        CommonPrice -= prices
    } else {
        // console.log(days);
        CommonPrice += s2
        CommonPrice += s
        prices = innerNumber3 * days
        if (morePrice) {
            morePrice.innerHTML = CommonPrice += prices;
        }
        CommonPrice -= s
        CommonPrice -= s2
        CommonPrice -= prices
    }
}

// date

var getsCars = "Офис"
headerSelectValue7?.addEventListener("change", function () {
    getsCars = headerSelectValue7.value
    if (headerSelectValue7.value == 'otel') {
        s = 10
        CommonPrice += prices
        CommonPrice += s2
        morePrice.innerHTML = CommonPrice += s
        CommonPrice -= s
        CommonPrice -= s2
        CommonPrice -= prices
    } else if (headerSelectValue7.value == 'airport2') {
        s = 25
        CommonPrice += prices
        CommonPrice += s2
        morePrice.innerHTML = CommonPrice += s
        CommonPrice -= s
        CommonPrice -= s2
        CommonPrice -= prices
    } else {
        s = 0
        CommonPrice += prices
        CommonPrice += s2
        morePrice.innerHTML = CommonPrice -= s
        CommonPrice -= prices
        CommonPrice -= s2
    }
})


var backCars = 'Офис'
headerSelectValue8?.addEventListener("change", function () {
    backCars = headerSelectValue8.value
    if (headerSelectValue8.value == 'otel') {
        s2 = 10
        CommonPrice += prices
        CommonPrice += s
        morePrice.innerHTML = CommonPrice += s2
        CommonPrice -= s2
        CommonPrice -= s
        CommonPrice -= prices
    } else if (headerSelectValue8.value == 'airaport2') {
        s2 = 25
        CommonPrice += prices
        CommonPrice += s
        morePrice.innerHTML = CommonPrice += s2
        CommonPrice -= s2
        CommonPrice -= s
        CommonPrice -= prices
    } else {
        s2 = 0
        CommonPrice += prices
        CommonPrice += s
        morePrice.innerHTML = CommonPrice -= s2
        CommonPrice -= prices
        CommonPrice -= s
    }
})

checkbox?.addEventListener("click", function () {
    checkbox.classList.toggle("active")
    if (checkbox?.classList == 'checkbox active') {
        let price = Number(moreInfoPrice.innerHTML)
        CommonPrice += s
        CommonPrice += prices
        CommonPrice += s2
        morePrice.innerHTML = CommonPrice += price
        CommonPrice -= s
        CommonPrice -= s2
        CommonPrice -= prices
        allPrice = CommonPrice
    } else {
        CommonPrice += s
        CommonPrice += s2
        CommonPrice += prices
        let price = Number(moreInfoPrice.innerHTML)
        morePrice.innerHTML = CommonPrice -= price
        CommonPrice -= s
        CommonPrice -= s2
        CommonPrice -= prices
        allPrice = CommonPrice
    }
})

// check

 // Функция для автоматического добавления знаков "-" в номере телефона
 const formNumber = document.querySelector(".form__number")
 var phoneNumber = 0
 formNumber.addEventListener("input", function() {
    phoneNumber = this.value;
    // Удаляем все символы, кроме цифр
    phoneNumber = phoneNumber.replace(/\D/g, '');
    // Ограничиваем длину номера до 10 символов (XXXXXXXXXX)
    phoneNumber = phoneNumber.substring(0, 9);
    // Форматируем номер в требуемый вид (XX) XXX-XX-XX
    if (phoneNumber.length > 2) {
        phoneNumber = '(' + phoneNumber.substring(0, 2) + ') ' + phoneNumber.substring(2);
    }
    if (phoneNumber.length > 8) {
        phoneNumber = phoneNumber.substring(0, 8) + '-' + phoneNumber.substring(8);
    }
    if (phoneNumber.length > 11) {
        phoneNumber = phoneNumber.substring(0, 11) + '-' + phoneNumber.substring(11);
    }
    this.value = phoneNumber;
});
// date

const headerLink = document.querySelector(".header__info-link")

headerLink.addEventListener("click", function () {
    document.getElementById("my-modal").classList.add("open")
})

// Закрыть модальное окно
document.getElementById("close-my-modal-btn").addEventListener("click", function () {
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

function sendMail() {
    if (document.querySelector("#name").value !== '' && document.querySelector("#message").value !== '') {
        (function () {
            emailjs.init("ycbnej7QH72zg6TGT")
        })();

        if (sit?.classList == 'more__info sit active') {
            var childrenSitting = "Да"
        } else {
            childrenSitting = "Нет"
        }

        if (phoneNumber.length == 14) {
            var params = {
                name: document.querySelector("#name").value + ", Дата и время получение машины: " + getcar + ' ' + time + ': ' + minute + ', Дата и время возврата: ' + comeback + ' ' + backtime + ': ' + backminute,
                message: "+994 " + phoneNumber + ', Нужен ли кресла: ' + childrenSitting + ', Место получение машины: ' + getsCars + ', Место возврата авто: ' + backCars + ', Количество пассажиров: ' + countPassanger + ", Итого: " + morePrice.innerHTML
            };
        }else {
            formNumber.style.border = "2px solid red"
        }

        var serviceID = "service_ajn9ixc";
        var templateID = "template_bge6w0q";

        emailjs.send(serviceID, templateID, params)
            .then(res => {
                alert("Доставлено, скоро с вами свяжутся")
                document.querySelector("#name").value = ''
                params.message = '' 
            })
        .catch();
    }
}
