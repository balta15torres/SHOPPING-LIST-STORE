<template>
  <div class="Home">
    <Header/>
    <Main/>
    <Footer/>
    <ModalWindow v-if="showModal" 
    />
    <PoputComponent v-else/>
  </div>
    
</template>

<script>
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import ModalWindow from "../components/ModalWindow";
import PoputComponent from "../components/PoputComponent";

import { mapState } from "vuex";

export default {
  name: "home",

  components: {
    Header,
    Main,
    Footer,
    ModalWindow,
    PoputComponent
  },
  computed: {
    ...mapState({
      showModal: state => state.showModal,
      currentAction: state => state.currentAction
    })
  }
};
</script>
 
 <style lang="scss">
 .Home { 
margin-left: 30%;
  
 }
</style>
 

