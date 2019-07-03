<template>
  <div class="ModalWindow">
    <div class="ModalWindow__poput">
      <p>{{text}}</p>
      <button @click="ModalCancel">cancel</button>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "ModalWindow",
  props: {
    text: {
      type: String
    }
  },

  methods: {
    ...mapActions({
      changeShow: "changeShow"
    }),
    ModalCancel() {
      this.changeShow();
    }
  }
};
</script>
<style lang="scss">
.ModalWindow {
  align-items: center;
  background-color: $blue-modal;

  bottom: 0;
  display: flex;
  justify-content: space-evenly;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 10;
}
.ModalWindow__poput {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 0 8px 0 rgb(255, 255, 255);
  width: 400px;
  height: 100px;
  background-color: rgb(66, 185, 131);
}
</style>


