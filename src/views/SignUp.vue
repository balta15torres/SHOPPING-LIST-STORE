<template>
  <div class="SignUp">
    <Header :title="title" />
    <div class="signUp__form">
      <label for="userName">user name</label>
      <input type="text" id="userName" v-model="userData.userName" placeholder="BaltaBuyer" />
    </div>
    <div class="signUp__form">
      <label for="email">email address</label>
      <input type="email" id="email" v-model="userData.email" placeholder="balta@shoppingList.com" />
    </div>
    <div class="signUp__form">
      <label for="password">password</label>
      <input
        type="password"
        id="password"
        v-model="userData.password"
        placeholder="hard to guess, easy to remember"
      />
    </div>
    <div class="signUp__form">
      <label for="confirmPassword">confirm password</label>
      <input
        type="password"
        id="confirmPassword"
        v-model="userData.confirmPassword"
        placeholder="confirm your perfect password"
      />
    </div>
    <hr />
    <div class="signUp__form">
      <button class="signUp__button">submit</button>
      <div class="signUp__login">
        already have account?
        <router-link to="/Login" class="signUp__login--text">login here</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
export default {
  name: "SignUp",
  data() {
    return {
      title: "sign up here",
      userData: {
        userName: "",
        email: "",
        password: "",
        confirmPassword: ""
      }
    };
  },
  components: {
    Header
  }
};
</script>

<style lang="scss">
.SignUp {
  hr {
    margin: 2%;
  }
  font-weight: bold;
  color: $blue-vue;
  border: 10px outset #dddddd;
  border-radius: 5px;
  margin-left: 30%;
  margin-top: 5%;
  width: 40%;
  .signUp__form {
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
      margin-left: 10px;
    }
  }
  .signUp__button {
    font-size: 20px;
    font-weight: bold;
    color: $green-vue;
    background-color: $blue-vue;
    border: 4px outset #dddddd;
    border-radius: 5px;
    height: 40px;
    width: 30%;
  }
  .signUp__login {
    padding-left: 2%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $green-vue;
    border: 1px outset #dddddd;
    border-radius: 5px;
    height: 30px;
    width: 50%;
    .signUp__login--text {
      color: $red-complete;
    }
  }
}
</style>

