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

let CommonPrice = Number(morePrice?.innerHTML)
let allPrice = Number(morePrice?.innerHTML)
var s = 0
// checkbox2?.addEventListener("click", function () {
//     checkbox2.classList.toggle("ac8ive")
// })


// date

function calculate() {
    var startDate = new Date(document.getElementById("start_date").value);
    var endDate = new Date(document.getElementById("end_date").value);
    
    // Проверяем, если дата возврата не выбрана, прерываем функцию
    if (!endDate) return;
    
    // Проверяем, если дата получения позже даты возврата, выводим сообщение об ошибке
    if (startDate >= endDate) {
        alert("Пожалуйста, выберите корректные даты для получения и возврата.");
        return;
    }
    
    var differenceInTime = endDate.getTime() - startDate.getTime();
    var differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24)); // округляем вверх, чтобы учитывать день возврата
    
    if (differenceInDays < 1) {
        alert("Минимальный срок аренды составляет 1 день.");
        return;
    }
    
    var rentalCost = calculateRentalCost(differenceInDays);
}


var prices = 0;
function calculateRentalCost(days) {
    if (days >= 1 && days <= 2) {
        console.log(days);
        prices = 100 * days
        CommonPrice += s
        morePrice.innerHTML = CommonPrice += prices;
        CommonPrice -= s
        CommonPrice -= prices
    } else if (days >= 3 && days <= 5) {
        console.log(days);
        CommonPrice += s
        prices = 90 * days
        morePrice.innerHTML = CommonPrice += prices;
        CommonPrice -= s
        prices = 0
    } else if (days >= 6 && days <= 13) {
        console.log(days);
        CommonPrice += s
        prices = 80 * days 
        morePrice.innerHTML = CommonPrice += prices;
        CommonPrice -= s
        prices = 0
    } else if (days >= 14 && days <= 29) {
        console.log(days);
        CommonPrice += s
        prices = 70 * days
        morePrice.innerHTML = CommonPrice += prices;
        prices = 0
        CommonPrice -= s
    } else {
        console.log(days);
        CommonPrice += s
        prices = 60 * days
        morePrice.innerHTML = CommonPrice += prices;
        prices = 0
        CommonPrice -= s
    }
}


// Устанавливаем сегодняшнюю дату как минимальную для получения
document.getElementById("start_date").min = new Date().toISOString().split('T')[0];

// При изменении даты получения автоматически обновляем минимальную дату возврата
document.getElementById("start_date").addEventListener("change", function() {
    var startDate = new Date(document.getElementById("start_date").value);
    var nextDay = new Date(startDate);
    nextDay.setDate(startDate.getDate() + 1);
    var minReturnDate = nextDay.toISOString().split('T')[0];
    document.getElementById("end_date").min = minReturnDate;
});

// При изменении даты возврата автоматически пересчитываем стоимость аренды
document.getElementById("end_date").addEventListener("change", calculate);


// // Устанавливаем минимальную дату получения на сегодняшний день
// var today = new Date();
// var dd = String(today.getDate()).padStart(2, '0');
// var mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
// var yyyy = today.getFullYear();
// today = yyyy + '-' + mm + '-' + dd;
// document.getElementById("start_date").setAttribute("min", today);

// // Добавляем обработчик события при изменении даты получения
// document.getElementById("start_date").addEventListener("change", function() {
//     calculate(); // Вызываем функцию calculate при изменении даты получения
// });

// // Добавляем обработчик события при изменении даты возврата
// document.getElementById("end_date").addEventListener("change", function() {
//     calculate(); // Вызываем функцию calculate при изменении даты возврата
// });

// function calculate() {
//     var startDate = document.getElementById("start_date").value;
//     var endDate = document.getElementById("end_date").value;
    
//     // Проверяем, выбраны ли обе даты
//     if (startDate && endDate) {
//         startDate = new Date(startDate);
//         endDate = new Date(endDate);
        
//         // Проверяем, если дата получения позже даты возврата, меняем их местами
//         if (startDate > endDate) {
//             var temp = startDate;
//             startDate = endDate;
//             endDate = temp;
//             document.getElementById("start_date").value = startDate.toISOString().slice(0, 10);
//             document.getElementById("end_date").value = endDate.toISOString().slice(0, 10);
//         }
        
//         // Добавляем еще один день к дате получения
//         startDate.setDate(startDate.getDate() + 1);
        
//         var differenceInTime = endDate.getTime() - startDate.getTime();
//         var differenceInDays = differenceInTime / (1000 * 3600 * 24) + 1;

//         if (differenceInDays >= 0 && differenceInDays <= 2) {
//             rentalCost = differenceInDays * 100
//             CommonPrice += s
//             morePrice.innerHTML = CommonPrice += rentalCost
//             CommonPrice -= rentalCost
//         }else if (differenceInDays >= 2 && differenceInDays <= 5) {
//                 rentalCost = differenceInDays * 90
//                 morePrice.innerHTML = CommonPrice + rentalCost;
//         }else if (differenceInDays >= 5 && differenceInDays <= 13) {
//                 rentalCost = differenceInDays * 80
//                 morePrice.innerHTML = CommonPrice + rentalCost;
//         }else if (differenceInDays >= 13 && differenceInDays <= 29) {
//             rentalCost = differenceInDays * 70
//                 morePrice.innerHTML = CommonPrice + rentalCost;
//         }else if (differenceInDays >= 29) {
//             rentalCost = differenceInDays * 60
//             morePrice.innerHTML = CommonPrice += rentalCost;
//         }
//     }
// }

// date

