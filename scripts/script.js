//1.1 При скроле страницы изменяем цвет бэкграунда хедера
document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');

  if (header) {
    let scrollpos = window.scrollY
    window.addEventListener('scroll', function () {
      scrollpos = window.scrollY;

      if (scrollpos > 0) { header.classList.add('header__scroll') }
      else { header.classList.remove('header__scroll') }
    })
  }

  //1.2 Увеличиваем/уменьшаем счетчик лайков и изменяем цвет “сердца”
  const button_like = document.querySelector('.daily__box-fav-button');
  const output_button_like = document.querySelector('.daily__box_fav_text');
  if (button_like && output_button_like) {
    const handleClickLike = () => {
      let count = Number(output_button_like.textContent);
      if (button_like.classList.contains('isLike')) {
        document.getElementById("daily__box-fav-img").src = "./img/like.svg";
        output_button_like.textContent = count - 1;
      } else {
        document.getElementById("daily__box-fav-img").src = "./img/Like_puted.svg";
        output_button_like.textContent = count + 1;
      }
      button_like.classList.toggle('isLike');
    }
    button_like.addEventListener('click', handleClickLike);
  }

  // 1.3 Реализуем ScrollUp к верху страницы (верстка, появление, переход)
  const scrollUpButton = document.querySelector(".scrollUp");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 1600) {
      scrollUpButton.style.display = "block";
    } else {
      scrollUpButton.style.display = "none";
    }
  });

  scrollUpButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  });

  //2
  //регистрием кнопки..
  const top__block_button_add = document.querySelector('.top__block-button-add');
  const authorization__form_button_login = document.querySelector('.authorization__form-button-login');
  const header__log_button = document.querySelector('.header__log-button');
  const top__block_button_login = document.querySelector('.top__block-button-login');
  const authorization__form_button_signup = document.querySelector('.authorization__form-button-signup');
  const registration__form_text = document.querySelector('.registration__form-text');
  const login__form_text = document.querySelector('.login__form-text');
  const login__form_button_cancel = document.querySelector('.login__form-button-cancel');
  const registration__form_button_cancel = document.querySelector('.registration__form-button-cancel');
  const button__exit = document.querySelector('.button__exit');
  //....и формы
  const authorization__form = document.querySelector('.authorization__form');
  const regisrtation_form = document.querySelector('.registration__form');
  const login__form = document.querySelector('.login__form');
  const popup = document.querySelector('.popup');

  //добавление рецепта (Войти/регистрация) открытие АВТОРИЗАЦИИ
  top__block_button_add.addEventListener('click', () => {
    popup.classList.add('popup_open');
    regisrtation_form.style.display = "none";
    login__form.style.display = "none";
    authorization__form.style.display = "block";
  });

  //открытие формы ВОЙТИ
  authorization__form_button_login.addEventListener('click', () => {
    popup.classList.add('popup_open');
    regisrtation_form.style.display = "none";
    login__form.style.display = "block";
    authorization__form.style.display = "none";
  });
  header__log_button.addEventListener('click', () => {
    popup.classList.add('popup_open');
    regisrtation_form.style.display = "none";
    login__form.style.display = "block";
    authorization__form.style.display = "none";
  });
  top__block_button_login.addEventListener('click', () => {
    popup.classList.add('popup_open');
    regisrtation_form.style.display = "none";
    login__form.style.display = "block";
    authorization__form.style.display = "none";
  });
  registration__form_text.addEventListener('click', () => {
    popup.classList.add('popup_open');
    regisrtation_form.style.display = "none";
    login__form.style.display = "block";
    authorization__form.style.display = "none";
  });

  //открытие формы РЕГИСТРАЦИЯ
  authorization__form_button_signup.addEventListener('click', () => {
    popup.classList.add('popup_open');
    regisrtation_form.style.display = "block";
    login__form.style.display = "none";
    authorization__form.style.display = "none";
  });
  login__form_text.addEventListener('click', () => {
    popup.classList.add('popup_open');
    regisrtation_form.style.display = "block";
    login__form.style.display = "none";
    authorization__form.style.display = "none";
  });

  //ВЫХОД
  button__exit.addEventListener('click', () => {
    popup.classList.remove('popup_open');
    regisrtation_form.style.display = "none";
    login__form.style.display = "none";
    authorization__form.style.display = "none";
  });
  login__form_button_cancel.addEventListener('click', () => {
    popup.classList.remove('popup_open');
    regisrtation_form.style.display = "none";
    login__form.style.display = "none";
    authorization__form.style.display = "none";
  });
  registration__form_button_cancel.addEventListener('click', () => {
    popup.classList.remove('popup_open');
    regisrtation_form.style.display = "none";
    login__form.style.display = "none";
    authorization__form.style.display = "none";
  });


})
