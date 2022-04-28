let UserForm = document.querySelector(".about-form"); // форма пользователя;
let FormCauseBtn = document.querySelector(".about-office-btn"); // кнопка "заблудились, напишите нам";
let FormPostBtn = document.querySelector(".about-form-post-btn"); // кнопка "отправить" внутри формы;
let FormPoleName = UserForm.querySelector("#Form-btn-name"); // поле ввода "имя, фамилия";
let FormPoleEmail = UserForm.querySelector("#Form-btn-email"); // поле ввода "имя, фамилия";
let FormPoleText = UserForm.querySelector("#Form-btn-text"); // поле ввода "имя, фамилия";
let Close = UserForm.querySelector(".form-close"); // кнопка закрыть;
let FormBounce = document.querySelector(".about-form-bounce"); // прыжок
let FormError = document.querySelector(".about-form-error"); // прыжок

let IsStorageSupport = true;
let Storage = "";

try {
    Storage = localStorage.getItem("FormPoleName");
} catch (err) {
    IsStorageSupport = false;
}

// откроем форму
FormCauseBtn.addEventListener("click", function (evt) {
    evt.preventDefault();
    UserForm.classList.remove("visually-hidden");
    UserForm.classList.add("about-form-bounce");
    if (Storage) {
        FormPoleName.value = Storage;
        FormPoleEmail.focus();
    } else {
        FormPoleName.focus();
    }
});

// закроем форму
Close.addEventListener("click", function (evt) {
    evt.preventDefault();
    UserForm.classList.add("visually-hidden");
    UserForm.classList.remove("about-form-bounce");
});

// отправим форму
UserForm.addEventListener("submit", function (evt) {
    if (!FormPoleName.value || !FormPoleEmail.value || !FormPoleText.value) {
        evt.preventDefault();
    } else {
        localStorage.setItem("FormPoleName", FormPoleName.value);
    }
});

// валидация поля имени
UserForm.addEventListener("submit", function (evt) {
    if (!FormPoleName.value) {
        evt.preventDefault();
        FormPoleName.classList.add("about-form-error")};
        setTimeout(() => {
            FormPoleName.classList.remove("about-form-error")
        }, 600);
});

// валидация поля емейла
UserForm.addEventListener("submit", function (evt) {
    if (!FormPoleEmail.value) {
        evt.preventDefault();
        FormPoleEmail.classList.add("about-form-error")};
        setTimeout(() => {
            FormPoleEmail.classList.remove("about-form-error")
        }, 600);
});

// валидация поля текста
UserForm.addEventListener("submit", function (evt) {
    if (!FormPoleText.value) {
        evt.preventDefault();
        FormPoleText.classList.add("about-form-error")};
        setTimeout(() => {
            FormPoleText.classList.remove("about-form-error")
        }, 600);
});

window.addEventListener("keydown", function (evt) {
    if (evt.key === 'Escape') {
        if (!UserForm.classList.contains("visually-hidden")) {
            evt.preventDefault();
            UserForm.classList.add("visually-hidden");
        }
    }
});