var getsCars = "Офис"
headerSelectValue7.addEventListener("change", function () {
    getsCars = headerSelectValue7.value
    if (headerSelectValue7.value == 'otel') {
        s = 10
        CommonPrice += prices
        morePrice.innerHTML = CommonPrice += s 
        CommonPrice -= s
        CommonPrice -= prices
    }else if (headerSelectValue7.value == 'airport2') {
        s = 25
        CommonPrice += prices
        morePrice.innerHTML = CommonPrice += s
        CommonPrice -= s
        CommonPrice -= prices
    }else {
        s = 0
        CommonPrice += prices
        morePrice.innerHTML = CommonPrice -= s
        CommonPrice -= prices
    }
})

// headerSelectValue8.addEventListener("change", function () {
//     getsCars = headerSelectValue8.value
//     if (headerSelectValue8.value == 'otel') {
//         s = 10
//         morePrice.innerHTML = CommonPrice += 10
//         CommonPrice -= 10
//     }else if (headerSelectValue8.value == 'airport2') {
//         morePrice.innerHTML = CommonPrice += 25
//         CommonPrice -= 25
//         s = 25
//     }else {
//         s = 0
//         morePrice.innerHTML = allPrice
//     }
// })

// for (let i = 0; i < moreInfoPrice.length; i++) {
    checkbox.addEventListener("click", function () {
        checkbox.classList.toggle("active")
        // sit.classList.toggle('active')
        // sit?.classList.remove("active")
        // if (checkbox[0]?.classList == 'checkbox active') {
        // }else {
        // }

        // if (checkbox[1]?.classList == 'checkbox active') {
        //     animals.classList.add("active")
        // }else {
        //     animals?.classList.remove("active")
        // }
        
        // if (checkbox[2]?.classList == 'checkbox active') {
        //     drive?.classList.add("active")
        // }else {
        //     drive?.classList.remove("active")
        // }
        // if (checkbox?.classList == 'checkbox active') {
        //     let price = Number(moreInfoPrice.getAttribute("data-src"))
        //     // console.log(moreInfoPrice[i].getAttribute("data-src"));
        //     CommonPrice = CommonPrice + price
        //     morePrice.innerHTML = CommonPrice
        //     // console.log(a);
        // }else {
        //     let price = Number(moreInfoPrice.getAttribute("data-src"))
        //     CommonPrice = CommonPrice - price
        //     morePrice.innerHTML = CommonPrice
        // }
        if (checkbox?.classList == 'checkbox active') {
            let price = Number(moreInfoPrice.getAttribute("data-src"))
            // console.log(moreInfoPrice[i].getAttribute("data-src"));
            CommonPrice += s
            CommonPrice += prices
            morePrice.innerHTML = CommonPrice += price
            CommonPrice -= s
            CommonPrice -= prices
            allPrice = CommonPrice
        }else{
            CommonPrice += s
            CommonPrice += prices
            let price = Number(moreInfoPrice.getAttribute("data-src"))
            morePrice.innerHTML = CommonPrice -= price 
            CommonPrice -= s
            CommonPrice -= prices
            allPrice = CommonPrice  
        }
    })
// }



// check

// date

const headerInfoInput = document.querySelector(".header__info-input");
const headerInfoInput2 = document.querySelector(".header__info-input2")
const headerInfoDataSelect = document.querySelector(".header__info-date-select");
const select2 = document.querySelector(".select2");
const select3 = document.querySelector(".select3");
const select4 = document.querySelector(".select4");
const headerInfoSelect = document.querySelector(".header__info-select");
// const headerInfoSelectAirport = document.querySelector(".header__info-selectAirport")
// const headerSelectValue3 = document.querySelector(".header__info-selectValue3");
// const headerSelectValue4 = document.querySelector(".header__info-selectValue4");
// const headerSelectValue5 = document.querySelector(".header__info-selectValue5");
// const headerSelectValue6 = document.querySelector(".header__info-selectValue6");
const headerInfoCount = document.querySelector(".header__info-count")



// count passanger
var countPassanger = ''
headerInfoCount?.addEventListener("input", function () {
    // console.log(headerInfoCount.value);
    countPassanger = headerInfoCount.value
})
// count passanger

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

        if (sit?.classList == 'more__info sit active') {
            var childrenSitting = "Да"
        }else {
            childrenSitting = "Нет"
        }

        // if (animals?.classList == 'more__info animals active') {
        //     var animal = "Да"
        // }else {
        //     animal = "Нет"
        // }

        // if (drive?.classList == 'more__info drive active') {
        //     var driven = "Да"
        // }else {
        //     driven = "Нет"
        // }

        // if (checkbox2?.classList == "checkbox2 active") {
        //     var returned = "Да"
        // } else {
        //     returned = "Нет"
        // }

        var params = {
            senderName: document.querySelector("#name").value,
            name: document.querySelector("#name").value + ", Дата и время получение машины: " + getcar + ' ' + time + ':' + minute + ', Дата и время возврата: ' + comeback + ' ' + backtime + ' : ' + backminute + ', Возврат авто в другом месте: ' + returned, 
            message: document.querySelector("#message").value + ', Нужен ли кресла: ' + childrenSitting + ', Место получение: ' + getsCars + ', Место получение авто: ' + getPlace + ' ' + getPlaceAdress
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

// date
var date = document.getElementById("date")

var a = new Date().getFullYear() 
if (new Date().getMonth()+1 < 10) {
    var b = '0' + (new Date().getMonth()+1)
}else {
    b = new Date().getMonth()+1
}
if (new Date().getDate() < 10) {
    var c = '0' + new Date().getDate()
}else {
    c = new Date().getDate()
}

var fullYear = a + '-' + b + '-' + c
// document.write(a)

date.min = fullYear
