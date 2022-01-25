<template>
  <div class="main-wrapper">
      <the-navigation></the-navigation>
    <div class="right-side">
      <router-view></router-view>
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
</style>
