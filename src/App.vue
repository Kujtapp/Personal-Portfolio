<template>
  <div class="main-wrapper">
      <the-navigation></the-navigation>
    <div class="right-side">
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import TheNavigation from './components/TheNavigation.vue'
export default {
  components: {
    TheNavigation
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700;900&display=swap');

* {
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 0;
}
body {
  background-color: #EEF4F7;
}
.main-wrapper {
  display: flex;
}
.right-side {
  width: 100%;
}
.fade-enter-active,
.fade-leave-active {
  transition: 0.8s ease all;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
