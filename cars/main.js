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

        var params = {
            senderName: document.querySelector("#name").value,
            name: document.querySelector("#name").value,
            message: document.querySelector("#message").value,
            date: 'Сообщение:' + document.querySelector("#date").value
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