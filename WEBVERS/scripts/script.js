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

function validateFormFields(name, login, password, passwordRepeat) {
  // Кастомная валидация здесь, например:
  const minLength = 8;

  if (name.length < minLength) {
    alert('Имя слишком короткое');
    return false;
  }

  if (login.length < minLength) {
    alert('Логин слишком короткий');
    return false;
  }

  if (password.length < minLength) {
    alert('Пароль слишком короткий');
    return false;
  }

  if (password !== passwordRepeat) {
    alert('Пароли не совпадают');
    return false;
  }

  return true;
}

// Функция для отправки данных
function sendData(data) {
  // Вывод данных в блок
  const output = document.getElementById('output');
  output.innerHTML = JSON.stringify(data);

  // Сохранение данных в куки
  const expiryDate = new Date();
  expiryDate.setMonth(expiryDate.getMonth() + 1); // Сохранить на один месяц
  document.cookie = `name=${data.name}; expires=${expiryDate.toUTCString()}; path=/`;
}

function onLoad() {
  // Загрузка имени из куки при открытии страницы
  const nameInput = document.getElementById('name');
  const cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)name\s*=\s*([^;]*).*$)|^.*$/, "$1");

  if (cookieValue) {
    nameInput.value = cookieValue;
  }
  const loginInput = document.getElementById('name');
  const cookieValue_login = document.cookie.replace(/(?:(?:^|.*;\s*)login\s*=\s*([^;]*).*$)|^.*$/, "$1");

  if (cookieValue) {
    nameInput.value = cookieValue_login;
  }
  const regisrtation_form = document.querySelector('.registration__form');
  const login__form = document.querySelector('.login__form');
  const popup = document.querySelector('.popup');
  //сохранение для логина
  const form_login = document.querySelector('.login__form-style');
  form_login.addEventListener('submit', async (e) => {
    e.preventDefault();
    const login = document.querySelector('.login__form-login').value;
    const password = document.querySelector('.login__form-password').value;
    {
      sendData({
        login,
        password
      });
      // Создайте новый экземпляр FormData
      const formData_log = new FormData();
      // Добавьте данные в объект FormData
      formData_log.append('login', login);
      formData_log.append('password', password);

      // Отправьте данные на login.php для авторизации
      const response = await fetch('login.php', {
        method: 'POST',
        body: formData_log,
      });

      const result_log = await response.json();
      console.log(result_log);

      const newButtonText = login;

      // Находим элемент кнопки и изменяем его текстовое содержимое

      const loginButton = document.querySelector('.header__log-button-text');
      loginButton.innerText = newButtonText;
    /*  popup.classList.remove('popup_open');
      login__form.style.display = "none";
*/
    }
  });

  //сохранение для регистрации

  const form = document.querySelector('.registration__form-style');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.querySelector('.registration__form-name').value;
    const login = document.querySelector('.registration__form-login').value;
    const password = document.querySelector('.registration__form-password').value;
    const passwordRepeat = document.querySelector('.registration__form-password-repite').value;

    if (validateFormFields(name, login, password, passwordRepeat)) {
      sendData({
        name,
        login,
        password
      });

      // Создайте новый экземпляр FormData
      const formData = new FormData();

      // Добавьте данные в объект FormData
      formData.append('name', name);
      formData.append('login', login);
      formData.append('password', password);

      const response = await fetch('register.php', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      console.log(result);
      const newButtonText = login;

      // Находим элемент кнопки и изменяем его текстовое содержимое

      const loginButton = document.querySelector('.header__log-button-text');
      loginButton.innerText = newButtonText;
    /*  regisrtation_form.style.display = "none";
      popup.classList.remove('popup_open');
*/
    }
  });









  const cancelButton_reg = document.querySelector('.registration__form-button-cancel');
  cancelButton_reg.addEventListener('click', (e) => {
    e.preventDefault();
    form.reset();
  });
  const cancelButton_log = document.querySelector('.login__form-button-cancel');
  cancelButton_log.addEventListener('click', (e) => {
    e.preventDefault();
    form.reset();
  });
}

document.addEventListener('DOMContentLoaded', onLoad);
// Работа с куками
function setCookie(cookieName, cookieValue, days) {
  let date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  let expires = "expires=" + date.toUTCString();
  document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
}

function getCookie(cookieName) {
  let name = cookieName + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let cookiesArray = decodedCookie.split(";");
  for (let i = 0; i < cookiesArray.length; i++) {
    let cookie = cookiesArray[i].trim();
    if (cookie.indexOf(name) === 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }

  return null;
}

// Инициализация
const registrationForm = document.querySelector(".registration__form-style");
initFormValidation(registrationForm);

const loginForm = document.querySelector(".login__form-style");
initFormValidation(loginForm);

// Сохранение кук и восстановление заполнения после перезагрузки
registrationForm.addEventListener("submit", event => {
  event.preventDefault();
  const userName = event.target.querySelector("#name");
  setCookie("username", userName.value, 7);
});

const userName = document.getElementById('name');
const savedName = getCookie("username");
if (savedName) {
  userName.value = savedName;
}
