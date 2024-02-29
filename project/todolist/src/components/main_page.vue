<template>
  <nav class="main-page__nav-bar">
    <router-link class="link-button-to-tasks-page" to="/tasks">Your Tasks Page</router-link>
  </nav>
  <article class="arrow-sign-to-tasks">
    <img class="arrow__sign" src="../assets/main_page_assets/arrow-up-svgrepo-com.svg" alt="">
  </article>
  <div class="h1__item ">
    <h1 class="intro-text">Here all your tasks</h1>
  </div>
</template>

<script>
export default {
  name: "main-page",
}
</script>
<style>
.body{
  background-color: rgb(235, 235, 235);
}

.main-page__nav-bar {
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
}

/* Стили для кнопки */
.link-button-to-tasks-page {
  position: fixed;
  top: 0;
  right: 50%;
  transform: translateX(50%);
  text-decoration: none;
  padding: 10px 20px;
  background-color: #D76F30;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: height .3s ease, line-height .3s ease;
  height: 30px;
  overflow: hidden;
  align-items: center;
  text-align: center;
  line-height: 30px;
}

.link-button-to-tasks-page:hover {
  height: 50px;
  line-height: 50px;
}

.arrow-sign-to-tasks{
  position: absolute;
  top: 80px;
  right: 50%;
  transform: translateX(50%); 
}

.arrow__sign {
  background-clip: text; /* Применить фон только к тексту */
  color: transparent; /* Сделать текст прозрачным */
  font-size: 36px; /* Размер шрифта */
  background: none;
  animation: moveArrow 2s infinite; /* Анимация */
}

@keyframes moveArrow {
  0%{
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);

  }
  100%{
    transform: translateY(0);
  }
}
.h1__item{
  position: absolute;
  top: 50%;
  right: 50%;


  transform: translate(50%, -50%);
  display: flex;
  justify-content: center;
  margin-top: 30px;
}

/* Стили для заголовка h1 */
h1 {
  font-size: 56px;
  color: #333;
  margin-bottom: 20px;
  font-weight: 700;
  color: #fff;
}
</style>