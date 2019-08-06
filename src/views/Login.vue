<template>
  <div class="Login">
    <Header :title="title" />
    <div class="login__form">
      <label for="userName">user name</label>
      <input type="text" id="userName" v-model="userData.userName" placeholder="BaltaBuyer" />
    </div>
    <div class="login__form">
      <label for="password">password</label>
      <input
        type="password"
        id="password"
        v-model="userData.password"
        placeholder="confirm your perfect password"
      />
    </div>
    <hr />
    <div class="login__form">
      <button class="login__button">login</button>
      <div class="login__register">
        not registered?
        <router-link to="/SignUp" class="login__register--text">create an account</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
export default {
  name: "Login",
  data() {
    return {
      title: "login here",
      userData: {
        userName: "",
        password: ""
      }
    };
  },
  components: {
    Header
  }
};
</script>

<style lang="scss">
.Login {
  hr {
    margin: 2%;
  }
  color: $blue-vue;
  border: 10px outset #dddddd;
  border-radius: 5px;
  margin-left: 30%;
  margin-top: 5%;
  width: 40%;
  .login__form {
    margin: 2%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3%;
    label {
      font-size: 18px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: $green-vue;
      border: 1px outset #dddddd;
      border-radius: 5px;
      height: 30px;
      width: 30%;
    }
    input {
      padding-left: 2%;
      width: 50%;
      border-radius: 5px;
      height: 30px;
      font-weight: bold;
      color: $blue-vue;
    }
  }
  .login__button {
    font-size: 20px;
    font-weight: bold;
    color: $green-vue;
    background-color: $blue-vue;
    border: 4px outset #dddddd;
    border-radius: 5px;
    height: 40px;
    width: 30%;
  }
  .login__register {
     padding-left: 2%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $green-vue;
    border: 1px outset #dddddd;
    border-radius: 5px;
    height: 30px;
    width: 50%;
    .login__register--text {
      color: $red-complete;
    }
  }
}
</style>

