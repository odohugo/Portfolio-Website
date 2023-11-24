const homeBtn = document.querySelectorAll(".home-scroll");
const workBtn = document.querySelectorAll(".work-scroll");
const contactBtn = document.querySelectorAll(".contact-scroll");
const workDiv = document.querySelector(".works-container");
const contactDiv = document.querySelector(".contact-container");

homeBtn.forEach(e => {
    e.addEventListener('click', () => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    });
})

workBtn.forEach(e => {
    e.addEventListener('click', () => {
        workDiv.scrollIntoView({behavior: "smooth"})
    });
})

contactBtn.forEach(e => {
    e.addEventListener('click', () => {
        contactDiv.scrollIntoView({behavior: "smooth"})
    });
})

const langEnBtn = document.querySelectorAll(".lang-en-btn");
const langPlBtn = document.querySelectorAll(".lang-pl-btn");
const contentEn = document.querySelectorAll(".content-en");
const contentPl = document.querySelectorAll(".content-pl");

function toggleLanguage() {
    contentEn.forEach(e => {
        if (e.classList.contains('hidden')) {
            e.classList.remove('hidden')
        } else {
            e.classList.add('hidden')
        }
    })
    contentPl.forEach(e => {
        if (e.classList.contains('hidden')) {
            e.classList.remove('hidden')
        } else {
            e.classList.add('hidden')
        }
    })
}

langEnBtn.forEach(e => {
    e.addEventListener('click', () => {
        if (contentEn[0].classList.contains('hidden')){
            toggleLanguage()
        }
    })
})
langPlBtn.forEach(e => {
    e.addEventListener('click', () => {
        if(contentPl[0].classList.contains('hidden')){
            toggleLanguage()
        }
    })
})