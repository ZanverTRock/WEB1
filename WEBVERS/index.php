<?php

// подключение к базе данных
$host = "localhost";
$user = "root";
$password = "";
$dbname = "WEBVERS";
$mysqli = mysqli_connect($host, $user, $password, $dbname);

// проверка соединения
if (!$mysqli) {
    die("Connection failed: " . mysqli_connect_error());
}


?>
<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="stylesheet" href="./style/style.css" type="text/css" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    

    <title>Рецепты</title>
    <style>
    </style>
</head>

<body>
    <div class="container">
        <header class="header">
            <a class="header__logotype" href="#">Recipes</a>
            <nav class="header__navigation">
                <ul class="header__navigation-list">
                    <li class="header__navigation-item">
                        <a class="header__navigation-link header__navigation-link--active" href="">Главная</a>
                    </li>
                    <li class="header__navigation-item">
                        <a class="header__navigation-link" href="">Рецепты</a>
                    </li>
                    <li class="header__navigation-item">
                        <a class="header__navigation-link" href="">Избранное</a>
                    </li>
                </ul>
            </nav>
            <div class="header__log">
                <button class="header__log-button" href="#"><img src="./img/login.svg" style="padding-right:middle">
                    <span class="header__log-button-text">Войти</span></button>



            </div>
        </header>
        <main class="main">
            <section class="top__block">
                <h1 class="top__block-title">Готовь и делись рецептами</h1>
                <p class="top__block-description">Никаких кулинарных книг и блокнотов! Храни все <br />любимые
                    рецепты в одном месте.</p>
                <button class="top__block-button top__block-button-add">+ Добавить рецепт</button>
                <button class="top__block-button top__block-button-login">Войти</button>

                <img class="top__block-image" src="./img/Rectangle 1.png" alt="png">
            </section>
            <section class="sorter">
                <h2 class="sorter-title">Умная сортировка по тегам</h2>
                <p>Добавляйте рецепты и указывайте наиболее популярные теги. Это позволит <br />быстро находить любые
                    категории</p>

                <ul class="sorter__list">
                    <li class="sorter__list-item">
                        <img class="sorter__list-item-img" src="./img/card1.svg" alt="svg">

                        <p class="sorter__list-item-link" href="#">Простые блюда</p>



                        <p class="sorter__list-description">Время приготвления <br />таких блюд не более 1 <br />часа
                        </p>
                    </li>
                    <li class="sorter__list-item">
                        <img class="sorter__list-item-img" src="./img/card2.svg" alt="svg">
                        <p class="sorter__list-item-link" href="#">Детское</p>

                        <p class="sorter__list-description">Самые полезные блюда которые можно детям любого возраста</p>
                    </li>
                    <li class="sorter__list-item">
                        <img class="sorter__list-item-img" src="./img/shapka_povara.svg" alt="svg">
                        <p class="sorter__list-item-link" href="#">От шеф-поваров</p>

                        <p class="sorter__list-description">Требуют умения, времени и терпения, зато как в ресторане</p>
                    </li>
                    <li class="sorter__list-item">
                        <img class="sorter__list-item-img" src="./img/salut.svg" alt="svg">
                        <p class="sorter__list-item-link" href="#">На праздник</p>

                        <p class="sorter__list-description">Чем удивить гостей, чтобы все были сыты за праздничным
                            столом</p>
                    </li>
                </ul>
            </section>
            <section class="daily container">
                <div class="daily__author-img">
                    <img class="daily__author-img" src="./img/Rectangle 8_(sup).png">
                    <a class="daily__author-link">@glazest</a>
                </div>
                <div class="daily__box">
                    <div class="daily__box-img-count">
                        <div class="daily__box-fav">
                            <button class="daily__box-fav-button" type="button" onclick="changeimage('')">
                                <img id="daily__box-fav-img" src="./img/like.svg">
                                </svg>
                                <!-- <img class="recipe-of-day__box-fav-img" src="img/ic_fav.svg" /> -->
                            </button>
                            <span class="daily__box_fav_text">356</span>
                        </div>
                        <div class="daily__box-times">
                            <img class="daily__box-times-img" src="./img/timer.svg">
                            <p class="daily__box-times-text">35 минут</p>
                        </div>
                    </div>
                    <img class="daily__box-img" src="./img/smile.svg">
                    <h2 class="daily__box-title">Тыквенный супчик на кокосовом молоке</h2>
                    <p class="daily__box-desc">Если у вас осталась тыква, и вы не знаете что с ней сделать, то это
                        решение для вас! Ароматный, согревающий суп-пюре на кокосовом молоке. Можно даже в Пост! </p>
                </div>
            </section>
            <section class="searcher container">
                <h2 class="searcher__title">Поиск рецептов</h2>
                <p class="searcher__desc">Введите примерное название блюда, а мы по тегам найдем его</p>
                <div class="searcher__box">
                    <form class="searcher__box-input">

                        <input class="searcher__input" id="find" type="text" value="Название блюда....">
                        <button class="searcher__button">Поиск</button>


                    </form>
                    <ul class="searcher__list">
                        <li class="searcher__list-item"><a class="searcher__list-link">Мясо</a></li>
                        <li class="searcher__list-item"><a class="searcher__list-link">Деликатесы</a></li>
                        <li class="searcher__list-item"><a class="searcher__list-link">Пироги</a></li>
                        <li class="searcher__list-item"><a class="searcher__list-link">Рыба</a></li>
                    </ul>
                </div>
            </section>

            <div class="popup">
                <div class="popup__container">
                    <div id="output"></div>
                    <li class="authorization__form">

                        <button class="button__exit" href="#"><img src="./img/X.svg"></button>

                        <h2 class="authorization__form-title">Войдите в профиль</h2>
                        <p class="authorization__form-text">Добавлять рецепты могут только зарегистрированные
                            пользователи.</p>
                        <div class="authorization__form-content">
                            <button class="authorization__form-button authorization__form-button-login" type="login"
                                name="authorization__form-button-login">Войти</button>
                            <button class="authorization__form-button authorization__form-button-signup" type="sign up"
                                name="authorization__form-button-signup">Регистрация</button>
                        </div>
                    </li>


                    <li class="registration__form">
                        <button class="button__exit" href="#"><img src="./img/X.svg"></button>
                        <h2 class="registration__form-title">Регистрация</h2>
                        <form class="registration__form-style" action="#" method="post">

                            <input class="registration__form-name" type="text" placeholder="Имя " id="name" name="name" required>

                            <input class="registration__form-login" type="text" placeholder="Логин " id="login"
                                required>
                            <div class="registration__form-password-field">
                                <input class="registration__form-password" type="password" placeholder="Пароль: "
                                    id="password" required>
                                <input class="registration__form-password-repite" type="password"
                                    placeholder="Повторите пароль: " required>
                            </div>
                            <div class="registration__form-buttons-wrapper">
                                <button class="registration__form-button registration__form-button-submit" type="submit"
                                    name="registration__form-button-submit">Зарегистрироваться</button>
                                <button class="registration__form-button registration__form-button-cancel" type="cancel"
                                    name="registration__form-button-cancel">Отмена</button>
                            </div>

                        </form>
                        <button class="registration__form-text" href="#">У меня уже есть аккаунт</p></button>
                          
                    </li>

                    <li class="login__form">
                        <button class="button__exit" href="#"><img src="./img/X.svg"></button>
                        <h2 class="login__form-title">Войти</h2>
                        <div class="login__form-content">
                            <form class="login__form-style" action="#" method="post">
                                <div class="login__form-field">
                                    <input class="login__form-login" type="login" placeholder="Логин " id="login"
                                        required>
                                    <input class="login__form-password" type="password" placeholder="Пароль "
                                        id="password" required>
                                </div>
                                <div class="login__form-buttons-wrapper">
                                    <button class="login__form-button login__form-button-submit" type="submit"
                                        name="login__form-button-submit">Войти</button>
                                    <button class="login__form-button login__form-button-cancel" type="cancel"
                                        name="login__form-button-cancel">Отмена</button>
                                </div>
                            </form>
                            <button class="login__form-text" href="">У меня ещё нет аккаунта</p></button>
                                
                        </div>
                    </li>
                </div>
            </div>
        </main>

        <footer class="footer">
            <div class="footer_wrapper container">

                <p class="footer__logo">Recipes</p>
                <p class="footer__copyright">© Recipes 2023</p>
            </div>
        </footer>
        <button class="scrollUpID scrollUp"><img src="./img/scrollUp.svg"></button>
    </div>
    <script src="./scripts/script.js"></script>
</body>

</html>