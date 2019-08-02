<template>
  <div class="Header">
    <div class="Header__logo">
      <img alt="Vue logo" src="../assets/logo.png" />
    </div>
    <h1>Shopping list</h1>
    <hr />
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Header",
  computed: {
    ...mapState({
      shoppingList: state => state.shoppingList
    })
  }
};
</script>
 
 <style lang="scss">
.Header {
 margin: 2%;
font-weight:bold;
      color:$blue-vue;
  .Header__logo {
    display: flex;
    justify-content: center;
    img {
      margin: 20px;
      height: 100px;
    }
  }
  h1 {
    display: flex;
    justify-content: center;
  }
}
</style>