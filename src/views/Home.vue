<template>
  <div class="Home">
    <div v-if="this.shoppingList.length === 0">
      <Header />
      <PoputInit />
      
      <Main />
    </div>
    <div v-else>
      <Header />
      <Main />
      <Footer />
      <ModalWindow v-if="showModal" :actionsText="actionsText" />
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import ModalWindow from "../components/ModalWindow";
import PoputInit from "../components/PoputInit";
import { mapState } from "vuex";

export default {
  name: "home",
  components: {
    Header,
    Main,
    Footer,
    ModalWindow,
    PoputInit
  },
  computed: {
    ...mapState({
      showModal: state => state.showModal,
      currentAction: state => state.currentAction,
      actionsText: state => state.actionsText,
      shoppingList: state => state.shoppingList
    })
  }
};
</script>
 
 <style lang="scss">
.Home {
  border: 10px outset #dddddd;
  border-radius: 5px;
  margin-left: 30%;
  margin-top: 5%;
  width: 40%;
}
</style>
 

