let userForm = document.querySelector(".about-form"); // форма пользователя;
let formCauseBtn = document.querySelector(".about-office-btn"); // кнопка "заблудились, напишите нам";
let formPostBtn = document.querySelector(".about-form-post-btn"); // кнопка "отправить" внутри формы;
let formTopBtn = document.querySelector(".promo"); // кнопка "отправить" внутри формы;
let formInputName = userForm.querySelector("#Form-input-name"); // поле ввода "имя, фамилия";
let formInputEmail = userForm.querySelector("#Form-input-email"); // поле ввода "имя, фамилия";
let formInputText = userForm.querySelector("#Form-input-text"); // поле ввода "имя, фамилия";
let closeForm = userForm.querySelector(".btn-x-close"); // кнопка закрыть;

let isStorageSupport = true;
let storage = "";

try {
    Storage = localStorage.getItem("formInputName");
} catch (err) {
    isStorageSupport = false;
}

// откроем форму
formCauseBtn.addEventListener("click", function (evt) {
    evt.preventDefault();
    userForm.classList.remove("visually-hidden");
    userForm.classList.add("about-form-bounce");
    if (Storage) {
        formInputName.value = Storage;
        formInputEmail.focus();
    } else {
        formInputName.focus();
    }
});

// закроем форму
closeForm.addEventListener("click", function (evt) {
    evt.preventDefault();
    userForm.classList.add("visually-hidden");
    userForm.classList.remove("about-form-bounce");
});

// валидация 
userForm.addEventListener("submit", function (evt) {
    let inputForm = [formInputName, formInputEmail, formInputText];
    for (let i = 0; i < inputForm.length; i++) {
        if (!inputForm[i].value) {
            evt.preventDefault();
            inputForm[i].classList.add("about-form-error")};
            setTimeout(() => {
                inputForm[i].classList.remove("about-form-error")
            }, 600);
        }
    }
);

formTopBtn.addEventListener("mouseover", function () {
    for (let i = 0; i < 20000; i++) {
        console.log("visually-hidden")
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.key === 'Escape') {
        if (!userForm.classList.contains("visually-hidden")) {
            evt.preventDefault();
            userForm.classList.add("visually-hidden");
        }
    }
});