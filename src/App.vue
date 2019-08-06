<template>
  <div class="app">
    <div class="nav">
      <router-link to="/SignUp" class="nav__text">Sign Up</router-link>
      <router-link to="/Login" class="nav__text">Login</router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
import Home from "./views/Home";
import Init from "./views/Init";

export default {
  name: "App"
};
</script>

<style lang="scss">
.app {
  font-weight:bold;
  .nav {
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .nav__text {
      margin: 10px;
      color: $blue-vue;
      text-decoration: none;
      border: 10px outset #dddddd;
      border-radius: 5px;
      background-color: $green-vue;
      padding: 10px;
      font-size: 20px;
    }
  }
}
</style>
