<template>
  <div class="Home">
    <Header/>
    <Main/>
    <Footer/>
    <ModalWindow v-if="showModal"/>
  </div>
</template>

<script>
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import ModalWindow from "../components/ModalWindow";
import { mapState } from "vuex";

export default {
  name: "home",

  components: {
    Header,
    Main,
    Footer,
    ModalWindow
  },
  computed: {
    ...mapState({
      showModal: state => state.showModal
    })
  }
};
</script>
 
 <style lang="scss">
</style>
 

